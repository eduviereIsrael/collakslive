/* eslint-disable */

import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryBtn from '../PrimaryBtn';
// import './styles.css'

const Navbar = () => {

  
  const [navClick, setNavClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [winWidth, setWinWidth] = useState(0);
  const [navheight, setNavHeight] = useState(0);
  const [serviceTab, setServiceTab] = useState(false)
  const [serviceTabm, setServiceTabm] = useState(false)
  const [serviceX, setServiceX] = useState(0)



  const NavRef = useRef()
  const serviceMenuRef = useRef()

  useEffect(() => {
    setWinWidth(window.innerWidth)
    setNavHeight(NavRef.current.clientHeight)
    setServiceX(serviceMenuRef.current.offsetLeft)
  }, [])
  
  // const navLinks = [
  //   {
  //     name: 'Home',
  //     url: '/'
  //   },
  //   {
  //     name: 'Our Services',
  //     url: '/services'
  //   },
  //   {
  //     name: 'About Us',
  //     url: '/about'
  //   },
  //   {
  //     name: 'Our Blog',
  //     url: '/blog'
  //   },
  //   {
  //     name: 'Contact Us',
  //     url: '/contact'
  //   },
  // ]
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //       // alert('hello')

  //       if(window.scrollY > 0){
  //           setScroll(true)
  //       } else {
  //           setScroll(false)
  //       }
  //   })

  // }, [])
  
  return (
    <>
        <div ref={NavRef} className={scroll? 'header window-scroll' : 'header'}>
            <div className="sect-wrap head-container">
                <div className='logo-div'>
                    <img src='/logo.png' alt='Throve design agency logo'/>
                    {/* <span className='logo'></span> */}
                </div>
                <div className='menu-div'>
                    <div className="menu-items">
                      <Link href='/'>
                        <p>Home</p>
                      </Link>
                      <span  onMouseEnter={() => {
                            setServiceTab(true)
                          }} onMouseLeave={() => {
                            setServiceTab(false)
                          }}>
                        <Link href=''>
                          <p ref={serviceMenuRef}>Our Services</p>
                        </Link>
                      </span>
                      
                      <Link href='/about'>
                        <p>About Us</p>
                      </Link>
                      <Link href='/contact'>
                        <p>Contact</p>
                      </Link>
                      <Link href='/contact'>
                        <p>Collaks Work Facility</p>
                      </Link>
                    </div>
                    <div className={navClick? 'hambuga spin': 'hambuga'} onClick={() => {
                      setNavClick(!navClick)
                      // alert(navClick)
                      }}>
                        <div className='ham dis'></div>
                        <div className='ham spins'></div>
                        <div className='ham spins-i'></div>
                        {/* <div className='ham dis'></div> */}
                    </div>
                </div>
                <div className=" nav-cta">
                  <PrimaryBtn  text="Book an Appointment"/>
                </div>
                {!serviceTab? '' : <div className='services-tab' style={{top: `${navheight - 2}px`, left: serviceX}}
                 onMouseEnter={() => {
                  setServiceTab(true)
                }} onMouseLeave={() => {
                  setServiceTab(false)
                }}>
                  <span>
                    <Link href='/amputations'>
                      <p>Amputations</p>
                    </Link>
                  </span>
                  <span>
                    <Link href='/orthosis'>
                      <p>Orthosis</p>
                    </Link>
                  </span>
                  <span>
                    <Link href='/consult'>
                      <p>Consult</p>
                    </Link>
                  </span>
                  <span>
                    <Link href='/physiotherapy'>
                      <p>Physiotherapy</p>
                    </Link>
                  </span>
                  <span>
                    <Link href='/sales'>
                      <p>Sales</p>
                    </Link>
                  </span>
                  <span>
                    <Link href='/maintenance'>
                      <p>Maintenance</p>
                    </Link>
                  </span>
                </div>}
                
            </div>
        </div>
        <div style={{marginTop: navheight}} className={navClick? "mob-menu-div menu-show": "mob-menu-div "}>
            <div className="mob-menu-div-cont">
              {/* {navLinks.map((item, i) => (
                <Link href={item.url} key={i}>
                  <p onClick = {() => setNavClick(false)}>{item.name}</p>
                </Link>
              ))} */}
               <Link href='/'>
                  <p onClick = {() => setNavClick(false)}>Home</p>
                </Link>
                <Link href=''>
                  <p onClick = {() => {
                    // setNavClick(false)
                    setServiceTabm(!serviceTabm)
                    }}>Our Services</p>
                </Link>
                {!serviceTabm? '' : 
                  <div onClick={() => {
                    setNavClick(false)
                    setServiceTabm(!serviceTabm)
                  }} >
                    <Link href='/amputations'>
                      <p>Amputations</p>
                    </Link>
                    <Link href='/orthosis'>
                      <p>Orthosis</p>
                    </Link>
                    <Link href='/consult'>
                      <p>Consult</p>
                    </Link>
                    <Link href='/physiotherapy'>
                      <p>Physiotherapy</p>
                    </Link>
                    <Link href='/sales'>
                      <p>Sales</p>
                    </Link>
                    <Link href='/maintenance'>
                      <p>Maintenance</p>
                    </Link>
                  </div>
                }
                <Link href='/about'>
                  <p onClick = {() => setNavClick(false)}>About Us</p>
                </Link>
                <Link href=''>
                  <p onClick = {() => setNavClick(false)}>Our Blog</p>
                </Link>
                <Link href='/contact'>
                  <p onClick = {() => setNavClick(false)}>Contact Us</p>
                </Link>
              
            </div>
        </div>
    </>
    
  )
}

export default Navbar