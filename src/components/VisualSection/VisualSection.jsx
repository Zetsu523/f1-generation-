import QuickFact from '../QuickFact/QuickFact.jsx'
import TechDiagram from '../TechDiagram/TechDiagram.jsx'
import './VisualSection.css'

function VisualSection({
  eyebrow,
  title,
  description,
  diagram = 'aero',
  diagramTitle,
  facts = [],
  reverse = false,
  children,
}) {
  return (
    <section className={`visual-section ${reverse ? 'visual-section--reverse' : ''}`}>
      <div className="visual-section__content">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {facts.length > 0 ? (
          <div className="visual-section__facts">
            {facts.map((fact) => (
              <QuickFact key={`${fact.label}-${fact.value}`} {...fact} />
            ))}
          </div>
        ) : null}
        {children}
      </div>
      <TechDiagram variant={diagram} title={diagramTitle} />
    </section>
  )
}

export default VisualSection

