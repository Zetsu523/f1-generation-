import './TechDiagram.css'

function EngineDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma simplifié d'un groupe propulseur hybride">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <text className="tech-diagram__engine-title" x="320" y="88" textAnchor="middle">
        Le moteur hybride en 3 idées
      </text>

      <g>
        <rect className="tech-diagram__engine-card tech-diagram__engine-card--red" x="58" y="116" width="154" height="170" rx="18" />
        <circle className="tech-diagram__engine-number tech-diagram__engine-number--red" cx="90" cy="150" r="18" />
        <text className="tech-diagram__engine-number-text" x="90" y="157" textAnchor="middle">1</text>
        <rect className="tech-diagram__engine-icon tech-diagram__engine-icon--red" x="108" y="154" width="58" height="42" rx="8" />
        <path className="tech-diagram__engine-icon-line" d="M100 186h76M118 146h42" />
        <text className="tech-diagram__engine-label" x="135" y="232" textAnchor="middle">V6 turbo</text>
        <text className="tech-diagram__engine-small" x="135" y="260" textAnchor="middle">Propulse</text>
      </g>

      <g>
        <rect className="tech-diagram__engine-card tech-diagram__engine-card--blue" x="243" y="116" width="154" height="170" rx="18" />
        <circle className="tech-diagram__engine-number tech-diagram__engine-number--blue" cx="273" cy="150" r="18" />
        <text className="tech-diagram__engine-number-text" x="273" y="157" textAnchor="middle">2</text>
        <path className="tech-diagram__engine-loop" d="M292 184c0-23 18-42 42-42 17 0 31 9 38 22M376 180c0 23-18 42-42 42-17 0-31-9-38-22" />
        <path className="tech-diagram__engine-bolt" d="M336 156l-20 42h20l-12 34 34-52h-22l16-24h-16Z" />
        <text className="tech-diagram__engine-label" x="320" y="232" textAnchor="middle">MGU-K</text>
        <text className="tech-diagram__engine-small" x="320" y="260" textAnchor="middle">Récupère</text>
      </g>

      <g>
        <rect className="tech-diagram__engine-card tech-diagram__engine-card--green" x="428" y="116" width="154" height="170" rx="18" />
        <circle className="tech-diagram__engine-number tech-diagram__engine-number--green" cx="456" cy="150" r="18" />
        <text className="tech-diagram__engine-number-text" x="456" y="157" textAnchor="middle">3</text>
        <rect className="tech-diagram__engine-battery" x="474" y="160" width="58" height="34" rx="8" />
        <rect className="tech-diagram__engine-battery-tip" x="532" y="170" width="9" height="14" rx="3" />
        <path className="tech-diagram__engine-boost" d="M486 210h40" />
        <polygon className="tech-diagram__engine-arrow-head tech-diagram__engine-arrow-head--green" points="536,210 522,200 522,220" />
        <text className="tech-diagram__engine-label" x="505" y="229" textAnchor="middle">
          <tspan x="505" y="229">Batterie</tspan>
          <tspan x="505" y="253">ERS</tspan>
        </text>
        <text className="tech-diagram__engine-small" x="505" y="274" textAnchor="middle">Boost</text>
      </g>

      <path className="tech-diagram__engine-arrow" d="M218 204h18" />
      <polygon className="tech-diagram__engine-arrow-head" points="240,204 226,194 226,214" />
      <path className="tech-diagram__engine-arrow" d="M403 204h18" />
      <polygon className="tech-diagram__engine-arrow-head" points="425,204 411,194 411,214" />
    </svg>
  )
}

function AeroDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma de flux aérodynamique autour d'une monoplace">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <path className="tech-diagram__flow" d="M56 118c150-48 304-44 532 4" />
      <path className="tech-diagram__flow tech-diagram__flow--soft" d="M52 176c136-10 222-8 322 4 62 7 124 15 216-4" />
      <path className="tech-diagram__line tech-diagram__line--red" d="M78 260c190 24 302 18 494-22" />
      <path className="tech-diagram__car-shape" d="M134 218l78-64h188l88 52 40 48H108l26-36Z" />
      <circle className="tech-diagram__wheel" cx="198" cy="264" r="38" />
      <circle className="tech-diagram__wheel" cx="442" cy="264" r="38" />
      <text x="82" y="92">air propre</text>
      <text x="378" y="306">appui</text>
    </svg>
  )
}

function TyresDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma de pneus et de stratégie">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <circle className="tech-diagram__tyre tech-diagram__tyre--soft" cx="156" cy="178" r="62" />
      <circle className="tech-diagram__tyre tech-diagram__tyre--medium" cx="320" cy="178" r="62" />
      <circle className="tech-diagram__tyre tech-diagram__tyre--hard" cx="484" cy="178" r="62" />
      <path className="tech-diagram__line tech-diagram__line--blue" d="M112 286h120l40-36 40 36h96l34-36 42 36h72" />
      <text x="124" y="258">tendre</text>
      <text x="284" y="258">medium</text>
      <text x="454" y="258">dur</text>
    </svg>
  )
}

function RegulationDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma de zones réglementaires d'une F1">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <rect className="tech-diagram__zone tech-diagram__zone--front" x="82" y="140" width="118" height="100" rx="12" />
      <rect className="tech-diagram__zone tech-diagram__zone--center" x="222" y="110" width="196" height="160" rx="14" />
      <rect className="tech-diagram__zone tech-diagram__zone--rear" x="440" y="140" width="118" height="100" rx="12" />
      <path className="tech-diagram__line tech-diagram__line--red" d="M78 296h480" />
      <text x="96" y="132">avant</text>
      <text x="268" y="98">cellule</text>
      <text x="456" y="132">arrière</text>
      <text x="210" y="326">boîte réglementaire</text>
    </svg>
  )
}

function GlossaryDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma de vocabulaire F1 relié par catégories">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <circle className="tech-diagram__node tech-diagram__node--main" cx="320" cy="184" r="62" />
      <circle className="tech-diagram__node" cx="154" cy="132" r="46" />
      <circle className="tech-diagram__node tech-diagram__node--blue" cx="492" cy="132" r="46" />
      <circle className="tech-diagram__node tech-diagram__node--gold" cx="196" cy="274" r="46" />
      <circle className="tech-diagram__node tech-diagram__node--green" cx="456" cy="274" r="46" />
      <path className="tech-diagram__line tech-diagram__line--thin" d="M202 146l62 22M438 146l-62 22M234 254l50-36M420 254l-64-36" />
      <text x="292" y="190">F1</text>
      <text x="121" y="138">aéro</text>
      <text x="456" y="138">ERS</text>
      <text x="162" y="280">pneus</text>
      <text x="416" y="280">course</text>
    </svg>
  )
}

function ComparisonDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma comparant plusieurs époques de F1">
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <path className="tech-diagram__line tech-diagram__line--thin" d="M84 282h472" />
      <rect className="tech-diagram__bar tech-diagram__bar--one" x="108" y="202" width="54" height="80" rx="8" />
      <rect className="tech-diagram__bar tech-diagram__bar--two" x="204" y="162" width="54" height="120" rx="8" />
      <rect className="tech-diagram__bar tech-diagram__bar--three" x="300" y="118" width="54" height="164" rx="8" />
      <rect className="tech-diagram__bar tech-diagram__bar--four" x="396" y="148" width="54" height="134" rx="8" />
      <rect className="tech-diagram__bar tech-diagram__bar--five" x="492" y="92" width="54" height="190" rx="8" />
      <text x="100" y="314">1950</text>
      <text x="298" y="314">1990</text>
      <text x="482" y="314">2022+</text>
      <text x="176" y="92">sécurité, aéro, énergie</text>
    </svg>
  )
}

const diagrams = {
  engine: EngineDiagram,
  aero: AeroDiagram,
  tyres: TyresDiagram,
  regulations: RegulationDiagram,
  glossary: GlossaryDiagram,
  comparison: ComparisonDiagram,
}

function TechDiagram({ variant = 'aero', title }) {
  const Diagram = diagrams[variant] ?? diagrams.aero

  return (
    <figure className={`tech-diagram tech-diagram--${variant}`}>
      {title ? <figcaption>{title}</figcaption> : null}
      <Diagram />
    </figure>
  )
}

export default TechDiagram
