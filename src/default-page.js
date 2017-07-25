import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Modal, Button, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrNewsItem, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class DefaultPage extends Component {

      constructor(props) {
        super(props);
        this.state = { showModal: false };
      }

      closeModal = () => {
        this.setState({ showModal: false });
      }

      openModal = () => {
        this.setState({ showModal: true });
      }

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
                    <WsrBlockTitle title="Набор тегов базовой страницы" />
                    <WsrPage type="wsr-page" heading="" description="" date="10.05.2017">
                      <h3>Заголовки</h3>
                      <hr />
                      <h1>h1. Это очень большой заголовок</h1>
                      <h2>h2. Это большой заголовок</h2>
                      <h3>h3. Это средний заголовок</h3>
                      <h4>h4. Это небольшой заголовок</h4>
                      <h5>h5. Это маленький заголовок</h5>
                      <h6>h6. Это крошечный заголовок</h6>
                      <hr />
                      <h3>Параграф</h3>
                      <p>
                        Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's
                        the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the
                        kids. They called me Mr Glass.
                      </p>
                      <h3>Изображение</h3>
                      <img src="/Images/about/2.jpg" alt=""></img>
                      <hr />
                      <h3>Ссылки</h3>
                      <p>
                        Now that we know who you are, I know who I am. I'm not a <a href="">mistake!</a> It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's
                        the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the
                        kids. They called me Mr Glass.
                      </p>
                      <hr />
                      <h3>Стили текста</h3>
                      <b>b. Жирный</b> <br />
                      <em>em. Курсивный</em><br />
                      <cite>cite. Цитата в параграфе</cite><br />
                      <pre>pre. Текстовая панель</pre>
                      <hr />
                      <h3>Список</h3>
                      <ul>
                        <li>Элемент списка с большим содержанием</li>
                        <li>Элемент списка</li>
                        <li>Элемент списка
                          <ul>
                            <li>Вложенный элемент списка</li>
                            <li>Вложенный элемент списка</li>
                            <li>Вложенный элемент списка</li>
                          </ul>
                        </li>
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                      </ul>
                      <hr />
                      <h3>Цитата</h3>
                      <blockquote>Those people who think they know everything are a great annoyance to those of us who do.<cite>Isaac Asimov</cite></blockquote>
                      <Button onClick={this.openModal}>
                      Открыть модальное окно
                      </Button>


                      <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-center">Модальное окно</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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
                    </Modal.Body>
                  </Modal>


                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Новости" />
                    <WsrBlockBlank type="wsr-block-news">
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
                      <div className="wsr_block-menu__divider" />
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
                      <div className="wsr_block-menu__divider" />
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
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

export default DefaultPage;

/* */
