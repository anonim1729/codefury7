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
                        <Link to='notifications'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg></Link>
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
            )}
        </nav>
    );
};

export default Navbar;
