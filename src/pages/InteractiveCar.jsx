import { useMemo, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import QuickFact from '../components/QuickFact/QuickFact.jsx'
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
        description="Une F1 générique vue de dessus pour relier les grandes zones de la voiture à leur rôle technique."
      />

      <section className="interactive-car">
        <div className="interactive-car__stage" aria-label="Monoplace générique avec zones techniques">
          <svg className="interactive-car__svg" viewBox="0 0 1120 560" role="img" aria-label="Vue de dessus d'une monoplace de Formule 1 générique">
            <defs>
              <linearGradient id="carBodyTop" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#f3f3f3" />
                <stop offset="48%" stopColor="#8d8d8d" />
                <stop offset="100%" stopColor="#171717" />
              </linearGradient>
              <linearGradient id="redCarbon" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#e10600" />
                <stop offset="100%" stopColor="#5d0808" />
              </linearGradient>
            </defs>

            <path className="interactive-car__flow" d="M78 120c260-82 748-82 962 0" />
            <path className="interactive-car__flow interactive-car__flow--bottom" d="M78 440c260 82 748 82 962 0" />

            <rect className="interactive-car__wing interactive-car__wing--front" x="58" y="206" width="226" height="148" rx="18" />
            <rect className="interactive-car__wing-plane" x="80" y="230" width="182" height="22" rx="4" />
            <rect className="interactive-car__wing-plane" x="80" y="308" width="182" height="22" rx="4" />
            <path className="interactive-car__front-endplate" d="M42 214l38-34h38v200H80l-38-34V214Z" />

            <path className="interactive-car__floor" d="M276 206h540c70 0 118 38 146 74-28 36-76 74-146 74H276c42-36 42-112 0-148Z" />
            <path className="interactive-car__body" d="M196 280l156-64 158-92h92l164 92 148 64-148 64-164 92h-92l-158-92-156-64Z" />
            <path className="interactive-car__nose" d="M150 258h324c28 0 40 10 40 22s-12 22-40 22H150l-58-22 58-22Z" />

            <path className="interactive-car__sidepod interactive-car__sidepod--top" d="M604 186h154c38 0 72 22 92 56H646c-42 0-58-20-42-56Z" />
            <path className="interactive-car__sidepod interactive-car__sidepod--bottom" d="M604 374h154c38 0 72-22 92-56H646c-42 0-58 20-42 56Z" />
            <path className="interactive-car__engine-cover" d="M626 214c122 8 198 24 278 66-80 42-156 58-278 66 34-42 34-90 0-132Z" />

            <path className="interactive-car__cockpit" d="M480 206c34-48 116-48 150 0l-24 116c-26 26-76 26-102 0l-24-116Z" />
            <path className="interactive-car__halo" d="M506 202c28-42 96-42 124 0" />
            <path className="interactive-car__halo interactive-car__halo--center" d="M568 198v110" />

            <g className="interactive-car__suspension">
              <path d="M312 210l146 50M312 350l146-50M780 210l-124 46M780 350l-124-46" />
              <path d="M312 162l128 88M312 398l128-88M780 162l-108 86M780 398l-108-86" />
            </g>

            <rect className="interactive-car__wheel interactive-car__wheel--front-top" x="248" y="74" width="132" height="86" rx="40" />
            <rect className="interactive-car__wheel interactive-car__wheel--front-bottom" x="248" y="400" width="132" height="86" rx="40" />
            <rect className="interactive-car__wheel interactive-car__wheel--rear-top" x="772" y="74" width="142" height="92" rx="42" />
            <rect className="interactive-car__wheel interactive-car__wheel--rear-bottom" x="772" y="394" width="142" height="92" rx="42" />
            <circle className="interactive-car__brake" cx="314" cy="118" r="24" />
            <circle className="interactive-car__brake" cx="314" cy="442" r="24" />
            <circle className="interactive-car__brake interactive-car__brake--rear" cx="844" cy="120" r="24" />
            <circle className="interactive-car__brake interactive-car__brake--rear" cx="844" cy="440" r="24" />

            <path className="interactive-car__diffuser" d="M854 222h126l74 58-74 58H854c32-42 32-74 0-116Z" />
            <rect className="interactive-car__wing interactive-car__wing--rear" x="942" y="190" width="132" height="180" rx="18" />
            <rect className="interactive-car__rear-plane" x="966" y="214" width="76" height="22" rx="4" />
            <rect className="interactive-car__rear-plane" x="966" y="324" width="76" height="22" rx="4" />
          </svg>

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
        </div>

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
            value="dessus"
            description="La vue simplifiée met en relation les zones visibles avec leur rôle."
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
