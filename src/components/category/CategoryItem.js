import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

function CategoryItem({ category, onEdit, onDelete }) {
  const { _id, name } = category;

  return (
    <ListItem>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => onEdit(_id)}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(_id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default CategoryItem;
