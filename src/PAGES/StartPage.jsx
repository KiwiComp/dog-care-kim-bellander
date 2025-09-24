import { useOutletContext } from "react-router";
import "../CSS/start-page-style.css"
import companyLogo from "../assets/companyLogo.webp"
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";


function StartPage() {

    const {fourDogsList} = useOutletContext();

    return(
        <section className="startPage">
            <h2>Start Page</h2>

            <img className="desktopOnly" src={companyLogo} alt="company logo" style={{height: "30rem", width: "30rem"}}></img>

            <p>Safely leave your dog with our doggy care since we know what your best friend means to you. 
                <br></br>We value good 
                relationships and prioritise security and a safe environment for your dog!
                <br></br><br></br>
                
                The doggy care is open Monday to Friday between 7am and 6pm. 
                <br></br>
                It is also possible to leave your dog before 7am after an agreement has been made.
            </p>


            <h2>Some of our dogs</h2>

            <section className="displayDogsContainer">
                {fourDogsList.map((dog) => (
                    <DisplayDogsComponent key={dog.chipNumber} dog={dog}/>
                ))}
            </section>
        </section>
        
    )
}

export default StartPage;