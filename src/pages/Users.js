import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Paper, makeStyles } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers } from '../api/userApi';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Users() {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = await getAccessTokenSilently();
        const fetchedUsers = await getAllUsers(token);
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (isAuthenticated && user && user['http://your-app/roles'].includes('admin')) {
      fetchUsers();
    } else {
      setLoading(false);
      setError('Access denied. Only admins can view this page.');
    }
  }, [isAuthenticated, getAccessTokenSilently, user]);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Users
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" align="center" color="error">
          Error: {error}
        </Typography>
      ) : (
        <Paper className={classes.paper}>
          {/* <Users users={users} /> */}
          {users.map((user) => (
            <Typography key={user.id}>{user.name}</Typography>
          ))}
        </Paper>
      )}
    </div>
  );
}

export default Users;
