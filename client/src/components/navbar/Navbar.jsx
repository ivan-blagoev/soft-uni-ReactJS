import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function NavBar() {
  
  const {
    isAuthenticated,
    username,
} = useContext(AuthContext);


  return (

<div className="container-fluid nav-bar bg-transparent">
<nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
  <a
    href="/"
    className="navbar-brand d-flex align-items-center text-center"
  >
    <div className="icon p-2 me-2">
      <img
        className="img-fluid"
        src="img/icon-deal.png"
        alt="Icon"
        style={{ width: 30, height: 30 }}
      />
    </div>
    <h1 className="m-0 text-primary">iEstate</h1>
  </a>
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto">
      <Link to="/" className="nav-item nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-item nav-link">
        About
      </Link>
      <Link to="/properties" className="nav-item nav-link">
        Properties
      </Link>
      <Link to="/contacts" className="nav-item nav-link">
        Contact
      </Link>

      {!isAuthenticated && (
      <Link to="/login" className="nav-item nav-link">
        Login
      </Link>)}

      {!isAuthenticated && (
      <Link to="/register" className="nav-item nav-link">
        Register
      </Link>)}

      {isAuthenticated && (
      <Link to="/logout" className="nav-item nav-link">
        Logout
      </Link>)}

    </div>

    {isAuthenticated && (
    <Link to="/properties/create" className="btn btn-primary px-3 d-none d-lg-flex">
      Add Property
    </Link>)}

  </div>
</nav>
</div>


)
}