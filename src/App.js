import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EventsDetails from "./Components/Events/EventsDetails";
import Events from "./Components/Events/Events";
import Homepage from "./Pages/home/aboutus";
import Registration from "./Pages/Registration";
import Sponsors from "./Pages/Sponsors";
import Teams from "./Pages/Teams";
import Eventshome from "./Components/Events/eventshome";
import "./styles/App.css";
import Home from "./Pages/home/Home";
import Navbar from "./Pages/navbar/navbar";
import Demo2 from "./Pages/workshop/Demo2";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function App() {
	return (
		<div>
			{/* <Navbar /> */}
			{/* <ToastContainer
				position="top-left"
				autoClose={1000}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				className="toast-container"
				toastClassName="dark-toast"
			/> */}
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/sponsors" element={<Sponsors />}></Route>
					<Route
						path="/registration"
						element={<Registration />}
					></Route>
					<Route path="/events" element={<Events />}></Route>
					<Route path="/teams" element={<Teams />}></Route>
					<Route path="/workshop" element={<Demo2 />}></Route>
					<Route
						path="/events/:eventType"
						element={<EventsDetails />}
					></Route>
					{/* <Route
						path="/events/non-technical"
						element={<EventsDetails />}
					></Route>
					<Route
						path="/events/gaming"
						element={<EventsDetails />}
					></Route> */}
				</Routes>
			</Router>
		</div>

		// <div className="body">
		//   {/* <Events /> */}
		//   <Homepage />
		//   {/* <Sponsors /> */}
		//   {/* <Workshop /> */}
		// </div>
	);
}

export default App;
