import { useNavigate } from 'react-router-dom';
import './breadcrumbs.sass'
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {

    const navigator = useNavigate()

    return(
        <nav className='breadcrumbs'>
            <div className="container">
                <ol className='breadcrumbs__list'>
                    <Link to={'/'} className='breadcrumbs__item'>Главная</Link>
                    <Link to={'/catalog'} className='breadcrumbs__item current'>Каталог</Link>
                    <Link to={'/cart'} className='breadcrumbs__item current'>Корзина</Link>
                    {/* <Link to={'/'} className='breadcrumbs__item'>Главная</Link> */}
                    {/* <li className='breadcrumbs__item current'>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</li> */}
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumbs;