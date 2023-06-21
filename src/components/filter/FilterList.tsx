import { FC } from 'react';

import Search from "../UI/search/Search";
import FilterListItem from './FilterListItem';
import Dropdown from '../UI/dropdown/Dropdown';
import { useActions } from '../../hooks/useActions';

interface FilterListProps {
    title: string;
    type: string;
    parameters: any[];
}

const FilterList: FC<FilterListProps> = ({title, parameters, type}) => {

    const firstFourParams = parameters.slice(0, 4)
    const dropdownParams = parameters.slice(4)
    const dropdownChildren = dropdownParams.map(parameter =>
        <FilterListItem type={type} count={parameter.count} key={parameter.name} name={parameter.name}/>
    )

    return(
        <div className="filter__item">
            <h3 className="filter__item-title">{title}</h3>
            <div className="filter__item-input">
                <Search />
            </div>
            {/* <form className='filter__item-parameters' onSubmit={(e) => e.preventDefault()}> */}
                <ul className='filter__item-parameters'>
                    {firstFourParams.map(parameter => 
                        <FilterListItem type={type} count={parameter.count} key={parameter.name} name={parameter.name} />
                    )}
                {parameters.length > 4 
                    ? <Dropdown children={dropdownChildren} title={'показать все'} /> 
                    : null
                }
            {/* </form> */}
                </ul>
        </div>
    );
};

export default FilterList;