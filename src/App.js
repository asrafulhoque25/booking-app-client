import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Dashboard from './admin/dashboard/Dashboard';
import Hotels from "./admin/hotels/Hotels";
import Rooms from "./admin/rooms/Rooms";
import UsersTable from "./admin/users/UsersTable";
import './app.scss';
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import AdminRoute from "./utils/AdminRoute";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";


function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-right" />
      <Routes>
        <Route
          path="admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        >
          <Route path="users" element={<UsersTable />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="rooms" element={<Rooms />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/hotels" element={<List />} />
        <Route
          path="/hotels/:id"
          element={
            <PrivateRoute>
              <Hotel />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
