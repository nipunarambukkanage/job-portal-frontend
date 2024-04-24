import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import { getAllJobs } from '../api/jobApi';
import JobList from '../components/job/JobList';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchedJobs = await getAllJobs();
        setJobs(fetchedJobs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Jobs
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" align="center" color="error">
          Error: {error}
        </Typography>
      ) : jobs.length === 0 ? (
        <Typography variant="body1" align="center">
          No jobs available
        </Typography>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
}

export default Jobs;
