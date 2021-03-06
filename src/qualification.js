import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Table,  Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrQualificationSideMenu, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrFooter } from "./wsr-components.js";



/* Main app */

class Qualification extends Component {
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
                  <Col xs={ 12 } sm={ 7 } md={ 7 } lg={ 7 }>
                    <WsrBlockTitle title="Всероссийские отборочные соревнования" />
                    <WsrPage type="wsr-page" heading="Всероссийские отборочные соревнования" description="" date="10.05.2017">
                      <p>Всероссийские отборочные соревнования WorldSkills – важнейший этап на пути к участию в Финале V Национального чемпионата «Молодые профессионалы» (WorldSkills). 
                        <br/>
                        <br/>Старт Всероссийским отборочным соревнованиям будет дан 14 марта 2017 года в Москве. В след за Москвой соревнования пройдут и в других регионах России: Республиках Татарстан, Саха (Якутия), Чувашия, а также в Хабаровском крае, Московской и Ульяновской областях. 
                        <br/>
                        <br/>Город Москва был выбран Экспертной комиссией WorldSkills Russia местом проведения соревнований по блоку компетенций «Творчество и дизайн», который включает в себя профессии: «Графический дизайн», «Промышленный дизайн», «Печатные технологии в прессе», «Фотография», «Ювелирное дело», «Видеопроизводство», «Технология моды», «Флористика». Помимо компетенций творческой направленности, соревнования также пройдут по компетенциям: «Полимеханика и автоматика» и «Спасательные работы». 
                        <br/>
                        <br/>На Всероссийских отборочных соревнованиях Москва примет более 400 участников и экспертов из 50 регионов России. Лучшие представители своих профессий в возрасте от 16 до 22 лет поборются за право участия в V Национальном чемпионате «Молодые профессионалы» (WorldSkills Russia), который пройдет в мае 2017 года в Краснодарском крае.
                        <br/>
                        <br/>Всероссийские отборочные соревнования в Москве пройдут с 14 по 21 марта на площадках: Технополис «Москва», Представительство DMG MORI Россия, а также в Московском издательско-полиграфическом колледже имени Ивана Федорова, Техническом пожарно-спасательном колледже имени героя Российской Федерации В.М. Максимчука, Колледже декоративно-прикладного искусства имени Карла Фаберже. 
                        <br/>
                        <br/>Задания, которые предстоит выполнить участникам, по сложности не уступают финалу Национального чемпионата, а площадки проведения соревнований соответствуют всем международным условиям и требованиям WorldSkills. Оценку работы участников будут осуществлять главные и сертифицированные эксперты WorldSkills Russia по каждой из 10 компетенций проходящих в Москве Всероссийских отборочных соревнований. 
                        <br/>
                        <br/>От Москвы организатором Всероссийских отборочных соревнований WorldSkills выступает Департамент образования города Москвы. В организации соревнований задействованы более 500 волонтеров, более 100 организаций из числа партнеров и учреждений города Москвы.
                        <br/>
                        <br/>14 марта на площадке Технополис «Москва» состоится торжественная церемония Открытия Всероссийских отборочных соревнований WorldSkills в Москве. Вниманию гостей и участников церемонии будут представлены мастер-классы по ювелирному делу, программированию и управлению роботами, витринистике, полиграфии, драгоценным камням, графическому и промышленному дизайну, флористике и технологии моды. Также гости мероприятия смогут посетить выставочную экспозицию от Федеральной службы по труду и занятости и партнеров Движения WorldSkills в Москве.
                        <br/>
                        <br/>Помимо соревновательной части мероприятия, запланирована обширная деловая программа, в которой примут участие эксперты WorldSkills, ведущие мастера производственного обучения, лучшие специалисты от бизнес-партнеров Движения WorldSkills в Москве. 
                        <br/>
                      </p>
                      <Table   hover>
                        <tbody>
                          <tr>

                            <td>История, основные понятия и стандарты WorldSkills</td>
                          </tr>
                          <tr>

                            <td>Информационное и программное обеспечение работы эксперта</td>
                          </tr>
                          <tr>

                            <td>Проведение чемпионатов по стандартам WorldSkills Russia и ознакомление с работой в электронной системе CIS</td>
                          </tr>
                            <tr>

                            <td>Тестирование</td>
                          </tr>
                        </tbody>

                        <p>В V Открытом чемпионате профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia примет участие более 2000 человек.
                      </p>
                      </Table>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={'\u00A0'} />
                    <WsrQualificationSideMenu/>
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

export default Qualification;

/* */
