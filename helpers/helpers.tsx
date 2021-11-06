import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

