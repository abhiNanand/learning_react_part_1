import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form/Form.jsx'
import App2 from './useContext/App2.jsx'
import App3 from './Rendering_List/App3.jsx';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>

 
 <App3></App3>
  </StrictMode>,
)
