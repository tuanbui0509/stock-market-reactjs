import React, { useEffect } from 'react';
import {Route , Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ntnt from '../../assets/images/ntnt.png';
import vietnamlogo from '../../assets/images/vietnam-logo.png';
import uklogo from '../../assets/images/uk-logo.png';
import chinalogo from '../../assets/images/china-logo.png';
import japanlogo from '../../assets/images/japan-logo.png';
import sunnylogo from '../../assets/images/sunny.png';
import halfmoon from '../../assets/images/half-moon.png';
import control from '../../assets/images/controls.png';
import userlogo from '../../assets/images/user.png';
import user2logo from '../../assets/images/user2.png';
// import '../../assets/css/base.css'
// import '../../assets/css/reset.css'
// import '../../assets/css/style.css'
function Header(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = useSelector(state => state.User)
    const logOut = ()=>{
        if(window.confirm("Bạn có chắc chắn muốn đăng xuất !")){
            localStorage.removeItem("token");
        };
    }
    const element = ()=>{

        var element = <li className="header__right-account-item"><span className="header__right-flag"><img src={user2logo} className="img-responsive" alt="" /></span> <Link to="/" onClick = {logOut}>Đăng Xuất</Link> </li>;
        if(token){
            element = <li className="header__right-account-item"><span className="header__right-flag"><img src={user2logo} className="img-responsive" alt="" /></span> <Link to = "/login">Đăng Nhập</Link> </li>;
        }
        return element;
    }
    const showMenuTheme = ()=>{
      return "showMenuTheme()";
    }
    return (
        <header className="header topbar" id="header">
        <div className="header__left">
          <Link to="/" className="header__logo"><img src={ntnt} alt="" className="img-responsive" />iBoard</Link>
        </div>
        <div className="header__right">
          <div className="header__right-language">
            <button className="header__right-label-language" onclick="showMenuLanguage()"> <span><img src={vietnamlogo} className="img-responsive" alt="" /></span> Tiếng Việt <i className="fas fa-chevron-down" /></button>
            <ul className="header__right-language-list">
              <li className="header__right-language-item header__right-language-item--active">
                Tiếng Việt
                <span className="header__right-flag"><img src={vietnamlogo} className="img-responsive" alt="" /></span>
              </li>
              <li className="header__right-language-item">English<span className="header__right-flag"><img src={uklogo} className="img-responsive" alt="" /></span></li>
              <li className="header__right-language-item">中文 (Chinese)
                <span className="header__right-flag"><img src={chinalogo} className="img-responsive" alt="" /></span>
              </li>
              <li className="header__right-language-item">日本人 (Japanese)
                <span className="header__right-flag"><img src={japanlogo} className="img-responsive" alt="" /></span>
              </li>
            </ul>
          </div>
          <div className="header__right-theme">
            <button className="header__right-label-theme" onclick="showMenuTheme()">Light Theme<span><img src={sunnylogo} className="img-responsive" alt="" /></span></button>
            <ul className="header__right-theme-list">
              <li className="header__right-theme-item header__right-theme-item--active">Light Theme <span className="header__right-flag"><img src={sunnylogo} className="img-responsive" alt="" /></span></li>
              <li className="header__right-theme-item">Dark Theme <span className="header__right-flag"><img src={halfmoon} className="img-responsive" alt="" /></span></li>
              <li className="header__right-theme-item">Classic Theme <span className="header__right-flag"><img src={control} className="img-responsive" alt="" /></span></li>
            </ul>
          </div>
          <div className="header__right-realtime">
            <strong className="header__right-realtime-label">11:10:15</strong>
          </div>
          <div className="header__right-date">
            <span className="header__right-date-label">thứ tư, 02/06/2021</span>
          </div>
          <div className="header__right-account">
            <span className="header__right-account-label" onclick="showMenuAccount()"><img src={userlogo} alt="" className="img-responsive" /></span>
            <ul className="header__right-account-list">
              <li className="header__right-account-item">Chào mừng đến với iBoard </li>
              {element()}
            </ul>
          </div>
        </div>
      </header>
    );
}
export default Header;

