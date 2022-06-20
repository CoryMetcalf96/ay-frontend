import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function Edit(props) {
  let history = useHistory();

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
    history.goBack();
  };

  return (
    <div className="person">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.picture}
          name="picture"
          placeholder="Profile Picture URL"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.linkedin}
          name="linkedin"
          placeholder="Linkedin URL"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.github}
          name="guthub"
          placeholder="Github URL"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.portfolio}
          name="portfolio"
          placeholder="Portfolio URL"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.location}
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.instagram}
          name="instagram"
          placeholder="Instagram"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.quote}
          name="quote"
          placeholder="quote"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.nation}
          name="nation"
          placeholder="Avatar Nation"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.steam}
          name="steam"
          placeholder="Steam Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.xbox}
          name="xbox"
          placeholder="XBOX Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.sonypsn}
          name="sonypsn"
          placeholder="PSN Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.nintendo}
          name="nintendo"
          placeholder="Nintendo Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.favbook}
          name="favbook"
          placeholder="Favorite Book"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.favmovie}
          name="favmovie"
          placeholder="Favorite Movie"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.favgame}
          name="favgame"
          placeholder="Favorite Game"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Update Profile" />
      </form>
    </div>
  )
}

export default Edit;