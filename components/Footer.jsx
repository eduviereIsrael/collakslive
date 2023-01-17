/*eslint-disable */

import React from 'react'
import PrimaryBtn from './PrimaryBtn';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-intro">
        <div className="footer-text">
          <span className='f-text'>CONTACT OUR SPECIALIST TODAY</span>
          <PrimaryBtn  text='Book an Appointemnt' />
        </div>
      </div>
      <div className="footer-cont">
        <img src='/logo.png' className='footer-logo' />

        <div className="footer-menu">
          <div className="main-links f-links">
            <h5>Pages</h5>
            <Link href='/'>
             <p>Home</p>
            </Link>
            <Link href='/'>
             <p>Blog</p>
            </Link>
            <Link href='/about'>
             <p>About</p>
            </Link>
            <Link href=''>
             <p>Contact</p>
            </Link>
          </div>
          <div className="service-links f-links">
             <h5>Services</h5>
            <Link href=''>
             <p>Amputations</p>
            </Link>
            <Link href=''>
             <p>Orthosis</p>
            </Link>
            <Link href=''>
             <p>Consult</p>
            </Link>
            <Link href=''>
             <p>Physiotherapy</p>
            </Link>
            <Link href=''>
             <p>Sales</p>
            </Link>
            <Link href=''>
             <p>Maintenance</p>
            </Link>
          </div>
          <div className="social-links f-links">
            <h5>Socials</h5>
            <Link href='https://wa.me/message/27VORR2EOAGJL1'>
             <p>Whatsapp</p>
            </Link>
            <Link href='https://twitter.com/collakscare'>
             <p>Twitter</p>
            </Link>
            <Link href='https://instagram.com/collakscare01?igshid=YmMyMTA2M2Y'>
             <p>Instagram</p>
            </Link>
            <Link href='https://www.linkedin.com/in/gideon-oladele-a6539a237'>
             <p>Linkedin</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer