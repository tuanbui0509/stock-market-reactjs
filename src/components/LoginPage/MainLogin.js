import React from 'react';

const MainLogin = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="content-login">
                    <div className="form-login">
                        <h5 className="form-title">Đăng nhập</h5>
                        <form action>
                            <div className="input-view">
                                <input type="text" className="username" id="username" placeholder="Tên đăng nhập" onclick="showError('user')" />
                                <i className="fas fa-exclamation-circle icon-error" />
                                <div className="type-error" data-id="tooltip" id="userLogin">Vui lòng nhập Tên đăng nhập</div>
                            </div>
                            <div className="input-view">
                                <input type="password" className="password" id="password" placeholder="Mật khẩu" onclick="showError('pass')" />
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
