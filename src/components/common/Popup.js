import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

function Popup({ title, open, onClose, children, actions }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.handler} color={action.color}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default Popup;
