import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FibetechApp from './FibetechApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <FibetechApp/>
  </StrictMode>,
)
