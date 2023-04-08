import BreweryList from "./BreweryList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: breweries, isPending, error} = useFetch('http://localhost:8000/breweries')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Brewing...</div>}
            {breweries && <BreweryList breweries={breweries} />}
        </div>
    );
}

export default Home;