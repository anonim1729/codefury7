import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faRobot, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, signout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
                <Link to='/'>Saviour</Link>
            </h1>




            {
                user.length === 0 && (
                    <div className="space-x-4">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='/login'>Log In</Link>
                        </button>
                        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='/signup'>Sign Up</Link>
                        </button>
                    </div>
                )
            }
            {
                user.length > 0 && (
                    <div className="space-x-4 flex items-center">
                        <div className="group relative inline-block">
                            <button className="flex items-center bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                                <Link to='chat'><FontAwesomeIcon icon={faRobot} /></Link>
                            </button>
                            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-3 bg-black text-white text-sm rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 border-8 border-transparent border-b-black"></div>
                                Chat with our AI assistant?
                            </div>
                        </div>

                        <button className="flex items-center bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='weather'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                                </svg>
                            </Link>

                        </button>
                        <button className="flex items-center bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='notifications'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                                <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                            </svg>
                            </Link>
                        </button>

                        <button className="flex items-center bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                            <Link to='/me' className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                {user.split('@')[0]}
                            </Link>
                        </button>

                        <button
                            className="flex items-center bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
                            onClick={() => { signout(navigate); }}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Log out
                        </button>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
