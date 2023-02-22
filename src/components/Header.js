import * as React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const theme = {
  palette: {
    primary: {
      main: '#f9a825',
    },
    secondary: {
      main: '#ffcc80',
    },
  },
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontWeight: 700,
  fontSize: '16px',
  marginRight: theme.spacing(2),
  '&:hover': {
    color: 'white',
  },
}))

const Header = ({ open, toggleDrawer }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.palette.primary.main, zIndex: 1201 }}
        id="header"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Universe
          </Typography>
          <StyledButton variant="text">로그인</StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
