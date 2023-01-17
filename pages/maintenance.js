import React from 'react'
import { ServBanner } from '../components'

const maintenance = () => {
  return (
    <div className='maintenance sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/maintenance-l.webp' 
        heading='MAINTENANCE' 
        text='Check-up and maintenance for old prosthetic limbs.' />

        <div className='copy'>
          <p>At collaks prosthetics and orthotics we believe in longitivtiy which is why we have a plan for prosthetic and orthotic users to help them take  good and proper care of their devices after a long usage our patient trust us to help them fix whatever is broken or needs a replacement on their devices to ensure they keep up to their tasks of daily living.
          </p>
        </div>
      </div>
    </div>
  )
}

export default maintenance