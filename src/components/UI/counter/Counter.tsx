import {FC} from 'react';

import './counter.sass'
import { ICartItem } from '../../../store/models/ICartItem';
import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/redux';

interface CounterProps {
    item: ICartItem,
    place: string,
}

// const Counter: FC<CounterProps> = ({count, increase, decrease}) => {
const Counter: FC<CounterProps> = ({item, place}) => {

    const {decreaseAmount, increaseAmount, decreaseCartItemAmount, increaseCartItemAmount} = useActions();
    const {productPage} = useAppSelector(state => state)
    switch(place) {
        case 'productPage':
            return (
                <div className="counter">
                    <button onClick={()=> productPage.counter > 1 ? decreaseAmount(): null} className="counter__decrease">-</button>
                    <span className="counter__total">{productPage.counter}</span>
                    <button onClick={()=> increaseAmount()} className="counter__increase">+</button>
                </div>
            )
        default:
            return (
                <div className="counter">
                    <button onClick={()=> item.amount > 1 ? decreaseCartItemAmount({id: item.id}) : null} className="counter__decrease">-</button>
                    <span className="counter__total">{item ? item.amount : 1 }</span>
                    <button onClick={()=> increaseCartItemAmount({id: item.id, amount: 1})} className="counter__increase">+</button>
                </div>
            )

    }
};

export default Counter;