import { FC, useEffect, useState } from 'react';

import share from "../../../resources/img/share-logo.svg"
import cartLogo from '../../../resources/img/cart-logo.svg'
import Counter from "../../UI/counter/Counter"
import Volume from "../../UI/volume/Volume"

import './productPage.sass'

import { IProduct } from '../../../store/models/IProduct';
import { useAppSelector } from '../../../hooks/redux';
import { useActions } from '../../../hooks/useActions';
import DropdownProduct from '../../UI/dropdown/DropdownProduct';

const ItemPage: FC<{product: IProduct}> = ({product}) => {

    let volumeType = product.isLiquid ? product.volume + 'мл' : product.weight +'гр';

    const {cartItems} = useAppSelector(state => state.cart)
    const {counter} = useAppSelector(state => state.productPage)

    const {addItem, increaseCartItemAmount, clearCounter} = useActions();

    const isExistInCart = cartItems.some(item => item.id === product.id);

    useEffect(()=> {
        clearCounter();
    }, [cartItems])

    return (
        <section className='card'>
                <div className="container">
                    <div className="card__wrap">
                        <div className="card__img">
                            <img src={product.imgURL} alt={product.name} />
                        </div>
                        <div className="card__info">
                            <div className="card__status avalible">в наличии</div>
                            <h2 className="card__name">
                                <span>{product.name} </span>
                                {product.title}
                            </h2>
                            <Volume item={product}/>
                            <div className="card__cart">
                                <div className="card__price">{product.price} ₸</div>
                                <Counter place={'productPage'} item={cartItems[product.id]}/>
                                <button onClick={
                                    ()=> !isExistInCart ? addItem({id: product.id, amount: counter, price: product.price * counter})
                                    : increaseCartItemAmount({id: product.id, amount: counter})
                                    } className="btn btn_item"
                                >
                                    В КОРЗИНУ<img src={cartLogo} alt="тележка" />
                                </button>
                            </div>
                            <div className="card__options">
                                <div className="card__option">
                                    <img src={share} alt="поделиться" className="card__share" />
                                </div>
                                <div className="card__option">
                                <p className="card__shiping">При покупке от <span>10 000 ₸</span> бесплатная <br /> доставка по Кокчетаву и области</p>
                                </div>
                                <div className="card__option">
                                    <a href="pricelist" className="card__pricelist">Прайс-лист</a>
                                </div>
                            </div>
                            <ul className="card__specifications">
                                <li><span>Производитель:</span> {product.manufacturer}</li>
                                <li><span>Бренд:</span> {product.brand}</li>
                                <li><span>Артикул:</span> {product.article}</li>
                                <li><span>Кол-во в коробке:</span> {product.remains}</li>
                                <li><span>Штрихкод:</span> {product.barecode}</li>
                                <li><span>Размеры коробки(Д*Ш*В):</span> 10х10х10</li>
                                <li><span>Вес коробки:</span> 1020 г</li>
                            </ul>
                            <ul className="card__about">
                                <li className="card__about-item">
                                    <DropdownProduct title='Описание' children={
                                        <ul  className="card__description">
                                            <li>{product.description} </li>
                                        </ul>
                                        }
                                    />
                                </li> 
                                <span className="divider"></span>
                                <li className="card__about-item">
                                    <DropdownProduct title='Характеристики' 
                                        children={
                                            <ul  className="card__specifications">
                                                <li><span>Назначение:</span> для рук</li>
                                                <li><span>Тип:</span> {product.title}</li>
                                                <li><span>Производитель:</span> {product.manufacturer}</li>
                                                <li><span>Бренд:</span> {product.brand}</li>
                                                <li><span>Артикул:</span> {product.article}</li>
                                                <li><span>Штрихкод:</span> {product.barecode} </li>
                                                <li><span>Вес:</span> {volumeType}</li>
                                                <li><span>Объем:</span> {volumeType}</li>
                                                <li><span>Кол-во в коробке:</span> {product.remains} </li>
                                            </ul>
                                        }
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default ItemPage;