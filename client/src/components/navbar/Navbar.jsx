
export default function NavBar() {
  

  return (

<div className="container-fluid nav-bar bg-transparent">
<nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
  <a
    href="index.html"
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
      <a href="index.html" className="nav-item nav-link active">
        Home
      </a>
      <a href="About.jsx" className="nav-item nav-link">
        About
      </a>
      <a href="About.jsx" className="nav-item nav-link">
        Properties
      </a>
      <a href="contact.html" className="nav-item nav-link">
        Contact
      </a>
      <a href="About.jsx" className="nav-item nav-link">
        Login
      </a>
      <a href="About.jsx" className="nav-item nav-link">
        Register
      </a>
      <a href="About.jsx" className="nav-item nav-link">
        Logout
      </a>
    </div>
    <a href="" className="btn btn-primary px-3 d-none d-lg-flex">
      Add Property
    </a>
  </div>
</nav>
</div>


)
}