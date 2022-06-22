import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

function Navigation(props) {
  const logo = "https://i.imgur.com/H6vWti0.png"

  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  };

  return (
    <div className="navigation">
      <Link to="/">HOME</Link>
      <Link to="/mainindex">EXPLORE</Link>
      <Link to="/new">NEW PROFILE</Link>

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