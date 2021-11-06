import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import {inspect} from "util";
import styles from './TopPageComponent.module.css';
import Card from "../../components/Card/Card";
import HhData from "../../components/hhData/hhData";
import {TopLevelCategory} from "../../interfaces/page.interface";

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
            { firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
        </div>
    );
};

export default TopPageComponent;
