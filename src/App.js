import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Homepage from "./Pages/homepage";
import Sponsors from "./Pages/Sponsors";
import "./styles/App.css";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/sponsors" element={<Sponsors />}></Route>
    //     <Route path="/registration" element={<Registration />}></Route>
    //     <Route path="/events" element={<Events />}></Route>
    //   </Routes>
    // </Router>
    <div className="body">
      {/* <Home /> */}
      {/* <Events /> */}
      {/* <Sponsors /> */}
      {/* <Homepage /> */}
      {/* <Workshop /> */}
    </div>
  );
}

export default App;
