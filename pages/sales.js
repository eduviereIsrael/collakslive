import React from 'react'
import { ServBanner } from '../components'

const sales = () => {
  return (
    <div className='sales sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/sales-l.webp' 
        heading='SALES' 
        text='Sales of prosthetic components.' />

        <div className='copy'>
          <p>We provide off-self orthotic splints, braces, prosthetic components and supportive appliances we are your one stop facility for mobility.
          </p>
        </div>
      </div>
    </div>
  )
}

export default sales