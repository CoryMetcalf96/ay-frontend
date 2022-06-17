import { Link } from "react-router-dom"
import Card from "../components/Card";

function MainIndex(props) {

const loaded = () => {
  return props.people.map((person) => (
    <div key={person._id} className="person">
      <Link to ={`/show/${person._id}`}>
        <h1>{person.name}</h1>
      </Link>
    </div>
  ));
};

const loading = () => {
  return <h1>Loading...</h1>;
};
return props.people ? loaded () : loading ();
}


//   return <div> <h1>This is the Index Page</h1>;
//   <h3>This will display everyone on the page  using the Card component</h3>;
//   <div className='card-grid'>
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//   </div>
// }

export default MainIndex;