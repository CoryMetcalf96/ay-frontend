import { Link } from "react-router-dom"

function MainIndex(props) {
  const anonymousPicture = "https://i.imgur.com/T3KsC9S.png"

  const loaded = () => {
    return (
      <div className="cards">
        {props.people.map((person) => (
          <div key={person._id}>
            <div className="card">
              <Link to={`/show/${person._id}`}>
                {
                  person.picture
                    ? <img className="mainindex-pfp" src={person.picture} alt={person.name} />
                    : <img className="mainindex-pfp" src={anonymousPicture} alt="Anonymous Photo" />
                }
                <h2 className="mainindex-name">{person.name}</h2>
              </Link>
              {
                person.quote
                  ? <h3 className="mainindex-quote">"{person.quote}"</h3>
                  : null
              }
            </div>
          </div>
        ))
        }</div>);
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.people ? loaded() : loading();
}

export default MainIndex;