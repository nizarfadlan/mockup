import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InsightAI from "./pages/InsightAI";
import QBuilder from "./pages/QBuilder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/qbuilder" element={<QBuilder />} />
        <Route path="/projects/insight-ai" element={<InsightAI />} />
      </Routes>
    </BrowserRouter>
  );
}
