import { Link } from 'react-router-dom'
import './Card.css'

function Card({ eyebrow, title, description, items = [], to, linkLabel = 'Découvrir', children }) {
  return (
    <article className="info-card">
      {eyebrow ? <p className="info-card__eyebrow">{eyebrow}</p> : null}
      <h3 className="info-card__title">{title}</h3>
      {description ? <p className="info-card__description">{description}</p> : null}
      {items.length > 0 ? (
        <ul className="info-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {children}
      {to ? (
        <Link className="info-card__link" to={to}>
          {linkLabel}
        </Link>
      ) : null}
    </article>
  )
}

export default Card

