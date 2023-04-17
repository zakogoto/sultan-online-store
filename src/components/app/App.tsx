import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppFooter from '../appFooter/AppFooter';
import AppHeader from '../appHeader/AppHeader';
import AppMenu from '../appMenu/AppMenu';
import MainPage from '../../pages/Main';
import CatalogPage from '../../pages/Catalog';
import ProductPage from '../../pages/Product';
import CartPage from '../../pages/Cart';

import '../../style/style.sass'

const App: FC = () => {
    
    return (
        <BrowserRouter>
            <AppMenu/>
            <AppHeader/>
                <Routes>
                    <Route path='' element={<MainPage/>}/>
                    <Route path='/catalog' element={<CatalogPage />}/>
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/products/:id' element={<ProductPage />} />
                </Routes>
            <AppFooter/>
        </BrowserRouter>
    );
};

export default App;