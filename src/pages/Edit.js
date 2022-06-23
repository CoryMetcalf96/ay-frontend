// Imports
import { useHistory } from "react-router-dom";
import { useState } from "react";

// Main Component
function Edit(props) {
  // Assign history so we can go back
  let history = useHistory();

  // Find the matching profile using the ID in the URL
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);

  // Set-up state
  const [editForm, setEditForm] = useState(person);

  // Function for updated information
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // Function for when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm, person._id);
    history.goBack();
  };

  // Return function
  return (
    <div className="edit-page">
      {/* Check to see if the user is logged in. If not, throw an error message */}
      {!props.user && <p className="error-message">Please log in to access this function.</p>}
      {props.user && (
        <div className="edit-labels-and-forms">
          {/* Form for updating the profile */}
          <form className="edit-forms" onSubmit={handleSubmit}>
            {/* Set-up column divs for styling purposes */}
            <div className="edit-column-1">
              <br />
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
                name="github"
                placeholder="Github URL"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="edit-column-2">
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
                placeholder="Quote"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="edit-column-3">
              <br />
              Avatar Nation:
              <br />
              {/* Dropdown menu for nation to keep styling based on nation consistent */}
              <select
                className="edit-forms"
                value={editForm.nation}
                name="nation"
                onChange={handleChange}
              >
                <option value="Unknown">Choose Your Nation</option>
                <option value="Air">Air</option>
                <option value="Earth">Earth</option>
                <option value="Water">Water</option>
                <option value="Fire">Fire</option>
                <option value="Instructor">Instructor</option>
              </select>
              <br />
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
            </div>
            <div className="edit-column-2">
              <br />
              Nintendo Friend Code:
              <br />
              <input
                className="edit-forms"
                type="text"
                value={editForm.nintendo}
                name="nintendo"
                placeholder="Nintendo Friend Code"
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
              <input className="edit-submit-btn" type="submit" value="Update Profile" />
              <br />
            </div>
          </form>
        </div>
      )
      }
    </div >
  );
}

export default Edit;
