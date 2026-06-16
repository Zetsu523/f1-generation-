import { useMemo, useState } from 'react'
import Card from '../components/Card/Card.jsx'
import GlossaryVisual from '../components/GlossaryVisual/GlossaryVisual.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
import glossary from '../data/glossary.json'
import quickFacts from '../data/quickFacts.json'

function Glossary() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Toutes')

  const categories = useMemo(
    () => ['Toutes', ...Array.from(new Set(glossary.map((entry) => entry.category))).sort()],
    [],
  )

  const filteredTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return glossary.filter((entry) => {
      const matchesCategory = selectedCategory === 'Toutes' || entry.category === selectedCategory
      const matchesQuery =
        !normalizedQuery ||
        [entry.term, entry.definition, entry.category].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        )

      return matchesCategory && matchesQuery
    })
  }, [query, selectedCategory])

  return (
    <div className="page">
      <PageTitle
        eyebrow="Glossaire"
        title="Glossaire F1"
        description="Des définitions courtes pour comprendre les mots que l’on entend pendant un Grand Prix ou dans une explication technique."
      />

      <VisualSection
        eyebrow="Vocabulaire"
        title="Relier les mots aux familles techniques"
        description="Les termes F1 deviennent plus simples quand on les range par usage : aérodynamique, pneus, stratégie, sécurité, pilotage ou hybridation."
        diagram="glossary"
        diagramTitle="Carte simplifiée du vocabulaire"
        facts={quickFacts.glossary}
        reverse
      />

      <section className="section">
        <div className="glossary-tools">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Exemple : DRS, pneus, appui, ERS..."
          />
          <div className="filter-bar" aria-label="Catégories du glossaire">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredTerms.length > 0 ? (
          <div className="card-grid">
            {filteredTerms.map((entry) => (
              <Card
                key={entry.term}
                eyebrow={entry.category}
                title={entry.term}
                description={entry.definition}
                media={<GlossaryVisual type={entry.visual} label={entry.term} />}
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
