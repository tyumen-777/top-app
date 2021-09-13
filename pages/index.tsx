
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
        <Button appearance={"primary"} arrow='right'>Узнать подробнее</Button>
        <Button appearance={"ghost"} arrow="down">Some Text</Button>
        <P size='l'> Big text</P>
        <P size='m'> Mid text</P>
        <P size='s'> Small text</P>
    </div>
  );
}
