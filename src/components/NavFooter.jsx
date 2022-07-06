import logo from "../logo.png";
import logopayment from "../payment.png";
import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavFooter = () => {
    return (
        <div className="footer-top">
          <Container>
            <Row>
              <div class="col-md-6 col-lg-4">
                <div class="about-footer">
                  <div class="need-help">
                    <p class="phone-info">NECESITA AYUDA?<span>(+01) 777 888 <br />(+51) 999 999 999</span></p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4"><div class="about-footer"><a href="#"><img src={logo} className="img-fluid" alt="logo" /></a></div></div>
              <div class="col-md-6 col-lg-4">
                <div class="about-footer">
                  <div class="social-info">
                      <ul class="text-end">
                        <li><a href="#"><FontAwesomeIcon icon={["far", "facebook"]} /> <span>Facebook</span></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={["far", "twitter"]} /> <span>Twitter</span></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={["far", "youtube"]} /> <span>Youtube</span></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={["far", "instagram"]} /> <span>Instagram</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Row>
          </Container>
          <Container>
            <Row>
              <div className="col-md-6 col-lg-5 text-center text-md-start order-2 order-md-1 mt-4 mt-md-0">
                <p class="copy-text">Copyright © JMM. Todos los derechos Reservados</p>
              </div>
              <div className="col-md-6 col-lg-7 text-center text-md-end order-1 order-md-2">
                <img src={logopayment} className="img-fluid" alt="logo" />
              </div>
            </Row>
          </Container>
        </div>
    );
}
 
export default NavFooter;