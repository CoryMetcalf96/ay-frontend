/////// Import Components ///////
import { auth } from './services/firebase';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

/////// Import Component Styling ///////
import "./style/card.css";
import "./style/footer.css";
import "./style/header.css";
import "./style/navigation.css";
import "./style/show.css";
import "./style/edit.css"
import "./style/landing.css";


//Import Pages
import Landing from "./pages/Landing";
import MainIndex from "./pages/MainIndex";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";

function App() {
  // Set-up for whether or not the user is logged in or not
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  // Set-up state
  const [people, setPeople] = useState(null);
  const URL = "https://avatar-yearbook-backend.up.railway.app/";

  // Function for retrieving people
  const getPeople = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPeople(data);
  };

  // Function for creating people
  const createPeople = async (person) => {
    if (!user) return;
    const token = await user.getIdToken()
    await fetch(URL, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  // function for updating people
  const updatePeople = async (person, id) => {
    if (!user) return;
    const token = await user.getIdToken()
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  // Function for deleting people
  const deletePeople = async (id) => {
    if (!user) return;
    //new line
    const token = await user.getIdToken()
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "Application/json",
      }
    });
    getPeople();
  };

  useEffect(() => {
    getPeople();
  }, []);

  // Return function on load
  return (
    <div className="App">
      {/* Header and navigation */}
      <Header />
      <Navigation user={user} />

      {/* Route for landing page */}
      <Route exact path="/">
        <Landing />
      </Route>

      {/* Route for index page */}
      <Route path="/mainindex">
        <MainIndex user={user} people={people} createPeople={createPeople} />
      </Route>

      {/* Route for show page */}
      <Route
        path="/show/:id"
        render={(rp) => (
          <Show user={user} people={people}
            deletePeople={deletePeople} {...rp} />
        )}
      />

      {/* Route for edit page */}
      <Route
        path="/edit/:id"
        render={(rp) => (
          <Edit user={user} people={people}
            updatePeople={updatePeople} {...rp} />
        )}
      />

      {/* Route for new page */}
      <Route path="/new">
        <New user={user} people={people} createPeople={createPeople} />
      </Route>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;