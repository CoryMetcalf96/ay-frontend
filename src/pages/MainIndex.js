import Card from "../components/Card";

function MainIndex(props) {
  return <div> <h1>This is the Index Page</h1>;
  <h3>This will display everyone on the page  using the Card component</h3>;
  <div className='card-grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
  </div>
}

export default MainIndex;