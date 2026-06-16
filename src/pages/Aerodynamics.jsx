import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import concepts from '../data/aerodynamics.json'

function Aerodynamics() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Aérodynamique"
        title="Aérodynamique"
        description="L’aérodynamique explique comment une F1 utilise l’air pour aller plus vite en virage sans trop perdre en ligne droite."
      />

      <section className="section">
        <div className="content-grid">
          <div className="section__header">
            <p className="section__eyebrow">Flux d’air</p>
            <h2>Une voiture dessinée pour guider l’air</h2>
            <p>
              Les ailerons, le plancher et le diffuseur travaillent ensemble. Le vrai défi est de
              produire un appui utile tout en gardant une traînée raisonnable.
            </p>
            <ul className="pill-list">
              <li>Appui</li>
              <li>Traînée</li>
              <li>Effet de sol</li>
              <li>Air perturbé</li>
            </ul>
          </div>
          <div className="aero-diagram" aria-label="Schéma simplifié de flux aérodynamiques">
            <span className="aero-diagram__label">Flux simplifié</span>
            <span className="aero-diagram__flow aero-diagram__flow--top" />
            <span className="aero-diagram__flow aero-diagram__flow--middle" />
            <span className="aero-diagram__flow aero-diagram__flow--floor" />
            <span className="aero-diagram__car" />
          </div>
        </div>
      </section>

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

