import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import { JobItemActions } from './JobItemActions';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  // Define styles for the component
  jobListContainerOpen: {
    marginLeft:  '190px', // Set margin dynamically based on sidebar state
    transition: 'margin-left 0.3s ease', // Smooth transition for the margin change
  },
  jobListContainerClosed: {
    marginLeft:  '100px', // Set margin dynamically based on sidebar state
    transition: 'margin-left 0.3s ease', // Smooth transition for the margin change
  },
  tableContainer: {
    marginTop: 20,
    overflowX: 'auto',
  },
  tableCell: {
    maxWidth: '50px', // Set maximum width for table cells
    wordWrap: 'break-word',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  actionCell: {
    paddingRight: '4px', // Add padding only to the right side
  },
}));

function JobList({ jobs, onEdit, onDelete }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  console.log('isSidebarOpen*****', isSidebarOpen);
  const classes = useStyles({ isSidebarOpen });

  return (
    <div className={isSidebarOpen ? classes.jobListContainerOpen : classes.jobListContainerClosed}> 
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
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
