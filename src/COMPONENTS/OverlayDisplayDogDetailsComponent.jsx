import "../CSS/overlay-dog-details.css"
import placeholderDog from "../assets/placeholder-dog.jpg"


function OverlayDisplayDogDetailsComponent({selectedDog, setSelectedDog}) {

    return(
        <section className="overlaySelectedDog" onClick={() => setSelectedDog(null)}>
            <section className="overlayWindowSelectedDog" onClick={(e) => e.stopPropagation()}>
                <article className="titleSelectedDog">
                    <p className="titleNameSelectedDog" >{selectedDog.name}</p>
                    <span className={`dogStatus ${selectedDog.present ? "current" : "notCurrent"}`}></span>
                </article>

                <article className="selectedDogContainer">

                    <article className="selectedDogImgContainer">
                        <img 
                            src={selectedDog.img}
                            alt={selectedDog.name}
                            onError={(e) => {
                                if (e.target.src !== placeholderDog) {
                                    e.target.src = placeholderDog;
                                }
                            }}
                            >
                        </img>
                    </article>

                    <article className="selectedDogInfoContainer">

                        <article className="dogInfo">
                            <p><strong>Dog info</strong></p>
                            <p>Age: {selectedDog.age} {selectedDog.age === 1 ? "year" : "years"}</p>
                            <p>Breed: {selectedDog.breed.charAt(0).toUpperCase() + selectedDog.breed.slice(1)}</p>
                            <p>Sex: {selectedDog.sex.charAt(0).toUpperCase() + selectedDog.sex.slice(1)}</p>
                        </article>

                        <article className="ownerInfo">
                            <p><strong>Owner info</strong></p>
                            <p>Name: {selectedDog.owner.name} {selectedDog.owner.lastName}</p>
                            <p>Phone: {selectedDog.owner.phoneNumber}</p>
                        </article>

                    </article>

                </article>

            </section>
        </section>
    )
}

export default OverlayDisplayDogDetailsComponent;