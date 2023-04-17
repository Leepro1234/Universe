import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '180px',
    paddingTop: '64px',
  },
})

const LeftMenu = ({ open, onClose }) => {
  const list = () => (
    <Box>
      <List>
        <ListItem component={Link} to="/Index">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Index" />
        </ListItem>
        <ListItem component={Link} to="/Contents">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contents" />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <StyledDrawer anchor="left" open={open} onClose={() => {}}>
      {list()}
    </StyledDrawer>
  )
}

export default LeftMenu
