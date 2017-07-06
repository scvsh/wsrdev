import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import InfiniteCalendar from 'react-infinite-calendar';
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrProject, WsrBlock, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Projects extends Component {

    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        var lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
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
                  <Col xs={ 12 } sm={ 9 } md={ 4 } lg={ 4 }>
                    <WsrBlockTitle title="Проекты" />
                    <WsrProject startdate="10.05.2017" enddate="19.05.2017" height={415} type="wsr-block-project--large" link="/projects/championship" lines={ 8 } heading="V ОЧМ «Московские мастера»" description="V Открытый чемпионат профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia пройдет в период с 18 по 27 октября, закрытие чемпионата состоится 10 ноября 2016 года. В Чемпионате Москвы 2016 года заявлено: 75 компетенций, серия региональных отборочных соревнований по 15 компетенциям, а также 1 экспериментальная компетенция, которая ранее нигде представлена не была, 32 специализированных центра компетенций (СЦК). Для соревнований организовано 817 рабочих мест, из них 222 отведено для участников из других регионов."
                      date="06.06.2017" image="/Images/thumb01.jpg" />
                    <WsrProject startdate="10.05.2017" enddate="19.05.2017" height={415} type="wsr-block-project--large" link="/projects/championship" lines={ 8 } heading="Всероссийские отборочные соревнования" description="Всероссийские отборочные соревнования WorldSkills – важнейший этап на пути к участию в Финале V Национального чемпионата «Молодые профессионалы» (WorldSkills).
            Старт Всероссийским отборочным соревнованиям будет дан 14 марта 2017 года в Москве. В след за Москвой соревнования пройдут и в других регионах России: Республиках Татарстан, Саха (Якутия), Чувашия, а также в Хабаровском крае, Московской и Ульяновской областях. "
                      date="06.06.2017" image="/Images/thumb02.jpg" />
                    <WsrProject startdate="01.03.2017" enddate="19.05.2017" height={415} type="wsr-block-project--large" link="/projects/championship" lines={ 8 } heading="Демонстрационный экзамен по стандартам WorldSkills" description="Проведение демонстрационного экзамена в рамках процедуры государственной итоговой аттестации – пилотный проект, стартующий в 2017 году в рамках внедрения Регионального стандарта кадрового обеспечения промышленного роста в 20 субъектах Российской Федерации. Демонстрационный экзамен послужит моделью независимой оценки качества подготовки кадров без проведения дополнительных процедур по 61 компетенции, соответствующей специальностям учащихся средних профессиональных образовательных организаций. С его помощью у выпускников колледжей и техникумов удастся определить уровень знаний, умений и навыков, позволяющих вести профессиональную деятельность по конкретной специальности в соответствии со стандартами WorldSkills Russia. "
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                    <WsrProject startdate="09.05.2017" enddate="05.07.2017" height={415} type="wsr-block-project--large" heading="Juniorskills" link="/projects/championship" lines={ 8 } description="JuniorSkills – программа ранней профориентации, основ профессиональной подготовки и состязаний школьников в профессиональном мастерстве была инициирована в 2014 году Фондом Олега Дерипаска «Вольное Дело» в партнерстве с WorldSkills Russia при поддержке Агентства стратегических инициатив, Министерства образования и науки РФ, Министерства промышленности и торговли РФ."
                      date="06.06.2017" image="/Images/thumb04.jpg" />
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={ 'Мероприятия' } />
                     <WsrBlock type="wsr-block-announce" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
            На международном чемпионата China International Skills Competition 2017 (CISC-2017)" date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
             <WsrBlock type="wsr-block-announce" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
            На международном чемпионата China International Skills Competition 2017 (CISC-2017)" date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
             <WsrBlock type="wsr-block-announce" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
            На международном чемпионата China International Skills Competition 2017 (CISC-2017)" date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title={ 'Календарь' } />
                    <InfiniteCalendar selected={ new Date(2017, 6, 25) } locale={ { locale: require('date-fns/locale/ru'), headerFormat: 'dddd, D MMM', weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], blank: 'Не выбрана дата', todayLabel: { long: 'Сегодня', short: 'Сег.' } } } width={ "100%" } height={ window.innerHeight } disabledDays={ [0, 7] }
                      minDate={ lastYear } />
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
