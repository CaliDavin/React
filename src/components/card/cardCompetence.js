const CardCompetence = ({
    title,
    competence1,
    niveau1,
    competence2,
    niveau2,
    competence3,
    niveau3,
    competence4,
    niveau4,
    competence5,
    niveau5,
    competence6,
    niveau6,
    competence7,
    niveau7,
}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <br></br>
            <h3>
                {competence1} {niveau1}
            </h3>
            <h3>
                {competence2} {niveau2}
            </h3>
            <h3>
                {competence3} {niveau3}
            </h3>
            <h3>
                {competence4} {niveau4}
            </h3>
            <h3>
                {competence5} {niveau5}
            </h3>
            <h3>
                {competence6} {niveau6}
            </h3>
            <h3>
                {competence7} {niveau7}
            </h3>
        </div>
    )
}

export default CardCompetence
