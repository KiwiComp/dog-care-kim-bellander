import "../CSS/overlay-dog-details.css"


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
                        <img src={selectedDog.img} style={{height: "22rem", width: "auto"}}></img>
                    </article>

                    <article className="selectedDogInfoContainer">

                        <article className="dogInfo">
                            <p><strong>Dog info</strong></p>
                            <p>Age: {selectedDog.age} years</p>
                            <p>Breed: {selectedDog.breed}</p>
                            <p>Sex: {selectedDog.sex}</p>
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