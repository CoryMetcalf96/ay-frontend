import { Link } from 'react-router-dom';

function Navigation (props) {
    return (
        <div className="navigation">
            <Link to="/">
                Home
            </Link>
            <Link to="/mainindex">
                Explore
            </Link>
            <Link to="/new">
                Create New Profile
            </Link>
        </div>
    )
};

export default Navigation;
