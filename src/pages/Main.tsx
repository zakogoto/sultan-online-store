import React, { FC, useEffect } from 'react';

import Promo from '../components/promo/Promo';
import Discount from '../components/discount/Discount';
import Categories from '../components/categories/Categories';
import Slider from '../components/slider/Slider';
import BestItems from '../components/bestItems/BestItems';
import Map from '../components/map/Map';
import { scrollUp } from '../helpers/scrollUp';

const MainPage: FC = () => {

    useEffect(() => {
        scrollUp()
    })
    return (
        <>
            <Promo/>
            <Discount/>
            <Categories/>
            <Slider/>
            <BestItems/>
            <Map/>
        </>
    );
};

export default MainPage;