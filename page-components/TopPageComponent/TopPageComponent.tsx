import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import styles from './TopPageComponent.module.css';
import HhData from "../../components/hhData/hhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import {SortEnum} from "../../components/Sort/Sort.props";
import React from "react";
import {sortReducer} from "./sort.reducer";
import Product from "../../components/Product/Product";

const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort} , dispatchSort] = React.useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort});
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'green'} size={'m'}>{products.length}</Tag>}
                <Sort setSort={setSort} sort={sort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (
                    <Product key={p._id} product={p}/>
                        ))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>HH.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag={"h2"}>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
            <Htag tag={"h2"}>Получаемые навыки</Htag>
            {page.tags.map(t => (<Tag key={t} color={'primary'}>{t}</Tag>))}
        </div>
    );
};

export default TopPageComponent;
