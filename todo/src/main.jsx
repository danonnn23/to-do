import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/layout.css'
import './styles/responsive.css'
import './styles/themes.css'
import './styles/variables.css'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
