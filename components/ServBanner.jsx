import React from 'react'

const ServBanner = (props) => {
  return (
    <div className='serv-banner' style={{
        background: `url(${props.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.35)',
        padding: '120px 50px',
        borderRadius: '15px',
        marginBottom: '60px',
        width: '100%'
    }}>
        <h1 style={{marginBottom: '80px', color: '#fff'}}>{props.heading}</h1>
        <p  style={{color: '#fff'}}>{props.text}</p>
    </div>
  )
}

export default ServBanner