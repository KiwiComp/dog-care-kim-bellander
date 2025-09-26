import "../CSS/contact-style.css";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebook-icon.webp";
import twitterIcon from "../assets/twitter-icon.png";
import phoneIcon from "../assets/phone-icon.png"


function ContactPage() {

    const contactPeople = [
        {
            name: "Tina",
            phoneToDisplay: "0700 00 00 00",
            phoneForHref: "tel:+46700000000",
            imgAlt: "phone icon to click to call Tina",
            email: "tina@doggycare.se"
        }, {
            name: "Cai",
            phoneToDisplay: "0733 33 33 33",
            phoneForHref: "tel:+46733333333",
            imgAlt: "phone icon to click to call Cai",
            email: "cai@doggycare.se"
        }, {
            name: "Jesper",
            phoneToDisplay: "0788 88 88 88",
            phoneForHref: "tel:+46788888888",
            imgAlt: "phone icon to click to call Jesper",
            email: "jesper@doggycare.se"
        }
    ]

    const socialMedia = [
        {
            id: 1,
            href: "https://www.facebook.com",
            alt: "clickable facebook icon to navigate to our facebook page",
            src: facebookIcon
        }, {
            id: 2,
            href: "https://www.instagram.com",
            alt: "clickable instagram icon to navigate to our instagram page",
            src: instagramIcon
        },{
            id: 3,
            href: "https://www.twitter.com",
            alt: "clickable twitter icon to navigate to our twitter page",
            src: twitterIcon
        }
    ]

    return(
        <section className="contactPage">
            <p className="titleContact">Contact us!</p>

            <article className="contactContainer">
                <article className="contactDetails">
                    <p className="address"><strong>Address</strong></p>
                    <p>Uppsalagatan 10B</p>
                    <p>755 55 Uppsala</p>
                    <p className="phone"><strong>Phone number</strong></p>
                    {contactPeople.map(person => (
                        <article className="phoneContainer" key={person.name}>
                            <p>{person.name}:  {person.phoneToDisplay}</p>
                            <a href={person.phoneForHref}>
                                <img src={phoneIcon} alt={person.imgAlt} style={{width: "1rem", height: "1rem"}}/>
                            </a>
                        </article>
                    ))}
                    <p className="email"><strong>Email</strong></p>
                    {contactPeople.map((person => (
                        <p key={person.name}>{person.name}:  {person.email}</p>
                    )))}
                </article>



                <article className="contactSocialMedia">
                    {socialMedia.map((media => (
                        <a href={media.href} target="_blank" rel="noreferrer" key={media.id}>
                            <img src={media.src} alt={media.alt} style={{height: "2rem", width: "2rem"}}></img>
                        </a>
                    )))}
                </article>

            </article>
        </section>
        
    )
}


export default ContactPage;