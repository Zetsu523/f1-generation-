import Card from '../components/Card/Card.jsx'
import ComparisonTable from '../components/ComparisonTable/ComparisonTable.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import engines from '../data/engines.json'
import quickFacts from '../data/quickFacts.json'

const columns = [
  { key: 'name', label: 'Génération' },
  { key: 'period', label: 'Période' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'energy', label: 'Énergie' },
  { key: 'lesson', label: 'À retenir' },
]

function Engines() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Moteurs"
        title="Moteurs et évolution"
        description="Des moteurs atmosphériques aux groupes propulseurs hybrides, la F1 raconte l’histoire d’une performance de plus en plus efficace."
      />

      <VisualSection
        eyebrow="Groupe propulseur"
        title="Le moteur moderne est un système d’énergie"
        description="Un moteur de F1 ne se résume plus à sa puissance. Refroidissement, récupération électrique, intégration dans le châssis et fiabilité forment un ensemble."
        diagram="engine"
        diagramTitle="Schéma simple d'un groupe hybride"
        facts={quickFacts.engines}
      />

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Générations</p>
          <h2>Les grandes familles de moteurs</h2>
        </div>
        <div className="card-grid">
          {engines.map((engine) => (
            <Card
              key={engine.id}
              eyebrow={`${engine.period} · ${engine.type}`}
              title={engine.name}
              description={engine.description}
              items={engine.keyFeatures}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Comparaison</p>
          <h2>Comparer les époques sans se perdre dans les chiffres</h2>
          <p>
            Le tableau met l’accent sur les principes : respiration du moteur, énergie disponible
            et impact sur la conception globale de la voiture.
          </p>
        </div>
        <ComparisonTable
          caption="Comparatif pédagogique des générations de moteurs"
          columns={columns}
          rows={engines}
        />
      </section>
    </div>
  )
}

export default Engines
