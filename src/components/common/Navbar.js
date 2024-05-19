import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/jobs" color="inherit">Jobs</Button>
        <Button component={Link} to="/categories" color="inherit">Categories</Button>
        <Button component={Link} to="/users" color="inherit">Users</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
