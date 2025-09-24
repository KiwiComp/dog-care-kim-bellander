import { useOutletContext } from "react-router";
import "../CSS/current-dogs-style.css"
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";


function CurrentDogsPage() {

    const {dogList} = useOutletContext();

    const currentDogs = dogList.filter(dog => dog.present);

    return(
        <section className="currentDogsPage">
            <h2>Our current dogs</h2>
            <section className="displayDogsContainer">
                {currentDogs.map((dog) => (
                    <DisplayDogsComponent key={dog.chipNumber} dog={dog}/>
                ))}
            </section>
        </section>
        
    )
}

export default CurrentDogsPage;