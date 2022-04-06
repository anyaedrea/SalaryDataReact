import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "./variables.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:job/:location" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
