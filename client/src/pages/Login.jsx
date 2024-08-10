import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { signin, authErr, setAuthErr } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hdPwd, setHdPwd] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        setAuthErr('');
    }, [email, password]);

    const handleSignin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setFormError("Both email and password are required.");
            return;
        }

        setFormError('');
        signin(email, password, navigate);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {authErr && (
                    <p className="text-red-500 mt-1 p-1 rounded-lg">
                        {authErr}
                    </p>
                )}
                {formError && (
                    <p className="text-red-500 mt-1 p-1 rounded-lg">
                        {formError}
                    </p>
                )}
                <form onSubmit={handleSignin}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            id="username"
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg shadow-md mb-3 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200">
                            <input
                                className="flex-grow py-3 px-4 text-gray-700 leading-tight focus:outline-none rounded-l-lg"
                                id="password"
                                type={`${hdPwd ? 'text' : 'password'}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            {hdPwd && <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500 mx-2 cursor-pointer"
                                onClick={() => (setHdPwd(!hdPwd))}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>}
                            {
                                !hdPwd && <svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6 text-gray-500 mx-2 cursor-pointer"
                                    onClick={() => (setHdPwd(!hdPwd))}
                                >
                                    <path
                                        strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => navigate('/')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        Didn't register? <span
                            onClick={() => { navigate('/signup') }}
                            className="text-blue-600 font-semibold cursor-pointer"
                        >Signup</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
