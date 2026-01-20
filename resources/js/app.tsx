import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { LanguageProvider, ThemeProvider } from './hooks/useLanguageTheme';

const appName = import.meta.env.VITE_APP_NAME || 'Digital Solutions';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <LanguageProvider>
                    <ThemeProvider>
                        <App {...props} />
                    </ThemeProvider>
                </LanguageProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#26d04c',
    },
});
