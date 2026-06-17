import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import PhotoMedia from '../components/PhotoMedia/PhotoMedia.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import quickFacts from '../data/quickFacts.json'
import regulations from '../data/regulations.json'

function Regulations() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Règlements"
        title="Règlements techniques"
        description="Les règlements définissent le terrain de jeu des ingénieurs. Ils encadrent la sécurité, l’aérodynamique, le moteur et l’exploitation de la voiture."
      />

      <VisualSection
        eyebrow="Boîte technique"
        title="Un cadre qui oriente l’innovation"
        description="Les règles ne font pas que limiter : elles redirigent la créativité vers certaines zones de la voiture, certains objectifs de sécurité et certains compromis de course."
        diagram="regulations"
        diagramTitle="Zones réglementaires simplifiées"
        facts={quickFacts.regulations}
      />

      <section className="section">
        <div className="feature-band">
          <h2>Un règlement n’est pas qu’une limite</h2>
          <p>
            En F1, une nouvelle règle peut réduire une solution dominante, ouvrir une piste
            d’innovation ou rendre les voitures plus adaptées au spectacle. Les détails changent
            selon les saisons : la FIA reste la référence officielle.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Repères</p>
          <h2>Les zones que les règles structurent</h2>
        </div>
        <div className="card-grid">
          {regulations.map((rule) => (
            <Card
              key={rule.id}
              eyebrow={rule.category}
              title={rule.name}
              description={rule.description}
              items={[rule.whyItMatters]}
              media={
                <PhotoMedia
                  imageUrl={rule.imageUrl}
                  imageAlt={rule.imageAlt}
                  imageCredit={rule.imageCredit}
                  label={rule.name}
                />
              }
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Regulations
