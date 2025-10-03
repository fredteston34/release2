
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles.css';
import { ThemeProvider } from './hooks/useTheme.tsx';
import { LanguageProvider } from './hooks/useTranslations.tsx';
import { AppProvider } from './hooks/useAppStore.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ThemeProvider>
        <LanguageProvider>
            <AppProvider>
                <App />
            </AppProvider>
        </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);