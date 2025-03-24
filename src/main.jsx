import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'
import Easy from './Easy.jsx'
import Medium from './Medium.jsx'
import Hard from './Hard.jsx'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Easy" element={<Easy />} />
        <Route path="/Medium" element={<Medium />} />
        <Route path="/Hard" element={<Hard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

