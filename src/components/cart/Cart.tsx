import { FC, useEffect } from 'react';
import ItemCart from '../item/cart/ItemCart'
import './cart.sass'
import ErrorMessage from '../UI/error/ErrorMessage';
import Spinner from '../UI/spinner/Spinner';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import Modal from '../UI/modal/Modal';
import { useOutside } from '../../hooks/useOutside';
import { scrollUp } from '../../helpers/scrollUp';

const Cart: FC = () => {

  // const {data: items, isError, isLoading} = cartAPI.useFetchCartItemsQuery(1)
  const {clearCart, decreaseAmount, increaseAmount} = useActions()
  const {cartItems: items, totalPrice} = useAppSelector(state => state.cart)

  const {isShow, ref, setIsShow} = useOutside(false)

  useEffect(() => {
    scrollUp()
  },[isShow])

  const order =() => {
    setIsShow(!isShow);
    clearCart();
    setTimeout(()=> setIsShow(isShow), 3000);
  }

  return(
    <section ref={ref} className="cart">
      <div className="container">
        <h1 className="cart__title">Корзина</h1>
        <div className="cart__wrap">
        {items && items.length !== 0 ? items.map(item => 
          <ItemCart cartItem={item} key={item.id} />
          )
          : <p className='cart__subtitle'>Корзина пуста</p>
        }
          <div className="cart__order">
            { items.length > 0 ? <button onClick={()=> order()} className="btn">Оформить заказ</button> : null}
            <div className="cart__price"> {totalPrice} ₸</div>
          </div>
        </div>
      </div>
      {isShow? <Modal closeModal={()=> setIsShow(!isShow)} /> : null}
    </section>
  )
}

export default Cart;