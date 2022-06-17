/////// Import Components ///////
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

/////// Import Component Styling ///////
import "./style/app.css";
import "./style/card.css";
import "./style/footer.css";
import "./style/header.css";
import "./style/navigation.css";

//Import Pages
import Landing from "./pages/Landing";
import MainIndex from "./pages/MainIndex";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";

function App() {
  const [people, setPeople] = useState(null);
  const URL = "https://avatar-yearbook-backend.herokuapp.com/";

  const getPeople = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPeople(data);
  };

  const createPeople = async (person) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const updatePeople = async (person, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const deletePeople = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getPeople();
  };

  // useEffect(() => getPeople(), []);
  useEffect(() => {
    getPeople();
  }, []);
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* filler for now */}
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/mainindex">
        <MainIndex people={people} createPeople={createPeople} />
      </Route>
      <Route
        path="/show/:id"
        render={(rp) => (
          <Show people={people} deletePeople={deletePeople} {...rp} />
        )}
      />
      <Route
        path="/edit/:id"
        render={(rp) => (
          <Edit people={people} updatePeople={updatePeople} {...rp} />
        )}
      />

      <Route path="/new">
        <New people={people} createPeople={createPeople} />
      </Route>

      <Footer />
    </div>
  );
}

export default App;

// const personSchema = new mongoose.Schema({
//   name: String,
//   picture: String,
//   linkedin: String,
//   github: String,
//   portfolio: String,
//   location: String,
//   instagram: String,
//   quote: String,
//   nation: String,
//   gaming: {
//       steam: String,
//       xbox: String,
//       sonypsn: String,
//       nintendo: String},
//   favorites: {
//       favbook: String,
//       favmovie: String,
//       favgame: String}
// });
