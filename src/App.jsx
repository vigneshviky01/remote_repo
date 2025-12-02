// remote-app/src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  // This userInfo is only for standalone remote usage
  const sampleUser = {
    name: 'Remote Standalone User',
    email: 'remote.user@example.com',
    role: 'Viewer'
  }

  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <h1>Remote App</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profiles">Profiles</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profiles"
            element={<Profile userInfo={sampleUser} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
