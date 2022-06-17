// import { useState, useEffect } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import MainIndex from './MainIndex';

function Show(props) {
const id = props.match.params.id
const people = props.people
const person = people.find(p => p._id === id)

  return (
    <div className="person">
      <h1> {person.name} </h1>
      <img src={person.picture} alt={person.name} />
      <h3>{person.quote}</h3>
      <h3>{person.nation}</h3>
      <h3>{person.location}</h3>
      <button>Edit Details</button>
      <button>Delete Person</button>
    </div>
  );
}

export default Show;
