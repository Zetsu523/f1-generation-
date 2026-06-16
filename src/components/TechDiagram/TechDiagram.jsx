import './TechDiagram.css'

function EngineDiagram() {
  return (
    <svg className="tech-diagram__svg" viewBox="0 0 640 380" role="img" aria-label="Schéma d'un groupe propulseur hybride">
      <defs>
        <linearGradient id="engineGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e10600" />
          <stop offset="100%" stopColor="#8fd3ff" />
        </linearGradient>
      </defs>
      <rect className="tech-diagram__panel" x="28" y="42" width="584" height="278" rx="22" />
      <path className="tech-diagram__line tech-diagram__line--red" d="M94 206h96l54-76h152l50 76h96" />
      <path className="tech-diagram__line tech-diagram__line--blue" d="M112 252h122c48 0 52-56 104-56h190" />
      <rect className="tech-diagram__block" x="232" y="124" width="180" height="120" rx="18" />
      <circle className="tech-diagram__accent" cx="160" cy="206" r="34" />
      <circle className="tech-diagram__accent tech-diagram__accent--blue" cx="494" cy="206" r="34" />
      <text x="265" y="190">V6 turbo</text>
      <text x="118" y="276">MGU-K</text>
      <text x="456" y="276">ERS</text>
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

