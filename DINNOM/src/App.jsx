import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-64 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg m-8">
              Tailwind is working!
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
