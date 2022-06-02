import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { KidsContextProvider } from './components/context/KidsContextProvider.jsx'
// import { MensContextProvider } from './components/context/MensContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <KidsContextProvider>
      {/* <MensContextProvider> */}
      <App />
      {/* </MensContextProvider>
   */}
    </KidsContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
)
