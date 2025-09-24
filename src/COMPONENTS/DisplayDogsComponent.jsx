


function DisplayDogsComponent({dog, setSelectedDog}) {

    return(
        <section className="displaySingleDogContainer" onClick={() => setSelectedDog(dog)}>

            <article className="dogImgContainer">
                <img src={dog.img} alt={dog.name} ></img>
            </article>

            <article className="dogInfoContainer">
                <p><strong>{dog.name}</strong></p>
                <span className={`dogStatus ${dog.present ? "current" : "notCurrent"}`}></span>
            </article>
            
        </section>
    )
}

export default DisplayDogsComponent;