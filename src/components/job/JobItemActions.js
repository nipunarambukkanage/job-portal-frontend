import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const listItemStyle = {
  listStyleType: 'none', // Set list style type to none to remove bullets
  left: '-16px',
};

const listItemSecondaryStyle = {
  listStyleType: 'none', // Set list style type to none to remove bullets
  left: '-16px !important',
};

function JobItem({ job, onEdit, onDelete }) {
  const { _id, title, company, location } = job;

  return (
    <div style={listItemStyle}>
    <ListItem style={{ marginLeft: "-15px" }}>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => onEdit(_id)}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(_id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText primary={title} />
      <ListItemText primary={company} />
      <ListItemText primary={location} />
    </ListItem>
    </div>
  );
}

function JobItemActions({ job, onEdit, onDelete }) {
  const { _id, title, company, location } = job;

  return (
    <div style={listItemStyle}>
    <ListItem dense={true} style={listItemStyle}>
      <ListItemSecondaryAction style={listItemSecondaryStyle}>
        <IconButton edge="end" aria-label="edit" onClick={() => onEdit(_id)}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(_id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </div>
  );
}

export { JobItem, JobItemActions };
