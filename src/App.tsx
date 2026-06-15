import { Route, Routes } from 'react-router-dom';
import { AmbientForest } from './components/AmbientForest';
import { CursorGlow } from './components/CursorGlow';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollProgress } from './hooks/useScrollProgress';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { FieldNotes } from './pages/FieldNotes';
import { Journal } from './pages/Journal';
import { Platform } from './pages/Platform';

function App() {
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <AmbientForest />
      <CursorGlow />
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/about" element={<About />} />
        <Route path="/field-notes" element={<FieldNotes />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
