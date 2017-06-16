import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";
/* import { Link } from 'react-router-dom' */
import { MdMail, MdPhone, MdGroup, MdWork } from "react-icons/lib/md";

import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import { Panel, Table, ListGroup, ListGroupItem, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Modal, Grid, Row, Col, Image} from "react-bootstrap";

/* Import WSR React components*/

import { WsrPage, WsrGalleryItem, WsrSpinner, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlock, WsrBlockBlank, WsrNewsItem, WsrPartnersItem, WsrNumbersItem, WsrFooter,} from "./wsr-components.js";


/* Main app */

class Contact extends Component {
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
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 }>
                    <WsrBlockTitle title="Контакты" />
                      <WsrPage type="wsr-page" heading="Связаться с нами" description="" date="10.05.2017">
                      <p>Мы ведем активное сотрудничество с сообществом WorldSkills Russia, социальными и бизнес-партнерами, участниками команды Москвы, экспертами и образовательными организациями! 
                      Будем рады помочь вам разместить информацию, связанную с Движением WorldSkills в Москве!
                      </p>
                      

                    </WsrPage>

                  
                      <WsrBlockBlank>
                      <Table className="wsr-expert-table" striped hover>
                            <thead>
                              <tr>
                                <th><MdGroup className="ri-contacts" />ФИО</th>
                                <th><MdWork className="ri-contacts" />Должность</th>
                                <th><MdPhone className="ri-contacts" />Телефон</th>
                                <th><MdMail className="ri-contacts" />Почта</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="wsr-contact__name">Калугина Ксения Евгеньевна</td>
                                <td>Руководитель РКЦ WorldSkills Russia по городу Москва</td>
                                <td className="wsr-contact__phone"><a href="tel:+74995770056"> +7 499 577 00-56</a></td>
                                <td className="wsr-contact__email"><a href="mailto:direct@wsr.msk.ru">  direct@wsr.msk.ru</a></td>
                              </tr>
                              <tr>
                                <td className="wsr-contact__name">Шпитонова Пелагея</td>
                                <td>Руководитель организационного отдела</td>
                                <td className="wsr-contact__phone"><a href="tel:+74995770056">+7 499 577 00-56 </a><br />доп. 107</td>
                                <td className="wsr-contact__email"> <a href="mailto:mail@wsr.msk.ru"> mail@wsr.msk.ru</a></td>
                              </tr>
                              <tr>
                                <td className="wsr-contact__name">Лабуза Иван</td>
                                <td>Руководитель направления по работе с партнерами</td>
                                <td className="wsr-contact__phone"> <a href="tel:+74995770056">+7 499 577 00-56</a>,<br/><a href="tel:+79290416333"> +7 929 041 63-33</a> </td>
                                <td className="wsr-contact__email"> <a href="mailto:partner@wsr.msk.ru"> partner@wsr.msk.ru</a></td>
                              </tr>
                              <tr>
                                <td className="wsr-contact__name">Тарасова Наталия</td>
                                <td>Руководитель медиапроектов</td>
                                <td className="wsr-contact__phone"> <a href="tel:+74995770056">+7 499 577 00-56,</a><br/> <a href="tel:+79296284202">+7 929 628 42-02</a></td>
                                <td className="wsr-contact__email"><a href="mailto:media@wsr.msk.ru"> media@wsr.msk.ru</a></td>
                              </tr>
                            </tbody>
                          </Table>

                      </WsrBlockBlank>
                  



                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={'\u00A0'} />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/press/contact"><ListGroupItem>Контакты</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/press/important"><ListGroupItem>Важная информация</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/photo-gallery"><ListGroupItem>Фотогалерея</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Видеогалерея</ListGroupItem></LinkContainer>

    
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>
                </Row>
                { /* Bottom Gallery */ }
                <Row>
                  <OwlCarousel className="owl-theme" loop  items={ 4 } margin={ 0 } nav={ false } dots={ false }>
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
              </Grid>
            </div>
        );
    }
}

export default Contact;

/* */
