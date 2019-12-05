import React from "react";

// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Doughnut, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import CardsHeader from "components/Headers/CardsHeader.jsx";

import {
  chartOptions,
  parseOptions,
  chartExample2,
  chartExample5
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <CardsHeader name="Home" parentName="Dashboard" />
        <Container className="mt--6" fluid>
          <Row>
          <Col xl="6">
              <Card>
                <CardHeader>
                  <h6 className="surtitle">Gráfico em Barras</h6>
                  <h5 className="h3 mb-0">Últimos 6 meses</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                      className="chart-canvas"
                      id="chart-bars"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardHeader>
                  <h6 className="surtitle">Gráfico em Donut</h6>
                  <h5 className="h3 mb-0">Dados deste mês</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Doughnut
                      data={chartExample5.data}
                      options={chartExample5.options}
                      className="chart-canvas"
                      id="chart-doughnut"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
