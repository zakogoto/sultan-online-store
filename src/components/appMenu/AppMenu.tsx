import React, { FC } from 'react';
import './appMenu.sass'

// import geo from "../../resources/img/geo.svg"
// import mail from "../../resources/img/mail.svg"


const AppMenu: FC = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__wrap">
                    <ul className='menu__links'>
                        <li className='menu__link'>
                            {/* <img src={geo} alt="значок геолокации" /> */}
                            <a href="">г. Кокчетав, ул. Ж. Ташенова 129Б
                                <br /><span>(Рынок Восточный)</span>
                            </a>
                        </li>
                        <li className='menu__link'>
                            {/* <img src={mail} alt="конверт" /> */}
                            <a href="">opt.sultan@mail.ru
                                <br /><span>На связи в любое время</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="menu__items">
                        <li className="menu__item"><a href="">О компании</a></li>
                        <li className="menu__item"><a href="">Доставка и оплата</a></li>
                        <li className="menu__item"><a href="">Возврат</a></li>
                        <li className="menu__item"><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AppMenu;