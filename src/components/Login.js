import * as React from 'react'
import TextField from '@mui/material/TextField'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { LockOpen } from '@mui/icons-material'

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

export default function Login() {
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
        <MyTextField
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <MyTextField
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <MyButton type="submit" fullWidth variant="contained">
          Sigh In
        </MyButton>
        <Grid container>
          <Grid item xs>
            {' '}
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            {' '}
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </MyBox>
    </Container>
  )
}
