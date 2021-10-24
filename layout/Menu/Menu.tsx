import {useContext, useEffect} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
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
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel,
                                {
                                    [styles.firstLevelActive]: m.id == firstCategory
                                })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive] : true
                })}>
                    {p.category}
                </a>
            ))
        )
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;