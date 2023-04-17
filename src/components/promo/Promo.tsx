import './promo.sass'

import { FC } from 'react';

const Promo: FC = () => {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo__wrap">
                    <h1 className='promo__title'>Бытовая химия,
                        <br /> косметика 
                        <br /> и хозтовары
                    </h1>
                    <h2 className='promo__subtitle'>оптом по кокчетаву и области</h2>
                    <a href="#" className='btn'>В КАТАЛОГ</a>
                    <div className="promo__benefits">
                        <div className="promo__benefit">
                            <p>Только самые <br /> выгодные предложения</p>
                        </div>
                        <div className="promo__benefit">
                            <p>Бесплатная доставка <br /> по <span>Кокчетаву от 10 тыс ₸</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;