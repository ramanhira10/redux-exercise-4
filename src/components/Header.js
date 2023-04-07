import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='Header'>
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/redux-exercise-4">Home</Link></li>
                    <li><Link to="/redux-exercise-4/post">Post</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;