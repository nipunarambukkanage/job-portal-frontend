import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress, Paper, makeStyles } from '@material-ui/core';

import { getJobById } from '../api/jobApi';
import JobDetails from '../components/job/JobDetails';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const fetchedJob = await getJobById(id);
        setJob(fetchedJob);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Job Details
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" align="center" color="error">
          Error: {error}
        </Typography>
      ) : (
        <Paper className={classes.paper}>
          <JobDetails job={job} />
        </Paper>
      )}
    </div>
  );
}

export default JobDetailsPage;
