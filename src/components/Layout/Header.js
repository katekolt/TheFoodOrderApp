import classes from './Header.module.css';
import {Fragment} from "react";
import mealsImage from '../../assets/img.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full a delicious food!'/>
        </div>
    </Fragment>)
};
export default Header;
