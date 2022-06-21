import { useHistory } from "react-router-dom";
import { useState } from "react";

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
    <div className="edit-page">
      {!props.user && <p>please log in to access this function</p>}
      {props.user && (
        <div className="edit-labels-and-forms">
          <form className="edit-forms" onSubmit={handleSubmit}>
            <div className="edit-column-1">
              Full Name: <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.name}
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <br />
              <br />
              Profile Picture URL:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.picture}
                name="picture"
                placeholder="Profile Picture URL"
                onChange={handleChange}
              />
              <br />
              <br />
              LinkedIn URL:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.linkedin}
                name="linkedin"
                placeholder="Linkedin URL"
                onChange={handleChange}
              />
              <br />
              <br />
              GitHub URL:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.github}
                name="guthub"
                placeholder="Github URL"
                onChange={handleChange}
              />
              <br />
              <br />
              Instagram URL:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.instagram}
                name="instagram"
                placeholder="Instagram"
                onChange={handleChange}
              />
              <br />
              <br />
              Portfolio URL:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.portfolio}
                name="portfolio"
                placeholder="Portfolio URL"
                onChange={handleChange}
              />
              <br />
              <br />
              Location (City, State):
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.location}
                name="location"
                placeholder="Location"
                onChange={handleChange}
              />
              <br />
              <br />
              Yearbook Quote:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.quote}
                name="quote"
                placeholder="quote"
                onChange={handleChange}
              />
              <br />
              <br />
              Avatar Nation:
              <br />
              <select
                className="edit-forms"
                value={editForm.nation}
                name="nation"
                onChange={handleChange}
              >
                <option value="Air">Air</option>
                <option value="Earth">Earth</option>
                <option value="Water">Water</option>
                <option value="Fire">Fire</option>
              </select>
            </div>
            <div className="edit-column-1">
            <br />
              Steam Username:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.steam}
                name="steam"
                placeholder="Steam Username"
                onChange={handleChange}
              />
              <br />
              <br />
              XBOX Username:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.xbox}
                name="xbox"
                placeholder="XBOX Username"
                onChange={handleChange}
              />
              <br />
              <br />
              PSN Username:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.sonypsn}
                name="sonypsn"
                placeholder="PSN Username"
                onChange={handleChange}
              />
              <br />
              <br />
              Nintendo Username:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.nintendo}
                name="nintendo"
                placeholder="Nintendo Username"
                onChange={handleChange}
              />
              <br />
              <br />
              Favorite Book:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.favbook}
                name="favbook"
                placeholder="Favorite Book"
                onChange={handleChange}
              />
              <br />
              <br />
              Favorite Movie:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.favmovie}
                name="favmovie"
                placeholder="Favorite Movie"
                onChange={handleChange}
              />
              <br />
              <br />
              Favorite Game:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.favgame}
                name="favgame"
                placeholder="Favorite Game"
                onChange={handleChange}
              />
              <br />
              <br />
              <input type="submit" value="Update Profile" />
            </div>
          </form>
        </div>
      )
      }
    </div >
  );
}

export default Edit;
