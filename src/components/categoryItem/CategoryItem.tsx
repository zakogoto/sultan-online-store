import './categoryItem.sass';

import domesticImg from '../../resources/img/domestic.png';
import cosmeticImg from '../../resources/img/cosmetic.png';
import householdImg from '../../resources/img/household.png';
import forBabiesImg from '../../resources/img/for-babies.png';
import dishes from '../../resources/img/dishes.png';

export default function CategoryItem() {
    const categoriesList = [{
        name: 'domestic',
        value: 'Бытовая химия',
        imgSrc: domesticImg
    }, 
    {
        name: 'cosmetic',
        value: 'Косметика и гигиена',
        imgSrc: cosmeticImg,
    }, 
    {
        name: 'household',
        value: 'Товары для дома',
        imgSrc: householdImg
    },
    {
        name: 'forBabies',
        value: 'Товары для детей и мам',
        imgSrc: forBabiesImg
    },
    {
        name: 'dishes',
        value: 'Посуда',
        imgSrc: dishes    
    }];

    // function createCategoryItem() {
    // }
    return(
        categoriesList.map(item => {
            return(
                <li className='category-item' key={item.name}>
                    <a href={item.name} className='category-item__link'>
                        <div className="category-item__img">
                            <img src={item.imgSrc} alt={item.value} />
                        </div>
                        <span className='category-item__title'>
                            {item.value}
                        </span>
                    </a>
                </li>
            )
        })
    )
}