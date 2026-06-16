import './PageTitle.css'

function PageTitle({ eyebrow, title, description, children }) {
  return (
    <section className="page-title">
      {eyebrow ? <p className="page-title__eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="page-title__description">{description}</p> : null}
      {children}
    </section>
  )
}

export default PageTitle

