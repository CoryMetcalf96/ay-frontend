import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

function Navigation(props) {
    const photoStyles = {
        borderRadius: '50%',
        height: '2.5rem',
        margin: '0 1rem'
    };
    
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/mainindex">Explore</Link>
      <Link to="/new">Create New Profile</Link>

      <ul className="log">
        {props.user ? (
          <>
            <li>
              Welcome, {props.user.displayName}
              <img 
              style={photoStyles}
              src={props.user.photoURL}  
              />
            </li>
            <li className="logbtn" onClick={logout}>
              Logout
            </li>
          </>
        ) : (
          <li className="logbtn" onClick={login}>
            Login
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
