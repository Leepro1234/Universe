import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
import Index from './routes/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Index"
          element={
            <RequireAuth>
              <Index />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App
