import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Gallery from './pages/Gallery'
import { BrowserRouter as Router } from 'react-router'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Navigate to="gallery" replace />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Router>
    <Gallery/>
    </>
  )
}

export default App
