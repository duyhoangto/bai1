import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/register')
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Duyhoangto</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>Duyhoangto</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>User</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admin</NavLink>


                    </Nav>
                    <Nav>
                        <button className='btn-login'
                            onClick={() => handleLogin()}

                        >Login</button>
                        <button className='btn-signup' onClick={() => handleRegister()}>Sign Up</button>

                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;