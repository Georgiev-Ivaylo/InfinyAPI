import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faLaptop } from "@fortawesome/free-solid-svg-icons";

function MainNavigationIndex() {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-user-edit me-2"></i>InfinyAPI
          </h3>
        </a>
        <div className="navbar-nav w-100">
          <NavLink to="" relative="path" className="nav-item nav-link">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
            Home
          </NavLink>
          <NavLink to="networks" relative="path" className="nav-item nav-link">
            <FontAwesomeIcon icon={faLaptop} className="me-2" />
            Networks
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigationIndex;
