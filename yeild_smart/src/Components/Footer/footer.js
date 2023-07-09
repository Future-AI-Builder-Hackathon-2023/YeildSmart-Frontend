import footerBg from '../../Images/footer-bg.png'
import './footer.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bsjwe5y', 'template_mfx66w9', form.current, 'egJ27kaDiQZ80XgWw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
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
            <div className="right-j">
                <form action="" className='email-container' ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter Your Email Address' id="" />
                    <button className="btn btn-j">Join Now</button>
                </form>
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