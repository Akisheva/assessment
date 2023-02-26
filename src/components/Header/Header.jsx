import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./img/logo.svg";
import "./Header.scss";

const Header = () => {
    return(
        <header className="header">
            <img className="header__background" src="img/background.png" alt="men playing VR-game"/>
            <div className="header-wrapper container"> 
                <div className="header__logo">
                    <Logo className="logo"/>
                    <p className="header__logo-item">
                        <span className="header__logo-item">Social</span>
                        <span className="header__logo-item-highlighted">Brothers</span>
                    </p>  
                </div>
                <div className="header__menu">
                    <NavLink to="/" className="header__menu-home">Home</NavLink>
                    <NavLink to="/blog"className="header__menu-blog">Blog</NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header