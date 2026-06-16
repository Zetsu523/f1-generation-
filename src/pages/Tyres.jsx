import Card from '../components/Card/Card.jsx'
import ComparisonTable from '../components/ComparisonTable/ComparisonTable.jsx'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import tyres from '../data/tyres.json'

const columns = [
  { key: 'name', label: 'Sujet' },
  { key: 'category', label: 'Catégorie' },
  { key: 'description', label: 'Principe' },
  { key: 'strategy', label: 'Impact stratégique' },
]

function Tyres() {
  return (
    <div className="page">
      <PageTitle
        eyebrow="Pneus"
        title="Pneus et stratégie"
        description="Les pneus sont le lien direct entre la voiture et la piste. Leur température, leur usure et le moment de l’arrêt aux stands changent toute une course."
      />

      <section className="section">
        <div className="section__header">
          <p className="section__eyebrow">Comprendre les relais</p>
          <h2>Pourquoi un pneu peut décider une course</h2>
          <p>
            Une stratégie n’est pas seulement un choix de composé. Elle dépend aussi du trafic, de
            la météo, du rythme des rivaux et de la capacité du pilote à protéger ses pneus.
          </p>
        </div>
        <div className="card-grid">
          {tyres.map((tyre) => (
            <Card
              key={tyre.id}
              eyebrow={tyre.category}
              title={tyre.name}
              description={tyre.description}
              items={[tyre.strategy]}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <ComparisonTable
          caption="Principes de stratégie pneus"
          columns={columns}
          rows={tyres}
        />
      </section>
    </div>
  )
}

export default Tyres

