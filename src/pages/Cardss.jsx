import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardss() {
  return (
    
   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px',marginTop:'20px' }}>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1806766/pexels-photo-1806766.jpeg?auto=compress&cs=tinysrgb&w=300"
            style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>Beach Stay</Card.Title>
            <Card.Text>Let the sea,Set you free...</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600"
            style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>Wild Forest</Card.Title>
            <Card.Text> Into the woods we go. </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2147321/pexels-photo-2147321.jpeg?auto=compress&cs=tinysrgb&w=300"
            style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>Snow Fall</Card.Title>
            <Card.Text>Cold weather, warm hearts.</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
            style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>Beach Stay</Card.Title>
            <Card.Text>Let the sea,Set you free...</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=300"
            style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>Live with the Ocean</Card.Title>
            <Card.Text>Let the sea,Set you free...</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: '1 1 300px', maxWidth: '300px', marginBottom: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=300"
            style={{height:'180px'}}
          />
          <Card.Body>
            <Card.Title>Cloudy Vibes</Card.Title>
            <Card.Text>Sunsets are proof that endings are beautiful..</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
  
    </div>
  )


}

export default Cardss
