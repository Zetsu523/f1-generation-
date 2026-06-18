import { useMemo, useState } from 'react'
import ComparisonTable from '../components/ComparisonTable/ComparisonTable.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import PhotoMedia from '../components/PhotoMedia/PhotoMedia.jsx'
import QuickFact from '../components/QuickFact/QuickFact.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import circuitDrivers from '../data/circuitDrivers.json'
import circuits from '../data/circuits.json'
import quickFacts from '../data/quickFacts.json'
import './Circuits.css'

const typeFilters = ['Tous', ...new Set(circuits.map((circuit) => circuit.type))]

const tableColumns = [
  { key: 'round', label: 'Round' },
  { key: 'name', label: 'Circuit' },
  { key: 'country', label: 'Pays' },
  { key: 'type', label: 'Type' },
  { key: 'length', label: 'Longueur' },
  { key: 'laps', label: 'Tours' },
  { key: 'raceDistance', label: 'Distance' },
  { key: 'profile', label: 'Profil' },
]

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function CircuitCard({ circuit }) {
  const notableDrivers = circuitDrivers[circuit.id] ?? []

  return (
    <article className="circuit-card">
      <div className="circuit-card__visual">
        <PhotoMedia
          imageUrl={circuit.imageUrl}
          imageAlt={circuit.imageAlt}
          imageCredit={circuit.imageCredit}
          imagePosition={circuit.imagePosition}
          label={circuit.name}
        />
        <span>{circuit.type}</span>
      </div>
      <div className="circuit-card__body">
        <p className="circuit-card__meta">
          {circuit.round} · {circuit.grandPrix} · {circuit.country}
        </p>
        <h3>{circuit.name}</h3>
        <p>{circuit.beginnerSummary}</p>

        <dl className="circuit-card__stats" aria-label={`Repères ${circuit.name}`}>
          <div>
            <dt>Longueur</dt>
            <dd>{circuit.length}</dd>
          </div>
          <div>
            <dt>Tours</dt>
            <dd>{circuit.laps}</dd>
          </div>
          <div>
            <dt>1er GP</dt>
            <dd>{circuit.firstGrandPrix}</dd>
          </div>
          <div>
            <dt>Distance</dt>
            <dd>{circuit.raceDistance}</dd>
          </div>
        </dl>

        <div className="circuit-card__details">
          <div>
            <strong>Défi technique</strong>
            <p>{circuit.technicalChallenge}</p>
          </div>
          <div>
            <strong>Côté pilote</strong>
            <p>{circuit.drivingSkill}</p>
          </div>
        </div>

        {notableDrivers.length > 0 ? (
          <div className="circuit-card__drivers">
            <strong>Pilotes marquants</strong>
            <ul
              className="circuit-card__drivers-list"
              aria-label={`Pilotes marquants ${circuit.name}`}
            >
              {notableDrivers.map((driver) => (
                <li key={`${circuit.id}-${driver.name}`}>
                  <span>{driver.name}</span>
                  <p>{driver.reason}</p>
                  {driver.sourceUrl ? (
                    <a
                      className="circuit-card__driver-source"
                      href={driver.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repère historique
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <a className="circuit-card__source" href={circuit.sourceUrl} target="_blank" rel="noreferrer">
          Source F1 2026
        </a>
      </div>
    </article>
  )
}

function Circuits() {
  const [query, setQuery] = useState('')
  const [activeType, setActiveType] = useState('Tous')
  const featureCircuit = circuits.find((circuit) => circuit.id === 'monaco') ?? circuits[0]

  const filteredCircuits = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim())

    return circuits.filter((circuit) => {
      const notableDrivers = circuitDrivers[circuit.id] ?? []
      const matchesType = activeType === 'Tous' || circuit.type === activeType
      const searchableText = normalizeText(
        [
          circuit.name,
          circuit.round,
          circuit.grandPrix,
          circuit.country,
          circuit.type,
          circuit.profile,
          circuit.beginnerSummary,
          circuit.technicalChallenge,
          ...notableDrivers.flatMap((driver) => [driver.name, driver.reason]),
        ].join(' '),
      )

      return matchesType && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeType, query])

  return (
    <div className="page">
      <PageTitle
        eyebrow="Circuits"
        title="Circuits F1"
        description="Tous les circuits du calendrier F1 2026, avec de vraies photos, des repères simples et les pilotes qui ont marqué leur histoire."
      />

      <section className="circuits-hero">
        <div className="circuits-hero__content">
          <p className="section__eyebrow">Lire une piste</p>
          <h2>Un circuit change toute la voiture</h2>
          <p>
            Une F1 n'est jamais réglée dans l'absolu. Les 22 pistes du calendrier 2026 poussent les
            équipes vers des compromis différents : vitesse de pointe, appui, freinage, motricité,
            refroidissement et usure des pneus.
          </p>
          <div className="circuits-hero__facts">
            {quickFacts.circuits.map((fact) => (
              <QuickFact key={`${fact.label}-${fact.value}`} {...fact} />
            ))}
          </div>
        </div>
        <div className="circuits-hero__visual">
          <PhotoMedia
            imageUrl={featureCircuit.imageUrl}
            imageAlt={featureCircuit.imageAlt}
            imageCredit={featureCircuit.imageCredit}
            imagePosition={featureCircuit.imagePosition}
            label={featureCircuit.name}
          />
          <div className="circuits-hero__labels" aria-label="Paramètres de lecture d'un circuit">
            <span>ligne droite</span>
            <span>freinage</span>
            <span>appui</span>
            <span>météo</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Recherche</p>
          <h2>Explorer les profils de circuits</h2>
          <p>
            Ces fiches suivent le calendrier officiel F1 2026 consulté le 18 juin 2026. Chaque
            image montre une piste ou une zone réelle de circuit, avec son crédit visible. Les
            pilotes marquants donnent un repère historique rapide pour chaque tracé. Madrid utilise
            une photo du secteur IFEMA, car le Madring débute au calendrier 2026.
          </p>
        </div>

        <div className="circuits-tools">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Rechercher Monaco, appui, Belgique..."
          />
          <div className="filter-bar" aria-label="Filtrer par type de circuit">
            {typeFilters.map((type) => (
              <button
                key={type}
                type="button"
                aria-pressed={activeType === type}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {filteredCircuits.length > 0 ? (
          <div className="circuits-grid">
            {filteredCircuits.map((circuit) => (
              <CircuitCard key={circuit.id} circuit={circuit} />
            ))}
          </div>
        ) : (
          <p className="empty-state">Aucun circuit ne correspond à cette recherche.</p>
        )}
      </section>

      <section className="section section--compact">
        <ComparisonTable
          caption="Comparatif simplifié de circuits F1"
          columns={tableColumns}
          rows={filteredCircuits}
        />
      </section>
    </div>
  )
}

export default Circuits
