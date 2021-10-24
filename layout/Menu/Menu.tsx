import {useContext, useEffect} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import styles from './Menu.module.css';
import cn from 'classnames'

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses
    },
    {
        route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products
    },
    {
        route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services
    },
    {
        route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books
    },
];

const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel,
                                {
                                    [styles.firstLevelActive]: menu.id == firstCategory
                                })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id == firstCategory && buildSecondLevel()}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = () => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                    </div>
                ))}
            </div>
        )
    };
    const buildThirdLevel = () => {

    };
    const buildFourthLevel = () => {

    };


    return (
        <div className={styles.menu}>

        </div>
    );
};

export default Menu;
