import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
	const userToken = sessionStorage.getItem('userToken');
	const location = useLocation();

	return userToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};
export default RequireAuth;
