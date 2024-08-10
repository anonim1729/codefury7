import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../Common/Navbar"
import { useContext, useEffect } from "react"
import AuthContext from "../contexts/AuthContext"


const Homelayout = () => {
    const { user,loading } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);
    useEffect(() => {
        if (!loading&&user.length==0) {
            navigate('/');
        }
    }, [user,loading]);
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Homelayout