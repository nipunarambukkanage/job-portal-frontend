import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetailsPage from './pages/JobDetailsPage';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Login from './pages/Login';
import store from './redux/store';

// Higher-order component to wrap pages with layout
function withLayout(Component) {
  return function WithLayout(props) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Component {...props} />
      </>
    );
  };
}

// Wrap pages with layout
const HomeWithLayout = withLayout(Home);
const JobsWithLayout = withLayout(Jobs);
const JobDetailsPageWithLayout = withLayout(JobDetailsPage);
const CategoriesWithLayout = withLayout(Categories);
const UsersWithLayout = withLayout(Users);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeWithLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<JobsWithLayout />} />
            <Route path="/jobs/:id" element={<JobDetailsPageWithLayout />} />
            <Route path="/categories" element={<CategoriesWithLayout />} />
            <Route path="/users" element={<UsersWithLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;