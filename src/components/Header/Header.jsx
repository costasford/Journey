import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header ({handleLogout, user}){
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          Journey
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/aboutus"
              className={location.pathname === '/aboutus' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/recordings"
              className={location.pathname === '/recordings' ? 'active' : ''}
            >
              ABA Methods
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contactus"
              className={location.pathname === '/contactus' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            {user && (
              <Nav.Link 
                as={Link} 
                to="/dashboard"
                className={location.pathname.includes('/dashboard') ? 'active fw-bold' : ''}
              >
                📊 Dashboard
              </Nav.Link>
            )}
          </Nav>
          
          <Nav>
            {user ? (
              <Button 
                variant="outline-light" 
                onClick={handleLogout}
                className="ms-2"
              >
                Logout
              </Button>
            ) : (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/login"
                  className={location.pathname === '/login' ? 'active' : ''}
                >
                  Login
                </Nav.Link>
                <Button 
                  as={Link} 
                  to="/signup" 
                  variant="outline-light"
                  className="ms-2"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}