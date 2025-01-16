import { Suspense } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import DashboardRoutes from './Dashboard';

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
              <h1>Register</h1>
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
              <h1>Login</h1>
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
