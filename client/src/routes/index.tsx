import NotFound from 'common/layouts/NotFound';
import AllAuctionsPage from 'features/AllAuctionsPage';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import RequireAuth from 'features/Auth/utils/RequireAuth';
import Dashboard from 'features/Dashboard';
import Home from 'features/Home/Home';
import Profile from 'features/Profile';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/all-auctions" element={<AllAuctionsPage />} />
				{/* Protected Routes */}
				<Route element={<RequireAuth />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
