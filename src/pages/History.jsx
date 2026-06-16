import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import eras from '../data/eras.json'

function History() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Histoire"
        title="Histoire de la F1"
        description="Comprendre les grandes périodes de la Formule 1, de la naissance du championnat aux règlements hybrides et à la génération 2026."
      />

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Chronologie</p>
          <h2>Les ruptures qui ont transformé la discipline</h2>
        </div>
        <Timeline items={eras} />
      </section>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Lecture par thème</p>
          <h2>Trois fils rouges pour lire l’évolution</h2>
        </div>
        <div className="card-grid">
          <Card
            eyebrow="Sécurité"
            title="Protéger le pilote"
            description="La F1 a progressivement renforcé les cellules de survie, les crash-tests, les protections de tête et les procédures de course."
            items={['Monocoque', 'Halo', 'Structures absorbantes']}
          />
          <Card
            eyebrow="Règlements"
            title="Créer un cadre commun"
            description="Les règles limitent certaines solutions, en encouragent d’autres et redessinent régulièrement les priorités des ingénieurs."
            items={['Dimensions', 'Aérodynamique', 'Unité de puissance']}
          />
          <Card
            eyebrow="Technologie"
            title="Passer de la mécanique à l’énergie"
            description="La performance moderne dépend de la qualité du châssis, de l’aéro, de la récupération d’énergie et de l’exploitation des pneus."
            items={['Effet de sol', 'ERS', 'Gestion pneus']}
          />
        </div>
      </section>
    </div>
  )
}

export default History

