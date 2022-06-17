import { useState } from "react";
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);

  const removePerson = () => {
    props.deletePeople(person._id);
    props.history.push("/mainindex");
  }

  return (
    <div className="person">
      <h1> {person.name} </h1>
      <img src={person.picture} alt={person.name} />
      <h3>{person.quote}</h3>
      <h3>{person.nation}</h3>
      <h3>{person.location}</h3>
      <Link to={`/edit/${person._id}`}>Edit</Link>
      <button className="delete-btn" onClick={removePerson}>
        Delete Person
      </button>
    </div>
  );
}

export default Show;
