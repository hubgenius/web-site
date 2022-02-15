import React from 'react'
import { Nav, Navbar, Container,Offcanvas  ,Form,FormControl,Button   } from 'react-bootstrap'
// import HomeIcon from '@mui/icons-material/Home';
import HomeIcon from '@material-ui/icons/Home';

 const Website = () => {
  return (
    <>  
   {/* <Nav >
   <Navbar bg="light" expand={false}>
  <Container fluid>
          <Nav class='nav'>
              <Nav.Item><Nav.Link href=''> <HomeIcon/> </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href=''>About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href=''> Contact Us</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href=''>Info</Nav.Link></Nav.Item>
          </Nav>
    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
    
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      ></Nav>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About Us</Nav.Link>
          <Nav.Link href="/Contact">contact</Nav.Link>
          <Nav.Link href="/Info">Info</Nav.Link> */}

          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
            Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        {/* </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>


   </Nav>
 */}
 <Navbar bg="light" expand="lg">
  <Container fluid>
    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Abput">About Us</Nav.Link>
        <Nav.Link href="/Contact">Contact Us</Nav.Link>
        <Nav.Link href="/Info">Information</Nav.Link>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}
export default Website


