import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Profile from '../Profile/Profile'

const Navbar2 = () => {

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    const navigate=useNavigate();
    useEffect(() => {
        window.addEventListener("scroll", changeBackground)

        return (() => window.removeEventListener('scroll', changeBackground))
    }, [])
    



    const [labelText, setLabelText] = useState('&#9776;')
    const hidebodyOverflow = (e) => {
        document.body.classList.toggle('hideOverflow')
        if (!checkboxRef.current.checked) setLabelText("&#9776;")
        else setLabelText("&times;")
    }
    const checkboxRef = useRef()
    const removeOverflow = () => {
        checkboxRef.current.checked = false
        document.body.classList.remove('hideOverflow')
        setLabelText("&#9776;")
    }



    return (
        <nav className={navbar ? "navbar" : "navbar_scroll"}>
            <h2 style={{marginLeft:"2em",cursor:"pointer"}} onClick={()=>navigate('/')}>YeildSmart</h2>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow} ref={checkboxRef} />
                <label
                    htmlFor="checkbox_toggle"
                    style={{
                        fontSize: labelText === "&times;" ? "35px" : "24px",
                    }}
                    className="hamburger"
                    dangerouslySetInnerHTML={{ __html: labelText }}>
                </label>
                <div className="menu">
                    <Profile handleOverflow={removeOverflow} />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar2