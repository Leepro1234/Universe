import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
import Index from './routes/Index'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Index />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/Index"
          element={
            <RequireAuth>
              <Index />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  )
}

export default App
