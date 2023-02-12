import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { LockOpen, SetMeal } from '@mui/icons-material'
import { fnLogin } from '../store/module/UserStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//#region

const MyButton = styled(Button)({
  marginTop: 10,
  marginBottom: 8,
})
const MyAvatar = styled(Avatar)({
  backgroundColor: 'green',
})
const MyBox = styled(Box)({
  marginTop: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
const MyTextField = styled(TextField)({
  marginTop: 15,
})

//#endregion
const headers = { 'Content-Type': 'application/json' }
export default function Login() {
  //const userState = useSelector((state) => state.userState.data)
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {}, [dispatch])

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
        dispatch(fnLogin(res.token))
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
    <Container maxWidth="xs">
      <MyBox>
        <MyAvatar>
          {' '}
          <LockOpen />
        </MyAvatar>
        <Typography component="h1" variant="h5">
          sign in
        </Typography>
        <div>
          <Button component={Link} to="/Second">
            Router Link
          </Button>{' '}
        </div>
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
        <MyButton type="submit" fullWidth variant="contained" onClick={onClick}>
          로그인
        </MyButton>
        <Grid container style={{ marginBottom: '1rem' }}>
          <Grid item xs>
            {' '}
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            {' '}
            <Link>Sign Up</Link>
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
      </MyBox>
    </Container>
  )
}
