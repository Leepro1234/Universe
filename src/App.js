import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
import Index from './routes/Index'
import LeftMenu from './components/LeftMenu'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Contents from './routes/Contents'
import { Home } from '@mui/icons-material'
function App() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const MainLayout = ({ children }) => {
    //리덕스로 헤더 상태관리?
    return (
      <RequireAuth>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <div
          style={{ paddingLeft: open ? '180px' : '0px', paddingTop: '60px' }}
        >
          <LeftMenu open={open} onClose={toggleDrawer} />
          {children}
        </div>
      </RequireAuth>
    )
  }

  return (
    <Router>
      <Routes>
        {['/', '/Index'].map((path) => (
          <Route
            key="Index"
            path={path}
            element={
              <MainLayout>
                <Index />
              </MainLayout>
            }
          />
        ))}

        <Route
          path="/Contents"
          element={
            <MainLayout>
              <Contents />
            </MainLayout>
          }
        />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  )
}

export default App
