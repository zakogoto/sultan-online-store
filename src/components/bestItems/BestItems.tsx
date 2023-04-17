import { FC } from 'react';
import './bestItems.sass'


// export default function BestItems: FC() {

//     // function importAll(r) {
//     //     let images = {};
//     //     r.keys().map(item =>  images[item.replace('./', '')] = r(item) );
//     //     return images;
//     // }
      
//     // const images = importAll(require.context('../../resources/img/brands', false, /\.(png|jpe?g|svg)$/));

//     // function createSlides() {
//     //     let slides = [];
//     //     for( let value of Object.values(images)) {
//     //         let slide = 
//     //             <div className="best-items-slider__slide">
//     //                 <img src={value} alt="brands" />
//     //             </div>
//     //         slides.push(slide);

//     //     }
//     //     return slides;
//     // }
//     return(
//         <section className="best-items">
//             <div className="container">
//                 <h2 className="title"><span>Лучшие</span> товары</h2>
//                 <p className="title__descr">От ведущих мировых брендов</p>
//                 <div className="best-items-slider">
//                     <div className="best-items-slider__wrap">
//                         <div className="best-items-slider__inner">
//                             {/* {createSlides()} */}
//                         </div>
//                         <div className="indicators">
//                             <span className='dot dot_active-yellow'></span>
//                             <span className='dot'></span>
//                             <span className='dot'></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// import React from 'react';

const BestItems: FC = () => {
    return (
        <section className="best-items">
            <div className="container">
                <h2 className="title"><span>Лучшие</span> товары</h2>
                <p className="title__descr">От ведущих мировых брендов</p>
                <div className="best-items-slider">
                    <div className="best-items-slider__wrap">
                        <div className="best-items-slider__inner">
                            {/* {createSlides()} */}
                        </div>
                        <div className="indicators">
                            <span className='dot dot_active-yellow'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestItems;