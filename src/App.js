/////// Import Components ///////
import Header from './components/Header';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Footer from './components/Footer';

/////// Import Component Styling ///////
import './style/app.css'
import './style/card.css';
import './style/footer.css';
import './style/header.css';
import './style/navigation.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* filler for now */}
      <div className='card-grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
