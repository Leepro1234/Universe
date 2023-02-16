import { useState } from 'react'
import TextField from '@mui/material/TextField'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Container,
} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { fnLogin } from '../store/module/UserStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

//#region Style
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
})

const MyButton = styled(Button)({
  marginTop: 10,
  marginBottom: 8,
  background: '#ffe812',
  color: '#000',
  ':hover': {
    background: '#ffe812',
    color: '#000',
  },
})
const MyBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  background: '#F8F9FA',
})
const MyTextField = styled(TextField)({
  marginTop: 15,
})

//#endregion
const headers = { 'Content-Type': 'application/json' }
export default function Login() {
  //const userState = useSelector((state) => state.userState.data) //dispatch때마다 화면 refresh
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate() //Redict를 위해서 사용
  //useEffect(() => {}, [dispatch])

  //#region  Methods

  const onClick = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}/api/users/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(inputs),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then((json) => {
          //성공일때만
          return json
        })
        .catch((response) => {
          return response.json().then((json) => {
            return json
          })
        })
      if (res.status === false) {
        setErrMsg(res.resultMessage)
      } else {
        setErrMsg('')
        await dispatch(fnLogin(res.token))
        navigate('/Index')
      }
    } catch (err) {
      console.error(err)
      return
    }
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  //#endregion

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <MyBox>
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
              component="h1"
              variant="h5"
              style={{ marginTop: '10px', userSelect: 'none' }}
            >
              로그인
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
            <MyTextField
              label="Email Address"
              required
              fullWidth
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
            />
            <MyTextField
              label="Password"
              type="password"
              required
              fullWidth
              name="password"
              autoComplete="current-password"
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <MyButton
              type="button"
              fullWidth
              variant="contained"
              onClick={onClick}
            >
              로그인
            </MyButton>
            <Grid container style={{ marginBottom: '1rem' }}>
              <Grid item xs>
                <Button component={Link} to="/">
                  Forgot Password?
                </Button>{' '}
              </Grid>
              <Grid item>
                {' '}
                <Button component={Link} to="/SignUp">
                  Sign Up
                </Button>{' '}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                {' '}
              </Grid>
              <Grid item style={{ color: 'red' }}>
                {' '}
                {`${errMsg}`}
              </Grid>
            </Grid>
          </div>
        </MyBox>
      </Container>
    </ThemeProvider>
  )
}
