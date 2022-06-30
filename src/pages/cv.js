import CardPropos from '../components/card/cardPropos'
import CardFormation from '../components/card/cardFormation'
import CardExperience from '../components/card/cardExperience'
import CardCompetence from '../components/card/cardCompetence'
import CardCertif from '../components/card/cardCertif'
import CardHobbies from '../components/card/cardHobbies'
import PhotoDavin from '../img/Photo Davin.png'
import Lycee from '../img/lycee.jpg'

const Cv = () => {
    return (
        <>
            <h1>Cv</h1>

            <CardPropos title="à Propos : " desc="Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE Je m'appelle Davin CALIMOUTTOUPOULLE " image={PhotoDavin} />
            <CardFormation diplome="Bac" ecole="Lycée Parc de vilgénis" domaine="BAC TECHNOLOGIE STMG – Systèmes d’Information Géographique (SIG) (informatique)" dateDebut="2014" dateFin="2017" resultat="Mention Assez Bien" desc="TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT" image={Lycee} />
            <CardFormation diplome="BTS" ecole="Lycée Parc de vilgénis" domaine="BTS Services Informatiques aux Organisations SLAM (SIO) (informatique)" dateDebut="2017" dateFin="2019" resultat="Obtenu" desc="TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT" image={Lycee} />
            
            <CardExperience poste="Technicien système et réseaux" typeEmploi="Administrateur Réseau" nomEntreprise="Neurones IT" lieu="Nanterre" dateDebut="Mai 2018" dateFin="Juillet 2018" secteur="Informatique" desc="TESTSTSTSSTTTTTTTTTTTTTTTTT" />
            <CardExperience poste="Développeur Front-end" typeEmploi="Développeur" nomEntreprise="DSI Global Services" lieu="Le Plessis-Robinson" dateDebut="Janvier 2019" dateFin="Mars 2019" secteur="Informatique" desc="TESTSTSTSSTTTTTTTTTTTTTTTTT" />
            <CardExperience poste="Développeur Symfony" typeEmploi="Développeur" nomEntreprise="EURO-ISO" lieu="Levallois-Perret" dateDebut="Mars 2022" dateFin="En cours" secteur="Isolation Thérmique" desc="TESTSTSTSSTTTTTTTTTTTTTTTTT" />

            <CardCompetence title="Compétences :" competence1="HTML :" niveau1="4/5" competence2="CSS :" niveau2="3/5" competence3="PHP :" niveau3="2,5/5" competence4="C# :" niveau4="3/5" competence5="SQL :" niveau5="4/5" competence6="Symfony :" niveau6="3,5/5" competence7="JavaScript :" niveau7="2,75/5" />
        
            <CardCertif ecole="Lycée Parc de vilgénis" diplome="Certificaiton Cisco" dateDebut="2018" resultat="Obtenu" />

            <CardHobbies activite1="Jeux video"  niveau1="Fort" frequence1="Tous les jours" activite2="Foot"  niveau2="Nul" frequence2="des fois" activite3="Basket"  niveau3="Nul" frequence3="très rare" activite4="F1"  niveau4="jamais essayé" frequence4="jamais" activite5="Manga"  niveau5="Fort" frequence5="Tous les jours" />
        </>
    )
}

export default Cv
