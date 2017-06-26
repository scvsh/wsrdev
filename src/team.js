import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpertSearch, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload } from "react-icons/lib/md";

/* Main app */

class Team extends Component {
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
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 10 } className="full-size">
                    <WsrExpertSearch categories={ ["Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                    
                    <WsrBlockTitle title="Камнетёсное дело" />
                                  <Col sm={ 3 } md={ 4 } lg={ 3 }>
                    
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич " tier="primary" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                    <WsrTeamMember name="Воронков Никита Александрович" tier="secondary"  expert="ООО «Практика реставрации»" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>
                                  <Col sm={ 3 } md={ 4 } lg={ 3 }>
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич " tier="primary" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                    <WsrTeamMember name="Воронков Никита Александрович" tier="secondary" host="ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>
                                  <Col sm={ 3 } md={ 4 } lg={ 3 }>
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич " tier="primary" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                    <WsrTeamMember name="Воронков Никита Александрович" tier="secondary" host="ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>

                                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/about/rkc"><ListGroupItem>2017</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/history"><ListGroupItem>2016</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>2015</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>2014</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>2013</ListGroupItem></LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>


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

export default Team;

/* */
