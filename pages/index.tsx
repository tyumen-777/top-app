import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";


 function Home(): JSX.Element {
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
        </div>
    );
}

export default withLayout(Home);
