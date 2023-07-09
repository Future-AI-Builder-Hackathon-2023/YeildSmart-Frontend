import './home.css'
/* IMAGES IMPORT */
import heroBg from '../../Images/hero-bg.svg'
import YeildSmart from '../../Images/smartfarm.jpeg'
/* ----------------------------------------------------*/
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/footer'

import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import AOS from "aos"
import "aos/dist/aos.css"
import Loader from '../Loader/Loader'


const Home = () => {
  const [pageLoading, setPageLoading] = useState(false)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])


  // const progressBarHandler = () => {
  //   const totalScroll = document.documentElement.scrollTop
  //   const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  //   const scroll = `${totalScroll / windowHeight}`
  //   const progressBar = document.getElementById('progressBar')
  //   progressBar.style.transform = `scale(${scroll},1)`
  //   progressBar.style.opacity = `${scroll}`
  // }
  // window.addEventListener('scroll', progressBarHandler)


  // const backtopRef = useRef()
  // window.addEventListener('scroll', () => {
  //   if (backtopRef.current !== null) {
  //     if (window.scrollY > 400) {
  //       backtopRef.current?.classList.add("active")
  //     } else {
  //       backtopRef.current?.classList.remove("active")
  //     }
  //   }
  // })

  const { ref: playRef, inView, entry } = useInView({ threshold: 0.6 })
  if (entry !== undefined) {
    entry.target.muted = true
    inView ? entry.target.play() : entry.target.pause()
  }



  return (
    pageLoading ? <Loader/>
      : <>
        <Helmet>
          <title>YeildSmart</title>
        </Helmet>

        <Navbar />

        <main>
          <article>
            <div id="progressBarContainer" >
              <div id="progressBar" ></div>
            </div>

            <section className="section hero has-bg-image" aria-label="home"
              style={{ "backgroundImage": `url(${heroBg})` }}>
              <div className="container">
                <div className="hero-content" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" >
                  <h1 className="h1 section-title">
                  The Best Platform for Farmers to  <span className="span" data-aos="zoom-in"
                      data-aos-delay="500">Optimize</span>  Crop Yield.
                  </h1>
                  <p className="hero-text">
                  Hello future crop yield optimizers ,<br />Welcome to <b>YieldSmart</b>!! A comprehensive platform for all 
                  your resources and inquiries regarding crop yield optimization and smart farming practices.
                  </p>

                  <Link to='/predictCrop' className='link btn has-before'>
                    <span>Predict Crop</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </Link>

                </div>

                <div className="hero-banner">
                  <div className="noticeboard" data-aos="flip-right" data-aos-duration="1000"
                    style={{
                      alignItems: 'center' ,
                      justifyContent: 'center' ,
                    }}
                  >
                    <div  data-aos="fade-right" data-aos-duration="400">
                    <img style={{cursor:'pointer'}} alt='YeildSmart' height={270} width={280} src={YeildSmart} />
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="section about" id='about' aria-label="about">
              <div className="container">
                <div className="about-content">
                  <p className="section-subtitle" style={{ "color": "var(--gray-web)" }}>About Us</p>
                  <h3 className="h2 section-title" data-aos="fade-right" data-aos-duration="400">
                   Welcome to <span className="span" data-aos="zoom-in" data-aos-delay="300">YeildSmart</span> Predicting Crop Yield with Precision
                  </h3>
                  <p className="section-text" style={{ "color": "var(--gray-web)" }}>
                  Are you a farmer looking to maximize your crop yield? Or a researcher interested in studying agricultural trends? 
                  Look no further! 
                  CropYield Predictor is here to help you make informed decisions and optimize your farming practices.
                  </p>
                  <ul className="about-list" style={{ "fontSize": "1.5rem" }}>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in">Agricultural Technology</span>
                    </li>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in" data-aos-delay="300">Smart Farming</span>
                    </li>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in" data-aos-delay="600">Crop Yield Optimization</span>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

          </article>
        </main>

        <Footer />

        {/* <a href="#" className="back-top-btn" aria-label="back top top" ref={backtopRef}>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a> */}


        <style>
          {`
            .swiper-slide {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              backdrop-filter: blur(2.5px);
            }
            .swiper-slide-shadow-left {
              display: none;
            }
            .swiper-slide-shadow-right {
              display: none;
            }
            .swiper-pagination-bullets {
              display: none;
            }
          `}
        </style>
      </>
  )
}


export default Home