import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import QuickFact from '../components/QuickFact/QuickFact.jsx'
import TeamVisual from '../components/TeamVisual/TeamVisual.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import teams from '../data/teams.json'

function Teams() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Écuries"
        title="Écuries F1"
        description="Découvrir les grandes équipes de Formule 1, leur identité, leurs forces et quelques voitures marquantes."
      />

      <VisualSection
        eyebrow="Comprendre les équipes"
        title="Une écurie, c’est plus qu’une voiture"
        description="Chaque équipe combine culture technique, pilotes, stratégie, budget, moteur, usine et capacité de développement pendant la saison."
        diagram="comparison"
        diagramTitle="Équipes et performance dans le temps"
        facts={[
          {
            label: 'Rôle',
            value: 'collectif',
            description: 'La performance vient autant de l’organisation que du pilote.',
            tone: 'blue',
          },
          {
            label: 'Identité',
            value: 'forte',
            description: 'Chaque écurie porte une histoire, une culture et une méthode.',
            tone: 'red',
          },
        ]}
      />

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Fiches rapides</p>
          <h2>Repères sur les grandes écuries</h2>
          <p>
            Ces fiches donnent une première lecture pédagogique. Les palmarès détaillés pourront
            être ajoutés plus tard avec des sources précises. Les logos et voitures sont chargés
            depuis les ressources publiques de Formula 1 quand elles sont disponibles.
          </p>
        </div>
        <div className="card-grid">
          {teams.map((team) => (
            <Card
              key={team.id}
              eyebrow={`${team.country} · ${team.founded}`}
              title={team.name}
              description={team.identity}
              items={[
                `Pilotes : ${team.drivers.join(', ')}`,
                ...team.strengths,
                `Voitures : ${team.notableCars.join(', ')}`,
              ]}
            >
              <TeamVisual team={team} />
            </Card>
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="card-grid card-grid--two">
          <QuickFact
            label="À retenir"
            value="développement"
            description="Une écurie gagne souvent parce qu'elle améliore sa voiture plus vite que les autres."
            tone="green"
          />
          <QuickFact
            label="Course"
            value="stratégie"
            description="Les décisions au stand peuvent transformer une bonne voiture en résultat concret."
            tone="gold"
          />
        </div>
      </section>
    </div>
  )
}

export default Teams
