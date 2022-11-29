import { Route, Routes } from "react-router-dom";
import AddAccount from "./components/AddAccount";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
