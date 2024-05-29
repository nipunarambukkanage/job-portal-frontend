import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import { JobItemActions } from './JobItemActions';

const useStyles = makeStyles({
  // Define styles for the component
  jobListContainer: {
    marginLeft: '275px', // TODO : This margin should be dynamic. You can get the state of sidebar open/close and set the margin accordingly
  },
  tableContainer: {
    marginTop: 20,
    overflowX: 'auto',
    //maxWidth: 'calc(100% - 240px)', //TODO : Set maxWidth dynamically by checking whether the sidebar is open or close
    //marginLeft: 0,
  },
  tableCell: {
    maxWidth: "50px", // Set maximum width for table cells
    //overflow: 'hidden',
    wordWrap: 'break-word',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    //textOverflow: 'ellipsis',
    //whiteSpace: 'nowrap',
  },
  actionCell: {
    paddingRight: '4px', // Add padding only to the right side
  },

});

function JobList({ jobs, onEdit, onDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.jobListContainer}> 
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Title</TableCell>
              <TableCell className={classes.tableCell}>ID</TableCell>
              <TableCell className={classes.tableCell}>Company</TableCell>
              <TableCell className={classes.tableCell}>Location</TableCell>
              <TableCell className={classes.tableCell}>Description</TableCell>
              <TableCell className={classes.tableCell}>Requirements</TableCell>
              <TableCell className={classes.tableCell}>Category</TableCell>
              <TableCell className={classes.tableCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell className={classes.tableCell}>{job?.title}</TableCell>
                <TableCell className={classes.tableCell}>{job?._id}</TableCell>
                <TableCell className={classes.tableCell}>{job?.company}</TableCell>
                <TableCell className={classes.tableCell}>{job?.location}</TableCell>
                <TableCell className={classes.tableCell}>{job?.description}</TableCell>
                <TableCell className={classes.tableCell}>{job?.requirements}</TableCell>
                <TableCell className={classes.tableCell}>{job?.category}</TableCell>
                <TableCell className={classes.tableCell}>
                  <JobItemActions job={job} onEdit={onEdit} onDelete={onDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default JobList;
