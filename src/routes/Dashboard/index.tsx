import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {
  
  // here first we will call api of dashboard routes and then define routes based on data


  return (
    <Routes>
        <Route path="/" element={<>this is dashboard</>} />
    </Routes>
  )
}

export default DashboardRoutes;