import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Table,  Grid, Row, Col, Image } from "react-bootstrap";

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
                    <WsrBlockTitle title="V Открытый чемпионат профессионального мастерства" />
                    <WsrPage type="wsr-page" heading="История ОЧМ «Московские мастера»" description="" date="10.05.2017">
                      <p>С 2015 года Региональный чемпионат города Москвы и конкурс профессионального мастерства «Московские мастера» объединены в одно мероприятие - «Открытый чемпионат профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia». Это объединение дало некий синергетический эффект, так как наработки московских мастеров и мировые практики WorldSkills позволили вывести региональный чемпионат на качественно новый уровень.
                        <br/>
                        <br/>IV Открытый чемпионат профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia прошел с 20 октября по 12 ноября 2015 года.
                        <br/>
                        <br/>В чемпионате Москвы 2015 года было заявлено:
                        <br/>
                      </p>
                      <Table   hover>
                        <tbody>
                          <tr>

                            <td>История, основные понятия и стандарты WorldSkills</td>
                          </tr>
                          <tr>

                            <td>Информационное и программное обеспечение работы эксперта</td>
                          </tr>
                          <tr>

                            <td>Проведение чемпионатов по стандартам WorldSkills Russia и ознакомление с работой в электронной системе CIS</td>
                          </tr>
                            <tr>

                            <td>Тестирование</td>
                          </tr>
                        </tbody>

                        <p>В V Открытом чемпионате профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia примет участие более 2000 человек.
                      </p>
                      </Table>
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
