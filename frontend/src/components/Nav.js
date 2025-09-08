import { Link, Outlet, useLocation } from "react-router-dom";
import { selectMenu } from "../app/functions";

function Nav() {
    const location = useLocation();

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li className={selectMenu(location.pathname, "/")}>
                            <Link to="/">About me</Link>
                        </li>
                        <li className={selectMenu(location.pathname, "/online-lessons")}>
                            <Link to="/online-lessons">Online Lessons</Link>
                        </li>
                        <li className={selectMenu(location.pathname, "/contact")}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="title-holder">
                    <h1>Olivér Kovács, Composer and Music Educator</h1>
                </div>
            </header>

            <Outlet/>
        </>
    );
}

export default Nav;