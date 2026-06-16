import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import concepts from '../data/aerodynamics.json'
import quickFacts from '../data/quickFacts.json'

function Aerodynamics() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Aérodynamique"
        title="Aérodynamique"
        description="L’aérodynamique explique comment une F1 utilise l’air pour aller plus vite en virage sans trop perdre en ligne droite."
      />

      <VisualSection
        eyebrow="Flux d’air"
        title="Une voiture dessinée pour guider l’air"
        description="Les ailerons, le plancher et le diffuseur travaillent ensemble. Le vrai défi est de produire un appui utile tout en gardant une traînée raisonnable."
        diagram="aero"
        diagramTitle="Flux aérodynamiques simplifiés"
        facts={quickFacts.aero}
      >
        <ul className="pill-list">
          <li>Appui</li>
          <li>Traînée</li>
          <li>Effet de sol</li>
          <li>Air perturbé</li>
        </ul>
      </VisualSection>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Notions clés</p>
          <h2>Les mots à connaître</h2>
        </div>
        <div className="card-grid">
          {concepts.map((concept) => (
            <Card
              key={concept.id}
              eyebrow={concept.category}
              title={concept.name}
              description={concept.description}
              items={[concept.beginnerTip]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Aerodynamics
