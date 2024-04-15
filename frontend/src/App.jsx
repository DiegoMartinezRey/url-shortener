import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterApp from "./containers/FooterApp";
import NavBar from "./containers/NavBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <FooterApp />
    </>
  );
}

export default App;
