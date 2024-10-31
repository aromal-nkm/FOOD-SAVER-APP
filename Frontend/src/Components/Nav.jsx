import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Nav = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
  <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/* Optional Icon (like a menu icon) */}
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: 1.5,
        }}
      >
        FOOD SAVER
      </Typography>
      <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', color: '#ffffff', '&:hover': { backgroundColor: '#ff9800' } }}>
        HOME
      </Button>
      <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', color: '#ffffff', '&:hover': { backgroundColor: '#ff9800' } }}>
        DONOR
      </Button>
      <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', color: '#ffffff', '&:hover': { backgroundColor: '#ff9800' } }}>
        RECEIVER
      </Button>
      <Button color="inherit" sx={{ mx: 1, fontWeight: 'bold', color: '#ffffff', '&:hover': { backgroundColor: '#ff9800' } }}>
        CONTACT US
      </Button>
    </Toolbar>
  </AppBar>
</Box>

    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Nav