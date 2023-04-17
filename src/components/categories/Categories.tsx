import './categories.sass'

import CategoryItem from '../categoryItem/CategoryItem';

import { FC } from 'react';

const Categories: FC = () => {
    return(
        <section className='category'>
            <div className="container">
                <h2 className="title"><span>категории</span> товаров</h2>
                <p className="title__descr">10 000+ ходовых позиций по специальным ценам</p>
                <ul className="category__items">
                    {CategoryItem()}
                </ul>
            </div>

        </section>
    )
};

export default Categories;