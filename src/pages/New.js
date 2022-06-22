import { useHistory } from "react-router-dom";
import { useState } from "react";

function New(props) {
  // Establish browser history
  let history = useHistory();

  // Set the state for form data
  const [newForm, setNewForm] = useState({
    name: "",
    picture: "",
    // gaming: "",
  });

  // handleChange for the form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // Establish route redirect after form submission
  const redirect = () => {
    history.goBack();

  };

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
    <div className="edit-page">
      {/* <h1>This is where we add a new person</h1>
      <h3>create form lives here</h3> */}
      {!props.user && <p className="error-message">Please log in to access this function.</p>}
      {props.user && (
        <div className="edit-labels-and-forms">
          <form className="edit-forms" onSubmit={handleSubmit}>
            <div className="edit-column-1">
              <br />
              Full Name: <br />
              <input
                className="edit-forms"
                type="text"
                value={newForm.name}
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
                value={newForm.picture}
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
                value={newForm.linkedin}
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
                value={newForm.github}
                name="guthub"
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
                value={newForm.instagram}
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
                value={newForm.portfolio}
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
                value={newForm.location}
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
                value={newForm.quote}
                name="quote"
                placeholder="quote"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="edit-column-3">
              <br />
              Avatar Nation:
              <br />
              <select
                className="edit-forms"
                value={newForm.nation}
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
                value={newForm.steam}
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
                value={newForm.xbox}
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
                value={newForm.sonypsn}
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
                value={newForm.nintendo}
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
                value={newForm.favbook}
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
                value={newForm.favmovie}
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
                value={newForm.favgame}
                name="favgame"
                placeholder="Favorite Game"
                onChange={handleChange}
              />
              <br />
              <br />
              <input className="edit-submit-btn" type="submit" value="Create New Profile" />
              <br />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default New;
