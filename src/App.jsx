import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ArtikliPage from './pages/ArtikliPage';
import CenikiPage from './pages/CenikiPage';
import LokacijePage from './pages/LokacijePage';
import UrnikiPage from './pages/UrnikiPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/urniki" element={<UrnikiPage />} />
        <Route path="/ceniki" element={<CenikiPage />} />
        <Route path="/artikli" element={<ArtikliPage />} />
        <Route path="/lokacije" element={<LokacijePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
