import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useDispatch, useSelector } from 'react-redux'
import { fnLogin } from '../store/module/UserStateSlice'

function RequireAuth({ children }) {
  const auth = useAuth()
  const dispatch = useDispatch()
  if (auth) {
    dispatch(fnLogin(localStorage.getItem('token')))
  }
  if (!auth) {
    return <Navigate to="/login" />
  }
  return children
}

export default RequireAuth
