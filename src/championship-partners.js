import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Thumbnail,  Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrChampionshipSideMenu, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrFooter } from "./wsr-components.js";

/* Main app */

class Championship extends Component {
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
                  <Col xs={ 12 } sm={ 7 } md={ 7 } lg={ 7 }>
                    <WsrBlockTitle title="Партнёрство" />
                    <WsrPage type="wsr-page" heading="Партнёры" description="" date="10.05.2017">
                      
                      <p>
                      <LinkContainer to="/partners/become-a-partner"><a>Присоединяйтесь к лиге профессионалов! Будьте с нами – будьте в Движении WorldSkills!</a></LinkContainer>
                      <br/>
                      <br/>Региональный координационный центр WorldSkills Russia выражает благодарность компаниям, которые внесли вклад в проведение V Открытого чемпионата профессионального мастерства города Москвы «Московские мастера» по стандартам WorldSkills Russia:
                        <br/>
                        <br/><a href="http://www.prosv.ru/">Издательство «Просвещение»</a> поддержало компетенцию «Преподаватель младших классов».
                      </p>
                      <Thumbnail href="#" alt="171x180" src="/Images/championship/1.jpg" />
                      <p>
<a href="http://ru.dmgmori.com/">Компания DMG MORI</a> Россия поддержала компетенцию «Фрезерные работы на станках с ЧПУ».                        <br/>
<br/><br/>   <a href="http://www.mkn.de/cms/mkn/en/mkn/"> Компания MKN (Maschinenfabrik Kurt Neubauer GmbH&Co) </a>являлась партнером чемпионата по компетенции «Поварское дело».
                  </p>
                  <Thumbnail href="#" alt="171x180" src="/Images/championship/2.jpg" />
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={'\u00A0'} />
                    <WsrChampionshipSideMenu/>
                  </Col>
                </Row>
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
              </Grid>
            </div>
        );
    }
}

export default Championship;

/* */
