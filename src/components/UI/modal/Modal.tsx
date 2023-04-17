import modalImg from '../../../resources/img/modal-thanks.svg'

import './modal.sass'

import { FC } from 'react';

interface ModalProps {
    closeModal: () => void;
}

const Modal: FC<ModalProps> = ({closeModal}) => {

    return(
        <div className='modal'>
            <div className="modal__offset"></div>
            <div className="modal__wrap">
                <div onClick={closeModal} className="modal__close">&times;</div>
                <div className="modal__logo"><img src={modalImg} alt="двойная галочка" /></div>
                <h2 className="modal__thanks">Спасибо за заказ</h2>
                <p className="modal__descr">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
    );
};

export default Modal;