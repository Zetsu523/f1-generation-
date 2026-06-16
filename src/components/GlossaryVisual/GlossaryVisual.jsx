import './GlossaryVisual.css'

function AeroFlow() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M24 42 C92 18, 202 18, 296 46" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M30 112 C112 136, 214 134, 292 104" />
      <path className="glossary-visual__car-body" d="M58 84 L132 52 H210 L268 82 L228 104 H106 Z" />
      <circle className="glossary-visual__wheel" cx="104" cy="108" r="18" />
      <circle className="glossary-visual__wheel" cx="226" cy="108" r="20" />
      <path className="glossary-visual__accent" d="M138 79 H236" />
    </svg>
  )
}

function RearWing() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__car-body" d="M48 92 L122 62 H218 L260 88 L222 108 H104 Z" />
      <path className="glossary-visual__accent-fill" d="M234 38 H282 V104 H234 L250 70 Z" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M36 48 H206" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M250 70 H304" />
      <circle className="glossary-visual__wheel" cx="98" cy="112" r="18" />
      <circle className="glossary-visual__wheel" cx="216" cy="112" r="20" />
    </svg>
  )
}

function Energy() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <rect className="glossary-visual__panel" x="72" y="44" width="128" height="64" rx="12" />
      <path className="glossary-visual__accent-fill" d="M152 26 L116 82 H146 L132 124 L196 64 H162 Z" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M214 54 C250 54, 272 68, 294 90" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M34 98 C62 74, 88 64, 118 64" />
    </svg>
  )
}

function Strategy() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__track" d="M38 106 H282" />
      <path className="glossary-visual__accent" d="M74 106 C106 50, 158 50, 190 106" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M94 38 H226" />
      <rect className="glossary-visual__panel" x="210" y="72" width="54" height="34" rx="6" />
      <path className="glossary-visual__car-body" d="M54 94 L96 76 H146 L182 94 L154 108 H82 Z" />
    </svg>
  )
}

function Tyre() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <circle className="glossary-visual__tyre" cx="156" cy="76" r="48" />
      <circle className="glossary-visual__rim" cx="156" cy="76" r="22" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M88 34 C128 22, 190 22, 228 38" />
      <path className="glossary-visual__accent" d="M126 104 L188 48" />
      <path className="glossary-visual__accent" d="M124 48 L190 104" />
    </svg>
  )
}

function Safety() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__panel" d="M76 104 L104 42 H214 L244 104 Z" />
      <path className="glossary-visual__accent" d="M112 72 C132 30, 188 30, 208 72" />
      <path className="glossary-visual__accent" d="M132 108 L152 62 H176 L196 108" />
      <circle className="glossary-visual__helmet" cx="164" cy="82" r="19" />
    </svg>
  )
}

function Rules() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <rect className="glossary-visual__panel" x="100" y="26" width="92" height="102" rx="10" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M120 54 H174" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M120 76 H174" />
      <path className="glossary-visual__accent-fill" d="M194 82 H234 V124 H194 Z" />
      <path className="glossary-visual__accent" d="M202 82 V70 C202 54, 226 54, 226 70 V82" />
    </svg>
  )
}

function Driving() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__track" d="M38 118 C82 42, 176 26, 278 50" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M64 110 C112 74, 158 62, 226 62" />
      <circle className="glossary-visual__marker" cx="152" cy="68" r="9" />
      <path className="glossary-visual__car-body" d="M204 58 L234 44 H268 L292 58 L270 70 H226 Z" />
    </svg>
  )
}

function Brakes() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <circle className="glossary-visual__tyre" cx="112" cy="76" r="40" />
      <circle className="glossary-visual__rim" cx="112" cy="76" r="18" />
      <circle className="glossary-visual__tyre" cx="218" cy="76" r="32" />
      <circle className="glossary-visual__rim" cx="218" cy="76" r="14" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M72 124 C112 132, 176 132, 244 114" />
      <path className="glossary-visual__accent" d="M154 44 V108" />
    </svg>
  )
}

function Course() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__track" d="M34 112 H286" />
      <path className="glossary-visual__accent-fill" d="M78 82 L134 52 H204 L252 82 L224 106 H104 Z" />
      <circle className="glossary-visual__wheel" cx="116" cy="110" r="18" />
      <circle className="glossary-visual__wheel" cx="216" cy="110" r="18" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M110 40 H210" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M132 28 H188" />
    </svg>
  )
}

function Floor() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__car-body" d="M50 76 L130 48 H212 L270 76 L228 98 H102 Z" />
      <path className="glossary-visual__accent-fill" d="M102 100 H232 L206 122 H126 Z" />
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M56 118 C112 134, 212 134, 280 108" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M38 54 C102 34, 218 34, 290 58" />
    </svg>
  )
}

function Oscillation() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <path className="glossary-visual__flow glossary-visual__flow--red" d="M42 112 C74 84, 106 138, 138 108 S202 82, 238 110 S282 124, 300 98" />
      <path className="glossary-visual__car-body" d="M76 70 L146 44 H214 L264 70 L228 92 H112 Z" />
      <circle className="glossary-visual__wheel" cx="120" cy="98" r="16" />
      <circle className="glossary-visual__wheel" cx="226" cy="98" r="18" />
      <path className="glossary-visual__flow glossary-visual__flow--blue" d="M92 34 L92 56 M228 28 L228 54" />
    </svg>
  )
}

const visualMap = {
  'aero-flow': AeroFlow,
  'rear-wing': RearWing,
  energy: Energy,
  strategy: Strategy,
  tyre: Tyre,
  safety: Safety,
  rules: Rules,
  driving: Driving,
  brakes: Brakes,
  course: Course,
  floor: Floor,
  oscillation: Oscillation,
}

function GlossaryVisual({ type = 'aero-flow', label }) {
  const Visual = visualMap[type] || AeroFlow

  return (
    <div className={`glossary-visual glossary-visual--${type}`} role="img" aria-label={`Illustration : ${label}`}>
      <Visual />
    </div>
  )
}

export default GlossaryVisual
