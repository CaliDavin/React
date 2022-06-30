 const CardPropos = ({ title, desc, image }) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{desc}</p>
            <img src={image} alt={title} />
        </div>
    )
}


export default CardPropos