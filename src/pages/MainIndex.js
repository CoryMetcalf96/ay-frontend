import { Link } from "react-router-dom"
import Card from "../components/Card";

function MainIndex(props) {

  const loaded = () => {
    return props.people.map((person) => (
      <div key={person._id} className="person">
        <div className="card">
          <Link to={`/show/${person._id}`}>
            <img className="card-picture" src={person.picture} alt={person.name} />
            <h1 className="card-name">{person.name}</h1>
          </Link>
          <h3>{person.quote}</h3>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.people ? loaded() : loading();
}

export default MainIndex;

// Backburner:
// Find a way in to the nested array from database information OR change the schema.