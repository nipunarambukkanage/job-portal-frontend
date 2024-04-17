import React, { useState, useEffect } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

function JobForm({ onSubmit, initialValues }) {
  const classes = useStyles();
  const [job, setJob] = useState(initialValues || { title: '', company: '', location: '' });

  useEffect(() => {
    if (initialValues) {
      setJob(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Job Title"
        value={job.title}
        onChange={handleChange}
        required
      />
      <TextField
        name="company"
        label="Company"
        value={job.company}
        onChange={handleChange}
        required
      />
      <TextField
        name="location"
        label="Location"
        value={job.location}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default JobForm;
