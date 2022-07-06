import logo from "../logo.png";
import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

const NavFooter = () => {
    return (
        <div className="footer-top">
          <Container>
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
          </Container>
        </div>
    );
}
 
export default NavFooter;