import { useMemo, useState } from 'react'
import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import components from '../data/components.json'

function Components() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const categories = useMemo(
    () => ['Tous', ...Array.from(new Set(components.map((component) => component.category)))],
    [],
  )
  const filteredComponents = useMemo(() => {
    if (selectedCategory === 'Tous') {
      return components
    }

    return components.filter((component) => component.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="page">
      <PageTitle
        eyebrow="Composants"
        title="Composants d’une F1"
        description="Une Formule 1 est un système complet : chaque pièce influence l’aérodynamique, le grip mécanique, la sécurité ou la gestion de l’énergie."
      />

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Filtrer</p>
          <h2>Explorer par famille technique</h2>
        </div>
        <div className="filter-bar" aria-label="Catégories de composants">
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
        <div className="card-grid">
          {filteredComponents.map((component) => (
            <Card
              key={component.id}
              eyebrow={component.category}
              title={component.name}
              description={component.simpleExplanation}
              items={[component.role, component.performanceImportance]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Components

