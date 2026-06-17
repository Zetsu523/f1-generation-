import { useMemo, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import QuickFact from '../components/QuickFact/QuickFact.jsx'
import interactiveCarImage from '../data/interactiveCarImage.json'
import interactiveParts from '../data/interactiveParts.json'
import './InteractiveCar.css'

function InteractiveCar() {
  const [selectedPartId, setSelectedPartId] = useState(interactiveParts[0].id)
  const selectedPart = useMemo(
    () => interactiveParts.find((part) => part.id === selectedPartId) ?? interactiveParts[0],
    [selectedPartId],
  )

  return (
    <div className="page">
      <PageTitle
        eyebrow="Exploration"
        title="Monoplace interactive"
        description="Une vraie monoplace de Formule 1 pour relier les grandes zones visibles de la voiture à leur rôle technique."
      />

      <section className="interactive-car">
        <figure className="interactive-car__stage" aria-label="Monoplace réelle avec zones techniques">
          <img
            className="interactive-car__photo"
            src={interactiveCarImage.imageUrl}
            alt={interactiveCarImage.imageAlt}
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>{interactiveCarImage.imageCredit}</figcaption>

          {interactiveParts.map((part, index) => (
            <button
              key={part.id}
              className={`interactive-car__hotspot ${
                selectedPartId === part.id ? 'interactive-car__hotspot--active' : ''
              }`}
              type="button"
              style={part.marker}
              aria-label={`Sélectionner ${part.name}`}
              aria-pressed={selectedPartId === part.id}
              onClick={() => setSelectedPartId(part.id)}
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </figure>

        <aside className="interactive-car__panel" aria-live="polite">
          <p className="section__eyebrow">{selectedPart.category}</p>
          <h2>{selectedPart.name}</h2>
          <p>{selectedPart.role}</p>
          <div className="interactive-car__facts">
            <QuickFact
              label="À retenir"
              value={selectedPart.signal}
              description={selectedPart.lesson}
              tone="blue"
            />
          </div>
          <div className="interactive-car__selector" aria-label="Sélection des zones de la monoplace">
            {interactiveParts.map((part, index) => (
              <button
                key={part.id}
                type="button"
                className={selectedPartId === part.id ? 'interactive-car__select is-active' : 'interactive-car__select'}
                aria-pressed={selectedPartId === part.id}
                onClick={() => setSelectedPartId(part.id)}
              >
                <span>{index + 1}</span>
                {part.name}
              </button>
            ))}
          </div>
        </aside>
      </section>

      <section className="section section--compact">
        <div className="card-grid card-grid--two">
          <QuickFact
            label="Vue"
            value="réelle"
            description="La photo montre une vraie monoplace, avec les zones techniques replacées dessus."
            tone="green"
          />
          <QuickFact
            label="Lecture"
            value="système"
            description="Chaque pièce modifie le comportement global de la monoplace."
            tone="gold"
          />
        </div>
      </section>
    </div>
  )
}

export default InteractiveCar
