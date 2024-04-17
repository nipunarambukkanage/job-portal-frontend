import React, { useState, useEffect } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

function CategoryForm({ onSubmit, initialValues }) {
  const classes = useStyles();
  const [category, setCategory] = useState(initialValues || { name: '' });

  useEffect(() => {
    if (initialValues) {
      setCategory(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(category);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Category Name"
        value={category.name}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default CategoryForm;
