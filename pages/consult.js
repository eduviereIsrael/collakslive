import React from 'react'
import { ServBanner } from '../components'

const consult = () => {
  return (
    <div className='consult sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/consult-l.webp' 
        heading='CONSULTATIONS' 
        text='Consultation for Prosthetics and orthotics.' />

        <div className='copy'>
          <p>Here at collaks prosthetics and orthotics our Orthotists and prosthetists design and fabricate medical supportive devices, measure and fit patients for them. These devices include artificial limbs (arms, hands, legs, and feet), braces, and other medical or surgical devices.
          </p>
          <p>We are a team of healthcare rehabilitation professional who makes and fits artificial limbs (prostheses) for people with disabilities. By so doing we guide and consult amputees on making better decisions towards getting themselves quality and cosmo prosthetic and orthotics limbs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default consult