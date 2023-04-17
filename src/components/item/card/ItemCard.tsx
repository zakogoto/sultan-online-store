import { FC } from 'react';
import { IProduct } from '../../../store/models/IProduct';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { useActions } from '../../../hooks/useActions';
import Volume from '../../UI/volume/Volume'

import cartLogo from "../../../resources/img/cart-logo.svg"

import './itemCard.sass'
import { ICartItem } from '../../../store/models/ICartItem';

interface ProductCardProps {
    product: IProduct;
}

const ItemCard: FC<ProductCardProps> = ({product}) => {

    const navigate = useNavigate();

    const {setProductPage, addItem} = useActions()

    const {cartItems} = useAppSelector(state => state.cart)

    const isExistInCart = cartItems.some(cartItem => cartItem.id === product.id) ;

    const goToProductPage = () => {
        setProductPage(product.id)
        navigate('/products/' + product.id);
    }

    const addToCart = () => {
        let cartItem: ICartItem = {
            id: product.id,
            amount: 1,
            price: product.price
        }
        addItem(cartItem)
    }

    return (
        <div>
            <li className="item item-promo">
                <img src={product.imgURL} alt={product.name} className="item-img" />
                <Volume item={product}/>
                <div onClick={goToProductPage} className="item__name" tabIndex={0}><span>{product.name}</span> {product.title}</div>
                <div className="item__info">
                    <div className="item__barecode"><span>Штрихкод: </span>{product.barecode}</div>
                    <div className="item__manufacturer"><span>Производитель: </span>{product.manufacturer}</div>
                    <div className="item__brand"><span>Бренд: </span>{product.brand}</div>
                </div>
                <div className="item__bottom">
                    <div className="item__price">{product.price} ₸</div>
                    <button 
                        onClick={() => !isExistInCart ? addToCart() : navigate('/cart')} 
                        className="item__cart btn btn_item">
                            {isExistInCart ? 'ПЕРЕЙТИ В КОРЗИНУ' : 'В КОРЗИНУ'}
                        {!isExistInCart ? <img src={cartLogo} alt="тележка"/> : null}
                    </button>
                </div>
            </li>
        </div>
    );
};

export default ItemCard;