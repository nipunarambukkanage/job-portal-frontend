import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import JobItem from './JobItem';

const useStyles = makeStyles({
  tableContainer: {
    marginTop: 20,
  },
});

function JobList({ jobs, onEdit, onDelete }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <JobItem key={job._id} job={job} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default JobList;
