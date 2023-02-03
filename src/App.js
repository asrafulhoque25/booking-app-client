import './app.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
      <BrowserRouter>
          <ToastContainer theme="colored" position="top-right" />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/signup" element={<Login />} />
             <Route path="/hotels" element={<List />} />
             <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
