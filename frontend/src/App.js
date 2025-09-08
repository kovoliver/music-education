import "./styles/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutMePage from "./pages/AboutMePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

library.add(
    faBookOpen,
    faYoutubeSquare,
    faGlobe,
    faEnvelope
);

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Nav/>} path="/">
                    <Route path="/" element={<AboutMePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;