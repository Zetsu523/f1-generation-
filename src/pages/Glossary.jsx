import { useMemo, useState } from 'react'
import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import glossary from '../data/glossary.json'

function Glossary() {
  const [query, setQuery] = useState('')

  const filteredTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return glossary
    }

    return glossary.filter((entry) =>
      [entry.term, entry.definition, entry.category].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    )
  }, [query])

  return (
    <div className="page">
      <PageTitle
        eyebrow="Glossaire"
        title="Glossaire F1"
        description="Des définitions courtes pour comprendre les mots que l’on entend pendant un Grand Prix ou dans une explication technique."
      />

      <section className="section">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Exemple : DRS, pneus, appui, ERS..."
        />

        {filteredTerms.length > 0 ? (
          <div className="card-grid">
            {filteredTerms.map((entry) => (
              <Card
                key={entry.term}
                eyebrow={entry.category}
                title={entry.term}
                description={entry.definition}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">Aucun terme ne correspond à cette recherche.</p>
        )}
      </section>
    </div>
  )
}

export default Glossary

