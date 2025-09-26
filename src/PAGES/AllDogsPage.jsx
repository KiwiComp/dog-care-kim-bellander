import { useOutletContext } from "react-router";
import {useState} from 'react';
import DisplayDogsComponent from "../COMPONENTS/DisplayDogsComponent";
import "../CSS/all-dogs-style.css";
import OverlayDisplayDogDetailsComponent from "../COMPONENTS/OverlayDisplayDogDetailsComponent";




function AllDogsPage() {

    const {dogList} = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [selectedBreed, setSelectedBreed] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [listIsSearched, setListIsSearched] = useState(false);

    const breedList = Array.from(new Set(dogList.map(dog => dog.breed))).sort((a, b) => a.localeCompare(b));
    const genderList = Array.from(new Set(dogList.map(dog => dog.sex))).sort((a, b) => a.localeCompare(b));

    const searchDogByName = (searchName => {
        setSearchList([]);
        setSelectedBreed("");
        setSelectedGender("");
        let filteredList = dogList.filter(dog => dog.name.toLowerCase().includes(searchName.toLowerCase()));
        setSearchList(filteredList);

        if(filteredList.length > 0) {
            setListIsSearched(true);
        }
    })

    const searchDogByBreed = (searchBreed => {
        setSearchList([]);
        setSelectedGender("");
        let filteredList = dogList.filter(dog =>
            dog.breed.toLowerCase().includes(searchBreed.toLowerCase())
        )
        setSearchList(filteredList);
        if(filteredList.length > 0) {
            setListIsSearched(true);
        }
    })

    const searchDogByGender = (gender => {
        setSearchList([]);
        setSelectedBreed("");
        let filteredList = dogList.filter( dog =>
            dog.sex.toLowerCase().includes(gender.toLowerCase())
        )
        setSearchList(filteredList);
        if(filteredList.length > 0) {
            setListIsSearched(true)
        }
    })

    const resetSearch = () => {
        setSearchName("");
        setSelectedBreed("");
        setSelectedGender("");
        setSearchList([]);
        setListIsSearched(false);
    }




    return(
        <section className="allDogsPage">
            <p className="titleAllDogs">All of our dogs</p>

            <section className="searchDogsContainer">
                <button className="btnAllDogs" onClick={resetSearch}>Clear filters</button>

                <p>Filters</p>

                <article className="specificSearchContainer">
                    <article className="singleSearch nameSearchContainer">
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
                        
                    <article className="singleSearch breedSearchContainer">
                        <select
                            value={selectedBreed}
                            onChange={(event) => {
                                const value = event.target.value;
                                setSelectedBreed(event.target.value);
                                searchDogByBreed(value);
                                }
                            }
                        >
                            <option value="">-- Select breed</option>
                            {breedList.map(breed => (
                                <option 
                                    key={breed} 
                                    value={breed}
                                >
                                    {breed.charAt(0).toUpperCase() + breed.slice(1)}
                                </option>
                            ))}
                        </select>
                    </article>


                    <article className="singleSearch genderSearchContainer">
                        <select
                            value={selectedGender}
                            onChange={(event) => {
                                const value = event.target.value;
                                setSelectedGender(event.target.value);
                                searchDogByGender(value);
                                }
                            }
                        >
                            <option value="">-- Select gender</option>
                            {genderList.map(gender => (
                                <option 
                                    key={gender} 
                                    value={gender}
                                >
                                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                                </option>
                            ))}
                        </select>
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