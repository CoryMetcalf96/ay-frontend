// Imports
import { Link } from "react-router-dom";
const anonymousPicture = "https://i.imgur.com/T3KsC9S.png";

function Show(props) {
  // Pull ID from URL to show correct user profile
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);

  // Function for deleting a profile
  const removePerson = () => {
    props.deletePeople(person._id);
    props.history.push("/mainindex");
  }

  // Return function on page-load
  return (
    <div>
      {/* Loade profile based on air nation or default nation */}
      {(person.nation == "Air") || (person.nation == "Default") ?
        <div className="air-person">
          <div className="air-name-and-photo">
            <h1 className="show-name"> {person.name} </h1>
            {
              person.picture
                ? <img className="show-picture" src={person.picture} alt={person.name} />
                : <img className="show-picture" src={anonymousPicture} alt="Anonymous Photo" />

            }
            <br /> <br />
            {
              person.linkedin
                ? <a href={person.linkedin} ><img className="show-linkedin" src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" href={person.linkedin} alt="LinkedIn" /></a>
                : null
            }
            {
              person.github
                ? <a href={person.github}><img className="show-github" src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png" alt="GitHub" /></a>
                : null
            }

            {
              person.instagram
                ? <a href={person.instagram}><img className="show-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
                : null
            }
          </div>
          <div className="air-personal-information">

            {
              person.portfolio
                ? <a className="show-portfolio" href={person.portfolio}>Portfolio</a>
                : null
            }

            {
              person.location
                ? <h3><strong>Location: </strong>{person.location}</h3>
                : null
            }

            {
              person.quote
                ? <h3>Class Quote: {person.quote}</h3>
                : null
            }

            {
              person.nation
                ? <h3>Avatar Nation: {person.nation}</h3>
                : null
            }
            <h2>Gaming Links:</h2>
            {
              person.steam
                ? <h3>Steam: {person.steam}</h3>
                : null
            }

            {
              person.xbox
                ? <h3>Xbox: {person.xbox}</h3>
                : null
            }

            {
              person.sonypsn
                ? <h3>PSN: {person.sonypsn}</h3>
                : null
            }

            {
              person.nintendo
                ? <h3>Nintendo: {person.nintendo}</h3>
                : null
            }
            <h2>Favorites:</h2>
            {
              person.favbook
                ? <h3>Favorite Book: '{person.favbook}'</h3>
                : null
            }

            {
              person.favmovie
                ? <h3>Favorite Movie: '{person.favmovie}'</h3>
                : null
            }

            {
              person.favgame
                ? <h3>Favorite Game: '{person.favgame}'</h3>
                : null
            }
            <Link to={`/edit/${person._id}`}><button className="air-show-edit">Edit Profile</button></Link>
            <br />
            <button className="air-show-delete" onClick={removePerson}>
              Delete Profile
            </button>
          </div>
        </div>
        : null}

      {/* Load profile based on fire nation styling */}
      {(person.nation == "Fire") ?
        <div className="fire-person">
          <div className="fire-name-and-photo">
            <h1 className="show-name"> {person.name} </h1>
            {
              person.picture
                ? <img className="show-picture" src={person.picture} alt={person.name} />
                : <img className="show-picture" src={anonymousPicture} alt="Anonymous Photo" />

            }
            <br /> <br />
            {
              person.linkedin
                ? <a href={person.linkedin} ><img className="show-linkedin" src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" href={person.linkedin} alt="LinkedIn" /></a>
                : null
            }
            {
              person.github
                ? <a href={person.github}><img className="show-github" src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png" alt="GitHub" /></a>
                : null
            }

            {
              person.instagram
                ? <a href={person.instagram}><img className="show-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
                : null
            }
          </div>
          <div className="fire-personal-information">

            {
              person.portfolio
                ? <a className="show-portfolio" href={person.portfolio}>Portfolio</a>
                : null
            }

            {
              person.location
                ? <h3><strong>Location: </strong>{person.location}</h3>
                : null
            }

            {
              person.quote
                ? <h3>Class Quote: {person.quote}</h3>
                : null
            }

            {
              person.nation
                ? <h3>Avatar Nation: {person.nation}</h3>
                : null
            }
            <h2>Gaming Links:</h2>
            {
              person.steam
                ? <h3>Steam: {person.steam}</h3>
                : null
            }

            {
              person.xbox
                ? <h3>Xbox: {person.xbox}</h3>
                : null
            }

            {
              person.sonypsn
                ? <h3>PSN: {person.sonypsn}</h3>
                : null
            }

            {
              person.nintendo
                ? <h3>Nintendo: {person.nintendo}</h3>
                : null
            }
            <h2>Favorites:</h2>
            {
              person.favbook
                ? <h3>Favorite Book: '{person.favbook}'</h3>
                : null
            }

            {
              person.favmovie
                ? <h3>Favorite Movie: '{person.favmovie}'</h3>
                : null
            }

            {
              person.favgame
                ? <h3>Favorite Game: '{person.favgame}'</h3>
                : null
            }
            <Link to={`/edit/${person._id}`}><button className="fire-show-edit">Edit Profile</button></Link>
            <br />
            <button className="fire-show-delete" onClick={removePerson}>
              Delete Profile
            </button>
          </div>
        </div>
        : null}

      {/* Load nation based on water nation styling */}
      {(person.nation == "Water") ?
        <div className="water-person">
          <div className="water-name-and-photo">
            <h1 className="show-name"> {person.name} </h1>
            {
              person.picture
                ? <img className="show-picture" src={person.picture} alt={person.name} />
                : <img className="show-picture" src={anonymousPicture} alt="Anonymous Photo" />

            }
            <br /> <br />
            {
              person.linkedin
                ? <a href={person.linkedin} ><img className="show-linkedin" src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" href={person.linkedin} alt="LinkedIn" /></a>
                : null
            }
            {
              person.github
                ? <a href={person.github}><img className="show-github" src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png" alt="GitHub" /></a>
                : null
            }

            {
              person.instagram
                ? <a href={person.instagram}><img className="show-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
                : null
            }
          </div>
          <div className="water-personal-information">

            {
              person.portfolio
                ? <a className="show-portfolio" href={person.portfolio}>Portfolio</a>
                : null
            }

            {
              person.location
                ? <h3><strong>Location: </strong>{person.location}</h3>
                : null
            }

            {
              person.quote
                ? <h3>Class Quote: {person.quote}</h3>
                : null
            }

            {
              person.nation
                ? <h3>Avatar Nation: {person.nation}</h3>
                : null
            }
            <h2>Gaming Links:</h2>
            {
              person.steam
                ? <h3>Steam: {person.steam}</h3>
                : null
            }

            {
              person.xbox
                ? <h3>Xbox: {person.xbox}</h3>
                : null
            }

            {
              person.sonypsn
                ? <h3>PSN: {person.sonypsn}</h3>
                : null
            }

            {
              person.nintendo
                ? <h3>Nintendo: {person.nintendo}</h3>
                : null
            }
            <h2>Favorites:</h2>
            {
              person.favbook
                ? <h3>Favorite Book: '{person.favbook}'</h3>
                : null
            }

            {
              person.favmovie
                ? <h3>Favorite Movie: '{person.favmovie}'</h3>
                : null
            }

            {
              person.favgame
                ? <h3>Favorite Game: '{person.favgame}'</h3>
                : null
            }
            <Link to={`/edit/${person._id}`}><button className="water-show-edit">Edit Profile</button></Link>
            <br />
            <button className="water-show-delete" onClick={removePerson}>
              Delete Profile
            </button>
          </div>
        </div>
        : null}

      {/* Load nation based on earth nation styling */}
      {(person.nation == "Earth") ?
        <div className="earth-person">
          <div className="earth-name-and-photo">
            <h1 className="show-name"> {person.name} </h1>
            {
              person.picture
                ? <img className="show-picture" src={person.picture} alt={person.name} />
                : <img className="show-picture" src={anonymousPicture} alt="Anonymous Photo" />

            }
            <br /> <br />
            {
              person.linkedin
                ? <a href={person.linkedin} ><img className="show-linkedin" src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" href={person.linkedin} alt="LinkedIn" /></a>
                : null
            }
            {
              person.github
                ? <a href={person.github}><img className="show-github" src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png" alt="GitHub" /></a>
                : null
            }

            {
              person.instagram
                ? <a href={person.instagram}><img className="show-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
                : null
            }
          </div>
          <div className="earth-personal-information">

            {
              person.portfolio
                ? <a className="show-portfolio" href={person.portfolio}>Portfolio</a>
                : null
            }

            {
              person.location
                ? <h3><strong>Location: </strong>{person.location}</h3>
                : null
            }

            {
              person.quote
                ? <h3>Class Quote: {person.quote}</h3>
                : null
            }

            {
              person.nation
                ? <h3>Avatar Nation: {person.nation}</h3>
                : null
            }
            <h2>Gaming Links:</h2>
            {
              person.steam
                ? <h3>Steam: {person.steam}</h3>
                : null
            }

            {
              person.xbox
                ? <h3>Xbox: {person.xbox}</h3>
                : null
            }

            {
              person.sonypsn
                ? <h3>PSN: {person.sonypsn}</h3>
                : null
            }

            {
              person.nintendo
                ? <h3>Nintendo: {person.nintendo}</h3>
                : null
            }
            <h2>Favorites:</h2>
            {
              person.favbook
                ? <h3>Favorite Book: '{person.favbook}'</h3>
                : null
            }

            {
              person.favmovie
                ? <h3>Favorite Movie: '{person.favmovie}'</h3>
                : null
            }

            {
              person.favgame
                ? <h3>Favorite Game: '{person.favgame}'</h3>
                : null
            }
            <Link to={`/edit/${person._id}`}><button className="earth-show-edit">Edit Profile</button></Link>
            <br />
            <button className="earth-show-delete" onClick={removePerson}>
              Delete Profile
            </button>
          </div>
        </div>
        : null}

      {/* Load nation based on instructor styling */}
      {(person.nation == "Instructor") ?
        <div className="instructor-person">
          <div className="instructor-name-and-photo">
            <h1 className="instructor-name"> {person.name} </h1>
            {
              person.picture
                ? <img className="show-picture" src={person.picture} alt={person.name} />
                : <img className="show-picture" src={anonymousPicture} alt="Anonymous Photo" />

            }
            <br /> <br />
            {
              person.linkedin
                ? <a href={person.linkedin} ><img className="show-linkedin" src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" href={person.linkedin} alt="LinkedIn" /></a>
                : null
            }
            {
              person.github
                ? <a href={person.github}><img className="show-github" src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png" alt="GitHub" /></a>
                : null
            }

            {
              person.instagram
                ? <a href={person.instagram}><img className="show-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
                : null
            }
          </div>
          <div className="instructor-personal-information">

            {
              person.portfolio
                ? <a className="show-portfolio" href={person.portfolio}>Portfolio</a>
                : null
            }

            {
              person.location
                ? <h3><strong>Location: </strong>{person.location}</h3>
                : null
            }

            {
              person.quote
                ? <h3>Class Quote: {person.quote}</h3>
                : null
            }

            {
              person.nation
                ? <h3>Avatar Nation: {person.nation}</h3>
                : null
            }
            <h2>Gaming Links:</h2>
            {
              person.steam
                ? <h3>Steam: {person.steam}</h3>
                : null
            }

            {
              person.xbox
                ? <h3>Xbox: {person.xbox}</h3>
                : null
            }

            {
              person.sonypsn
                ? <h3>PSN: {person.sonypsn}</h3>
                : null
            }

            {
              person.nintendo
                ? <h3>Nintendo: {person.nintendo}</h3>
                : null
            }
            <h2>Favorites:</h2>
            {
              person.favbook
                ? <h3>Favorite Book: '{person.favbook}'</h3>
                : null
            }

            {
              person.favmovie
                ? <h3>Favorite Movie: '{person.favmovie}'</h3>
                : null
            }

            {
              person.favgame
                ? <h3>Favorite Game: '{person.favgame}'</h3>
                : null
            }
            <Link to={`/edit/${person._id}`}><button className="instructor-show-edit">Edit Profile</button></Link>
            <br />
            <button className="instructor-show-delete" onClick={removePerson}>
              Delete Profile
            </button>
          </div>
        </div>
        : null}
    </div>
  );
}

export default Show;