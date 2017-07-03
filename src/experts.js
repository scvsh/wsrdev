import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpert, WsrExpertSearch, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

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
                  <Col xs={ 12 } sm={ 7 } md={ 7 } lg={ 7 } className="full-size">  
                  <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>  
                  <WsrBlockTitle title="Эксперты" />
                      <WsrPage type="wsr-page" heading="Эксперты" description="" date="10.05.2017">
                      <p>Роль экспертов в организации соревнований WorldSkills Russia очень высока. Эксперт WorldSkills Russia – это человек, обладающий определенными компетенциями: превосходно знает свою профессию, стандарты и регламенты WorldSkills, а также процедуры проведения соревнований. Эксперт участвует в составлении тестового задания и определении критериев оценки участников соревнований WorldSkills Russia.
                      </p>
                      

                    </WsrPage>  
                    </Col>
                    <WsrExpertSearch export categories={ ["Все категории", "Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Все компетенции", "Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />

                    <WsrBlockTitle title="Строительная сфера" />
                    <Row className="row-flex row-flex-wrap">
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Дармограй Тимофей Юрьевич" certification="certified" competence="Камнетесное дело" tier="primary" medal="gold" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Воронков  Никита Александрович" certification="certified" competence="Камнетесное дело" tier="secondary" medal="silver" host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" competence="Кирпичная кладка" tier="primary" medal="bronze" host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg"
                                    />
                                  </Col>    
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" competence="Кирпичная кладка" tier="secondary" medal="professional" host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg"
                                    />
                                  </Col>    
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7" expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg"
                                    />
                                  </Col>                         
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 4 }>
                                    <WsrExpert name="Ткачёв Александр Дмитриевич " certification="demo" competence="Камнетесное дело" tier="secondary" medal="professional" host="Образовательный комплекс градостроительства «Столица»" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/6.jpg"
                                    />
                                  </Col>   
                       
                          </Row>

                                  </Col>
                                  <Col sm={ 2 } md={ 3 } lg={ 3 }>
                                  <WsrBlockTitle title="Координатор" />
                                  <WsrBlockBlank className="wsr-block-select">
                      
                      <LinkContainer exact to="/"><WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified"  tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></LinkContainer>
                    
                        
                      
                    </WsrBlockBlank>
                    
                    <WsrBlockTitle title="Стать экспертом" />
                    <WsrBlockBlank className="wsr-block-select ">
                      <ListGroup>
                        <LinkContainer exact to="/experts/region-expert"><ListGroupItem>Региональный эксперт</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Эксперт демонстрационного экзамена</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Мастер ПО</ListGroupItem></LinkContainer>
                   
                      </ListGroup>
                       </WsrBlockBlank>
                       <WsrBlockBlank className="wsr-block-select ">
                      <ListGroup>
                        <LinkContainer exact to="/"><ListGroupItem>Обучение в 1С:Учебном центре №1</ListGroupItem></LinkContainer>
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
