import { Link } from 'react-router-dom'
import Card from '../components/Card/Card.jsx'
import QuizCard from '../components/QuizCard/QuizCard.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import eras from '../data/eras.json'
import quickFacts from '../data/quickFacts.json'
import quizQuestions from '../data/quizQuestions.json'

const quickLinks = [
  {
    title: 'Histoire de la F1',
    description: 'Suivre les grandes périodes, des débuts du championnat aux voitures hybrides modernes.',
    to: '/histoire',
    eyebrow: 'Chronologie',
  },
  {
    title: 'Moteurs et évolution',
    description: 'Comparer les générations atmosphériques, turbo, V10, V8 et hybrides.',
    to: '/moteurs',
    eyebrow: 'Performance',
  },
  {
    title: 'Composants d’une F1',
    description: 'Comprendre le rôle du châssis, du plancher, des freins, du volant et de l’ERS.',
    to: '/composants',
    eyebrow: 'Technique',
  },
  {
    title: 'Écuries F1',
    description: 'Découvrir les équipes, leur identité, leurs pilotes et leurs voitures marquantes.',
    to: '/ecuries',
    eyebrow: 'Équipes',
  },
  {
    title: 'Glossaire F1',
    description: 'Retrouver rapidement une définition simple des termes de course et d’ingénierie.',
    to: '/glossaire',
    eyebrow: 'Vocabulaire',
  },
  {
    title: 'Monoplace interactive',
    description: 'Explorer une vraie monoplace par zones : pneus, halo, plancher, pontons et ailerons.',
    to: '/monoplace-interactive',
    eyebrow: 'Interactif',
  },
  {
    title: 'Comparateur d’époques',
    description: 'Comparer deux générations pour voir ce qui change côté moteur, aéro et règlement.',
    to: '/comparateur-epoques',
    eyebrow: 'Comparer',
  },
]

function Home() {
  const heroImage = `${import.meta.env.BASE_URL}images/hero-f1-tech.png`

  return (
    <>
      <section className="hero" style={{ '--hero-image': `url("${heroImage}")` }}>
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__tag">Guide technique en français</p>
            <h1>F1 Knowledge Hub</h1>
            <p className="hero__lead">
              Un site éducatif pour comprendre simplement l’histoire, les moteurs, les pneus,
              l’aérodynamique et les règles qui façonnent une monoplace de Formule 1.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/moteurs">
                Explorer les moteurs
              </Link>
              <Link className="button button--secondary" to="/glossaire">
                Ouvrir le glossaire
              </Link>
            </div>
            <div className="metric-strip" aria-label="Points clés du site">
              <div className="metric-strip__item">
                <span className="metric-strip__value">11</span>
                <span className="metric-strip__label">rubriques et outils</span>
              </div>
              <div className="metric-strip__item">
                <span className="metric-strip__value">100%</span>
                <span className="metric-strip__label">statique et compatible Pages</span>
              </div>
              <div className="metric-strip__item">
                <span className="metric-strip__value">FR</span>
                <span className="metric-strip__label">contenu pédagogique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        <section className="section section--compact">
          <div className="section__header">
            <p className="section__eyebrow">Nouveautés V2</p>
            <h2>Les derniers ajouts sont en ligne</h2>
            <p>
              Cette version ajoute les écuries, une monoplace interactive sur photo réelle, des
              grands pilotes, des crashs marquants et un comparateur d’époques.
            </p>
          </div>
          <div className="card-grid card-grid--two">
            <Card
              eyebrow="Nouveau"
              title="Écuries F1"
              description="Des fiches pour comprendre l’identité des grandes équipes, leurs forces, leurs pilotes et leurs voitures marquantes."
              to="/ecuries"
              linkLabel="Voir les écuries"
            />
            <Card
              eyebrow="Histoire enrichie"
              title="Pilotes et sécurité"
              description="La page Histoire contient maintenant trois parcours : chronologie, grands pilotes et crashs qui ont fait évoluer la sécurité."
              to="/histoire"
              linkLabel="Ouvrir l’histoire"
            />
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <p className="section__eyebrow">Accès rapide</p>
            <h2>Choisir un angle d’entrée</h2>
            <p>
              Chaque page part d’une question simple : d’où vient la F1, comment une voiture
              crée de la performance, et pourquoi les stratégies changent d’une course à l’autre.
            </p>
          </div>
          <div className="card-grid">
            {quickLinks.map((item) => (
              <Card key={item.to} {...item} linkLabel="Lire la rubrique" />
            ))}
          </div>
        </section>

        <VisualSection
          eyebrow="Apprendre par l’image"
          title="Partir de la voiture, puis comprendre le vocabulaire"
          description="La V2 met davantage l’accent sur les schémas, les zones techniques et les repères courts pour rendre les notions moins abstraites."
          diagram="comparison"
          diagramTitle="Vue pédagogique de l’évolution"
          facts={quickFacts.home}
          reverse
        >
          <div className="button-row">
            <Link className="button button--primary" to="/monoplace-interactive">
              Voir la monoplace
            </Link>
            <Link className="button button--secondary" to="/comparateur-epoques">
              Comparer les époques
            </Link>
          </div>
        </VisualSection>

        <section className="section">
          <div className="content-grid">
            <div className="section__header">
              <p className="section__eyebrow">Frise chronologique</p>
              <h2>Une discipline qui change avec ses règles</h2>
              <p>
                L’évolution technique de la F1 est une suite de compromis : vitesse, sécurité,
                spectacle, coûts et efficacité énergétique.
              </p>
            </div>
            <Timeline items={eras.slice(0, 5)} />
          </div>
        </section>

        <section className="section section--compact">
          <div className="quiz-layout">
            <div className="feature-band">
              <h2>Un socle prêt à grandir</h2>
              <p>
                Les contenus sont stockés dans des fichiers JSON versionnés. La V2 ajoute déjà les
                écuries, les visuels interactifs et les parcours historiques enrichis ; les
                prochaines étapes pourront compléter les monoplaces mythiques et les sources.
              </p>
            </div>
            <QuizCard title="Mini quiz F1" questions={quizQuestions} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
