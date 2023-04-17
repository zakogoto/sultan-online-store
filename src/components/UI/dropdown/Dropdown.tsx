import {FC, useState} from "react";

import './dropdown.sass';

interface DropdownProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
}

const Dropdown: FC<DropdownProps> = ({title, children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            {!isOpen && 
                <h2 onClick={() => setIsOpen(!isOpen)} 
                    className={'dropdown'}
                >
                    {title}
                </h2>}
            <ul>
                {isOpen && children}
            </ul>
            {isOpen && 
                <h2 onClick={() => setIsOpen(!isOpen)} 
                    className={'dropdown dropdown_open'}
                >
                    {"Скрыть"}
                </h2>}
        </div>
    )
}



export default Dropdown;