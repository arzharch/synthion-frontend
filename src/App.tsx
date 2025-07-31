import { Routes, Route } from 'react-router-dom'
import LoginScreen from './login_pages/login_screen'
import Homepage from './Homepage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  )
}

export default App
