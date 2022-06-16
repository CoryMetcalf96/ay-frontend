/////// Import Components ///////
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* filler for now */}
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/mainindex">
        <MainIndex />
      </Route>
      <Route path="/show">
        <Show />
      </Route>
      <Route path="/new">
        <New />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
