import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Gallery from './pages/Gallery'
import Comments from './pages/Comments'
import Team from './pages/Team'
import { BrowserRouter as Router } from 'react-router'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Navigate to="gallery" replace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="comments" element={<Comments />} />
        <Route path="team" element={<Team/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App