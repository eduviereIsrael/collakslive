/* eslint-disable */
import { useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Services } from '../data/Services';
import { Testimonials } from '../data/Testimonials';
import { Partners } from '../data/Partners';
import { Faq } from '../data/Faq';
import { Card, PrimaryBtn } from '../components';

export default function Home() {
  const [wait, setwait] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0)
  const [clickedFaqs, setClickedFaq] = useState([])
  const heading = [
    "LOOK AND FEEL YOUR BEST",
    "wo ati rilara ti o daru julo",
    "lee anya ma nwee mmetuta kacha mma gi",
    "duba da jin dadin ku"
  ]
  const [activeHeader, setActiveHeader] = useState(0)

  // const switchHeader = () => {
  //   if(activeHeader === 3){
  //     setActiveHeader(0)
  //   } else {
  //     setActiveHeader(prevActiveHeader => prevActiveHeader + 1)
  //   }
  // }

  let header = heading[activeHeader]

  


  const toggleFaq = (x) => {
    let clickedFaq = clickedFaqs.includes(x)

    if(!clickedFaq){
      setClickedFaq([...clickedFaqs, x]);
    } else {
      let newClickedFaq = clickedFaqs.filter(faq => faq !== x)
      setClickedFaq([...newClickedFaq]);
    }
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth/7)
    setTimeout(() => {
      setwait(true);
    }, 300);
   
  }, []);
  
  return (
    <div className='body'>
      <Head>
        <title>Collaks | Experts in prosthetics and orthotics in Nigeria</title>
        <meta name="description" content="Collaks | Experts in prosthetics and orthotics" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className=' main'>
        {/* <div className='herobg'></div>
        <div className='herobg1'></div> */}
        <div className='hero sect-wrap'>
          <div className='intro'>
            <h1>LOOK AND FEEL YOUR BEST</h1>
            <p>
            We are a team of young, creative, smart and skilled professionals  with irregular minds and one simple goal of making every disability turn to ability.
            </p>
            <span></span>
          </div>
          <div className='hero-img'>
            <div className={wait? 'left-h-img h-i-op' : 'left-h-img'}>
              <img src='/herobg1.webp' />
              <span className='hero-c'><span>5+</span><p>Years of experience</p></span>
            </div>
            <div className={wait? 'right-h-img h-i-op' : 'right-h-img'}>
              <span className='hero-c'><span>200+</span><br/><p>Happy clients</p></span>
              <img src='/herobg2.webp' />
            </div>
          </div>
          <div className={wait? 'hero-img1 transition' : 'hero-img1'}>
            <div className='first' style={{width: windowWidth}}>
              <img src='/herobg1.webp' />
            </div>
            <div className='second' style={{width: windowWidth}}>
              <span className='hero-c'><span>5</span><p>Years of experience</p></span>
              <img src='/herobg3.webp' />
              <span className='hero-c-1'><span>200+</span><br/><p>Happy clients</p></span>
            </div>
            <div className='third' style={{width: windowWidth}}>
              <img src='/herobg2.webp' />
            </div>
          </div>
        </div>

        <div className='partners sect-wrap'>
          <div className='container'>
            <div className='partners-head'>
              <h3>Trusted By</h3>
            </div>
            <div className='partners-img'>
              <div className='marquee'>
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
                {Partners.map((item, i) => (
                  <span key={i}><img src={item.src} alt={item.name} /></span>
                ))}
               
              </div>
              
            </div>
          </div>
        </div>

        <div className='perks-div sect-wrap'>
          <div className='perks'>
          <div className='perks-head'>
            <h2>Our patients loves <br/>our services</h2>
            <span></span>
          </div>
          <div className='perks-cont'>
            <div className='perks-card'>
              <img src='/cost.svg' />
              <h5>Cost effective prices</h5>
              <p>We offer good and quality bionic limbs at the best prices in the industry</p>
            </div>
            <div className='perks-card'>
              <img src='/time.svg' />
              <h5>Timely devlivery</h5>
              <p>We also do our best to help
                patients gets their bionic parts 
                in the space of 14 days</p>
            </div>
            <div className='perks-card'>
              <img src='/skills.svg' />
              <h5>Managment skills</h5>
              <p>We possess patient management 
                skills that cuts across all major
                needs of our patients</p>
            </div>
            <div className='perks-card'>
              <img src='/staff.svg' />
              <h5>Staff relationship</h5>
              <p>Our friendly environment and staff 
                relationship help patients 
                relax and boosts their confidence</p>
            </div>
          </div>
          </div>
        </div>
        

        <div className='services sect-wrap' id='services'>
            <div className='services-head'>
              <p>Take bold steps with our services</p>
              <h2>HERE IS WHAT WE CAN DO FOR YOU</h2>
              <span></span>
            </div>
            <div className='services-cont'>
              {Services.map((item, i) => (
                <Card key={i} image = {item.image} altText = {item.title} title={item.title} text={item.text} linkText="LEARN MORE" btnIcon="/btnarrow.svg" cardLink = {item.link} />
              ))}
            </div>
        </div>

        <div className='banner-div sect-wrap'>
          <div className='banner'>
          <div className='content'>
            <p>We will stick with you throughout the entire process</p>
            <h2>With our 1 year warranty you can be assured that we will handle any difficulties you encounter along the way.</h2>

            <div className='cta'>
              <p>Book a free appointment with our specialists</p>
              <PrimaryBtn text="Book an Appointment"/>
            </div>
          </div>
          <img src='bannerimg.png' />
          </div>
        </div>
        
        <div className='about-banner'>
          <div className='about-banner-head'>
            <p>Who are we?</p>
            <h2>Collaks Prosthetics and Orthotics</h2>
            <span></span>
          </div>
          <div className='about-b-content'>
            <p>
              Collaks prosthetics and orthotics is a medical rehabilitation      clinic dedicated to improving lives of persons living with disability form upper body amputees to lower body amputees also in fabrication of supportive devices/braces for patients with neuromuscular and muscuskeletal conditions. Collaks Prosthetics started off 5 years ago with orthotics and later launched it's prosthetic section fully in 2018.
            </p>
            <p>
              Our vision is to be the top and most reliable prosthetic and orthotic clinic, dedicated to providing quality and affordable rehabilitation treatment to persons living with disability and health challenges.
            </p>
            <PrimaryBtn link="" text="Read more" />
          </div>

          <div className='stats'>
            <div className='years'>
              <span>20+</span>
              <p>Years of experience</p>
            </div>
            <div className='experience'>
              <span>50+</span>
              <p>Happy clients</p>
            </div>
          </div>

        </div>

        <div className='testimonials-div sect-wrap'>
            <div className='testimonials-head'>
              <p>We give our best to every patient</p>
              <h2>Testimonials</h2>
              <span></span>
            </div>
            <div className='testimonials-cont'>
              {Testimonials.map((item, i) => (
                <div key={i} className="testimonials-card">
                  <p className='small-text'>{item.testimony}</p>
                  <div><span></span> <h6>{item.name}</h6></div>
                </div>
              ))}
            </div>
        </div>


        <div className='faq-div sect-wrap'>
          <div className='faq-head'>
            <h2>FAQ's</h2>
            <span></span>
          </div>
          <div className="faq-cont">
            {Faq.map((item, i) => (
              <div className={clickedFaqs.includes(i)? "faq-card faq-show" : "faq-card"} key={i}>
                <div className="f-c-header">
                    <span>{item.question}</span>
                    <img src="/arrow-down.svg" onClick={() => {
                      toggleFaq(i);
                    }} alt="faq"/>
                </div>
                <p>{item.answer}</p>
            </div>
            ))}
            
           
          </div>
        </div>

      </main>

    </div>
  )
}

