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
  jobTitle: {
    padding: theme.spacing(2), // Adding padding to jobTitle class
  },
  jobsTable: {
    marginLeft: theme.spacing(2), // Adding dynamic left margin to jobsTable class
  },
  errorJobs: {
    padding: theme.spacing(2), // Adding padding to errorJobs class
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
      <div className={classes.jobTitle}> 
        <Typography variant="h4" align="center" gutterBottom>
          Job Details
        </Typography>
      </div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <div className={classes.errorJobs}> 
          <Typography variant="body1" align="center" color="error">
            Error: {error}
          </Typography>
        </div>
      ) : (
        <div className={classes.jobsTable}> 
          <Paper className={classes.paper}>
            <JobDetails job={job} />
          </Paper>
        </div>
      )}
    </div>
  );
}

export default JobDetailsPage;
