import {FC, useState} from "react";

import './dropdown.sass';

interface DropdownProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
}

const DropdownProduct: FC<DropdownProps> = ({title, children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)} className={!isOpen?  'dropdown' : 'dropdown dropdown_open'}>
                {title}
            </h2>
            <ul>
                {isOpen && children}
            </ul>
        </div>
    )
}



export default DropdownProduct;