import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, styled, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { CategoryOutlined, CategoryRounded, ChevronLeft, ChevronRight, FolderRounded, GroupRounded, HomeRounded, VerifiedUserRounded, WorkRounded } from '@material-ui/icons';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const CustomDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      width: open ? 240 : 80,
    },
  }));

  return (
    <CustomDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <CustomIconButton onClick={handleToggle}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </CustomIconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          {open ? (
            <>
              <ListItemText primary="Home" />
            </>
          ) : (
            <>
              <HomeRounded />
            </>
          )}
        </ListItem>
        <ListItem button component={Link} to="/jobs">
          {open ? (
            <>
              <ListItemText primary="Jobs" />
            </>
          ) : (
            <>
              <WorkRounded />
            </>
          )}
        </ListItem>
        <ListItem button component={Link} to="/categories">
          {open ? (
            <>
              <ListItemText primary="Categories" />
            </>
          ) : (
            <>
              <CategoryRounded />
            </>
          )}
        </ListItem>
        <ListItem button component={Link} to="/users">
          {open ? (
            <>
              <ListItemText primary="Users" />
            </>
          ) : (
            <>
              <GroupRounded />
            </>
          )}
        </ListItem>
      </List>
      <Divider />
    </CustomDrawer>
  );
}

export default Sidebar;