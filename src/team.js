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
                  <Col xs={ 0 } sm={ 3 } md={ 2 } lg={ 2 } />
                    <Col sm={ 9 } md={10} lg={10} className="full-size"><WsrExpertSearch categories={ ["Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Все компетенции", "Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                  </Col>
                </Row>
                
                <Row>

                  <Col xs={ 0 } sm={ 3 } md={ 2 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 7 } md={ 9 } lg={ 9 } className="full-size">  
                    <WsrBlockTitle title="Строительная сфера" />
                    <Row className="row-flex row-flex-wrap">
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Воронков  Никита Александрович" competence="Камнетесное дело" tier="secondary" medal="silver" host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Юсупов Набихон Маннонович" competence="Кирпичная кладка" tier="primary" medal="bronze" host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg"
                                    />
                                  </Col>    
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Моренкова Анастасия Андреевна" competence="Кирпичная кладка" tier="secondary" medal="professional" host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg"
                                    />
                                  </Col>    
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Солосовский Николай Дмитриевич" competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7" expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg"
                                    />
                                  </Col>                         
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Ткачёв Александр Дмитриевич " competence="Камнетесное дело" tier="secondary" medal="professional" host="Образовательный комплекс градостроительства «Столица»" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/6.jpg"
                                    />
                                  </Col>   
                       
                          </Row>
                          <WsrBlockTitle title="Облицовка плиткой" />
                          <Row className="row-flex row-flex-wrap">
                                  <Col sm={ 2 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Синев Станислав Сергеевич " tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7 " expert="Корчагина Галина Валерьевна" photo="/Images/competence/1.jpg"
                                    />
                                  </Col>
                                  <Col sm={ 2 } md={ 4 } lg={ 4 }>
                                    <WsrTeamMember name="Денисов Егор Юрьевич" tier="secondary" medal="silver" host="Образовательный комплекс градостроительства «Столица»" expert="Панкратова Надежда Юрьевна" photo="/Images/competence/2.jpg"
                                    />
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
