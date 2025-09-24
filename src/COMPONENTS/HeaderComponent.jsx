import { Link } from "react-router";
import "../CSS/header-style.css"
import companyLogo from "../assets/companyLogo.webp"


function HeaderComponent() {

    return(
        <header className="header">
            <Link to="/">
                <img src={companyLogo} alt="small company logo that navigates to start page" style={{height: "3rem", width: "3rem"}} />
            </Link>
            <p>HEJ</p>
        </header>
    )
}

export default HeaderComponent;