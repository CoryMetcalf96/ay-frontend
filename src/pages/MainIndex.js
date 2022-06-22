import { Link } from "react-router-dom"

function MainIndex(props) {
  const anonymousPicture = "https://i.imgur.com/T3KsC9S.png"

  const loaded = () => {
    return (
      <div className="cards">
        {props.people.map((person) => (
          <div key={person._id}>
            {/* Check to see if the person is air nation to apply styling */}
            {(person.nation == "Air") || (person.nation == "Default") ?
              <div className="air-card">
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
              : null}

            {/* Check to see if the person is water nation to apply styling */}
            {(person.nation == "Water") ?
              <div className="water-card">
                <Link to={`/show/${person._id}`}>
                  {
                    person.picture
                      ? <img className="mainindex-water-pfp" src={person.picture} alt={person.name} />
                      : <img className="mainindex-water-pfp" src={anonymousPicture} alt="Anonymous Photo" />
                  }
                  <h2 className="mainindex-name">{person.name}</h2>
                </Link>
                {
                  person.quote
                    ? <h3 className="mainindex-quote">"{person.quote}"</h3>
                    : null
                }
              </div>
              : null}

            {/* Check to see if the person is fire nation to apply styling */}
            {(person.nation == "Fire") ?
              <div className="fire-card">
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
              : null}
                
            {/* Check to see if the person is earth nation to apply styling */}
            {(person.nation == "Earth") ?
              <div className="earth-card">
                <Link to={`/show/${person._id}`}>
                  {
                    person.picture
                      ? <img className="mainindex-earth-pfp" src={person.picture} alt={person.name} />
                      : <img className="mainindex-earth-pfp" src={anonymousPicture} alt="Anonymous Photo" />
                  }
                  <h2 className="mainindex-name">{person.name}</h2>
                </Link>
                {
                  person.quote
                    ? <h3 className="mainindex-quote">"{person.quote}"</h3>
                    : null
                }
              </div>
              : null}

              {/* Check to see if the person is an instructor to apply styling */}
            {(person.nation == "Instructor") ?
              <div className="instructor-card">
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
              : null}
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