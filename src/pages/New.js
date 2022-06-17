import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function New(props) {
  // Establish browser history
  let history = useHistory();

  // Set the state for form data
  const [newForm, setNewForm] = useState({
    name: "",
    picture: "",
    // gaming: "",
  })

  // handleChange for the form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  // Establish route redirect after form submission
  const redirect = () => {
    history.goBack();
  }  
  
  // Hande the submit for the form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPeople(newForm);
    setNewForm({
      name: "",
      picture: "",
      // gaming: "",

    });
    redirect();
  };


  return (
    <div>
      {/* <h1>This is where we add a new person</h1>
      <h3>create form lives here</h3> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder='Name'
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={newForm.picture}
          name="picture"
          placeholder='Profile Photo URL'
          onChange={handleChange}
        />
        <br />
        {/* <input
          type="text"
          value={newForm.gaming}
          name="gaming"
          placeholder='Steam Profile'
          onChange={handleChange}
        /> */}
        <br />
        <input type="submit" value='Create Profile' />
      </form>
    </div>
  )
}

export default New;


// Backburner:
// Back to main index specifically in redirect route