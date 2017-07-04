import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrTeamMemberItem, WsrMedal, WsrExpertSearch, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

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
                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                    <Col sm={ 9 } md={9} lg={10} className="full-size"><WsrExpertSearch categories={ ["Все категории", "Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Все компетенции", "Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                  </Col>
                </Row>
                
                <Row className="containter-fluid">

                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 7 } md={ 8 } lg={ 9 } className="full-size">  
                    <WsrBlockTitle title="Строительная сфера" />
                    <Row>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                      <WsrTeamMemberItem  name="Воронков  Никита Александрович" competence="Камнетесное дело" tier="secondary"  host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg" >
                                        <WsrMedal tier="secondary" medal="gold"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Калединцев Сергей Юрьевич"> 
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                  </Col>    
                                        
                          </Row>
                          <WsrBlockTitle title="Строительная сфера" />
                    <Row>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Калединцев Сергей Юрьевич"> 
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                      <WsrTeamMemberItem  name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="secondary"  host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>

                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                      <WsrTeamMemberItem  name="Воронков  Никита Александрович" competence="Камнетесное дело" tier="secondary"  host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg" >
                                        <WsrMedal tier="secondary" medal="gold"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                  </Col>    
                                        
                          </Row>

                                  </Col>
                                  <Col sm={ 2 } md={ 1 } lg={ 1 }>
                                  <WsrBlockTitle title="Год" />
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/"><ListGroupItem active>2017</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>2016</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>2015</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>2014</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>2013</ListGroupItem></LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
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
