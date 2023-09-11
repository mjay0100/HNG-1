// import Navbar from "./pages/navbar/navbar";
import Home from "./pages/home";
// import Destination from "./pages/destination";
// import Crew from "./pages/crew";
// import Technology from "./pages/technology";
//added all paths for pages

// packages
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
