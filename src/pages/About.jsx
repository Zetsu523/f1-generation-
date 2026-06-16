import PageTitle from '../components/PageTitle/PageTitle.jsx'
import sources from '../data/sources.json'

function About() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Sources"
        title="À propos et sources"
        description="F1 Knowledge Hub est un site pédagogique non officiel. Il vise à expliquer la Formule 1 simplement, sans affiliation avec Formula 1, la FIA, Pirelli ou une équipe."
      />

      <section className="section">
        <div className="feature-band">
          <h2>Positionnement éditorial</h2>
          <p>
            Le contenu privilégie les explications accessibles aux débutants. Les chiffres précis
            et les détails réglementaires doivent être vérifiés dans les documents officiels avant
            d’être ajoutés au site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Références</p>
          <h2>Sources utilisées pour cette V1</h2>
        </div>
        <ul className="source-list">
          {sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <p>{source.usage}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About

