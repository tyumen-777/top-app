import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import styles from './TopPageComponent.module.css';
import HhData from "../../components/hhData/hhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";
import P from "../../components/P/P";

const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'green'} size={'m'}>{products.length}</Tag>}
                <span>Соритровка</span>
            </div>
            <div>
                {products && products.map(p => (
                    <div key={p._id}>
                        {p.title}
                    </div>))}
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
