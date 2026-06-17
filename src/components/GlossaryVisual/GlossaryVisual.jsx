import { useState } from 'react'
import './GlossaryVisual.css'

function GlossaryVisual({ entry }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = entry.imageUrl && !imageFailed

  return (
    <figure className="glossary-visual">
      {hasImage ? (
        <img
          className="glossary-visual__image"
          src={entry.imageUrl}
          alt={entry.imageAlt || `Image liée à ${entry.term}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="glossary-visual__fallback" aria-label={`Image indisponible : ${entry.term}`}>
          <span>{entry.term}</span>
        </div>
      )}
      {entry.imageCredit ? <figcaption>{entry.imageCredit}</figcaption> : null}
    </figure>
  )
}

export default GlossaryVisual
