import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../../../store/appContext";

// Components

export default function NavDashboard() {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()

  const handleLogout = () => {
    actions.logout()
    navigate("/")
  }

  return (
    <nav className="bg-white text-black sticky-top shadow">
      <div className="d-flex align-items-center container" style={{ height: "7vh" }}>

        <div className="me-auto fw-lighter">
          <Link to="/" className="text-decoration-none">
            <FontAwesomeIcon icon={faGhost} className="me-2" style={{height:'35px'}}/><span className="fw-bold">Template</span>
          </Link>
        </div>

        <div>
          <span className="mb-0 text-primary fw-normal text-decoration-underline" style={{cursor:'pointer'}} onClick={handleLogout}>Logout</span>
        </div>

      </div>
    </nav>
  );
};
