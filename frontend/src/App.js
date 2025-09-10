import "./styles/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutMePage from "./pages/AboutMePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faEnvelope, faGlobe, faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import OnlineLessons from "./pages/OnlineLessons";
import ContactPage from "./pages/ContactPage";

library.add(
    faBookOpen,
    faYoutubeSquare,
    faGlobe,
    faEnvelope,
    faSquareCaretRight,
    faSquareCaretLeft
);

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Nav/>} path="/">
                    <Route path="/" element={<AboutMePage />} />
                    <Route path="/mentorship-program" element={<OnlineLessons />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;