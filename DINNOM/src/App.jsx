import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
