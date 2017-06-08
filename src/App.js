import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
/* import { Link } from 'react-router-dom' */

import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import { Button, Grid, Row, Col, Nav, NavItem, Carousel, Image} from "react-bootstrap";

/* Import WSR React components*/

import { WsrMainMenu, WsrBlockTitle, WsrBlock, WsrBlockBlank, WsrNewsItem, WsrPartnersItem, WsrNumbersItem, WsrFooter,} from "./wsr-components.js";

/* Import Icons */

import { MdApps} from "react-icons/lib/md";

/* Main app */

class App extends Component {
    render() {
        return (
            <div className="App">
              
              { /* Header carousel */ }
              <Carousel className="wsr-header__carousel" indicators={ false } controls={ false }>
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
              
                  { /* Left sidebar */ }
                  
                  <WsrMainMenu/>
                
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
                  <Col xs={ 12 } sm={ 0 } md={ 2 }>
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

export default App;

/* */
