import React, { useState } from 'react';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: 300,
    margin: 'auto',
  },
}));

function Login() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process login
      console.log('Login form submitted:', formData);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">Login</Typography>
      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        required
      />
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </form>
  );
}

export default Login;
