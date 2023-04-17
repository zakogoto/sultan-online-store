import {FC} from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';

const SortBy: FC = () => {

  const {setSort} = useActions()

  const sortBy = (value: string) => {
    switch (value) {
        case "nameAsc":
            setSort({name: 'name', order: 'asc'});
            break;
        case "nameDesc":
            setSort({ name: 'name', order: 'desc'});
            break;
        case "priceAsc":
            setSort({name:'price', order: 'asc'});
            break;
        case "priceDesc":
            setSort({name: 'price', order: 'desc'})
            break;
    }
  }

  return (
    <div className="catalog__sort">
      <p className='catalog__sort-title'>Сортировка:</p>
      <select onChange={(e) => sortBy(e.target.value)}>
          <option value={'nameAsc'}>Название</option>
          <option value={'nameDesc'}>Название по убыванию</option>
          <option value={'priceAsc'}>По возрастанию цены</option>
          <option value={'priceDesc'}>По убыванию цены</option>
      </select>
    </div>
  );
};

export default SortBy;