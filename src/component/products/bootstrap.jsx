import React, { useState, useEffect } from 'react';
import {Alert, Breadcrumb} from 'react-bootstrap'
import './products.css';
import Navibar from './navbar';
import $ from 'jquery';
import Badge from 'react-bootstrap/Badge';
import {Container, NavDropdown, Jumbotron,NavItem,Card} from 'react-bootstrap'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { ListGroup } from "react-bootstrap";






// function AlertDismissible() {
//   const [show, setShow] = useState(true);
//    //return (
//   //onclick alert
//   if(show){
//     console.log("hi")
//     return(
//     <Alert key="1" variant="danger"onClose={()=>setShow(false)} dismissible>
//       <Alert.Heading>Oh Snap you got an error</Alert.Heading>
//       <p>Change this and that and try again</p>
//     </Alert>
//     )
//   }
//   return <Button onClick={()=>setShow(true)}>Show Alert</Button>

// }



//         <div >
//             <div>
//             <Navbar className="navback" bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav>
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
//             </div>
//             <Container   style={{position:'absolute',top:'100px',marginLeft:'200px'}}>
//                 <Row>
//                     <Col ><div className="smalldiv imgdiv1" id="dragabble"></div></Col>
//                     <Col ><div className="smalldiv imgdiv2"></div></Col>
//                 </Row>
//                 <Row>
//                     <Col> <div className="smalldiv imgdiv3" ></div></Col>
//                     <Col ><div className="smalldiv">React</div></Col>
//                 </Row>
//                 <Row>
//                     <Col> <div className="smalldiv" >React</div></Col>
//                     <Col ><div className="smalldiv">React</div></Col>
//                 </Row>
//                 <Row>
//                     <Col> <div className="smalldiv" >React</div></Col>
//                     <Col ><div className="smalldiv">React</div></Col>
//                 </Row>

//             </Container>

// <Container style={{position:'absolute',top:'1000px',marginLeft:'200px'}}>  
// <Media>
//   <img 
//     width={64}
//     height={64}
//     className="mr-3 media"
    
//     alt="Generic placeholder"
//   />
  
//   <Media.Body>
//     <h5>Media Heading</h5>
//     <p>
//       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
//       ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
//       tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
//       Donec lacinia congue felis in faucibus.
//     </p>
//   </Media.Body>
// </Media>
// </Container> 
           // <div>
             //  <Alert className="alert show" varient='primary'></Alert>

        //  </div>
        
//     )


    
// <Grid>
//         <Jumbotron style={{marginTop:'1050px'}}>
//             <h2>Welcome to ReactBootstrap</h2>
//             <p>Blahhhh</p>
//             <Link to="/about">
//                 <Button  bsstyle="primary">About</Button>
//             </Link>
//         </Jumbotron>
//     </Grid>

//     <div>
//       <Alert key='1'variant="primary">
//           <p> This is a varient alert</p>
//       </Alert>
//     </div>
//     <div>
//       <Alert variant="success">
//         <Alert.Heading>Hey How are u?</Alert.Heading>
//            <p>AWWW yeah this is a success alert</p>
//            <hr/>
//       </Alert>
//     </div>
//     {/* <div> */}
  

// {/* if (show) {
//     <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//       <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//       <p>
//         Change this and that and try again. Duis mollis, est non commodo
//         luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//         Cras mattis consectetur purus sit amet fermentum.
//       </p>
//     </Alert>
  
// }

// return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }
//     </div> */}
//     </div>



//     )
    //)
 //}
  
 //  export default AlertDismissible; 


//  function AlertDismissible(){

// return(
//   <Accordion defaultActiveKey="0">
//     <Card>
//       <Card.Header>
//         <Accordion.Toggle as={Button} variant="link" eventKey="0">
//           Click Me!
//         </Accordion.Toggle>
//       </Card.Header>
//       <Accordion.Collapse eventKey="0">
//         <Card.Body>Hello I am card body</Card.Body>
//       </Accordion.Collapse>
//     </Card>
//     <Card>
//       <Card.Header>
//         <Accordion.Toggle as={Button}variant="link"eventKey="1">
//            Click me!
//         </Accordion.Toggle>
//       </Card.Header>
//       <Accordion.Collapse eventKey="1">
//         <Card.Body>Hi i am second card </Card.Body>
//       </Accordion.Collapse>
//     </Card>
//   </Accordion>
// )
 
//}



//Badge Component
function simulateNetworkRequest(){
  return new Promise((resolve)=>{
    setTimeout(resolve,2000)
  })
}

function AlertDismissible(){
  const[isLoading,setLoading]=useState(false);
  useEffect(()=>{
    if(isLoading){
      simulateNetworkRequest().then(()=>{
        setLoading(false);
      })
    }
  },[isLoading]);
  const handelClick=()=>setLoading(true)
  return(
    <div>
      <div>
        <h1>Example<Badge variant="default">New</Badge></h1>
        <h2>Example<Badge variant="primary">New</Badge></h2>
        <h3>Example<Badge variant="success">New</Badge></h3>
        <h4>Example<Badge variant="secondary">New</Badge></h4>
        <h4>Example<Badge variant="primary">New</Badge></h4>
        </div>
        <div>
        <Badge variant="primary">Primary</Badge>{' '}
        <Badge variant="secondary">Secondary</Badge>{' '}
        <Badge variant="success">Success</Badge>{' '}
        <Badge variant="danger">Danger</Badge>{' '}
        <Badge variant="warning">Warning</Badge>{' '} 
        <Badge variant="info">Info</Badge>{' '}
        <Badge variant="light">Light</Badge> {' '}
        <Badge variant="dark">Dark</Badge>
        </div>

        <div>
  <Badge pill variant="primary">
    Primary
  </Badge>{' '}
  <Badge pill variant="secondary">
    Secondary
  </Badge>{' '}
  <Badge pill variant="success">
    Success
  </Badge>{' '}
  <Badge pill variant="danger">
    Danger
  </Badge>{' '}
  <Badge pill variant="warning">
    Warning
  </Badge>
  <Badge pill variant="info">
    Info
  </Badge>
  <Badge pill variant="light">
    Light
  </Badge>
  <Badge pill variant="dark">
    Dark
  </Badge>
</div>
<div>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
  <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
  </Breadcrumb>
</div>

<div>
  <Button variant='primary'>Primary</Button>
  <Button variant='secondary'>secondary</Button>
  <Button variant='success'>success</Button>
  <Button variant='warning'>warning</Button>
  <Button variant='danger'>danger</Button>
  <Button variant='info'>info</Button>
  <Button variant='light'>light</Button>
  <Button variant='dark'>dark</Button>

</div>
<div>
  <Button variant="outline-primary">Primary</Button>
  <Button variant="outline-success">Success</Button>
</div>
<div>
  <Button variant='primary'size='lg'>large button</Button>
  <Button variant="secondary" size='sm'>Small button</Button>
</div>
{/* block */}
<Button variant="secondary" size='sm'block>Small button</Button>
<div>
  <Button variant="primary"disabled={isLoading}onClick={!isLoading??handelClick(true)}>{isLoading?'Loading..':' Load'}</Button>
</div>
<Card style={{width:'20rem'}}>
  <Card.Img variant='top'src=""/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>Card text example to build on the card</Card.Text>
    <Button variant="success">Go somewhere</Button>
  </Card.Body>

</Card>
<Card style={{ width: '20rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
    </div>

  )
}
export default AlertDismissible 