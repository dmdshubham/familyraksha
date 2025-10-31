import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="page-wraper">
          <Header />
          <LandingPage />
          <Footer />
        </div>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default App
