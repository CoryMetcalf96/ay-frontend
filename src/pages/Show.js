import { useState } from "react";
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
      <h1> {person.name} </h1>

      {
        person.picture
          ? <img src={person.picture} alt={person.name} />
          : <img src={anonymousPicture} alt="Anonymous Photo" />
      }

      {
        person.linkedin
          ? <a href={person.linkedin}>LinkedIn</a>
          : null
      }

      {
        person.github
          ? <a href={person.github}>GitHub</a>
          : null
      }

      {
        person.portfolio
          ? <a href={person.portfolio}>Portfolio</a>
          : null
      }

      {
        person.instagram
          ? <a href={person.instagram}>Instagram</a>
          : null
      }

      {
        person.location
          ? <h3>{person.location}</h3>
          : null
      }

      {
        person.quote
          ? <h3>{person.quote}</h3>
          : null
      }

      {
        person.nation
          ? <h3>{person.nation}</h3>
          : null
      }

      {
        person.steam
          ? <h3>{person.steam}</h3>
          : null
      }

      {
        person.xbox
          ? <h3>{person.xbox}</h3>
          : null
      }

      {
        person.sonypsn
          ? <h3>{person.sonypsn}</h3>
          : null
      }

      {
        person.nintendo
          ? <h3>{person.nintendo}</h3>
          : null
      }

      {
        person.favbook
          ? <h3>{person.favbook}</h3>
          : null
      }

      {
        person.favmovie
          ? <h3>{person.favmovie}</h3>
          : null
      }

      {
        person.favgame
          ? <h3>{person.favgame}</h3>
          : null
      }



      <Link to={`/edit/${person._id}`}>Edit</Link>
      <button className="delete-btn" onClick={removePerson}>
        Delete Person
      </button>
    </div>
  );
}

export default Show;

// avatart icon link: https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png