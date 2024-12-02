import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import './main.jsx';  

import App from './App.jsx';

import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
