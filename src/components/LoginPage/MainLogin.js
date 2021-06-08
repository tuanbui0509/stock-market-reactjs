import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as ActionLogin from '../../actions/User/index';
import { useHistory } from 'react-router';
const MainLogin = (props) => {
    const [login , setLogin] = useState({
        username : "",
        password : "",
});
const dispacth = useDispatch();
const history = useHistory();
const handleOnChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setLogin({
            ...login,
            [name] : value
          
        })
      
}
const onSubmit = (e)=>{
    e.preventDefault();
    dispacth(ActionLogin.UserLoginRequest(login.username,login.password,history));
}
    return (
        <main className="main">
            <div className="container">
                <div className="content-login">
                    <div className="form-login">
                        <h5 className="form-title">Đăng nhập</h5>
                        <form onSubmit={onSubmit} className="form">
                            <div className="input-view">
                                <input type="text" className="username" id="username" placeholder="Tên đăng nhập" name="username" 
                                           onChange={handleOnChange} 
                                           className="form-control" 
                                           required />
                                <i className="fas fa-exclamation-circle icon-error" />
                                <div className="type-error" data-id="tooltip" id="userLogin">Vui lòng nhập Tên đăng nhập</div>
                            </div>
                            <div className="input-view">
                                <input type="password" className="password" id="password" placeholder="Mật khẩu"  name="password" 
                                            onChange ={handleOnChange}
                                            className="form-control" 
                                            required />
                                <i className="fas fa-exclamation-circle icon-error" />
                                <div className="type-error " data-id="tooltip" id="passLogin">Vui lòng nhập Mật khẩu</div>
                            </div>
                            <a href="#" className="forgotPassword">Quên mật khẩu?</a>
                            <button className="btn-login">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default MainLogin;
