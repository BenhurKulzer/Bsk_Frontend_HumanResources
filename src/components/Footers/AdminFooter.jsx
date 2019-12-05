/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Calendar extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <footer className="footer pt-0">
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="12">
                <div className="copyright text-center text-xl-left text-muted">
                  © {(new Date().getFullYear())}
                  <a
                    className="font-weight-bold ml-1"
                    href="https://www.bsksistemas.com.br"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    BSK Desenvolvimento de Software
                  </a>
                </div>
              </Col>
            </Row>
          </footer>
        </Container>
      </>
    );
  }
}

export default Calendar;
