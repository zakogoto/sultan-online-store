import {FC} from 'react';
import cartLogo from "../../../resources/img/cart-logo.svg"



const Buttons: FC = () => {
  return (
    <button className="item__cart btn btn_item">В КОРЗИНУ<img src={cartLogo} alt="тележка"/></button>
  )
};

export default Buttons;