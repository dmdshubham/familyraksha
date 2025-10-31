import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css'
import './index.css'
import App from './App.jsx'

// Initialize WOW.js after page loads
window.addEventListener('load', () => {
  if (typeof window.WOW !== 'undefined') {
    const wow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: false,
      live: true
    })
    wow.init()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
