import { FC } from 'react';
import location from '../../resources/img/map-location.svg'
import document from '../../resources/img/map-document.svg'

import './map.sass'


const Map: FC = () => {
    let map = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2010.9880590654473!2d69.4041970400739!3d53.2670181595707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424c9462f3cd387f%3A0x4a97f37cc0fb736e!2sRynok%20%22Vostochnyy%22!5e0!3m2!1sen!2sge!4v1679409858388!5m2!1sen!2sge" 
        loading="lazy" ></iframe>;

    return(
        <section className="map">
            <div className="container">
                <div className="map__wrap">
                    {map}
                    <div className="map-contacts">
                        <h2 className="map-contacts__title">Контакты</h2>
                        <h3 className="map-contacts__subtitle">Оптовый поставщик «Султан»</h3>
                        <div className="map-contacts__wrap">
                            <div className="map-contacts__item">
                                <img src={location} alt="геометка" />
                                <p>
                                    <span>Адрес:</span>
                                    <br /> г. Кокчетав, ул. Ж. Ташенова 129Б 
                                    <br /> (Рынок Восточный)
                                </p>
                            </div>
                            <div className="map-contacts__item">
                                <p>
                                    <span>Отдел продаж:</span>
                                    <br />+7 (777) 490-00-91
                                    <br />opt.sultan@mail.ru
                                </p>
                            </div>
                            <div className="map-contacts__item">
                                <img src={document} alt="значок документа" />
                                <p>
                                    <span>Данные налогоплательщика:</span>
                                    <br /> ИП Катран Д.С.
                                    <br /> ИИН: 860113450858
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Map;