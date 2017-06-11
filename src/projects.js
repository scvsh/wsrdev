import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Link, Panel, Thumbnail, ListGroupItem, ListGroup, Button, Grid, Row, Col, Nav, NavItem, Carousel, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdApps, MdFileDownload } from "react-icons/lib/md";

/* Main app */

class Projects extends Component {
		render() {
				return (
						<div className="App">
							{ /* Header carousel */ }
							<Carousel wrap={ false } className="wsr-header__carousel" indicators={ false } controls={ false }>
								<Carousel.Item>
									{ /* Carousel menu */ }
									<Grid bsClass="containter-fluid">
										<Row>
											<Col xs={ 2 } md={ 5 } lg={ 3 } className="wsr-carousel-menu__bg pull-right">
												<Button bsClass="wsr-skewed-btn skew-left text-right">
													<span className="skew-right">
																																												<MdApps className="ri-big" />
																																														Архив мероприятий
																																											</span>
												</Button>
												<Nav className="wsr-carousel-menu text-right pull-right" bsStyle="pills" stacked activeKey={ 1 }>
													<NavItem className="wsr-carousel-menu-item " eventKey={ 1 } href="/home">
														V ОЧМ «Московские мастера»
													</NavItem>
													<NavItem className="wsr-carousel-menu-item " eventKey={ 2 } href="/home">
														Всероссийские отборочные соревнования
													</NavItem>
													<NavItem className="wsr-carousel-menu-item " eventKey={ 3 } href="/home">
														Демонстрационный экзамен по стандартам WorldSkills
													</NavItem>
													<NavItem className="wsr-carousel-menu-item " eventKey={ 4 } href="/home">
														Juniorskills
													</NavItem>
												</Nav>
											</Col>
										</Row>
									</Grid>
									<img className="wsr-carousel-image" alt="900x500" src="/Images/gallery03.jpg" />
								</Carousel.Item>
							</Carousel>
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
