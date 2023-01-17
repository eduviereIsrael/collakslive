import React from 'react'
import { ServBanner } from '../components'

const orthosis = () => {
  return (
    <div className='orthosis sect-wrap'>
      <div className='container'>
        <ServBanner 
        url = '/bracing-l.webp' 
        heading='ORTHOSIS' 
        text='We offer orthotic bracing to provide support for weakened body parts or joints.' />

        <div className='copy'>
          <p>Orthotic devices may be recommended for aligning and supporting the joints of the skeletal system preventing, correcting or accommodating deformities. improving the overall function of the skeletal system. Orthotic braces, or orthoses, are used to provide support to a weakened body part or joint. While many times they are worn for a short period of time, usually after an injury or surgery, some braces are used to address long term or chronic conditions.
          </p>
          <p>There are three common types of orthotics known as soft, rigid, and semi-rigid. Soft orthotics are made to provide extra cushioning while the foot is planted on the ground. Semi-rigid orthotics, which are often used on flat feet, are designed to provide both cushioning and stability.
          </p>
          <p>7 Signs You might need Orthotics</p>
          <ul>
            <li>You have foot pain or swelling</li>
            <li>You have sharp heel pain.</li>
            <li>You have a flat foot or high arch.</li>
            <li>You&apos;re having problems with balance or are falling over. </li>
            <li>Your shoes are wearing unevenly.</li>
            <li>You&apos;ve had a lower limb injury.</li>
            <li>You have diabetic foot complications.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default orthosis
