import React from 'react';
import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/jobs">
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        
      </List>
    </Drawer>
  );
}

export default Sidebar;
