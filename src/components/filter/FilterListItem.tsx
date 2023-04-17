import { FC, useState, useEffect, useMemo } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/redux';

const FilterListItem: FC<{name: string, count: number, type: string}> = ({name, count, type}) => {

    const [isChecked, setIsChecked] = useState<boolean>( false );
    
    const id = `${type}-${name}`;

    const {addFilter, removeFilter, clearFilter} = useActions()
    
    const {filters} = useAppSelector(state => state)

    const handleToggleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        const {checked} = e.target;
        setIsChecked(checked);
        checked ? addFilter({type, value: name}) : removeFilter({type, value: name});
    };

    useEffect(() => {
        setIsChecked(filters.brands.includes(name) || filters.manufacturers.includes(name));
    }, [filters]);

    return (
        <li id={`item-${id}`}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    id={id}
                    name={name}
                    checked={isChecked}
                    onChange={handleToggleFilter}
                    type="checkbox"
                    className="custom-checkbox"
                />
                <label htmlFor={id}>{name} <span>({count})</span></label>
            </form>
        </li>
    );
};

export default FilterListItem;