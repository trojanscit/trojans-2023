import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Sponsors from "./Pages/Sponsors";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/registration" element={<Registration />}></Route>
				<Route path="/sponsors" element={<Sponsors />}></Route>
				<Route path="/events" element={<Events />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
