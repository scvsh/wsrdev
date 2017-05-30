import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";

{/* Import React-Boorstrap components*/}

import {
	Button,
	Grid,
	Row,
	Col,
	Nav,
	NavItem,
	Carousel,
	Image
} from "react-bootstrap";


{/* Import WSR React components*/}

import {
	WsrMenuBg,
	WsrMenuTitle,
	WsrBlockTitle,
	WsrBlock,
	WsrBlockBlank,
	WsrNewsItem,
	WsrPartnersItem,
	WsrNumbersItem,
	WsrGallery,
	WsrFooter
} from "./wsr-components.js";

{/* Import Icons */}

import { MdApps, MdSearch, MdVpnKey } from "react-icons/lib/md";


{/* Main app */}

class App extends Component {
	render() {
		return (
			<div className="App">

				{/* Header carousel */}

				<Carousel indicators={false} controls={false}>
					<Carousel.Item>

						{/* Carousel menu */}

						<div className="wsr-carousel-menu__bg">
							<Button bsClass="wsr-skewed-btn skew-left text-left">
								{" "}
								<span className="skew-left">
									<MdApps className="ri-big" />
									Архив мероприятий
								</span>
								{" "}
							</Button>
							<Nav
								className="wsr-carousel-menu text-right"
								bsStyle="pills"
								stacked
								activeKey={1}
							>

								<NavItem
									className="wsr-carousel-menu-item"
									eventKey={1}
									href="/home"
								>
									V ОЧМ «Московские мастера»
								</NavItem>
								<NavItem
									className="wsr-carousel-menu-item"
									eventKey={2}
									href="/home"
								>
									Всероссийские отборочные соревнования
								</NavItem>
								<NavItem
									className="wsr-carousel-menu-item"
									eventKey={3}
									href="/home"
								>
									Демонстрационный экзамен по&nbsp;стандартам WorldSkills
								</NavItem>
								<NavItem
									className="wsr-carousel-menu-item"
									eventKey={4}
									href="/home"
								>
									Juniorskills
								</NavItem>
							</Nav>

						</div>
						<img
							className="wsr-carousel-image"
							alt="900x500"
							src="/Images/gallery03.jpg"
						/>
					</Carousel.Item>
				</Carousel>
				<Grid bsClass="containter-fluid">
					<Row>

						{/* Left sidebar */}

						<Col xs={5} md={5} lg={3}>
							<div className="wsr-affix">
								<div className="wsr-affix">
									<WsrMenuTitle />
									<Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn skew-right text-left">
										{" "}
										<span className="skew-left">
											<MdVpnKey className="ri-big" />
											Личный кабинет
										</span>
										{" "}
									</Button>
									<Row>
										<Col xs={9} md={7} lg={8}>
											<Nav
												className="wsr-menu"
												bsStyle="pills"
												stacked
												activeKey={1}
											>
												<NavItem
													className="wsr-menu-item"
													eventKey={1}
													href="/home"
												>
													{"Wsr в Москве".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={2}
													href="/home"
												>
													{"Эксперты".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={3}
													href="/home"
												>
													{"СЦК".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={4}
													href="/home"
												>
													{"Компетенции".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={5}
													href="/home"
												>
													{"Проекты".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={6}
													href="/home"
												>
													{"Партнёры".toUpperCase()}
												</NavItem>
												<NavItem
													className="wsr-menu-item"
													eventKey={3}
													href="/home"
												>
													{"Пресс-центр".toUpperCase()}
												</NavItem>
											</Nav>
											<Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn skew-right text-left">
												{" "}
												<span className="skew-left">
													<MdSearch className="ri-big" />
													Поиск
												</span>
												{" "}
											</Button>

										</Col>
									</Row>
								</div>
								<WsrMenuBg />
							</div>
						</Col>
					</Row>
				</Grid>

				{/* Main content */}

				<Grid bsClass="containter-fluid">
					<Row>
						<Col xs={5} md={3} lg={2} />
						<Col xs={5} md={4} lg={5}>

							<WsrBlockTitle title="Важная информация" />
							<WsrBlock
								type="wsr-block-important"
								heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции 
«Ландшафтный дизайн»"
								description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                            Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
								date="10.05.2017"
								image="/Images/thumb01.jpg"
							/>
							<WsrBlock
								type="wsr-block-important"
								heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции 
«Ландшафтный дизайн»"
								description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                            Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
								date="10.05.2017"
								image="/Images/thumb01.jpg"
							/>
							<WsrBlockTitle title="Анонсы мероприятий" />
							<WsrBlock
								type="wsr-block-announce"
								heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции 
«Ландшафтный дизайн»"
								description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                            Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
								date="10.05.2017"
								image="/Images/thumb01.jpg"
							/>
							<WsrBlock
								type="wsr-block-announce"
								heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции 
«Ландшафтный дизайн»"
								description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                            Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
								date="10.05.2017"
								image="/Images/thumb01.jpg"
							/>

						</Col>

						{/* Block numbers */}

						<Col xs={3} md={3}>
							<WsrBlockTitle title="СЦК в цифрах" />
							<WsrBlockBlank type="wsr-block-news">
								<Row>
									<WsrNumbersItem
										number="1457"
										description="Человек входят 
в состав сборной команды WS Москвы"
									/>
									<WsrNumbersItem
										number="98"
										description="Человек входят 
в экспертное сообщество"
									/>
								</Row>
								<Row className="wsr-numbers__row">
									<WsrNumbersItem
										number="20"
										description="Победителей Национальных Международных соревенований WorldSkills среди участников Сборной команды Москвы"
									/>
									<WsrNumbersItem
										number="61"
										description="Компетенцию представляет Москва"
									/>
								</Row>
							</WsrBlockBlank>

							{/* Block News */}

							<WsrBlockTitle title="Новости" />
							<WsrBlockBlank type="wsr-block-news">
								<WsrNewsItem
									heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
									description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
									date="26.04.2017"
								/>
								<div className="wsr_block-menu__divider" />
								<WsrNewsItem
									heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
									description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
									date="26.04.2017"
								/>
								<div className="wsr_block-menu__divider" />
								<WsrNewsItem
									heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
									description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
									date="26.04.2017"
								/>
							</WsrBlockBlank>
						</Col>

					{/* Block partners */}

						<Col xs={2} md={2}>
							<WsrBlockTitle title="Партнёры" />
							<WsrBlockBlank type="wsr-block-partners">
								<WsrPartnersItem />
							</WsrBlockBlank>
						</Col>

					</Row>
					
					{/* Bottom Gallery */}

					<WsrGallery>
						<Image
							src="/Images/thumb01.jpg"
							className="wsr-gallery-item"
							responsive
						/>
						<Image
							src="/Images/thumb02.jpg"
							className="wsr-gallery-item"
							responsive
						/>
						<Image
							src="/Images/thumb03.jpg"
							className="wsr-gallery-item"
							responsive
						/>
						<Image
							src="/Images/thumb04.jpg"
							className="wsr-gallery-item"
							responsive
						/>
					</WsrGallery>

				{/* Footer */}

					<WsrFooter />
				</Grid>
			</div>
		);
	}
}

export default App;
