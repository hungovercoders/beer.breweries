import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    //state
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); //stops page refresh
        const brewery = {name, website};
        setIsPending(true);
        
        fetch('http://localhost:8000/breweries', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(brewery)
        }).then(() => {
            console.log(JSON.stringify(brewery));
            setIsPending(false);
            navigate('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Brewery</h2>
            <form onSubmit={handleSubmit}>
                <label>Brewery Name</label>
                <textarea
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></textarea>
                <label>Brewery Website</label>
                <textarea
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                ></textarea>
 
                { !isPending && <button>Add Brewery</button> }
                { isPending && <button disabled>Adding Brewery...</button> }
            </form>
        </div>
     );
}
 
export default Create;