import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Detail from "./assets/pages/Detail";
import Home from "./assets/pages/Home";
import List from "./assets/pages/List";
import Random from "./assets/pages/Random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/random" element={<Random />} />
        <Route path="/dynamic-router/:item_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
