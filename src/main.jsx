import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as WOWLib from 'wowjs'
import 'animate.css'
import './index.css'
import App from './App.jsx'

// Initialize WOW.js after component mounts
setTimeout(() => {
  const WOW = WOWLib.WOW || WOWLib.default?.WOW || window.WOW
  if (WOW) {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: false,
      live: true
    })
    wow.init()
  }
}, 100)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
