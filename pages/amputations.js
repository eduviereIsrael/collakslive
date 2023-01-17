import React from 'react'
import { ServBanner } from '../components'

const amputations = () => {



  
  return (
    <div className='amputations sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/amputations-l.webp' 
        heading='AMPUTATIONS' 
        text='We administer prosthetic devices for upper and lower body amputees.' />

        <div className='copy'>
          <p>At Collaks care we administer prosthetic devices for patients living with disabilities.
          We help our patients with devices that supports for a large varienty of body parts including arms, legs, ears, nose and much more.
          </p>
          <p>We are an expert in this field and have successful improved the living conditions of 100+ patients who have suffered from one or more amputations.
          </p>
          <p>We understand that living in these conditions might be tough for patients so we will do our best to support and guide you to make sure
          you have the best experience during the process.
          </p>
          <p>And after amputations? we still offer a 1 year warranty so that we can handle any difficulties you face moving forward.
          </p>
          <p>If you wish to make more enquiries, click the button below to start a conversation.
          </p>
        </div>
      </div>

    </div>
  )
}

export default amputations