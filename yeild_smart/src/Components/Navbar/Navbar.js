import './navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'


const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
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
                    <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                    <a href='#footer'><li onClick={removeOverflow}>Contact Us</li></a>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar