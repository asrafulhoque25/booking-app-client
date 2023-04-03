import "./navbar.scss"
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom"
import useAuth from "../../hooks/AuthContext";
const Navbar = () => {

  const { user, dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

  return (
      <div className="navbar">
          <div className="navContainer">
              <Link to='/'>
                  <span className="logo">
                      <img src={logo} alt="" />
                  </span>
              </Link>
              <div className="navItems">
                  {!user?.email && (
                      <>
                          <Link to="/registration" className="navButton text-decoration-none">
                              Register
                          </Link>
                          <Link to="/signin" className="navButton text-decoration-none">
                              Login
                          </Link>
                      </>
                  )}

                  {user?.email && (
                      <>
                          <Link className="text-success text-decoration-none fw-bold">{user?.name}</Link>
                          {user?.email && user?.isAdmin &&  <Link to="/admin/dashboard" className="navButton text-decoration-none">
                              Admin Dashboard
                          </Link>}
                          <Link className="navButton text-decoration-none" onClick={handleLogout}>
                              Logout
                          </Link>
                      </>
                  )}
              </div>
          </div>
      </div>
  );
}

export default Navbar