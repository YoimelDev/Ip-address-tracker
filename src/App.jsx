import { AddressInfo } from "./components/AddressInfo"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Map } from "./components/Map"

function App() {

	return (
		<>
			<div className="h-[35vh] bg-center bg-cover bg-[url('src/img/pattern-bg.png')]">
				<Header />

				<Form />

				<AddressInfo />
			</div>

			<Map />
		</>
	)
}

export default App
