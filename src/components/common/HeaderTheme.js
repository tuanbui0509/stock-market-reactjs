import React, {useState} from 'react';
import sunnylogo from '../../assets/images/sunny.png';
import halfmoon from '../../assets/images/half-moon.png';
import control from '../../assets/images/controls.png';
function HeaderTheme(props){

    const [state, setstate] = useState({display: "none"});
    const onClick = ()=>{
        console.log("firing");
       if(state.display==="block")
           setstate({display: "none"});
       else
           setstate({display: "block"});
   }

    return (
        <div className="header__right-theme">
            <button className="header__right-label-theme" onClick={onClick}>Light Theme<span><img src={sunnylogo} className="img-responsive" alt="" /></span></button>
            <ul className="header__right-theme-list" style={state}>
              <li className="header__right-theme-item header__right-theme-item--active">Light Theme <span className="header__right-flag"><img src={sunnylogo} className="img-responsive" alt="" /></span></li>
              <li className="header__right-theme-item">Dark Theme <span className="header__right-flag"><img src={halfmoon} className="img-responsive" alt="" /></span></li>
              <li className="header__right-theme-item">Classic Theme <span className="header__right-flag"><img src={control} className="img-responsive" alt="" /></span></li>
            </ul>
          </div>
    );
}
export default HeaderTheme;