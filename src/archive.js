import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";




import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import { Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrSpinner, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlock, WsrFooter, } from "./wsr-components.js";


/* Main app */

class Archive extends Component {

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
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 6 }>
                    <WsrBlockTitle link="/press/important" title="Мероприятия" />
                    <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
            На международном чемпионата China International Skills Competition 2017 (CISC-2017)" date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                    <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г.
                                                                                                                               Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                    <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
            На международном чемпионата China International Skills Competition 2017 (CISC-2017)" date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                    <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г.
                                                                                                                               Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                    <WsrSpinner />
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={ 'Календарь' } />
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

export default Archive;

/* */
