import Counter from '../../UI/counter/Counter'
import Volume from '../../UI/volume/Volume'

import {FC} from 'react';
import { ICartItem } from '../../../store/models/ICartItem';
import { productAPI } from '../../../services/productServices';
import ErrorMessage from '../../UI/error/ErrorMessage';
import { useActions } from '../../../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { PriceAni } from '../../../helpers/counterAnimation';

interface ItemCartProps {
    cartItem: ICartItem
}

const ItemCart: FC<ItemCartProps> = ({cartItem}) => {

    const navigate = useNavigate();

    const {data: item} = productAPI.useFetchProductQuery(cartItem.id)

    const {removeItem, decreaseAmount, increaseAmount, setProductPage} = useActions()

    // const handleRemove = (event: React.MouseEvent) => {
    //     event.stopPropagation()
    //     removeItem({id: cartItem.id})
    // }

    const goToProductPage = () => {
        setProductPage(cartItem.id)
        navigate('/products/' + cartItem.id);
    }

    if (!item) return <ErrorMessage />

    return(
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={item.imgURL} alt={item.name} />
            </div>
            <div className="cart-item__about">
                <Volume item={item}/>
                <h2 onClick={goToProductPage} className="cart-item__title"><span>{item.name}</span> {item.title}</h2>
                <p className="cart-item__descr">{item.description}</p>
            </div>
            <Counter place='cartPage' item={cartItem} />
            {/* <div className="cart__price">{item.price * cartItem.amount} ₸</div> */}
            <div className="cart__price"><PriceAni time={10} val={item.price * cartItem.amount}/> ₸</div>
            <button className="btn btn_cancel" onClick={() => removeItem({id: cartItem.id})}/>
        </div>
    );
};

export default ItemCart;