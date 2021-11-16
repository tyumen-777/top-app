import cn from 'classnames';
import {SearchProps} from './Search.props';
import styles from './Search.module.css';
import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import GlassIcon from './search.svg';
import {useRouter} from "next/router";

const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = React.useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter') {
          handleSearch();
      }
    };


    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input className={styles.input}
                   placeholder={'Поиск...'}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   onKeyDown={handleKeyDown}
            />
            <Button appearance={"primary"}
                    className={styles.button}
                    onClick={handleSearch}><GlassIcon/></Button>
        </div>
    );
};

export default Search;
