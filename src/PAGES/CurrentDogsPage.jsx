import { useOutletContext } from "react-router";
import "../CSS/current-dogs-style.css"
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";
import { useState } from "react";
import OverlayDisplayDogDetailsComponent from "../COMPONENTS/OverlayDisplayDogDetailsComponent";


function CurrentDogsPage() {

    const {dogList} = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);

    const currentDogs = dogList.filter(dog => dog.present);

    return(
        <section className="currentDogsPage">
            <p className="titleCurrentDogs">Our current dogs</p>
            <section className="displayDogsContainer">
                {currentDogs.map((dog) => (
                    <DisplayDogsComponent key={dog.chipNumber} dog={dog} setSelectedDog={setSelectedDog}/>
                ))}
            </section>

            {selectedDog && (
                <OverlayDisplayDogDetailsComponent selectedDog={selectedDog} setSelectedDog={setSelectedDog}/>
            )}
        </section>
        
    )
}

export default CurrentDogsPage;