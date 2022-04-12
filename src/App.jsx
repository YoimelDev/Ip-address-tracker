import { useState, useEffect } from 'react'
import { AddressInfo } from "./components/AddressInfo"
import { Error } from './components/Error'
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Map } from "./components/Map"
import { Spinner } from './components/Spinner'

function App() {

	const [currentIp, setCurrentIp] = useState('')
	const [addressInfo, setAddressInfo] = useState({})
	const [charge, setcharge] = useState(true)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const queryApi = async () => {
			const url = 'https://api.ipify.org?format=json'

			const resp = await fetch(url)
			const data = await resp.json()
			setCurrentIp(data.ip)
		}

		queryApi()
	}, [])

	useEffect(() => {
		if (currentIp) {
			setcharge(true)
			setAddressInfo('')

			const queryApi = async () => {
				const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_wwGTfkAxaaf1s2TAqsYCbsurol9R3&ipAddress=${currentIp}`

				const resp = await fetch(url)
				const data = await resp.json()

				if (data.code == 422) {
					setErrorMessage(data.messages)
					setError(true)

					return
				} else {
					setError(false)
					const objeto = {
						ip: data.ip,
						location: data.location,
						timezone: data.location.timezone,
						isp: data.isp,
						lat: data.location.lat,
						lng: data.location.lng
					}

					setAddressInfo(objeto)
				}

				setcharge(false)
			}

			queryApi()
		}
	}, [currentIp])



	return (
		<>
			<div className="h-[35vh] bg-center bg-cover bg-[url('src/img/pattern-bg.png')]">
				<Header />

				{error && <Error errorMessage={errorMessage} />}

				<Form
					setCurrentIp={setCurrentIp}
				/>

				{charge && <Spinner />}

				{addressInfo.ip && <AddressInfo
					addressInfo={addressInfo}
				/>}

			</div>

			{addressInfo.ip && <Map
				addressInfo={addressInfo}
			/>}

		</>
	)
}

export default App
