import { Link } from 'react-router-dom';

function NavBar({ onClick }) {
    return (
        <nav className='nav'>

            <Link to="/">Homepage</Link>
            <Link to="/product/:id">ProductDetails</Link>
            <Link to="/registration">Sign-up</Link>
            <Link to="/login">Login</Link>
            <button className="cart-button" onClick={onClick}>
                <img src="./cart.png" alt="Cart" />
            </button>
        </nav>
    );
}

export default NavBar;