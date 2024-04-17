import React from 'react';
import { Button } from '@material-ui/core';

function Logout({ onLogout }) {
  const handleLogout = () => {
    // Perform logout actions
    onLogout();
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
