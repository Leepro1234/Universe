export const useAuth = () => {
  const token = localStorage.getItem('token')
  if (token === null) {
    return false
  } else {
    return true
  }
}
