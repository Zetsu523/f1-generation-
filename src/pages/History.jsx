import { useState } from 'react'
import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import eras from '../data/eras.json'
import legendDrivers from '../data/legendDrivers.json'
import './History.css'

const historyChoices = [
  {
    id: 'f1',
    label: 'Histoire de la F1',
    description: 'Suivre les grandes périodes, les règlements, la sécurité et les ruptures techniques.',
  },
  {
    id: 'drivers',
    label: 'Grands pilotes',
    description: 'Découvrir les trajectoires des champions et leur manière de marquer leur époque.',
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function DriverCard({ driver, index }) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const hasPhoto = driver.imageUrl && !photoFailed

  return (
    <article className="driver-card">
      <div className="driver-card__visual">
        <span className="driver-card__rank">{String(index + 1).padStart(2, '0')}</span>
        {hasPhoto ? (
          <img
            className="driver-card__photo"
            src={driver.imageUrl}
            alt={`Photo de ${driver.name}`}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <span className="driver-card__initials" aria-label={driver.name}>
            {getInitials(driver.name)}
          </span>
        )}
      </div>
      <div className="driver-card__content">
        <p className="driver-card__meta">
          {driver.country} · {driver.period}
        </p>
        <h3>{driver.name}</h3>
        <p className="driver-card__titles">{driver.titles}</p>
        <p>{driver.story}</p>
        <p className="driver-card__legacy">{driver.legacy}</p>
        <ul className="pill-list" aria-label={`Repères ${driver.name}`}>
          {driver.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function F1HistoryView() {
  return (
    <>
      <VisualSection
        eyebrow="Évolution"
        title="Chaque époque déplace le centre de gravité technique"
        description="La F1 passe progressivement d'une logique très mécanique à une discipline où aérodynamique, sécurité, pneus et énergie sont indissociables."
        diagram="comparison"
        diagramTitle="Repères d'évolution"
        facts={[
          {
            label: 'Départ',
            value: 'mécanique',
            description: 'Les premières décennies mettent surtout en avant moteur, châssis et pilotage.',
            tone: 'gold',
          },
          {
            label: "Aujourd'hui",
            value: 'système',
            description: "La performance moderne vient d'un ensemble aéro, pneus, moteur et énergie.",
            tone: 'blue',
          },
        ]}
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
          <h2>Trois fils rouges pour lire l'évolution</h2>
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
            description="Les règles limitent certaines solutions, en encouragent d'autres et redessinent régulièrement les priorités des ingénieurs."
            items={['Dimensions', 'Aérodynamique', 'Unité de puissance']}
          />
          <Card
            eyebrow="Technologie"
            title="Passer de la mécanique à l'énergie"
            description="La performance moderne dépend de la qualité du châssis, de l'aéro, de la récupération d'énergie et de l'exploitation des pneus."
            items={['Effet de sol', 'ERS', 'Gestion pneus']}
          />
        </div>
      </section>
    </>
  )
}

function DriversHistoryView() {
  return (
    <>
      <section className="section history-drivers-intro">
        <div className="section__header">
          <p className="section__eyebrow">Pilotes</p>
          <h2>Comprendre la F1 à travers ceux qui l'ont conduite</h2>
          <p>
            Chaque grand pilote raconte une partie de l'histoire : les voitures dangereuses des
            débuts, la révolution aérodynamique, les rivalités, la méthode de travail moderne et
            l'ère hybride.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="driver-grid">
          {legendDrivers.map((driver, index) => (
            <DriverCard driver={driver} index={index} key={driver.id} />
          ))}
        </div>
      </section>
    </>
  )
}

function History() {
  const [activeView, setActiveView] = useState('f1')

  return (
    <div className="page">
      <PageTitle
        eyebrow="Histoire"
        title="Histoire de la F1"
        description="Choisir entre la grande chronologie de la Formule 1 et les histoires des pilotes qui ont marqué la discipline."
      />

      <section className="history-choice" aria-label="Choisir un parcours historique">
        {historyChoices.map((choice) => (
          <button
            className="history-choice__button"
            key={choice.id}
            type="button"
            aria-pressed={activeView === choice.id}
            onClick={() => setActiveView(choice.id)}
          >
            <span>{choice.label}</span>
            <small>{choice.description}</small>
          </button>
        ))}
      </section>

      {activeView === 'f1' ? <F1HistoryView /> : <DriversHistoryView />}
    </div>
  )
}

export default History
