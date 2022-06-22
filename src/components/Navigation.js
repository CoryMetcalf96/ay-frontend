// Imports
import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";
const logo = "https://i.imgur.com/H6vWti0.png"

function Navigation(props) {
  // Photo styles
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  };

  // Return function on page-load
  return (
    <div className="navigation">
      {/* Main page links */}
      <Link to="/">HOME</Link>
      <Link to="/mainindex">EXPLORE</Link>
      <Link to="/new">NEW PROFILE</Link>

      {/* Set-up for logged in and logged out users */}
      <ul className="log">
        {props.user ? (
          <>
            <li className="welcome-li">
              Welcome, {props.user.displayName}
              <img
                style={photoStyles}
                src={props.user.photoURL}
              />
            </li>
            <li className="logbtn" onClick={logout}>
              LOGOUT
            </li>
          </>
        ) : (
          <li className="logbtn" onClick={login}>
            LOG IN
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;