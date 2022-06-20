import { useState } from 'react'

function Edit(props) {

const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(person);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm, person._id);
    props.history.push("/mainindex");
  };

  return (
    <div className="person">
      {props.user && 
      <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={editForm.name}
      name="name"
      placeholder="name"
      onChange={handleChange} 
      />
      <input 
      type="text"
      value={editForm.picture}
      name="picture"
      placeholder="picture"
      onChange={handleChange} 
      />
      <input 
      type="text"
      value={editForm.quote}
      name="quote"
      placeholder="quote"
      onChange={handleChange} 
      />
    <input type="submit" value="Update Profile" />
    </form>
      }


    </div>
  )
}

export default Edit;