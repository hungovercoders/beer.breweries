import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Breweries</h1>
            <div className="links">
                <Link className='navBarLink' to="/" >Home</Link>
                <Link className='navBarLink' to="/create" >New Beer</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;