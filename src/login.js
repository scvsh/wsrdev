import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class History extends Component {
    render() {
        return (
            <div className="App">
              { /* Header carousel */ }
              <WsrCarousel />
              { /* Left sidebar */ }
              <WsrMainMenu/>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Col xs={ 0 } sm={ 4 } md={ 4 } lg={ 4 } />
                  <Col xs={ 12 } sm={ 7 } md={ 5 } lg={ 6 }>
                    <WsrBlockTitle title="Вход" />
                    <WsrBlockBlank type="wsr-login-block">
                      <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} sm={2}>
                            Почта
                          </Col>
                          <Col sm={10}>
                            <FormControl type="email" placeholder="Введите адрес" />
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                          <Col componentClass={ControlLabel} sm={2}>
                            Пароль
                          </Col>
                          <Col sm={10}>
                            <FormControl type="password" placeholder="Ввведите пароль" />
                          </Col>
                        </FormGroup>

                        <FormGroup>
                          <Col xs={6} smOffset={2} sm={5}>
                            <Checkbox>Запомнить этот браузер</Checkbox>
                          </Col>
                          <Col  xs={6} sm={5}>
                            <FormControl.Static className="text-right wsr-forgot-password">
                                Забыли пароль?
                              </FormControl.Static>
                          </Col>
                              
                        </FormGroup>

                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Button type="submit">
                              Войти
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                   </WsrBlockBlank>
                    
                  </Col>
                </Row>
                </Grid>
                { /* Bottom Gallery */ }
                <Row>
                  <OwlCarousel className="owl-theme" loop items={ 4 } margin={ 0 } nav={ false } dots={ false }>
                    <div className="item">
                      <Image src="/Images/thumb01.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb02.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb03.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb04.jpg" className="wsr-gallery-item" responsive />
                    </div>
                  </OwlCarousel>
                </Row>
                { /* Footer */ }
                <WsrFooter/>
            </div>
        );
    }
}

export default History;

/* */
