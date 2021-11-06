import cn from 'classnames';
import {CardProps} from './Card.props';
import styles from './Card.module.css';


const Card = ({color, children, className, ...props}: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
             {...props}>{children}
        </div>
    );
};

export default Card;
