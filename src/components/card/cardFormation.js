const CardFormation = ({ diplome, ecole, domaine, dateDebut, dateFin, resultat, desc, image }) => {
    return (
        <div className="card">
            <h2>Diplôme : {diplome}</h2>
            <br></br>
            <p>
                <strong>École : </strong>
                {ecole}
            </p>
            <p>
                <strong>Domaine d'étude : </strong>
                {domaine}
            </p>
            <p>
                <strong>Date de début :</strong>
                {dateDebut}
            </p>
            <p>
                <strong>Date de fin : </strong>
                {dateFin}
            </p>
            <p>
                <strong>Résultat : </strong>
                {resultat}
            </p>
            <p>
                <strong>Description de la formation : </strong>
                {desc}
            </p>
            <img src={image} alt={diplome} />
        </div>
    )
}

export default CardFormation
