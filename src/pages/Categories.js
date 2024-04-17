import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Paper, makeStyles } from '@material-ui/core';
import { getAllCategories } from '../api/categoryApi';
import CategoryList from '../components/category/CategoryList';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Categories
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" align="center" color="error">
          Error: {error}
        </Typography>
      ) : (
        <Paper className={classes.paper}>
          <CategoryList categories={categories} />
        </Paper>
      )}
    </div>
  );
}

export default Categories;
