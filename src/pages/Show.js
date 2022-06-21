import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);
  const anonymousPicture = "https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"

  const removePerson = () => {
    props.deletePeople(person._id);
    props.history.push("/mainindex");
  }

  return (
    <div className="person">
      <div className="name-and-photo">
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
      <div className="personal-information">

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
        <Link to={`/edit/${person._id}`}><button className="show-edit">Edit Profile</button></Link>
        <br />
        <button className="show-delete" onClick={removePerson}>
          Delete Profile
        </button>
      </div>
    </div>
  );
}

export default Show;