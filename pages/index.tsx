import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";


function Home({menu}: HomeProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <Htag tag='h1'>{counter}</Htag>
            <Button appearance={"primary"} arrow='right' onClick={() => setCounter(x => x + 1)}>Увеличить
                счетчик</Button>
            <Button appearance={"ghost"} arrow="down">Some Text</Button>
            <P size='l'> Big text</P>
            <P size='m'> Mid text</P>
            <P size='s'> Small text</P>
            <Tag color='green'>Small</Tag>
            <Rating rating={4} isEditable/>
            <Input placeholder={'Поиск...'}/>
            <TextArea placeholder={'Text Area'}/>
        </div>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
