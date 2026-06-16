import './QuickFact.css'

function QuickFact({ label, value, description, tone = 'red' }) {
  return (
    <article className={`quick-fact quick-fact--${tone}`}>
      <p className="quick-fact__label">{label}</p>
      <strong className="quick-fact__value">{value}</strong>
      {description ? <p className="quick-fact__description">{description}</p> : null}
    </article>
  )
}

export default QuickFact

