import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
/* import { Link } from 'react-router-dom' */

import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Modal, Grid, Row, Col, Image} from "react-bootstrap";

/* Import WSR React components*/

import { WsrShowAll, WsrSpinner, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlock, WsrBlockBlank, WsrNewsItem, WsrPartnersItem, WsrNumbersItem, WsrFooter,} from "./wsr-components.js";


/* Main app */

class App extends Component {
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
                  <Col xs={ 12 } sm={ 5 } md={ 4 } lg={ 5 }>
                    <WsrBlockTitle link="/press/important" title="Важная информация" more />
                    <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                    <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                    <WsrBlockTitle title="Анонсы мероприятий" link="/default" more/>
                    <WsrBlock type="wsr-block-announce" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" link="/default"/>
                    <WsrBlock type="wsr-block-announce" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" link="/default"/>
                      <WsrBlock type="wsr-block-announce" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" link="/default"/>
                       { /* <WsrSpinner /> */ }
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
                    <WsrBlockTitle title="Новости" more/>
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
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_01.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_02.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_03.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_04.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_05.svg" responsive />
                        </div>
                        <div className="wsr_block-menu__divider" />
                        <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/panel_logo_06.svg" responsive />
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
