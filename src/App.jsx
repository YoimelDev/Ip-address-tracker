import { useState, useEffect } from 'react'
import { AddressInfo } from "./components/AddressInfo"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Map } from "./components/Map"

function App() {

	const [currentIp, setCurrentIp] = useState('')
	const [addressInfo, setAddressInfo] = useState({
		ip: '',
		location: '',
		timezone: '',
		isp: ''
	})

	useEffect(() => {
		const queryApi = async () => {
			const url = 'https://geolocation-db.com/json'

			const resp = await fetch(url)
			const data = await resp.json()

			setCurrentIp(data.IPv4)
		}

		queryApi()
	}, [])

	useEffect(() => {
		if (currentIp) {
			const queryApi = async () => {
				const url = `https://geo.ipify.org/api/v2/country?apiKey=at_wwGTfkAxaaf1s2TAqsYCbsurol9R3&ipAddress=${currentIp}`

				const resp = await fetch(url)
				const data = await resp.json()

				const objeto = {
					ip: data.ip,
					location: data.location,
					timezone: data.location.timezone,
					isp: data.isp
				}

				setAddressInfo(objeto)
			}

			queryApi()
		}
	}, [currentIp])



	return (
		<>
			<div className="h-[35vh] bg-center bg-cover bg-[url('src/img/pattern-bg.png')]">
				<Header />

				<Form
					setCurrentIp={setCurrentIp}
				/>

				<AddressInfo
					addressInfo={addressInfo}
				/>
			</div>

			<Map />
		</>
	)
}

export default App
