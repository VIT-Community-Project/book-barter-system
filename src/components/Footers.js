import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <h1>Contact US</h1>
      <Link to='javascript:void(0)'
        onClick={() => window.location = 'mailto:bumlebook@gmail.com'} style={{ color: '#FFF',textDecoration:'none' }}>
        Email
      </Link>
        <p>
          PhoneNumber : 9876543210
        </p>
    </footer>
  )
}

export default Footer
