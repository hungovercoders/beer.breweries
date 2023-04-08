import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BreweryDetails = () => {
    const { id } = useParams();
    const { data: brewery, error, isPending } = useFetch('http://localhost:8000/breweries/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/breweries/' + brewery.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="brewery-details">
            {isPending && <div>Brewing...</div>}
            {error && <div>{error}</div>}
            {brewery && (
                <article>
                    <h2>{brewery.name}</h2>
                    <p>Brewed by {brewery.brewer}</p>
                    <button onClick={handleClick}>Delete brewery</button>
                </article>
            )}
        </div>
    );
}

export default BreweryDetails;