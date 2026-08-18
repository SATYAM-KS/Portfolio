import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/webflow.css';
import './styles/custom.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
