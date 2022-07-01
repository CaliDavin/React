const CardCertif = ({ diplome, ecole, dateDebut, resultat }) => {
    return (
        <div className="card">
            <h2>Certification :</h2>
            <br></br>
            <p>
                <strong>École : </strong>
                {ecole}
            </p>
            <p>
                <strong>Diplôme : </strong>
                {diplome}
            </p>
            <p>
                <strong>Date de réception :</strong>
                {dateDebut}
            </p>
            <p>
                <strong>Résultat : </strong>
                {resultat}
            </p>
        </div>
    )
}

export default CardCertif
