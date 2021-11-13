import cn from 'classnames';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';


const TextArea = ({ className, ...props}:TextAreaProps):JSX.Element => {
return(
    <textarea className={cn(className, styles.input)} {...props}/>
);
};

export default TextArea;
