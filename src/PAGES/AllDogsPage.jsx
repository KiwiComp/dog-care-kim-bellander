import { useOutletContext } from "react-router";
import {useState} from 'react';
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";
import "../CSS/all-dogs-style.css";
import OverlayDisplayDogDetailsComponent from "../COMPONENTS/OverlayDisplayDogDetailsComponent";




function AllDogsPage() {

    const {dogList} = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [listIsSearched, setListIsSearched] = useState(false);



    const searchDogByName = (searchName => {
        setSearchList([]);
        let filteredList = dogList.filter(dog => dog.name.toLowerCase().includes(searchName.toLowerCase()));
        setSearchList(filteredList);

        if(filteredList.length > 0) {
            setListIsSearched(true);
        }
    })

    const resetSearch = () => {
        setSearchName("");
        setSearchList([]);
        setListIsSearched(false);
    }




    return(
        <section className="allDogsPage">
            <h2>All of our dogs</h2>

            <section className="searchDogsContainer">
                <button className="btnAllDogs" onClick={resetSearch}>Display all dogs</button>

                <p>Filter</p>

                <article className="specificSearchContainer">
                    <article className="nameSearchContainer">
                        <input 
                            type="text" 
                            placeholder="Name of dog"
                            value={searchName}
                            onChange={(event) => {
                                const value = event.target.value;
                                setSearchName(value);
                                searchDogByName(value);
                            }}
                        />
                    </article>
                    
                </article>
            </section>

            <section className="displayDogsContainer">

                {listIsSearched ? (
                    searchList.map((dog) => (
                        <DisplayDogsComponent key={dog.chipNumber} dog={dog} setSelectedDog={setSelectedDog}/>
                    ))
                ) : (
                    dogList.map((dog) => (
                        <DisplayDogsComponent key={dog.chipNumber} dog={dog} setSelectedDog={setSelectedDog}/>
                    ))
                )}

            </section>

            {selectedDog && (
                <OverlayDisplayDogDetailsComponent selectedDog={selectedDog} setSelectedDog={setSelectedDog}/>
            )}

        </section>
    )
}

export default AllDogsPage;