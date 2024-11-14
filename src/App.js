// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontSizeProvider, FontSizeContext } from './FontSizeContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import LogoSection from './components/LogoSection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MissionVision from './pages/about/MissionVision';
import Organization from './pages/about/Organization';
import Awards from './pages/about/Awards';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import War1947 from './pages/war/War1947';
import War1962 from './pages/war/War1962';
import War1965 from './pages/war/War1965';
import War1967 from './pages/war/War1967';
import War1971 from './pages/war/War1971';
import War1999 from './pages/war/War1999';
import EliteForces from './pages/EliteForces';
import Regiments from './pages/Regiments';
import Entries from './pages/Entries';
import WesternCommand from './pages/WesternCommand';
import SouthernCommand from './pages/SouthernCommand';
import EasternCommand from './pages/EasternCommand';
import NorthernCommand from './pages/NorthernCommand';
import CentralCommand from './pages/CentralCommand';
import SouthWesternCommand from './pages/SouthWesternCommand';
import TrainingCommand from './pages/TrainingCommand';

function AppContent() {
  // Access the current font size from the context
  const { fontSize } = useContext(FontSizeContext);

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <Router>
        <ScrollToTop />
        <Header />
        <LogoSection />
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route path="/about/organization" element={<Organization />} />
            <Route path="/about/awards" element={<Awards />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/war/1947" element={<War1947 />} />
            <Route path="/war/1962" element={<War1962 />} />
            <Route path="/war/1965" element={<War1965 />} />
            <Route path="/war/1967" element={<War1967 />} />
            <Route path="/war/1971" element={<War1971 />} />
            <Route path="/war/1999" element={<War1999 />} />
            <Route path="/elite-forces" element={<EliteForces />} />
            <Route path="/regiments" element={<Regiments />} />
            <Route path="/entries" element={<Entries />} />
            <Route path="/western-command" element={<WesternCommand />} />
            <Route path="/south-command" element={<SouthernCommand />} />
            <Route path="/east-command" element={<EasternCommand />} />
            <Route path="/north-command" element={<NorthernCommand />} />
            <Route path="/central-command" element={<CentralCommand />} />
            <Route path="/south-west-command" element={<SouthWesternCommand />} />
            <Route path="/training-command" element={<TrainingCommand />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <FontSizeProvider>
      <AppContent />
    </FontSizeProvider>
  );
}

export default App;
