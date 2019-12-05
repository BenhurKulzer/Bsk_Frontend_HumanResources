import React from "react";

// javascipt plugin for creating charts
import Chart from "chart.js";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import AlternativeHeader from "components/Headers/AlternativeHeader.jsx";
import ReactBSTables from "../tables/ReactBSTables";

import {
  chartOptions,
  parseOptions
} from "variables/charts.jsx";

class Alternative extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <AlternativeHeader name="Admissão" parentName="Lista de Admissão" />
        
        <Container className="mt--6" fluid>
          <Row>
            
            <Col md="6" xl="3">
              <Card className="bg-gradient-success border-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0 text-white"
                      >
                        Finalizados
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0 text-white">
                        5/50
                      </span>
                      <Progress
                        className="progress-xs mt-3 mb-0"
                        max="100"
                        value="10"
                        color="gray-dark"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" xl="3">
              <Card className="bg-gradient-info border-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0 text-white"
                      >
                        Em Progresso
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0 text-white">
                        15/50
                      </span>
                      <Progress
                        className="progress-xs mt-3 mb-0"
                        max="100"
                        value="30"
                        color="gray-dark"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" xl="3">
              <Card className="bg-gradient-danger border-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0 text-white"
                      >
                        Atrasados
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0 text-white">
                        25/50
                      </span>
                      <Progress
                        className="progress-xs mt-3 mb-0"
                        max="100"
                        value="50"
                        color="gray-dark"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" xl="3">
              <Card className="bg-gradient-warning border-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0 text-white"
                      >
                        Não Iniciados
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0 text-white">
                        5/50
                      </span>
                      <Progress
                        className="progress-xs mt-3 mb-0"
                        max="100"
                        value="10"
                        color="gray-dark"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>

        <ReactBSTables />
      </>
    );
  }
}

export default Alternative;
