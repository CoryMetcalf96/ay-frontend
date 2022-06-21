import { Link } from "react-router-dom"

function MainIndex(props) {
  const anonymousPicture = "https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"

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