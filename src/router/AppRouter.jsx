import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home.jsx'
import History from '../pages/History.jsx'
import Engines from '../pages/Engines.jsx'
import Components from '../pages/Components.jsx'
import Teams from '../pages/Teams.jsx'
import Circuits from '../pages/Circuits.jsx'
import Aerodynamics from '../pages/Aerodynamics.jsx'
import Tyres from '../pages/Tyres.jsx'
import Regulations from '../pages/Regulations.jsx'
import InteractiveCar from '../pages/InteractiveCar.jsx'
import EraComparator from '../pages/EraComparator.jsx'
import Glossary from '../pages/Glossary.jsx'
import About from '../pages/About.jsx'

function AppRouter() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/histoire" element={<History />} />
            <Route path="/moteurs" element={<Engines />} />
            <Route path="/composants" element={<Components />} />
            <Route path="/ecuries" element={<Teams />} />
            <Route path="/circuits" element={<Circuits />} />
            <Route path="/aerodynamique" element={<Aerodynamics />} />
            <Route path="/pneus" element={<Tyres />} />
            <Route path="/reglements" element={<Regulations />} />
            <Route path="/monoplace-interactive" element={<InteractiveCar />} />
            <Route path="/comparateur-epoques" element={<EraComparator />} />
            <Route path="/glossaire" element={<Glossary />} />
            <Route path="/sources" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default AppRouter
