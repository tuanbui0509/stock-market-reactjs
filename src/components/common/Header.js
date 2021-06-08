import React from 'react';
import {Link} from 'react-router-dom';
import {  useSelector } from 'react-redux';
import ntnt from '../../assets/images/ntnt.png';
import user2logo from '../../assets/images/user2.png';
import HeaderLangue from './HeaderLangue';
import HeaderTheme from './HeaderTheme';
import HeaderUser from './HeaderUser';
function Header(props) {
    //const token = JSON.parse(localStorage.getItem("token"));
    return (
      <header className="header topbar" id="header">
      <div className="header__left">
        <Link to="/" className="header__logo"><img src={ntnt} alt="" className="img-responsive" />iBoard</Link>
      </div>
      <div className="header__right">
        <HeaderLangue></HeaderLangue>
        <HeaderTheme></HeaderTheme>
        <div className="header__right-realtime">
          <strong className="header__right-realtime-label">11:10:15</strong>
        </div>
        <div className="header__right-date">
          <span className="header__right-date-label">thứ tư, 02/06/2021</span>
        </div>
        <HeaderUser></HeaderUser>
      </div>
    </header>
  );
}
export default Header;

