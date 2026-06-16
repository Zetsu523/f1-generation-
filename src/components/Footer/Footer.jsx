import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">F1 Knowledge Hub</p>
          <p className="site-footer__text">
            Site éducatif non officiel consacré à la compréhension technique de la Formule 1.
          </p>
        </div>
        <div className="site-footer__links" aria-label="Liens secondaires">
          <Link to="/sources">Sources</Link>
          <Link to="/glossaire">Glossaire</Link>
          <Link to="/reglements">Règlements</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

