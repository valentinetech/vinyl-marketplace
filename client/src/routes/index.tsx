import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from 'features/Auth/utils/RequireAuth';
import NotFound from 'common/layouts/NotFound/NotFound';
import Login from 'features/Auth/Login/Login';
import Register from 'features/Auth/Register/Register';
import Home from 'features/Home/Home';
import Profile from 'features/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Profile />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
