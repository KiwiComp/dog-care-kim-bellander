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
    const [selectedAge, setSelectedAge] = useState(0);

    const breedList = Array.from(new Set(dogList.map(dog => dog.breed))).sort((a, b) => a.localeCompare(b));
    const genderList = Array.from(new Set(dogList.map(dog => dog.sex))).sort((a, b) => a.localeCompare(b));
    const ageList = Array.from(new Set(dogList.map(dog => dog.age))).sort((a, b) => a - b);

    const filterSearches = (term, category) => {
        setSearchList([]);

        if(category === "name") {
            setSelectedBreed("");
            setSelectedGender("");
            setSelectedAge(0);
        } else if(category === "breed") {
            setSelectedGender("");
            setSearchName("");
            setSelectedAge(0);
        } else if(category === "sex") {
            setSelectedBreed("");
            setSearchName("");
            setSelectedAge(0);
        } else if(category === "age") {
            setSelectedBreed("");
            setSearchName("");
            setSelectedGender("");
        }

        let filteredList = dogList.filter(dog => {
            if (category === "age") {
                return String(dog[category]) === String(term);
            } else if (category === "gender") {
                return dog[category].toLowerCase() === term.toLowerCase();
            } else {
                return dog[category].toLowerCase().includes(term.toLowerCase());
            }
        });
        setSearchList(filteredList);

        if(filteredList.length > 0) {
            setListIsSearched(true);
        }
    }

    const resetSearch = () => {
        setSearchName("");
        setSelectedBreed("");
        setSelectedGender("");
        setSelectedAge(0);
        setSearchList([]);
        setListIsSearched(false);
    }


    return(
        <section className="allDogsPage">
            <p className="titleAllDogs">All registered dogs</p>

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
                                filterSearches(value, "name")
                            }}
                        />
                    </article>
                        
                    <article className="singleSearch breedSearchContainer">
                        <select
                            value={selectedBreed}
                            onChange={(event) => {
                                const value = event.target.value;
                                setSelectedBreed(event.target.value);
                                filterSearches(value, "breed")
                                }
                            }
                        >
                            <option value="">-- Select breed --</option>
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
                                filterSearches(value, "sex")
                                }
                            }
                        >
                            <option value="">-- Select gender --</option>
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

                    <article className="singleSearch ageSearchContainer">
                        <select
                            value={selectedAge}
                            onChange={(event) => {
                                const value = event.target.value;
                                setSelectedAge(event.target.value);
                                filterSearches(value, "age")
                                }
                            }
                        >
                            <option value="">-- Select age --</option>
                            {ageList.map(age => (
                                <option 
                                    key={age} 
                                    value={age}
                                >
                                    {age} {age === 1 ? "year" : "years"}
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