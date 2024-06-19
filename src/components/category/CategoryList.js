import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import { CategoryItemActions } from './CategoryItemActions';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  // Define styles for the component
  categoryListContainerOpen: {
    marginLeft:  '190px', // Set margin dynamically based on sidebar state
    transition: 'margin-left 0.3s ease', // Smooth transition for the margin change
  },
  categoryListContainerClosed: {
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

function CategoryList({ categories, onEdit, onDelete }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const classes = useStyles({ isSidebarOpen });

  return (
    <div className={isSidebarOpen ? classes.categoryListContainerOpen : classes.categoryListContainerClosed}> 
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Category Name</TableCell>
              <TableCell className={classes.tableCell}>ID</TableCell>
              <TableCell className={classes.tableCell}>Created By</TableCell>
              {/* <TableCell className={classes.tableCell}>Location</TableCell>
              <TableCell className={classes.tableCell}>Description</TableCell>
              <TableCell className={classes.tableCell}>Requirements</TableCell>
              <TableCell className={classes.tableCell}>Category</TableCell> */}
              <TableCell className={classes.tableCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell className={classes.tableCell}>{category?.name}</TableCell>
                <TableCell className={classes.tableCell}>{category?._id}</TableCell>
                <TableCell className={classes.tableCell}>{category?.created_by}</TableCell>
                {/* <TableCell className={classes.tableCell}>{category?.location}</TableCell>
                <TableCell className={classes.tableCell}>{category?.description}</TableCell>
                <TableCell className={classes.tableCell}>{category?.requirements}</TableCell>
                <TableCell className={classes.tableCell}>{category?.category}</TableCell> */}
                <TableCell className={classes.tableCell}>
                  <CategoryItemActions category={category} onEdit={onEdit} onDelete={onDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CategoryList;
