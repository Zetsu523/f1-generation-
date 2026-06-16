import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home.jsx'
import History from '../pages/History.jsx'
import Engines from '../pages/Engines.jsx'
import Components from '../pages/Components.jsx'
import Aerodynamics from '../pages/Aerodynamics.jsx'
import Tyres from '../pages/Tyres.jsx'
import Regulations from '../pages/Regulations.jsx'
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
            <Route path="/aerodynamique" element={<Aerodynamics />} />
            <Route path="/pneus" element={<Tyres />} />
            <Route path="/reglements" element={<Regulations />} />
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

