import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QBuilder from "./pages/QBuilder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/qbuilder" element={<QBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}
