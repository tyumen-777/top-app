import cn from 'classnames';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';


const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props} >
            Header
        </div>
    );
};

export default Header;
