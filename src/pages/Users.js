import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Paper, makeStyles } from '@material-ui/core';

import { getAllUsers } from '../api/userApi';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
        </Paper>
      )}
    </div>
  );
}

export default Users;
