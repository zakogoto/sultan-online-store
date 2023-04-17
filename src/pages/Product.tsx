import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import {FC, useEffect} from 'react';
// import ItemPage from '../../components/item/page/ItemPage';
import { IProduct } from '../store/models/IProduct';
// import ItemPage from '../../components/item/page/ItemPage';
import { useNavigate } from 'react-router-dom';
import { productAPI } from '../services/productServices';
import ItemPage from '../components/item/page/ItemPage';
import { useAppSelector } from '../hooks/redux';
import ErrorMessage from '../components/UI/error/ErrorMessage';
import Spinner from '../components/UI/spinner/Spinner';
import { scrollUp } from '../helpers/scrollUp';

const ProductPage: FC = () => {

    const {id} = useAppSelector(state => state.productPage)

    const {data: product, isError, isLoading, isSuccess, refetch} = productAPI.useFetchProductQuery(id, {})
     
    useEffect(()=> {
        scrollUp()
        refetch()
    },[])

    return (
        <>
            <Breadcrumbs/>
            {
            isLoading ? <Spinner/>
            : isError || !product ? <ErrorMessage/> 
            : null
            }
            {isSuccess  && <ItemPage product={product} />}
        </>
    );
};

export default ProductPage;