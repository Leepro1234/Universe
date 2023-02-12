import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
import Second from './routes/Second'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Second"
          element={
            <RequireAuth>
              <Second />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App
