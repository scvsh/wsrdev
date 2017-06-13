import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Projects extends Component {
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
										<WsrBlockTitle title="Проекты" />
										<WsrPage type="wsr-page" heading="Образовательные проекты" description="" date="10.05.2017">
											<p>Популяризация рабочих профессий и развитие профессионального образования зависит от активности профессионального сообщества и готовности его создавать для студентов новые условия и следовать мировым стандартам профессионального образования. Переходите на качественно новый уровень работы своей профессиональной образовательной организации и коллектива или задайте новый вектор личного профессионального развития!<br /><br />

Прохождение образовательных программ <LinkContainer to="/projects/region-expert"><a>«Региональный эксперт»</a></LinkContainer>, <LinkContainer to="/sck"><a>«Обучение в CIS»</a></LinkContainer> или <LinkContainer to="/sck"><a>«Обучение по становлению СЦК»</a></LinkContainer> поможет вам перейти от наблюдений к действиям, став активным участником движения WorldSkills Russia. 
											</p>
										</WsrPage>
									</Col>
									<Col sm={ 3 } md={ 3 } lg={ 3 }>
										<WsrBlockTitle title="Сцк" />
										<WsrBlockBlank className="wsr-block-select">
											<ListGroup>
												<LinkContainer to="/projects/region-expert"><ListGroupItem>Региональный эксперт WSR</ListGroupItem></LinkContainer>
												<LinkContainer to="/sck/locations"><ListGroupItem>Эксперт ДЭ</ListGroupItem></LinkContainer>
												<LinkContainer to="/sck/locations"><ListGroupItem>Обучение становлению СЦК</ListGroupItem></LinkContainer>
												<LinkContainer to="/sck/locations"><ListGroupItem>Обучение экспертов WorldSkills в 1C:Учебном центре №1</ListGroupItem></LinkContainer>
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

export default Projects;

/* */