import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

function JobDetails({ job }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        {job.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Company: {job.company}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Location: {job.location}
      </Typography>
      {/* You can add more details here */}
    </div>
  );
}

export default JobDetails;
