import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import OwlCarousel from 'react-owl-carousel';
import { LinkContainer } from "react-router-bootstrap";

/* Import React-Boorstrap components*/
import { Button, PanelGroup, Tab, Nav, NavItem, Panel, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrSckSearch, WsrSckInfo, WsrExpert, WsrBlock, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Sck extends Component {

  constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeNav: 1,
            activeKey: 2
        };
    }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

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
                <Col sm={3} md={3} lg={2} xsHidden />
                <Col xs={12} smHidden mdHidden lgHidden>
                                    <WsrSckSearch export categories={ ["Все категории", "Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } scks={ ["ГАОУ ВО г. Москвы «Московский городской педагогический университет»", "Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                </Col>
                <Col sm={6} md={6} lg={7}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1.1">
                    <Row>
                      <Col xs={ 12 } sm={ 4 } md={ 5 } lg={ 5 } xsHidden>
                        <WsrBlockTitle title="СЦК" />
                        <WsrBlockBlank className="wsr-block-select">

                        <PanelGroup accordion className="wsr-block__sck-info__panel">
        <Panel header="Преподавание музыки" eventKey="1">
                          <Nav  bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav>
        </Panel>
        <Panel header="Видеопроизводство" eventKey="2">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav>
        </Panel>
        <Panel header="Предпринимательство" eventKey="3">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav></Panel>
        <Panel header="Сетевое и системное администрирование" eventKey="4">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav></Panel>
        <Panel header="Мобильная робототехника" eventKey="5">Камнетёсное дело</Panel>
        <Panel header="Автопокраска" eventKey="6">Камнетёсное дело</Panel>
      </PanelGroup>


                          
                        </WsrBlockBlank>
                        <Button block className="btn-export ">
                           Скачать списком 
                          </Button>
                      </Col>
                      <Tab.Content animation>
                      <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                          
                            <Row className="clearfix">

                              <Col sm={ 8 } md={ 7 } lg={ 7 } className="full-size">
                              <WsrBlockTitle title={"Важная информация"} />
                              <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                              </Col>
                              
                              </Row>
                              </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="1.1">

                          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                          
                            <Row className="clearfix">

                              <Col sm={ 8 } md={ 7 } lg={ 7 } className="full-size">
                              <WsrBlockTitle title={"Об учреждении"} />
                              <WsrSckInfo location="https://www.mgpu.ru/" title="ГАОУ ВО г. Москвы «Московский городской педагогический университет»" logo="/Images/sck/1.svg" contact="Бабалаева Мария Викторовна" phone="+7 963 600 82-12" mail="babalaewa73@inbox.ru" detailedAddress="м. «Кутузовская», последний вагон из центра, далее пешком 3-5 минут в сторону области." />
                              <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                              </Col>
                              
                              </Row>
                              </Tab.Container>
                        </Tab.Pane>
                      </Tab.Content>
                      
                    </Row>
                  </Tab.Container>
                  </Col>

                  <Col sm={3}  md={3} lg={ 3 } className="">
                  <WsrBlockTitle title="Координатор" />
                                  <WsrBlockBlank className="wsr-block-select">
                      
                      <LinkContainer exact to="/"><WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified"  tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></LinkContainer>

                    </WsrBlockBlank>
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/sck/become-sck"><ListGroupItem>Стать СЦК</ListGroupItem></LinkContainer>
                        
                      </ListGroup>
                      
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

export default Sck;

/* */
