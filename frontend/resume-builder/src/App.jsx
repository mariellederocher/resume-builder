import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
import AddResumePiecePage from "./pages/AddResumePiecePage";
// import JobTemplatePage from "./pages/JobTemplatePage";
import AppShell from "./components/Layout/AppShell";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<ResumeBuilderPage />} />
          <Route path="/piece" element={<AddResumePiecePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}