import "../CSS/contact-style.css";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebook-icon.webp";
import twitterIcon from "../assets/twitter-icon.png";


function ContactPage() {

    return(
        <section className="contactPage">
            <h2>Contact us!</h2>

            <article className="contactContainer">

                <article className="contactDetails">
                    <p className="address"><strong>Address</strong></p>
                    <p>Uppsalagatan 10B</p>
                    <p>755 55 Uppsala</p>
                    <p className="phone"><strong>Phone number</strong></p>
                    <p>Camilla: 0700 00 00 00</p>
                    <p>Mikael: 0733 33 33 33</p>
                    <p>Jesper: 0788 88 88 88</p>
                    <p className="email"><strong>Email</strong></p>
                    <p>Camilla: camilla@doggycare.se</p>
                    <p>Mikael: mikael@doggycare.se</p>
                    <p>Jesper: jesper@doggycare.se</p>
                </article>

                <article className="contactSocialMedia">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={facebookIcon} alt="facebook icon" style={{height: "2rem", width: "2rem"}}></img>
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} style={{height: "2rem", width: "2rem"}}></img>
                    </a>

                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src={twitterIcon} style={{height: "2rem", width: "2rem"}}></img>
                    </a>
                </article>

            </article>
        </section>
        
    )
}


export default ContactPage;