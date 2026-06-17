import { useMemo, useState } from 'react'
import Card from '../components/Card/Card.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import PhotoMedia from '../components/PhotoMedia/PhotoMedia.jsx'
import VisualSection from '../components/VisualSection/VisualSection.jsx'
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

      <VisualSection
        eyebrow="Vue système"
        title="Une pièce ne travaille jamais seule"
        description="Le plancher dépend de la hauteur de caisse, les pneus dépendent de la suspension, et le refroidissement influence directement la carrosserie."
        diagram="regulations"
        diagramTitle="Zones techniques simplifiées"
        facts={[
          {
            label: 'Contact',
            value: '4 pneus',
            description: 'Toute la performance finit par passer dans quatre surfaces de contact.',
            tone: 'green',
          },
          {
            label: 'Équilibre',
            value: 'global',
            description: 'Un réglage local peut changer l’avant, l’arrière ou la stabilité en virage.',
            tone: 'blue',
          },
        ]}
        reverse
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
              media={
                <PhotoMedia
                  imageUrl={component.imageUrl}
                  imageAlt={component.imageAlt}
                  imageCredit={component.imageCredit}
                  imagePosition={component.imagePosition}
                  label={component.name}
                />
              }
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Components
