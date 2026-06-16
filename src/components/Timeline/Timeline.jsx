import './Timeline.css'

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline__item" key={item.id}>
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <p className="timeline__period">{item.period}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.highlights?.length ? (
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline

