import { useOutletContext } from "react-router";
import {useState} from 'react';
import "../CSS/start-page-style.css"
import companyLogo from "../assets/companyLogo.webp"
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";
import OverlayDisplayDogDetailsComponent from "../COMPONENTS/OverlayDisplayDogDetailsComponent";


function StartPage() {

    const {fourDogsList} = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);

    return(
        <section className="startPage">
            <p className="welcomeTitleStartPage">Welcome!</p>

            <img className="desktopOnly" src={companyLogo} alt="company logo" style={{height: "30rem", width: "30rem"}}></img>

            <p className="welcomeTextStartPage">Safely leave your dog with our doggy care since we know what your best friend means to you. 
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
                    <DisplayDogsComponent key={dog.chipNumber} dog={dog} setSelectedDog={setSelectedDog}/>
                ))}
            </section>

            {selectedDog && (
                <OverlayDisplayDogDetailsComponent selectedDog={selectedDog} setSelectedDog={setSelectedDog}/>
            )}


        </section>
        
    )
}

export default StartPage;