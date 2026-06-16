import { useState } from 'react'
import './TeamVisual.css'

function TeamVisual({ team }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [carFailed, setCarFailed] = useState(false)

  const style = {
    '--team-primary': team.colors.primary,
    '--team-secondary': team.colors.secondary,
    '--team-accent': team.colors.accent,
  }

  const hasLogo = team.logoUrl && !logoFailed
  const hasCarImage = team.carImageUrl && !carFailed

  return (
    <div className="team-visual" style={style}>
      <div className="team-visual__identity">
        <div className="team-visual__logo-box">
          {hasLogo ? (
            <img
              className="team-visual__logo"
              src={team.logoUrl}
              alt={`Logo ${team.name}`}
              loading="lazy"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="team-visual__badge" aria-label={`Badge ${team.name}`}>
              <span>{team.shortName}</span>
            </div>
          )}
        </div>
        <span className="team-visual__team-name">{team.name}</span>
      </div>

      <div className="team-visual__car-box">
        {hasCarImage ? (
          <img
            className="team-visual__car-image"
            src={team.carImageUrl}
            alt={`Monoplace ${team.name}`}
            loading="lazy"
            onError={() => setCarFailed(true)}
          />
        ) : (
          <svg
            className="team-visual__car"
            viewBox="0 0 420 180"
            role="img"
            aria-label={`Monoplace generique aux couleurs de ${team.name}`}
          >
            <path className="team-visual__shadow" d="M58 130h304" />
            <path className="team-visual__rear-wing" d="M322 58h64v62h-64l18-31-18-31Z" />
            <path className="team-visual__front-wing" d="M18 72h92v36H18L4 90l14-18Z" />
            <path className="team-visual__floor" d="M88 112h244l-34 32H122l-34-32Z" />
            <path className="team-visual__body" d="M66 90l94-44h96l96 44-96 44h-96L66 90Z" />
            <path className="team-visual__nose" d="M42 82h152c18 0 28 4 28 8s-10 8-28 8H42l-22-8 22-8Z" />
            <path className="team-visual__cockpit" d="M178 66c16-22 52-22 68 0l-12 46h-44l-12-46Z" />
            <path className="team-visual__halo" d="M188 66c18-20 48-20 66 0" />
            <circle className="team-visual__wheel" cx="106" cy="50" r="26" />
            <circle className="team-visual__wheel" cx="106" cy="130" r="26" />
            <circle className="team-visual__wheel" cx="300" cy="50" r="28" />
            <circle className="team-visual__wheel" cx="300" cy="130" r="28" />
            <path className="team-visual__stripe" d="M108 90h198" />
          </svg>
        )}
      </div>
    </div>
  )
}

export default TeamVisual
