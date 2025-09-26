import placeholderDog from "../assets/placeholder-dog.jpg"


function DisplayDogsComponent({dog, setSelectedDog}) {

    return(
        <section className={`displaySingleDogContainer ${dog.sex === "male" ? "male" : "female"}`} onClick={() => setSelectedDog(dog)}>

            <article className="dogImgContainer">
                <img 
                src={dog.img} 
                alt={dog.name} 
                onError={(e) => { e.target.src = placeholderDog }} // Är det denna som spökar? 
                // onError={(e) => { 
                //     if (e.target.src !== placeholderDog) {
                //         e.target.src = placeholderDog; 
                //     }
                // }}
                >
                </img>
            </article>

            <article className="dogInfoContainer">
                <p><strong>{dog.name}</strong></p>
                <span className={`dogStatus ${dog.present ? "current" : "notCurrent"}`}></span>
            </article>
            
        </section>
    )
}

export default DisplayDogsComponent;