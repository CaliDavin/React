/**
 * It takes in three props (title, desc, image) and returns a div with three children: an h2, a p, and
 * an img
 */
const Card = ({ title, desc, image }) => {
    return (
        <div className="card">
            <h2>Titre : {title}</h2>
            <p>Description: {desc}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Card
