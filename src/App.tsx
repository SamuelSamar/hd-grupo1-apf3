import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Gallery from './pages/Gallery'
import Comments from './pages/Comments'
import { BrowserRouter as Router } from 'react-router'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Navigate to="gallery" replace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
