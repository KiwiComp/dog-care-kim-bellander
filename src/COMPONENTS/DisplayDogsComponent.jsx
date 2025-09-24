


function DisplayDogsComponent({dog}) {

    return(
        <section className="displaySingleDogContainer">

            <article className="dogImgContainer">
                <img src={dog.img} alt={dog.name} ></img>
            </article>

            <article className="dogInfoContainer">
                <p><strong>{dog.name}</strong></p>
            </article>
            
        </section>
    )
}

export default DisplayDogsComponent;