import React from 'react'
import Button from 'react-bootstrap/Button';
function Text() {
  return (
    <>
     <div className='container mt-5' style={{ marginLeft: '10px' }}>
      <i>
        <h2 style={{ color: 'white', fontSize: '3rem' }} className='fs-1'>
          Explore The
        </h2>
        <h3 style={{ color: 'white', fontSize: '2rem' }} className='fs-2'>
          Dream
        </h3>
        <h4 style={{ color: 'bisque', fontSize: '1.5rem' }} className='fs-1'>
          Destination
        </h4>
      </i>
      <p className='mt-3' style={{ color: 'white', fontSize: '1rem' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id sed sint doloremque iusto ipsum similique ullam corporis nihil velit, minus illo dolor sapiente reprehenderit quae a! Corporis, possimus maiores?
      </p>
      <Button variant="outline-light" style={{ borderRadius: "20px", fontSize: '1rem', padding: '5px 10px', marginTop: '20px' }}>
        BOOK NOW
      </Button>
    </div>
    </>
  )
}

export default Text
