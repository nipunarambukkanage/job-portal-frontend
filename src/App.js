import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import { Auth0Provider } from '@auth0/auth0-react';
import ProtectedRoute from './components/common/ProtectedRoute'; 

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

const HomeWithLayout = withLayout(Home);
const JobsWithLayout = withLayout(Jobs);
const JobDetailsPageWithLayout = withLayout(JobDetailsPage);
const CategoriesWithLayout = withLayout(Categories);
const UsersWithLayout = withLayout(Users);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<HomeWithLayout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/jobs" element={<JobsWithLayout />} />
              <Route path="/jobs/:id" element={<JobDetailsPageWithLayout />} />
              <Route path="/categories" element={<CategoriesWithLayout />} />
              <Route
                path="/users"
                element={<ProtectedRoute component={UsersWithLayout} />}
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
