import { FC } from 'react';

import AppSearch from '../UI/search/Search'

import logo from '../../resources/img/logo.svg'
import catalogLogo from "../../resources/img/catalog-logo.svg"
import operator from "../../resources/img/operator-img.png"
import priceListLogo from '../../resources/img/price-list-logo.svg'
import cartLogo from '../../resources/img/header-cart-logo.svg'

import './appHeader.sass'

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';

const AppHeader: FC = () => {
    const navigate = useNavigate()

    const {cart} = useAppSelector(state => state)

    const {setPage} = useActions()

    const renderCatalog = () => {
        navigate('')
        setPage(1)
    }

    return (
        <header className='header'>
            <div className="container">
            <div className="header__wrap">
                    <img onClick={()=> renderCatalog()} src={logo} alt="султан" className="header__logo" />
                    <button className="btn" onClick={()=> navigate('/catalog')}>
                        каталог
                        <img src={catalogLogo} alt="плитка" />
                    </button>
                    <div className="header__search">
                        {AppSearch()}
                    </div>
                    <div className="header__contacts">
                        <div className="header__contacts-wrap">
                            <a href="tel:+77774900091" className='header__number'>+7 (777) 490-00-91</a>
                            <div className="header__work-time">время работы: 9:00-20:00</div>
                            <a href="#" className='header__order-call'>Заказать звонок</a>
                        </div>
                        <div className='header__operator'>
                            <img src={operator} alt="оператор" />
                        </div>
                    </div>
                    <a href='#' id="price-list" className='btn'>
                        Прайс-лист
                        <img src={priceListLogo} alt='значок "скачать' />
                    </a>
                    <div onClick={()=> navigate('/cart')} className="header-cart">
                        <div className="header-cart__logo">
                            <img src={cartLogo} alt="иконка тележки" />
                            <span className='header-cart__amount'>{cart.cartItems.length}</span>
                        </div>
                        <div className="header-cart__wrap">
                            <p className="header-cart-title">Корзина</p>
                            <p className="header-cart__price"> {cart.totalPrice} ₸ </p>
                        </div>
                    </div>
            </div>
            </div>
        </header>
    );
};

export default AppHeader;