import { useAppSelector } from 'app/store';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const RequireAuth = () => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
export default RequireAuth;
