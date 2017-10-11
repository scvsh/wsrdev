import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";
import { FaTrophy, FaQuestionCircle, FaFileTextO, FaCheckSquareO } from "react-icons/lib/fa";
import { MdSearch } from "react-icons/lib/md";
import TextTruncate from "react-text-truncate";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { PanelGroup, InputGroup, FormControl, Tab, Nav, NavItem, Panel, Button, Clearfix, Label, Media, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrBlock, WsrSkillCenter, WsrNumbersItem, WsrSchool, WsrParticipateCategory, WsrAccordeonExpert, WsrCertification, WsrMedal, WsrTeamMember, WsrTeamMemberItem, WsrSckInfo, WsrCompetence, WsrExpert, WsrExpertSearch, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

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
						  <WsrSchool></WsrSchool>
<Row>
                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
						  
				  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 } className="full-size">
						  
					
		<Col lg={ 12 }>
                    <WsrBlockTitle title="Стать Skills-центром" />
				
                    <WsrPage type="wsr-page" heading="Стать Skills-центром" description="" date="10.05.2017">
                      <p>Движение WorldSkills существует с 1946 года. Россия вступила в Движение в 2012 году и Московский регион одним из первых начал деятельность по его продвижению.
                        С каждым годом все больше специалистов разнообразных рабочих профессий из различных регионов стремятся принять участие в соревнованиях.
                        <br/>
                        <br/>Проведение соревнований в рамках Движения преследует несколько целей, таких как: популяризация рабочих профессий, подготовка высококвалифицированных
                        рабочих кадров в соответствии с лучшими мировыми стандартами и передовыми технологиями, а также стандарты WorldSkills вносят существенный вклад в развитие
                        отраслей экономики страны.
                        <br/>
                        <br/>Соревнования проводятся в форме конкурса профессионального мастерства, где участник должен продемонстрировать все свои навыки и за определенное количество
                        времени выполнить ряд практических заданий. Стандарты WorldSkills позволяют «задавать планку» для подготовки специалистов высокого уровня и формулировать
                        требования к выпускникам образовательных учреждений.
                        <br/>
                        <br/>В качестве жюри привлекаются ведущие эксперты в своей профессиональной области из различных бизнес-структур и образовательных организаций.
                        <br/>
                        <br/>Поддержку Движения WorldSkills в России осуществляют Министерство образования и науки РФ, Министерство промышленности и торговли РФ, Министерство труда
                        и социальной защиты РФ, Агентство стратегических инициатив и многие другие.
                        <br/>
                      </p>
					  	<Button block className="btn-export text-left">
                                  
                           <FaTrophy/>Стать Skills-центром 
				   </Button>
                    </WsrPage>
		</Col>
		<Col lg={8}>
                    <WsrBlockTitle title="Анонсы мероприятий" />
				
				<WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
																												   date="06.06.2017" image="/Images/thumb03.jpg" /> 
																										   <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
																												   date="06.06.2017" image="/Images/thumb03.jpg" /> <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
																												   date="06.06.2017" image="/Images/thumb03.jpg" /> 
																										   <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
																												   date="06.06.2017" image="/Images/thumb03.jpg" /> 
																								   </Col>
																								   <Col lg={4}>
																										   <WsrBlockTitle title="Календарь" />
																										   <WsrBlock type="announce"/></Col>

  </Col> 
  
                  <Col sm={ 4 } md={ 3 } lg={ 3 }>
						  
                                  
                    <WsrBlockTitle title="Координатор движения WoldSkills" />
                    <WsrBlockBlank className="wsr-block-select">
                      <LinkContainer exact to="/">
                        <WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified" tier="secondary" medal="silver"
                          host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg" />
                      </LinkContainer>
                    </WsrBlockBlank>
                    <WsrBlockTitle title="Координатор движения WoldSkills Junior" />
					<WsrBlockBlank className="wsr-block-select">
                      <LinkContainer exact to="/">
                        <WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified" tier="secondary" medal="silver"
                          host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg" />
                      </LinkContainer>
                    </WsrBlockBlank>
					<WsrBlockTitle title="Не нашли нужную информацию?" />
						  
						  <Button block className="btn-export text-left">
                                  
                           <FaQuestionCircle/>Задать вопрос
                          </Button>

                    <WsrBlockTitle title="РКЦ в цифрах" />
                    <WsrBlockBlank type="wsr-block-numbers">
                      <Row>
                        <WsrNumbersItem number="1" description="Место в медальном зачете по РФ" />
                        <WsrNumbersItem number="448" description="Региональных экспертов" />
                      </Row>
                      <Row className="wsr-numbers__row">
                        <WsrNumbersItem number="32" description="Победителя V Национального чемпионата «Молодые профессионалы» 2017" />
                        <WsrNumbersItem number="10 068" description="Участников демонстрационного экзамена по стандартам WSR в 2017" />
				</Row>					
		</WsrBlockBlank>
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

export default Team;

/* */
