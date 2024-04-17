import React from 'react';
import { List, Typography, makeStyles } from '@material-ui/core';
import CategoryItem from './CategoryItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function CategoryList({ categories, onEdit, onDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>
      <List>
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </List>
    </div>
  );
}

export default CategoryList;
