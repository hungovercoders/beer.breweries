import { Link } from "react-router-dom";

const BreweryList = ({ breweries }) => {
  return (
    <div className="brewery-list">
      {breweries.map(brewery => (
        <div className="brewery-preview" key={brewery.id} >
          <Link to={`/breweries/${brewery.id}`}>
            <h2>{brewery.name}</h2>
            <p>Brewed by {brewery.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BreweryList;