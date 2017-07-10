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
                                    <WsrTeamMember tier="primary" competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                      <WsrTeamMemberItem  name="Ткачёв Александр Дмитриевич, Дармограй Тимофей Юрьевич, Воронков  Никита Александрович, Юсупов Набихон Маннонович, Моренкова Анастасия Андреевна" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="bronze"/>
                                        <WsrMedal tier="primary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                    <WsrTeamMember tier="secondary" competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                    <WsrTeamMemberItem  name="Плахотнюк Глеб Дмитриевич, Гусева Ирина Денисовна, Кряжов Владимир Алексеевич, Шутовская Ольга Викторовна" competence="Камнетесное дело" tier="secondary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/2.jpg" >
                                        <WsrMedal tier="secondary" medal="gold"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember tier="primary" competence="Кирпичная кладка" expert="Калединцев Сергей Юрьевич"> 
                                      <WsrTeamMemberItem  name="Воронков  Никита Александрович" competence="Камнетесное дело" tier="primary"  host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                    <WsrTeamMember tier="secondary" competence="Кирпичная кладка" expert="  Федорова Елена Викторовна"> 
                                    <WsrTeamMemberItem  name="Моренкова Анастасия Андреевна " competence="Камнетесное дело" tier="secondary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/2.jpg" >
                                        <WsrMedal tier="secondary" medal="gold"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember tier="primary" competence="Краснодеревщик" expert="Калединцев Сергей Юрьевич"> 
                                      <WsrTeamMemberItem  name="Ткачёв Александр Дмитриевич, Моренкова Анастасия Андреевна" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="bronze"/>
                                        <WsrMedal tier="primary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>
                                    <WsrTeamMember tier="secondary" competence="Камнетесное дело" expert="Шкребтиенко Сергей Олегович"> 
                                    <WsrTeamMemberItem  name="Плахотнюк Глеб Дмитриевич, Гусева Ирина Денисовна, Кряжов Владимир Алексеевич, Шутовская Ольга Викторовна" competence="Камнетесное дело" tier="secondary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/2.jpg" >
                                        <WsrMedal tier="secondary" medal="gold"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                        <WsrMedal tier="secondary" medal="silver"/>
                                      </WsrTeamMemberItem>
                                      </WsrTeamMember>
                                  </Col>    
                                        
                          </Row>
                          <WsrBlockTitle title="Специалисты информационных и коммуникационных технологий" />
                    <Row>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                    <WsrTeamMember tier="primary" competence="Интернет вещей" expert="  Поворотова Елена Вячеславовна"> 
                                      <WsrTeamMemberItem  name="Колесниченко Варвара Валерьевна, Попов Дмитрий Сергеевич " competence="Камнетесное дело" tier="primary" medal="gold" host="Московский государственный университет путей сообщения императора Николая II (МГУПС (МИИТ) Московский колледж железнодорожного транспорта Института прикладных технологий  " expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>

                                    </WsrTeamMember>
                                    <WsrTeamMember tier="secondary" competence="Интернет вещей" expert="  Поворотова Елена Вячеславовна"> 
                                      <WsrTeamMemberItem  name="Лукашин Даниил Дмитриевич, Пытин Фёдор Николаевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Московский государственный университет путей сообщения императора Николая II (МГУПС (МИИТ) Московский колледж железнодорожного транспорта Института прикладных технологий " expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>

                                    </WsrTeamMember>
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                  <WsrTeamMember tier="primary" competence="Лазерные технологии" expert="Османов Эльдар Зиннюрович "> 
                                      <WsrTeamMemberItem  name="Селютин Андрей Михайлович " competence="Лазерные технологи" tier="primary" medal="gold" host="Западный комплекс непрерывного образования " expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>

                                    </WsrTeamMember>
                                    <WsrTeamMember tier="secondary" competence="Лазерные технологии" expert="Жесткова Дина Александровна "> 
                                      <WsrTeamMemberItem  name="Петровский Иван Сергеевич" competence="Лазерные технологии" tier="secondary"  host="Московский колледж бизнес-технологий " expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg" >
                                        <WsrMedal tier="secondary" medal="bronze"/>
                                      </WsrTeamMemberItem>
                                    </WsrTeamMember>

                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 4 }>
                                  <WsrTeamMember tier="primary" competence="Управление беспилотными летательными аппаратам" expert="Османов Эльдар Зиннюрович "> 
                                      <WsrTeamMemberItem  name="Селютин Андрей Михайлович " competence="Лазерные технологи" tier="primary" medal="gold" host="Западный комплекс непрерывного образования " expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg" >
                                        <WsrMedal tier="primary" medal="gold"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                        <WsrMedal tier="primary" medal="silver"/>
                                      </WsrTeamMemberItem>

                                    </WsrTeamMember>
                                    <WsrTeamMember  tier="secondary" competence="Управление беспилотными летательными аппаратам" expert="Шкребтиенко Сергей Олегович"> 
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
