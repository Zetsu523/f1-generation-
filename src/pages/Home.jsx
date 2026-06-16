import { Link } from 'react-router-dom'
import Card from '../components/Card/Card.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import eras from '../data/eras.json'

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
    title: 'Glossaire F1',
    description: 'Retrouver rapidement une définition simple des termes de course et d’ingénierie.',
    to: '/glossaire',
    eyebrow: 'Vocabulaire',
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
                <span className="metric-strip__value">8</span>
                <span className="metric-strip__label">rubriques principales</span>
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
          <div className="feature-band">
            <h2>Un socle prêt à grandir</h2>
            <p>
              Les contenus sont stockés dans des fichiers JSON versionnés. Les prochaines pages
              peuvent ajouter des fiches de monoplaces, des écuries, des comparateurs et des quiz
              sans changer l’architecture principale.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

