/* eslint-disable */

import Link from 'next/link'
import React from 'react'



const Card = (props) => {

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        overflow: 'hidden',
        borderRadius: '10px',
        // boxShadow: '0 5px 30px rgb(220, 220, 220, 0.3)'
    }
    
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '227px',
        padding: '20px',
        justifyContent: 'space-between'
    }

  return (
    <div className='primary-card' style={cardStyle}>
        <img src={props.image} alt={props.altText} style={{width: '100%'}}/>
        <div style={divStyle}>
            <span>
                <h5 style={{marginBottom: '10px'}}>{props.title}</h5>
                <p>{props.text}</p>
            </span>
            
            {/* <Link href={props.link}>
                <span  style={{ color: "#000", background: 'orange', display: 'block'}}>
                    <p>{props.linkTexT}</p>
                </span>
            </Link> */}
            <Link href={props.cardLink} style={{ marginTop: 'auto'}}><p className='card-link'>{props.linkText} {props.btnIcon? <img src={props.btnIcon}  /> : ''}</p></Link>
        </div>

        
    </div>
  )
}

export default Card