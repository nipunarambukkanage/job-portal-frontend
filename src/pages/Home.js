import React from 'react';
import { Typography } from '@material-ui/core';

function Home() {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Job Portal
      </Typography>
      <Typography variant="body1" align="center">
        Explore job listings, manage categories, and more!
      </Typography>
    </div>
  );
}

export default Home;
