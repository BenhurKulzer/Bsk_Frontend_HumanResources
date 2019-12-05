import React from "react";

// Componentes do ReactStrap
import {
  Card,
  Label,
  CardHeader,
  Input,
  FormGroup,
  Form,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class NewAdmission extends React.Component {
  render() {
    return (
      <>
        {/* Cabeçalho Vazio */}
        <SimpleHeader name="Admissão" parentName="Lista de Admissão" />

        {/* Conteúdo */}
        <Container className=" mt--6" fluid>
        
          {/* Tabela */}
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Novo Colaborador</h3>
                    </Col>

                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="md"
                      >
                        Retornar
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                
                <CardBody>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-username">Nome Completo</label>
                            
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Ex. Fulano da silva"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-email">E-Mail</label>
                            
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Ex. fulano@gmail.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-first-name">Telefone <small>(SMS/Whatsapp)</small></label>
                            
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Ex. (51) 9 9999.9999"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <Label for="exampleSelect">Tipo de Contrato</Label>
                            <Input type="select" name="select" id="exampleSelect">
                              <option>CLT - Indeterminado</option>
                              <option>Temporário</option>
                              <option>PJ</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="align-items-center">
                        <Col xs="12">
                          <Button
                            color="outline-primary"
                            size="md"
                            onClick={e => e.preventDefault()}
                          >
                            Cadastrar Colaborador
                          </Button>
                        </Col>
                      </Row>
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

export default NewAdmission;
