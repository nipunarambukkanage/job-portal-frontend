import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
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
  const { loginWithRedirect } = useAuth0();

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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
