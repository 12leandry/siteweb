import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/app.css';
import { LanguageProvider, ThemeProvider } from './hooks/useLanguageTheme';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import DemanderDevis from './pages/DemanderDevis';
import ServiceDetail from './pages/ServiceDetail';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router basename="/siteweb">
            <LanguageProvider>
                <ThemeProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/demander-un-devis" element={<DemanderDevis />} />
                    </Routes>
                </ThemeProvider>
            </LanguageProvider>
        </Router>
    </React.StrictMode>
);
