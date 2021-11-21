import cn from 'classnames';
import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';


const Divider = ({className, ...props}:DividerProps):JSX.Element => {
return(
    <hr className={cn(className, styles.hr)} {...props}/>
);
};

export default Divider;
