const CardHobbies = ({ activite1, niveau1, frequence1, activite2, niveau2, frequence2, activite3, niveau3, frequence3, activite4, niveau4, frequence4, activite5, niveau5, frequence5  }) => {
    return (
        <div className="card">
            <h2>Hobbies :</h2><br></br>
            <p><strong>Type d'activité :</strong> {activite1}</p>
            <p><strong>Niveau :</strong> {niveau1}</p>
            <p><strong>Fréquence :</strong>{frequence1}</p><br></br>

            <p><strong>Type d'activité :</strong> {activite2}</p>
            <p><strong>Niveau :</strong> {niveau2}</p>
            <p><strong>Fréquence :</strong>{frequence2}</p><br></br>

            <p><strong>Type d'activité :</strong> {activite3}</p>
            <p><strong>Niveau :</strong> {niveau3}</p>
            <p><strong>Fréquence :</strong>{frequence3}</p><br></br>

            <p><strong>Type d'activité :</strong> {activite4}</p>
            <p><strong>Niveau :</strong> {niveau4}</p>
            <p><strong>Fréquence :</strong>{frequence4}</p><br></br>

            <p><strong>Type d'activité :</strong> {activite5}</p>
            <p><strong>Niveau :</strong> {niveau5}</p>
            <p><strong>Fréquence :</strong>{frequence5}</p><br></br>
        </div>
    )
}


export default CardHobbies