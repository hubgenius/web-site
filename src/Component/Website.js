import React from 'react'
import { Nav, Navbar, Container,  Form, FormControl, Button } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
const Website = () => {
  return (
      <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
             <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="/">Home <HomeIcon/></Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
              <Nav.Link href="/Info">Information</Nav.Link>
              <Nav.Link href="/F">Form</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)}
export default Website


