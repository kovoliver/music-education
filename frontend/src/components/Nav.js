import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { selectMenu } from "../app/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <button className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon
                    icon={menuOpen ? faXmark : faBars}
                    size="lg"
                />
            </button>

            <header style={{ height: location.pathname !== "/" ? "350px" : "" }}>
                <nav className={`nav ${menuOpen ? "d-block" : ""}`}>

                    <ul>
                        <li className={selectMenu(location.pathname, "/")} onClick={closeMenu}>
                            <Link to="/">About me</Link>
                        </li>
                        <li className={selectMenu(location.pathname, "/mentorship-program")} onClick={closeMenu}>
                            <Link to="/mentorship-program">Mentorship Program</Link>
                        </li>
                        <li className={selectMenu(location.pathname, "/contact")} onClick={closeMenu}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="title-holder">
                    <div className="text-center">
                        <h1>Olivér Kovács</h1>
                        <h2>Composer, Music Educator & Content Creator</h2>
                    </div>
                </div>
            </header>

            <Outlet />
        </>
    );
}

export default Nav;
