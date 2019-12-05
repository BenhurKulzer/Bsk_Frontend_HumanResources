/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer>
          <Container>
            <Row className="text-center">
              <Col xl="12">
                <a
                  className="text-light"
                  href="https://bsksistemas.com.br"
                  onClick={e => e.preventDefault()}
                >
                  <small>BSK Desenvolvimento de Software</small>
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
