import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { LanguageProvider, ThemeProvider } from './hooks/useLanguageTheme';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LanguageProvider>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </LanguageProvider>
    </React.StrictMode>
);
