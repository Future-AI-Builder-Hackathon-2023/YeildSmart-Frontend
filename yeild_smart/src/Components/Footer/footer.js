import footerBg from '../../Images/footer-bg.png'
import './footer.css'



const Footer = () => {
    return (
        <footer className="footer" id="footer" style={{ "backgroundImage": `url(${footerBg})` }}>
            <div className="footer-top section">
                <div className="container">
                    <div className="footer-brand" >
                        <p className="footer-brand-text" >
                            Thank You for visiting our website. Wishing you a very happy day ahead.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by <span className="copyright-link"> Team ByteMinds</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer