import {FC} from 'react';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Cart from '../components/cart/Cart';
import Modal from '../components/UI/modal/Modal';

const CartPage: FC = () => {
    return (
        <>
            <Breadcrumbs/>
            <Cart/>
        </>
    );
};

export default CartPage;