import { useState, useEffect } from 'react'
import { AddressInfo } from "./components/AddressInfo"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Map } from "./components/Map"

function App() {

	const [currentIp, setCurrentIp] = useState('')

	useEffect(() => {
		const queryApi = async () => {
			const url = 'https://geolocation-db.com/json'

			const resp = await fetch(url)
			const data = await resp.json()

			setCurrentIp(data.IPv4)
		}

		queryApi()
	}, [])


	return (
		<>
			<div className="h-[35vh] bg-center bg-cover bg-[url('src/img/pattern-bg.png')]">
				<Header />

				<Form
					setCurrentIp={setCurrentIp}
				/>

				<AddressInfo
					currentIp={currentIp}
				/>
			</div>

			<Map />
		</>
	)
}

export default App
