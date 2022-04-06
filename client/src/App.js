import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:job/:location" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
