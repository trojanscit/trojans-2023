import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EventsDetails from "./Components/Events/EventsDetails";
import Events from "./Pages/Events";
import Homepage from "./Pages/homepage";
import Registration from "./Pages/Registration";
import Sponsors from "./Pages/Sponsors";
import Teams from "./Pages/Teams";
import Eventshome from "./Pages/eventshome";
import "./styles/App.css";
import Home from "./Pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/sponsors" element={<Sponsors />}></Route>
				<Route path="/registration" element={<Registration />}></Route>
				<Route path="/events" element={<Events />}></Route>
				<Route path="/teams" element={<Teams />}></Route>
				<Route
					path="/events/:eventType"
					element={<EventsDetails />}
				></Route>
			</Routes>
		</Router>
		// <div className="body">
		//   {/* <Events /> */}
		//   <Homepage />
		//   {/* <Sponsors /> */}
		//   {/* <Workshop /> */}
		// </div>
	);
}

export default App;
