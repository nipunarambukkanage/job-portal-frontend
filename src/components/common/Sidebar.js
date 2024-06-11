import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, List, ListItem, ListItemText, IconButton, styled, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, HomeRounded, WorkRounded, CategoryRounded, GroupRounded } from '@material-ui/icons';
import { toggleSidebar } from '../../redux/actions/sidebarActions';

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

const CustomDrawer = styled(({ open, ...other }) => <Drawer {...other} />)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    width: open ? 170 : 80,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
}));

const ListItemContent = styled('div')(({ theme }) => ({
  height: 40,
  paddingLeft : '10px',
  display: 'flex',
  alignItems: 'center',
}));

function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.sidebar.isOpen);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <CustomDrawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <CustomIconButton onClick={handleToggle}>
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </CustomIconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemContent>
            {isOpen ? <><HomeRounded /><ListItemText primary="Home" /></> : <HomeRounded />}
          </ListItemContent>
        </ListItem>
        <ListItem button component={Link} to="/jobs">
          <ListItemContent>
            {isOpen ? <><WorkRounded /><ListItemText primary="Jobs" /></> : <WorkRounded />}
          </ListItemContent>
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemContent>
            {isOpen ? <><CategoryRounded /><ListItemText primary="Categories" /></> : <CategoryRounded />}
          </ListItemContent>
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemContent>
            {isOpen ? <><GroupRounded /><ListItemText primary="Users" /></> : <GroupRounded />}
          </ListItemContent>
        </ListItem>
      </List>
      <Divider />
    </CustomDrawer>
  );
}

export default Sidebar;
