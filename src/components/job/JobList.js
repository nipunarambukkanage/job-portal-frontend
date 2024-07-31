import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField, IconButton, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { JobItemActions } from './JobItemActions';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import jobApi from '../../api/jobApi';
import EditJobModal from './EditJobModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const useStyles = makeStyles((theme) => ({
  jobListContainerOpen: {
    marginLeft: '190px',
    transition: 'margin-left 0.3s ease',
  },
  jobListContainerClosed: {
    marginLeft: '100px',
    transition: 'margin-left 0.3s ease',
  },
  tableContainer: {
    marginTop: 20,
    overflowX: 'auto',
  },
  tableCell: {
    maxWidth: '50px',
    wordWrap: 'break-word',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionCell: {
    paddingRight: '4px',
  },
  search: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center',
  },
}));

function JobList() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const classes = useStyles({ isSidebarOpen });

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobToDelete, setJobToDelete] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, [page, rowsPerPage, order, orderBy, search]);

  const onEdit = (id) => {
    // Find the job by ID and set it as selected
    const job = jobs.find(job => job._id === id);
    setSelectedJob(job);
  };

  const onDelete = (id) => {
    // Handle job deletion
    // You might want to call an API to delete the job here
  };

  const handleDelete = (id) => {
    const job = jobs.find(job => job._id === id);
    setJobToDelete(job);
  };

  const handleConfirmDelete = (id) => {
    // Logic to delete the job
    console.log('Job deleted:', id);
    setJobToDelete(null);
  };

  const handleEdit = (id) => {
    const job = jobs.find(job => job._id === id);
    setSelectedJob(job);
  };

  const handleSave = (id, updatedJob) => {
    // Logic to save the updated job details
    console.log('Updated job:', id, updatedJob);
  };

  const handleClose = () => {
    setSelectedJob(null);
    setJobToDelete(null);
  };

  const handleModalClose = () => {
    setSelectedJob(null);
  };

  const fetchJobs = async () => {
    try {
      const response = await jobApi.get('/', {
        params: {
          page,
          limit: rowsPerPage,
          sortBy: orderBy,
          order,
          search,
        },
      });

      if (Array.isArray(response?.data?.jobs)) {
        setJobs(response?.data?.jobs);
        setTotal(response.data.total);
      } else {
        console.error('Response data is not an array:', response.data);
        setJobs([]);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
      setJobs([]);
    }
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={isSidebarOpen ? classes.jobListContainerOpen : classes.jobListContainerClosed}>
      {selectedJob && (
        <EditJobModal
          job={selectedJob}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
      {jobToDelete && (
        <ConfirmDeleteModal
          job={jobToDelete}
          onClose={handleClose}
          onConfirm={handleConfirmDelete}
        />
      )}
      <div className={classes.search}>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          size="small"
        />
        <IconButton onClick={fetchJobs}>
          <SearchIcon />
        </IconButton>
      </div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <TableSortLabel
                  active={orderBy === 'title'}
                  direction={orderBy === 'title' ? order : 'asc'}
                  onClick={() => handleRequestSort('title')}
                >
                  Title
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <TableSortLabel
                  active={orderBy === 'company'}
                  direction={orderBy === 'company' ? order : 'asc'}
                  onClick={() => handleRequestSort('company')}
                >
                  Company
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.tableCell}>Location</TableCell>
              <TableCell className={classes.tableCell}>Description</TableCell>
              <TableCell className={classes.tableCell}>Requirements</TableCell>
              <TableCell className={classes.tableCell}>Category</TableCell>
              <TableCell className={classes.tableCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell className={classes.tableCell}>{job?.title}</TableCell>
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
      <Pagination
        count={Math.ceil(total / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
}

export default JobList;
