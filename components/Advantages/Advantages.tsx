import cn from 'classnames';
import {AdvantagesProps} from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './checkicon.svg';

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon/>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div className={styles.description}>{a.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Advantages;
