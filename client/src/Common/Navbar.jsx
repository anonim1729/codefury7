import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faRobot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, signout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-bold">
                <Link to='/'>Home</Link>
            </div>
            {user.length === 0 && (
                <div className="space-x-4">
                    <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                        <Link to='/login'>Log In</Link>
                    </button>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>
            )}
            {user.length > 0 && (
                <div className="space-x-4 relative">
                    {/* Tooltip Container */}
                    <div className="group relative inline-block">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='chat'><FontAwesomeIcon icon={faRobot} /></Link>
                        </button>
                        {/* Tooltip */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-3 bg-black text-white text-sm rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 border-8 border-transparent border-b-black"></div>
                            Chat with our AI assistant?
                        </div>
                    </div>

                    <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                        <Link to='/me'><FontAwesomeIcon icon={faUser} className="mr-2" />
                            {user.split('@')[0]}</Link>
                    </button>
                    <button
                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
                        onClick={() => { signout(navigate); }}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Log out
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
