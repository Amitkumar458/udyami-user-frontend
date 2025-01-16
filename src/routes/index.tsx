import { Suspense } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import DashboardRoutes from './Dashboard';
import { Register } from '../pages/Register';
import Login from '../pages/Login';

export const Router = () => {
  const isTokenExist = false;
  const navigateTo = ():string => {
    return "/dashboard"
  }

  return (
    <Routes>
      <Route
          path="/"
          element={<Navigate to={isTokenExist ? navigateTo() : "/register"} />}
      />

      {!isTokenExist && (
        <Route
          key="register"
          path="/register"
          element={
            <Suspense fallback>
              <Register/>
            </Suspense>
          }
        />
      )}

      {!isTokenExist && (
        <Route
          key="login"
          path="/login"
          element={
            <Suspense fallback>
              <Login/>
            </Suspense>
          }
        />
      )}

      {isTokenExist && (
        <Route
          key="dashboard"
          path="/dashboard"
          element={
            <Suspense fallback>
              <DashboardRoutes/>
            </Suspense>
          }
        />
      )}

      <Route path="/forgot-password" element={<>forgot-password</>} />
    </Routes>
  )
};
