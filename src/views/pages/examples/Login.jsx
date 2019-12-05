import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Container,
  Col
} from "reactstrap";

// core components
import AuthHeader from "components/Headers/AuthHeader.jsx";

class Login extends React.Component {
  render() {
    return (
      <>
        <AuthHeader />

        <Container className="mt--9">
          <Row className="justify-content-center">
            <Col md="5" sm="10">
              <Card className="bg-secondary shadow border-0">
                
                <CardHeader className="bg-transparent">
                  <div className="text-center mt-2">
                    <h1><strong>TDShare</strong></h1>
                    <small>Seja bem vindo(a) ao TDShare - RH</small>
                  </div>
                </CardHeader>

                <CardBody className="px-lg-5">
                  
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Insira seu login..." type="email" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Insira sua Senha..." type="password" />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Lembrar minha senha</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="button">
                        Entrar
                      </Button>
                    </div>
                  </Form>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
