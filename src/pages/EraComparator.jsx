import { useMemo, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import QuickFact from '../components/QuickFact/QuickFact.jsx'
import TechDiagram from '../components/TechDiagram/TechDiagram.jsx'
import eraComparisons from '../data/eraComparisons.json'
import './EraComparator.css'

const comparisonRows = [
  { key: 'engine', label: 'Moteur' },
  { key: 'aero', label: 'Aérodynamique' },
  { key: 'safety', label: 'Sécurité' },
  { key: 'tyres', label: 'Pneus' },
  { key: 'regulation', label: 'Règlement' },
]

function EraSelector({ label, value, onChange }) {
  return (
    <label className="era-selector">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {eraComparisons.map((era) => (
          <option key={era.id} value={era.id}>
            {era.name}
          </option>
        ))}
      </select>
    </label>
  )
}

function EraComparator() {
  const [leftId, setLeftId] = useState('1950-1960')
  const [rightId, setRightId] = useState('2022-ground-effect')

  const leftEra = useMemo(
    () => eraComparisons.find((era) => era.id === leftId) ?? eraComparisons[0],
    [leftId],
  )
  const rightEra = useMemo(
    () => eraComparisons.find((era) => era.id === rightId) ?? eraComparisons.at(-1),
    [rightId],
  )

  return (
    <div className="page">
      <PageTitle
        eyebrow="Comparer"
        title="Comparateur d’époques"
        description="Comparer deux générations de F1 pour voir comment le moteur, l'aérodynamique, les pneus, la sécurité et les règles changent la voiture."
      />

      <section className="era-hero">
        <div className="era-hero__controls">
          <EraSelector label="Époque A" value={leftId} onChange={setLeftId} />
          <EraSelector label="Époque B" value={rightId} onChange={setRightId} />
        </div>
        <TechDiagram variant="comparison" title="Évolution technique simplifiée" />
      </section>

      <section className="era-compare" aria-label="Comparaison des époques sélectionnées">
        <article className="era-card">
          <p className="section__eyebrow">{leftEra.period}</p>
          <h2>{leftEra.name}</h2>
          <p>{leftEra.beginnerSummary}</p>
          <ul className="pill-list">
            {leftEra.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
        <article className="era-card era-card--right">
          <p className="section__eyebrow">{rightEra.period}</p>
          <h2>{rightEra.name}</h2>
          <p>{rightEra.beginnerSummary}</p>
          <ul className="pill-list">
            {rightEra.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="era-table">
          {comparisonRows.map((row) => (
            <div className="era-table__row" key={row.key}>
              <h3>{row.label}</h3>
              <p>{leftEra[row.key]}</p>
              <p>{rightEra[row.key]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="card-grid card-grid--two">
          <QuickFact
            label="Époque A"
            value={leftEra.visualTone}
            description={leftEra.beginnerSummary}
            tone="blue"
          />
          <QuickFact
            label="Époque B"
            value={rightEra.visualTone}
            description={rightEra.beginnerSummary}
            tone="red"
          />
        </div>
      </section>
    </div>
  )
}

export default EraComparator

