const CardExperience = ({ poste, typeEmploi, nomEntreprise, lieu, dateDebut, dateFin, secteur, desc }) => {
    return (
        <div className="card">
            <h2>Poste : {poste}</h2><br></br>
            <p><strong>Type d'emploi : </strong>{typeEmploi}</p>
            <p><strong>Nom de l'entreprise : </strong>{nomEntreprise}</p>
            <p><strong>Lieu :</strong>{lieu}</p>
            <p><strong>Date de début : </strong>{dateDebut}</p>
            <p><strong>Date de fin : </strong>{dateFin}</p>
            <p><strong>Secteur : </strong>{secteur}</p>
            <p><strong>Description : </strong>{desc}</p>
        </div>
    )
}


export default CardExperience