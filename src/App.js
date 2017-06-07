import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";

import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import { Button, Grid, Row, Col, Nav, NavItem, Carousel, Image, Navbar, MenuItem, NavDropdown } from "react-bootstrap";

/* Import WSR React components*/

import { WsrMenuBg, WsrMenuTitle, WsrBlockTitle, WsrBlock, WsrBlockBlank, WsrNewsItem, WsrPartnersItem, WsrNumbersItem, WsrGallery, WsrFooter, WsrCarouselMenu } from "./wsr-components.js";

/* Import Icons */

import { MdApps, MdSearch, MdVpnKey, MdMenu } from "react-icons/lib/md";

/* Main app */

class App extends Component {
    render() {
        return (
            <div className="App">
              <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">РКЦ WorldSkills Russia</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavDropdown eventKey={ 1 } title="Wsr в Москве" id="basic-nav-dropdown">
                      <MenuItem eventKey={ 1.1 }>Об РКЦ</MenuItem>
                      <MenuItem eventKey={ 1.2 }>
                        История WorldSkills
                      </MenuItem>
                      <MenuItem eventKey={ 1.3 }>
                        Активные мероприятия
                      </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={ 2 } title="Эксперты" id="basic-nav-dropdown">
                      <MenuItem eventKey={ 2.1 }>
                        Инофрмация для экспертов
                      </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={ 3 } title="СЦК" id="basic-nav" />
                    <NavDropdown eventKey={ 4 } title="Компетенции" id="basic-nav" />
                    <NavDropdown eventKey={ 5 } title="Проекты" id="basic-nav-dropdown">
                      <MenuItem eventKey={ 5.1 }>
                        Региональный эксперт WSR
                      </MenuItem>
                      <MenuItem eventKey={ 5.1 }>Эксперт ДЭ</MenuItem>
                      <MenuItem eventKey={ 5.1 }>
                        Обучение становлению СЦК
                      </MenuItem>
                      <MenuItem eventKey={ 5.1 }>
                        Обучение экспертов WorldSkills
                      </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={ 6 } title="Партнёры" id="basic-nav-dropdown">
                      <MenuItem eventKey={ 6.1 }>
                        Наши партнёры
                      </MenuItem>
                      <MenuItem eventKey={ 6.1 }>
                        Стать партнёром
                      </MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={ 7 } title="Пресс-центр" id="basic-nav-dropdown">
                      <MenuItem eventKey={ 7.1 }>Новости</MenuItem>
                      <MenuItem eventKey={ 7.1 }>
                        Важная информация
                      </MenuItem>
                      <MenuItem eventKey={ 7.1 }>Фотогалерея</MenuItem>
                      <MenuItem eventKey={ 7.1 }>Видеогалерея</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              { /* Header carousel */ }
              <Carousel indicators={ false } controls={ false }>
                <Carousel.Item>
                  { /* Carousel menu */ }
                  <Grid bsClass="containter-fluid">
                    <Row>
                      <Col xs={ 2 } md={ 5 } lg={ 3 } className="wsr-carousel-menu__bg pull-right">
                        <Button bsClass="wsr-skewed-btn skew-left text-right">
                          <span className="skew-right">
                                    	<MdApps className="ri-big" />
                                        	Архив мероприятий
                                      </span>
                        </Button>
                        <Nav className="wsr-carousel-menu text-right pull-right" bsStyle="pills" stacked activeKey={ 1 }>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 1 } href="/home">
                            V ОЧМ «Московские мастера»
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 2 } href="/home">
                            Всероссийские отборочные соревнования
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 3 } href="/home">
                            Демонстрационный экзамен по стандартам WorldSkills
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 4 } href="/home">
                            Juniorskills
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Grid>
                  <img className="wsr-carousel-image" alt="900x500" src="/Images/gallery03.jpg" />
                </Carousel.Item>
              </Carousel>
              <Grid bsClass="containter-fluid">
                <Row>
                  { /* Left sidebar */ }
                  <div className="">
                    <div className="wsr-burger__background text-center">
                      { /*	<div className="wsr-burger__icon text-center"> <MdMenu /></div> */ }
                    </div>
                  </div>
                  <Col xs={ 5 } md={ 5 } lg={ 3 }>
                    <div className="wsr-affix">
                      <div className="wsr-affix">
                        <WsrMenuTitle />
                        <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left">
                          <span className="skew-left">
                                                                           											<MdVpnKey className="ri-big" />
                                                                           											Личный кабинет
                                                                           										</span>
                        </Button>
                        <Row>
                          <Nav className="wsr-menu" bsStyle="pills" stacked activeKey={ 1 }>
                            <NavItem className="wsr-menu-item" eventKey={ 1 } href="/home">
                              { "Wsr в Москве".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 2 } href="/home">
                              { "Эксперты".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 3 } href="/home">
                              { "СЦК".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 4 } href="/home">
                              { "Компетенции".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 5 } href="/home">
                              { "Проекты".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 6 } href="/home">
                              { "Партнёры".toUpperCase() }
                            </NavItem>
                            <NavItem className="wsr-menu-item" eventKey={ 3 } href="/home">
                              { "Пресс-центр".toUpperCase() }
                            </NavItem>
                          </Nav>
                          <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left">
                            { " " }
                            <span className="skew-left">
                                                                           												<MdSearch className="ri-big" />
                                                                           												Поиск
                                                                           											</span>
                            { " " }
                          </Button>
                        </Row>
                      </div>
                      <WsrMenuBg />
                    </div>
                  </Col>
                </Row>
              </Grid>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 4 } lg={ 5 }>
                    <WsrBlockTitle title="Важная информация" />
                    <WsrBlock type="wsr-block-important" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                           «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                       Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                    <WsrBlock type="wsr-block-important" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                           «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                       Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                    <WsrBlockTitle title="Анонсы мероприятий" />
                    <WsrBlock type="wsr-block-announce" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                           «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                       Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                    <WsrBlock type="wsr-block-announce" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                           «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                       Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                  </Col>
                  { /* Block numbers */ }
                  <Col xs={ 12 } sm={ 3 } md={ 3 }>
                    <WsrBlockTitle title="РКЦ в цифрах" />
                    <WsrBlockBlank type="wsr-block-news">
                      <Row>
                        <WsrNumbersItem number="1457" description="Человек входят
                                                                           в состав сборной команды WS Москвы" />
                        <WsrNumbersItem number="98" description="Человек входят
                                                                           в экспертное сообщество" />
                      </Row>
                      <Row className="wsr-numbers__row">
                        <WsrNumbersItem number="20" description="Победителей Национальных Международных соревенований WorldSkills среди участников Сборной команды Москвы" />
                        <WsrNumbersItem number="61" description="Компетенцию представляет Москва" />
                      </Row>
                    </WsrBlockBlank>
                    { /* Block News */ }
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
                  { /* Block partners */ }
                  <Col xs={ 12 } sm={ 3 } md={ 2 }>
                    <WsrBlockTitle title="Партнёры" />
                    <WsrBlockBlank type="wsr-block-partners">
                      <WsrPartnersItem>
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_01.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_02.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_03.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_04.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_05.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="Images/panel_logo_06.svg" responsive />
                        </div>
                      </WsrPartnersItem>
                    </WsrBlockBlank>
                  </Col>
                </Row>
                { /* Bottom Gallery */ }
                <Row>
                <OwlCarousel className="owl-theme" loop margin={10} nav items={ 4 } margin={ 0 } nav= { false } dots={ false } >
					<div className="item"><Image src="/Images/thumb01.jpg" className="wsr-gallery-item" responsive /></div>
				    <div className="item"><Image src="/Images/thumb02.jpg" className="wsr-gallery-item" responsive /></div>
				    <div className="item"><Image src="/Images/thumb03.jpg" className="wsr-gallery-item" responsive /></div>
				    <div className="item"><Image src="/Images/thumb04.jpg" className="wsr-gallery-item" responsive /></div>
				</OwlCarousel>
               
                </Row>
                { /* Footer */ }
                <WsrFooter>
                  <div className="wsr_footer__divider" />
                  <Col md={ 3 } />
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Wsr в Москве".toUpperCase() }
                    </h7>
                    <p>Об РКЦ</p>
                    <p>История WorldSkills</p>
                    <p>Активные мероприятия</p>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Эксперты".toUpperCase() }
                    </h7>
                    <p>Инофрмация для экспертов</p>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "СЦК".toUpperCase() }
                    </h7>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Компетенции".toUpperCase() }
                    </h7>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Проекты".toUpperCase() }
                    </h7>
                    <p>Региональный эксперт WSR</p>
                    <p>"Эксперт ДЭ</p>
                    <p>Обучение становлению СЦК</p>
                    <p>Обучение экспертов WorldSkills</p>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Партнёры".toUpperCase() }
                    </h7>
                    <p>Наши партнёры</p>
                    <p>Стать партнёром</p>
                  </Col>
                  <Col md={ 1 }>
                    <h7 className="wsr-footer__heading">
                      { "Пресс-центр".toUpperCase() }
                    </h7>
                    <p>Новости</p>
                    <p>Важная информация</p>
                    <p>Фотогалерея</p>
                    <p>Видеогалерея</p>
                  </Col>
                </WsrFooter>
              </Grid>
            </div>
        );
    }
}

export default App;

/* */
