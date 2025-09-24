import { Link } from "react-router";
import {useState} from 'react';
import "../CSS/header-style.css"
import companyLogo from "../assets/companyLogo.webp"


function HeaderComponent() {

    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

    return(
        <header className="header">


            {/* DESKTOP ONLY */}
            <section className="leftHeader desktopOnly">
                <Link to="/">
                    <img src={companyLogo} alt="small company logo that navigates to start page" style={{height: "3rem", width: "3rem"}} />
                </Link>
            </section>
            <section className="rightHeader desktopOnly">
                <Link to="/">Start Page</Link>
                <Link to="/all-dogs">All our dogs</Link>
                <Link to="current-dogs">Current dogs</Link>
            </section>
            {/* DESKTOP ONLY */}


            {/* MOBILE ONLY */}
            <section className="mobileOnly">
                <img src={companyLogo} alt="company logo" style={{height: "12rem", width: "12rem"}} />

                <article className="menuMobileHeader">
                    <button className="btnMenuHeader" onClick={() => setDropdownIsVisible(!dropdownIsVisible)}>Menu</button>

                    <article className={dropdownIsVisible ? "dropdownMenu visible" : "dropdownMenu hidden"}>
                        <Link to="/" onClick={() => setDropdownIsVisible(false)}>Start page</Link>
                        <Link to="/all-dogs" onClick={() => setDropdownIsVisible(false)}>All our dogs</Link>
                        <Link to="current-dogs" onClick={() => setDropdownIsVisible(false)}>Current dogs</Link>
                    </article>
                </article>
            </section>
            {/* MOBILE ONLY */}

        </header>
    )
}

export default HeaderComponent;