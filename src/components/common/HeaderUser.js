import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userlogo from '../../assets/images/user.png';
import user2logo from '../../assets/images/user2.png';
import * as action from '../../actions/User/index';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';
function HeaderUser(props){
    //const token = JSON.parse(localStorage.getItem("token"));
    const user = useSelector(state => state.User);
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setstate] = useState({display: "none"});
    const logOut = ()=>{
        if(window.confirm("Bạn có chắc chắn muốn đăng xuất !")){
            //localStorage.removeItem("token");
            dispatch(action.UserLogout(history));
            localStorage.removeItem("token");
            setstate({display: "none"});
        };
    }
    const element = ()=>{

        var element
        if(user === null){
            element = <ul className="header__right-account-list" style={state}>
            <li className="header__right-account-item">Chào mừng đến với iBoard </li>
            <li className="header__right-account-item"><span className="header__right-flag"><img src={user2logo} className="img-responsive" alt="" /></span> <Link to = "/login">Đăng Nhập</Link> </li>
          </ul>;
        }else{
            element = <ul className="header__right-account-list" style={state}>
            <li className="header__right-account-item"><span className="header__right-flag"><img src={user2logo} className="img-responsive" alt="" /></span> <Link to="/userinfor" >{user.ten}</Link> </li>
            <li className="header__right-account-item"> <Link to="/" onClick = {logOut}>Đăng Xuất</Link> </li>
            </ul>;  
        }
        return element;
    }
    
    const onClick = ()=>{
       if(state.display==="block")
           setstate({display: "none"});
       else
           setstate({display: "block"});
   }
    return(
        <div className="header__right-account">
            <span className="header__right-account-label" onClick={onClick}><img src={userlogo} alt="" className="img-responsive" /></span>
            
            {element()}
          </div>
    );
}
export default HeaderUser;