import React from 'react';
import { TextField, Typography, Button, Box } from '@material-ui/core';
import backgroundImage from '../assets/images/login.jpg'; 

const backgroundStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formContainerStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  borderRadius: '8px',
};

function Login() {
  return (
    <div style={backgroundStyles}>
      <div style={formContainerStyles}>
        <Typography variant="h4" align="center" gutterBottom>
          Login to browse jobs!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Explore job listings, manage categories, and more!
        </Typography>
        <Box mt={2}>
          <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" />
        </Box>
        <Box mt={2}>
          <TextField fullWidth id="outlined-basic" label="Password" type="password" variant="outlined" />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
