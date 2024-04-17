import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetailsPage from './pages/JobDetailsPage';
import Categories from './pages/Categories';
import Users from './pages/Users';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar /> 
        <Sidebar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/:id" component={JobDetailsPage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/users" component={Users} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
