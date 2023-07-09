import { useContext } from "react"
import { AuthContext } from "../../Context/authContext/AuthContext"
import { logout } from '../../Context/authContext/AuthActions'
import { Link, useNavigate } from "react-router-dom"
import userLogo from '../../Images/user-logo.jpg'


const Profile = ({ handleOverflow }) => {
    // const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();
    const userData = sessionStorage.getItem("userData");
    const logout = () => {
        sessionStorage.clear();
        navigate("/login")
    }

    return (
        <>
            {!userData
                ? <Link to='/login'><li onClick={handleOverflow}>Sign in</li></Link>
                : (<>
                    <li onClick={logout} id='userlogout'>
                        <div className="logout">
                            <img src={userLogo} width={35} style={{ "borderRadius": "50%" }} alt="avatar" />
                            <span id='logout'>Logout</span>
                        </div>
                    </li>
                </>
                )
            }
        </>
    )
}

export default Profile