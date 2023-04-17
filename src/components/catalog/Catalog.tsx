import { useEffect, FC, useMemo, ButtonHTMLAttributes, useState } from 'react';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/redux';
import { scrollUp } from '../../helpers/scrollUp'
import { productAPI } from '../../services/productServices';
import Filter from '../filter/Filter';
import SortBy from '../sort/SortBy';
import Pagination from '../pagination/Pagination';
import ErrorMessage from '../UI/error/ErrorMessage';
import Spinner from '../UI/spinner/Spinner';
import ItemCard from '../item/card/ItemCard';

import './catalog.sass';
import { IFilter } from '../../store/models/Ifilter';

const Catalog: FC = () => {
    
    const { filters: newFilters, page, limit, sort} = useAppSelector(state =>  state.catalog)

    const {filters} = useAppSelector(state => state)

    const {setPage, applyFilters, clearFilter} = useActions()

    const queryParams = useMemo(() => ({ 
        page, limit, sortKey: sort.name, sortOrder: sort.order 
    }), [page, limit, sort]);

    const filterCriteria: IFilter = useMemo(() => ({
        brands: newFilters.brands,
        manufacturers: newFilters.manufacturers,
        minPrice: newFilters.minPrice,
        maxPrice: newFilters.maxPrice,
    }), [newFilters]);

    // const {
    //     data: allProducts, 
        
    // } = productAPI.useFetchAllProductQuery({});

    const { 
        data: filteredProducts, 
        isError: filteredProductsError, 
        isLoading: filteredProductsLoading, 
        refetch,
    } = productAPI.useFetchFilteredProductsQuery({
        ...queryParams, 
        ...filterCriteria
    },
    {refetchOnMountOrArgChange: true}
    )

    const {
       data: allFilteredProducts,
       isSuccess
    } = productAPI.useFetchAllProductQuery({...filterCriteria})
    
    const totalPages: number = useMemo(
        () => {
        if (isSuccess && allFilteredProducts && allFilteredProducts.length === 0) {
            return 1;
          } else if (allFilteredProducts) {
            return Math.ceil(allFilteredProducts.length / limit);
          } else {
            return 1;
          }
        },
        [allFilteredProducts, filteredProducts, limit, isSuccess, clearFilter]
    );
        
    const pages: number[] = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
        return pages;
    }, [totalPages]);

    const handleApplyFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        e.stopPropagation()
        applyFilters(filters)
        setPage(1);
        refetch();
        // console.log(currentData)
        // console.log()
    };
    
    const handleClearFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        e.stopPropagation()
        clearFilter();
    }

    const itemsToShow = useMemo(() => {

          if (filteredProducts && filteredProducts.length > 0) {
            return filteredProducts;

          } else if (isSuccess && allFilteredProducts && allFilteredProducts.length === 0) {
            return [];

          } else if (filters && Object.values(filters).some(Boolean)) {
            return [];

          } 
    },
        [filteredProducts, allFilteredProducts, filters, clearFilter]
    );
    
    const itemsOnPage = itemsToShow;

    useEffect(()=> {
        scrollUp()
    }, [setPage])

    
    return (
        <>
            <section className='catalog'>
                <div className="container">
                    <div className="catalog__head">
                        <h2 className="catalog__title">Косметика и гигиена</h2>
                        <SortBy/>
                    </div>
                    <ol className="catalog__categories">
                        <li className='catalog__categories-item'>Уход<br /> за телом</li>
                        <li className='catalog__categories-item'>Уход<br /> за руками</li>
                    </ol>
                    <div className="catalog__wrap">
                        {allFilteredProducts && <Filter onClearFilter={handleClearFilters} onSubmit={handleApplyFilters} products={allFilteredProducts}/>}
                        <div className="catalog__body">
                            <ul className="catalog__items">
                                {(filteredProductsLoading ) && <Spinner />}
                                {(filteredProductsError) && <ErrorMessage />}
                                {itemsOnPage && itemsOnPage.length > 0 ?
                                (

                                    itemsOnPage.map(item => 
                                        item ? <ItemCard key={item.id} product={item} /> : <ErrorMessage/>
                                    )

                                ) : (

                                    <p>Товаров не найдено</p>
                                    
                                )}
                            </ul>
                            <Pagination onPageChange={setPage} currentPage={page} totalPages={totalPages} key={pages.length}/>
                            <div className="catalog__bottom">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis     vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc  elit, dignissim sed nulla ullamcorper enim, malesuada.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Catalog;