import React from 'react'
import { ServBanner } from '../components'

const physiotherapy = () => {
  return (
    <div className='physiotherapy sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/physiotheraphy-l.webp' 
        heading='PHYSIOTHERAPY' 
        text='Physiotherapy/gait education.' />

        <div className='copy'>
          <p>A person with an amputation, in the prosthetic phase, can continue to improve greatly if they are taught about the major goals of the post-fitting stage. Physiotherapy treatment focuses supporting,
          </p>
          <p>Exercises to minimise stiffness in other joints and work towards strengthening whilst the patient remains on bed-rest.
          </p>
          <ul>
            <li>Range of motion</li>
            <li>Strength</li>
            <li>Balance</li>
            <li>Coordination</li>
            <li>Agility</li>
            <li>Endurance</li>
          </ul>

          <p>Physiotherapy during rehabilitation ensures the best results in returning to an active, independent lifestyle.</p>
        </div>
      </div>
    </div>
  )
}

export default physiotherapy