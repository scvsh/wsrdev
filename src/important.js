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

import { WsrExpert, WsrPage, WsrGalleryItem, WsrSpinner, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlock, WsrBlockBlank, WsrNewsItem, WsrPartnersItem, WsrNumbersItem, WsrFooter,} from "./wsr-components.js";


/* Main app */

class Important extends Component {
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
                     <WsrBlockTitle link="/press/important" title="Новости" />
                    <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                    <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                      <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                    <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                    
                   



                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                  <WsrBlockTitle title="Координатор" />
                                  <WsrBlockBlank className="wsr-block-select">
                      
                      <LinkContainer exact to="/"><WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified"  tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></LinkContainer>

                    </WsrBlockBlank>

                    <WsrBlockTitle title="Пресс-центр" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/press/important"><ListGroupItem>Новости</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/photo-gallery"><ListGroupItem>Фотогалерея</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Видеогалерея</ListGroupItem></LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <a href="http://dogm.mos.ru/presscenter/news/osnovnoy_razdel/"><ListGroupItem>Пресс-служба ДОгМ</ListGroupItem></a>
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

export default Important;

/* */
