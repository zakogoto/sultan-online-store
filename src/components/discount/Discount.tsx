import './discount.sass'

import ItemCard from '../item/card/ItemCard'
import { FC } from 'react';
import { productAPI } from '../../services/productServices';
import Spinner from '../UI/spinner/Spinner';
import ErrorMessage from '../UI/error/ErrorMessage';



const Discount: FC = () => {
    const limit: number = 8;
    const {products, } = productAPI.useFetchProductsQuery({limit: limit}, {selectFromResult: ({data})=> ({
        products: data?.filter(product => product.discount)
    })})

    return (
        <section className='discount'>
            <div className="container">
                <h2 className="discount__title title"><span>Акционные</span> товары</h2>
                <div className="discount__wrap">
                    {/* {isError ? <ErrorMessage/> : null} */}
                    {products && products.map(product => 
                        <ItemCard product={product} key={product.id}/>) } 
                </div>
            </div>
        </section>
    )
}

export default Discount;