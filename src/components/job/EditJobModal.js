// EditJobModal.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';

const EditJobModal = ({ job, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: job.title || '',
    company: job.company || '',
    location: job.location || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(job._id, formData);
    onClose();
  };

  return (
    <Dialog open={Boolean(job)} onClose={onClose} aria-labelledby="edit-job-dialog-title">
      <DialogTitle id="edit-job-dialog-title">Edit Job</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Job Title"
          type="text"
          fullWidth
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="company"
          label="Company"
          type="text"
          fullWidth
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="location"
          label="Location"
          type="text"
          fullWidth
          value={formData.location}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditJobModal;
