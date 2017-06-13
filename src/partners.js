import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {   ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrPartner, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Partners extends Component {
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
                    <WsrBlockTitle title="Партнёры" />
                    <WsrPage type="wsr-page" heading="Наши партнёры" description="" date="10.05.2017">
                      <p>WorldSkills в Москве – это не только движение, которое выбирает лучших из лучших московских профессионалов, но также формирует высокие стандарты качества и профессионализма в той или иной отрасли. Формировать требования к уровню подготовки специалистов (стандарты WorldSkills) помогают ведущие компании Москвы. Молодые специалисты московских компаний и организаций участвуют в соревнованиях WorldSkills независимо от статуса своих работодателей, задавая качественно новый стандарт профессионализма в своей профессии, тем самым меняя отрасль к лучшему! 
                      </p>
                      <LinkContainer to="/partners/become-a-partner"><a>Присоединяйтесь к лиге профессионалов! Будьте с нами – будьте в Движении WorldSkills!</a></LinkContainer>
                   

                    </WsrPage>
                    <WsrPartner 
                    title="CISCO" 
                    description="Cisco — американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий. Одна из крупнейших в мире компаний, специализирующихся в области высоких технологий. Одной из особенностей бизнес-модели компании стала многоуровневая разветвлённая система сертификации инженеров по компьютерным сетям. Благодаря тому, что экзамены этой системы проверяют знание не только продукции Cisco, но и знание сетевых технологий и протоколов, многие организации, даже работающие на сетевом оборудовании других фирм, признают ценность профессиональных сертификатов Cisco. В частности, сертификация на уровне эксперта (CCIE) является одной из самых известных и уважаемых в компьютерной индустрии."
                    website="http://www.cisco.com"
                    logo="/Images/partners/1.png"
                    />
                    <WsrPartner 
                    title="AllaBella" 
                    description="«АЛЛАБЕЛЛА» - это символ рождения красивого бизнеса в России. Именно с появлением школы «АЛЛАБЕЛЛА» связано возникновение профессиональной ногтевой индустрии в России. Учебные программы «АЛЛАБЕЛЛА» - это уникальный опыт, рождённый и проверенный 20-летней успешной практикой, подтвердившей свою полезность и эффективность;  а профессиональные материалы и инструменты, выпускаемые торговой маркой ALLABELLA, -  лучшее, что есть сегодня в ногтевой индустрии России!"
                    website="http://www.allabella.ru"
                    logo="/Images/partners/2.png"
                    />
                    <WsrPartner 
                    title="BASF" 
                    description="BASF создает химию для устойчивого будущего, объединяет экономический успех с защитой окружающей среды и социальной ответственностью. Благодаря науке и инновациям дает возможность своим клиентам в каждой индустрии удовлетворять текущие и будущие потребности общества."
                    website="https://www.basf.com"
                    logo="/Images/partners/3.png"
                    />
                    <WsrPartner 
                    title="Estel Professional" 
                    description="За 14 лет ESTEL Professional стала одним из самых сильных брендов и абсолютным лидером по производству профессиональной косметики для волос в России и странах СНГ, одним из крупнейших поставщиков в Европу с собственным официальным представительством ESTEL Europe. Сегодня в Санкт-Петербурге функционирует два завода ESTEL, где выпускается около 1000 наименований продукции разных ценовых категорий. На базе завода функционирует собственная научно-исследовательская лаборатория, которая обеспечивает компании прогрессивную позицию на рынке. Более половины салонов в России, по последним данным дистрибьюторов, используют косметику ESTEL. 

Одной из главных задач компании является обучение парикмахеров. В разных городах России и Украины функционирует в общей сложности 18 учебных центров ESTEL. 

Ежегодно ESTEL проводит масштабные мероприятия и конкурсы для мастеров и директоров салонов с целью развития парикмахерской индустрии в России. В некоторых из них, таких как фестиваль ESTEL.FEST и конкурс «Звезда Эстель», принимают участие до тысячи человек."
                    website="http://estel.pro"
                    logo="/Images/partners/4.png"
                    />
                    <WsrPartner 
                    title="Gardens. Растения для сада" 
                    description="В настоящее время компания «Gardens. Растения для сада» обеспечивает полный, комплексный цикл качественных услуг в сфере продажи растений и ландшафтного искусства, предлагает решение «под ключ»: от разработки проекта, поставки растений из питомников и Европы и России, посадку растений и уход за Вашим садом.

Основные направления нашей работы: продажа растений, ландшафтные работы, дизайн, проектирование, посадка и пересадка растений, уход за садом, сопутствующие товары для дома и сада."
                    website="http://gardens.ru"
                    logo="/Images/partners/5.png"
                    />



                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Партнёрство" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/partners"><ListGroupItem>Наши партнёры</ListGroupItem></LinkContainer>
                        <LinkContainer to="/partners/become-a-partner"><ListGroupItem>Стать партнёром</ListGroupItem></LinkContainer>
    
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

export default Partners;

/* */
