import { useState } from 'react'
import './PhotoMedia.css'

function PhotoMedia({ imageUrl, imageAlt, imageCredit, imagePosition, label }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = imageUrl && !imageFailed

  return (
    <figure className="photo-media">
      {hasImage ? (
        <img
          className="photo-media__image"
          src={imageUrl}
          alt={imageAlt || label || ''}
          loading="lazy"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="photo-media__fallback">
          <span>{label}</span>
        </div>
      )}
      {imageCredit ? <figcaption>{imageCredit}</figcaption> : null}
    </figure>
  )
}

export default PhotoMedia
