import { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';

import prevArrow from '../../resources/img/page-prev.svg'
import nextArrow from '../../resources/img/page-next.svg'

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC <PaginationProps> = ({totalPages, currentPage, onPageChange}) => {

    const [isPrevDisabled, setIsPrevDisabled] = useState(currentPage === 1);
    const [isNextDisabled, setIsNextDisabled] = useState(currentPage === totalPages);

    const handlePageChange = (page: number) => {
        onPageChange(page);
        setIsPrevDisabled(page === 1);
        setIsNextDisabled(page === totalPages);
    };

    const previousPage = (
        <button
          className="catalog__pages-prev"
          disabled={isPrevDisabled}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <img src={prevArrow} alt="prev" />
        </button>
    );
    
    const nextPage = (
        <button
          className="catalog__pages-next"
          disabled={isNextDisabled}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <img src={nextArrow} alt="prev" />
        </button>
    );
    
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="catalog__pages">
            {previousPage}
            <ol className='catalog__pages-wrap'>
                {pages.map(p => 
                    <li 
                        key={p} 
                        onClick={()=> handlePageChange(p)}
                        className={p === currentPage ? 'catalog__page catalog__page_current' : "catalog__page"}
                    >
                        {p}
                    </li>
                )}
            </ol>
            {nextPage}
        </div>
    );
};

export default Pagination;