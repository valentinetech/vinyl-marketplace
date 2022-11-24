// import { useAppSelector } from 'app/store';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const RequireAuth = () => {
	const userToken = localStorage.getItem('userToken');
	const location = useLocation();

	return userToken ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
export default RequireAuth;
