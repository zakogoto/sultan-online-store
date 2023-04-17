import {FC} from 'react';

import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Catalog from '../components/catalog/Catalog';
// import { Link } from 'react-router-dom';

const CatalogPage: FC = () => {
    return (
        <>
            <Breadcrumbs />
            <Catalog />
        </>
    );
};

export default CatalogPage;