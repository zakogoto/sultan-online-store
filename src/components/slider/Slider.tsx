import { FC } from 'react';
import './slider.sass'

// import slider from '../../resources/img/slider.png'


const Slider: FC = () => {
    return (
        <section className='slider'>
            <div className="container">
                <div className="slider__prev"></div>
                <div className="slider__next"></div>
                <div className="slider__wrap">
                    <div className="slider__inner">
                        <div className="slide">
                            <div className="stock">
                                <div className="stock__date">*Акция действует до 04/09/22</div>
                                <h2 className="stock__name">Название Акции</h2>
                                <p className="stock__conditions">
                                    Условия акции в пару строк, Условия акции
                                    в пару строк, Условия акции в пару строк
                                </p>
                                <button className="btn btn_big stock__btn">ПРИНЯТЬ УЧАСТИЕ</button>
                            </div>
                        </div>
                    </div>
                <div className="indicators">
                    <span className='dot dot_active'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;