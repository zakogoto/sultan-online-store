// import arrow from '../../resources/img/arrow-next.svg'
// import priceListLogo from '../../resources/img/price-list-logo.svg'
// import whatsAppLogo from '../../resources/img/whatsApp-logo.svg'
// import telegramLogo from '../../resources/img/telegram-logo.svg'

import { useNavigate } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import './appFooter.sass'

export default function AppFooter() {
    const navigate = useNavigate()
    return(
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__block">
                        <div className='footer__logo' onClick={()=> navigate('')}>
                            <FooterLogo />
                        </div>
                        <p className='footer__descr'>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
                        <div className="footer__subscribe">
                            <p className='footer__subscribe-title'>Подпишись на скидки и акции</p>
                            <form action="#" id='subscribe' className='input input__subscribe'>
                                <input type='email' placeholder='Введите ваш E-mail' className='input__field input_subscribe__field' />
                                {/* <button className='input__btn'><img src={arrow} alt="стрелка вправо" /></button> */}
                            </form>
                        </div>
                    </div>
                    <ul className="footer__block">
                        <h3 className='footer__block-title'>Меню сайта:</h3>
                        <li className='footer__block-item'>О компании</li>
                        <li className='footer__block-item'>Доставка и оплата</li>
                        <li className='footer__block-item'>Возврат</li>
                        <li className='footer__block-item'>Контакты</li>
                    </ul>
                    <ul className="footer__block">
                        <h3 className='footer__block-title'>Категории:</h3>
                        <li className='footer__block-item'>Бытовая химия</li>
                        <li className='footer__block-item'>Косметика и гигиена</li>
                        <li className='footer__block-item'>Товары для дома</li>
                        <li className='footer__block-item'>Товары для детей и мам</li>
                        <li className='footer__block-item'>Посуда</li>
                    </ul>
                    <div className="footer__block">
                        <h3 className='footer__block-title'>Скачать прайс-лист:</h3>
                        <a href='#' id="price-list" className='btn btn_footer'>
                            Прайс-лист
                            {/* <img src={priceListLogo} alt='значок "скачать' /> */}
                        </a>
                        <p className='footer__social'>Связь в мессенджерах:</p>
                        <div className="footer__social-block">
                            {/* <a href="ws"><img src={whatsAppLogo} alt="whatsApp" /></a>
                            <a href="tg"><img src={telegramLogo} alt="Telegram" /></a> */}
                        </div>
                    </div>
                    <ul className="footer__block">
                        <h3 className='footer__block-title'>Контакты:</h3>
                        <li>
                            <a href="telto:+77774900091" className='footer__block-link'>+7 (777) 490-00-91</a>
                            <p className='footer__block-link-descr'>время работы: 9:00-20:00</p>
                            <a href="modal" className='footer__order'>Заказать звонок</a>
                            </li>
                        <li>
                            <a href="mailto:opt.sultan@mail.ru" className='footer__block-link'>opt.sultan@mail.ru</a>
                            <p className='footer__block-link-descr'>На связи в любое время</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}