import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

function RequireAuth({ children }) {
  const auth = useAuth()
  console.log(children)
  if (!auth) {
    return <Navigate to="/login" />
  }
  return children
}

export default RequireAuth
