import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Container } from '@material-ui/core';

import theme from './theme';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetailsPage from './pages/JobDetailsPage';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset browser styles for consistent layout */}
      <Router>
        <Container maxWidth="false"> {/* Disable container max width for full-screen layout */}
          <Grid container spacing={2}>
            <Grid item xs={12}> {/* Navbar spans all columns */}
              <Navbar />
            </Grid>
            <Grid container spacing={2}> {/* Nested grid for sidebar and content */}
              <Grid item xs={2}> {/* Sidebar with fixed width */}
                <Sidebar />
              </Grid>
              <Grid item xs={10}> {/* Content area takes remaining space */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/jobs/:id" element={<JobDetailsPage />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/users" element={<Users />} />
                </Routes>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
