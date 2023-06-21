// import useInput from '../../hooks/useInput';
import { FC, useEffect } from 'react';
import Search from '../UI/search/Search';
import './filter.sass'
import FilterList from './FilterList';
import { IProduct } from '../../store/models/IProduct';
import { getAllParams } from '../../helpers/GetAllParameters';
import { useInput } from '../../hooks/useInput';
import { productAPI } from '../../services/productServices';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/redux';
import { IFilter } from '../../store/models/Ifilter';

interface filterProps {
    products: IProduct[],
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClearFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Filter: FC<filterProps> = ({products, onSubmit, onClearFilter}) => {

    // const {bind: lowPriceBind, reset: lowPriceReset, value: lowPriceValue} = useInput('0')
    // const {bind: HigthPriceBind, reset: HightPriceReset, value: HightPriceValue} = useInput('10000')

    const {clearFilter, setMinPrice, setMaxPrice} = useActions();
    const {minPrice, maxPrice} = useAppSelector(state => state.filters)

    // const handleClearFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     onClearFilter(e)
    //     onSubmit(e)
    // }

    // useEffect(() => {
    //     // setMinPrice(+lowPriceValue);
    //     // setMaxPrice(+HightPriceValue);
    // }, [lowPriceValue, HightPriceValue, setMinPrice, setMaxPrice]);
    
    return(
        <aside className='filter'>
            <h3 className="filter__title">ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <form action="#" className="filter__price">
                <p className="filter__price-title">Цена<span>₸</span></p>
                <div className="filter__price-inputs">
                    <input onChange={(e) => setMinPrice(+e.target.value)} value={minPrice ? minPrice : ''} type="text" name="lowPrice" id="minPriceInput" placeholder='0'/>
                    <span>-</span>
                    <input onChange={(e) => setMaxPrice(+e.target.value)} value={maxPrice ? maxPrice : ''} type="text" name="HighPrice" id="maxPriceInput" placeholder='10000'/>
                    {/* <input {...lowPriceBind} type="text" name="lowPrice" id="startPrice" placeholder='0'/>
                    <span>-</span>
                    <input {...HigthPriceBind} type="text" name="HighPrice" id="stopPrice" placeholder='10000'/> */}
                </div>
            </form>
            <div className="filter__items">
                    <FilterList parameters={getAllParams(products, 'manufacturer')} type={'manufacturer'} title={'Производитель'} key={'manufacturer'} />
                    <FilterList parameters={getAllParams(products, 'brand')} type={'brand'} title={'Бренд'} key={'brand'} />
                <div className="filter__btns">
                    <button className="btn btn_submit" onClick={onSubmit}>Показать</button>
                    <button className="btn btn_cancel" onClick={onClearFilter}/>
                </div>
                <div className="filter__item filter__type">
                    <h3 className="filter__type-title">Уход за руками</h3>
                    <ul className='filter__type-items'>
                        <li className='filter__type-item'>Увлажнение и питание</li>
                        <li className='filter__type-item'>Средства для ногтей</li>
                        <li className='filter__type-item'>Мыло твердое</li>
                        <li className='filter__type-item'>Мыло жидкое</li>
                        <li className='filter__type-item'>Крем для рук</li>
                        <li className='filter__type-item'>Защита рук</li>
                        <li className='filter__type-item'>Жидкость для снятия лака</li>
                    </ul>
                </div>
                <div className="filter__item filter__type">
                    <h3 className="filter__type-title">Уход за телом</h3>
                    <ul className='filter__type-items'>
                        <li className='filter__type-item'>Эпиляция и депиляция</li>
                        <li className='filter__type-item'>Средства для ванны и душа</li>
                        <li className='filter__type-item'>Скрабы, пилинги и пр.</li>
                        <li className='filter__type-item'>Мочалки и губки для тела</li>
                        <li className='filter__type-item'>Кремы, лосьоны, масла</li>
                        <li className='filter__type-item'>Интимный уход</li>
                        <li className='filter__type-item'>Дезодоранты, антиперспиранты</li>
                        <li className='filter__type-item'>Гели для душа</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Filter;