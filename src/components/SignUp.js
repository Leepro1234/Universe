import React, { useState } from 'react'
import { Button, TextField, Typography, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AccountCircle, LockOutlined } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#555555',
    },
  },
})

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleClick = () => {
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Name:', name)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            background: '#F8F9FA',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '50%',
              paddingBottom: '20px',
            }}
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React logo"
              style={{ width: '70px', height: '70px' }}
            />
            <Typography
              variant="h5"
              align="center"
              style={{ marginTop: '10px', userSelect: 'none' }}
            >
              회원가입
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80%',
              height: '50%',
              background: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.25)',
              padding: '30px',
            }}
          >
            <TextField
              id="outlined-basic"
              label="이메일"
              variant="outlined"
              margin="dense"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <AccountCircle sx={{ color: '#bdbdbd' }} fontSize="small" />
                ),
              }}
            />

            <TextField
              id="outlined-name"
              label="이름"
              type="text"
              variant="outlined"
              margin="dense"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <AccountCircle sx={{ color: '#bdbdbd' }} fontSize="small" />
                ),
              }}
            />
            <TextField
              id="outlined-password-input"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              margin="dense"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LockOutlined sx={{ color: '#bdbdbd' }} fontSize="small" />
                ),
              }}
            />

            <Button
              variant="contained"
              fullWidth
              style={{
                marginTop: '20px',
                background: '#ffe812',
                color: '#000',
              }}
              onClick={handleClick}
            >
              회원가입
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
