import React from 'react';

const OrderForm = () => {
    let closeForm = () => {
        let my_modal = document.getElementById('my-modal');
        console.log(my_modal)
        my_modal.style.visibility = 'hidden';
        my_modal.style.opacity = 0;
    }

    let confirmForm = () => {
        let my_modal = document.getElementById('confirm-modal');
        console.log(my_modal)
        my_modal.style.visibility = 'visible';
        my_modal.style.opacity = 1;
    }

    let searchListAcc = () => {
        let input, list;
        list = document.getElementById("listBankAccount");
        input = document.getElementById("idAcc");
        searchList(input, list);
    }

    let searchListStock = () => {
        let input, list;
        input = document.getElementById("stockId");
        list = document.getElementById("listStock");
        searchList(input, list);
    }

    let searchList = (input, list) => {
        let filter, li, a, i, txtValue;
        list.style.display = 'block';
        filter = input.value.toUpperCase();
        li = list.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        list.onclick = function (event) {
            var target = getEventTarget(event);
            let value = target.querySelector('li a').innerHTML;
            input.value = value;
            list.style.display = 'none';
        };

        if (input.value.length === 0) {
            list.style.display = 'none';
        }
    }

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    let focusList = (input, list) => {
        let a, txtValue, filter, li, i;
        if (input.value.length === 0) {
            list.style.display = 'none';
        } else {
            list.style.display = 'block';
        }

        li = list.getElementsByTagName("li");
        filter = input.value.toUpperCase();
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    let focusListAcc = () => {
        let input, list;
        input = document.getElementById("idAcc");
        list = document.getElementById("listBankAccount");
        focusList(input, list);
    }

    let focusListStock = () => {
        let input, list;
        input = document.getElementById("stockId");
        list = document.getElementById("listStock");
        focusList(input, list);
    }

    const onSubmitFormOrder = (e) => {
        e.preventDefault();
        // dispatch(ActionLogin.UserLoginRequest(login.username, login.password, history));
        let my_modal = document.getElementById('confirm-modal');
        console.log(my_modal)
        my_modal.style.visibility = 'visible';
        my_modal.style.opacity = 1;
    }


    return (
        <section id="my-modal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-header">
                    <h5 className="modal-header__title">Đặt lệnh</h5>
                    <i className="far fa-times-circle  modal-header__icon-close" onClick={closeForm} />
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <form className="modal-form" onSubmit={onSubmitFormOrder}>
                            <div className="form-input">
                                <div className="form-item">
                                    <label htmlFor="idAcc">Số tài khoản</label>
                                    <input
                                        required

                                        id="idAcc"
                                        type="text"
                                        placeholder={1000105}
                                        onKeyUp={searchListAcc}
                                        onFocus={focusListAcc}
                                    />
                                    <ul id="listBankAccount">
                                        <li><a href="#">01234</a></li>
                                        <li><a href="#">11232</a></li>
                                        <li><a href="#">21235</a></li>
                                        <li><a href="#">31236</a></li>
                                        <li><a href="#">41238</a></li>
                                        <li><a href="#">51239</a></li>
                                        <li><a href="#">41231</a></li>

                                    </ul>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="stockId">Mã CK</label>
                                    <input
                                        required
                                        id="stockId"
                                        type="text"
                                        placeholder="BHD"
                                        onKeyUp={searchListStock}
                                        onFocus={focusListStock}
                                    />
                                    <ul id="listStock">
                                        <li><a href="#">HKU</a></li>
                                        <li><a href="#">HBH</a></li>
                                        <li><a href="#">HNK</a></li>
                                        <li><a href="#">HLJ</a></li>
                                        <li><a href="#">HQW</a></li>
                                        <li><a href="#">HUI</a></li>
                                        <li><a href="#">HLO</a></li>

                                    </ul>
                                </div>
                                <label htmlFor="totalPrice" className="totalPrice">Số tiền trong tài khoản: <strong>255.000.000đ</strong></label>
                                <div className="form-item">
                                    <label htmlFor="weight">Khối lượng</label>
                                    <input
                                        required
                                        id="weight" type="number" placeholder={1000} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="price">Giá đặt</label>
                                    <input
                                        required
                                        id="price" type="number" placeholder={1000105} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="pin">Mã PIN</label>
                                    <input
                                        required
                                        id="pin" type="password" placeholder="******" />
                                </div>
                            </div>
                            <div className="form-submit">
                                <button className="btn btn--green">MUA</button>
                                <button className="btn btn--red">BÁN</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-show-stock">
                        <div className="modal-order-matching">
                            <p className="order-matching-title">Khớp lệnh</p>
                            <span className="order-matching-price">Giá: 13.4</span>
                            <span>-</span>
                            <span className="order-matching-weight">Số lượng: 1,340</span>
                        </div>
                        <div className="compare-stock">
                            <div className="info-stock info-ceil">
                                <label htmlFor>Trần: </label>
                                <span className="ceil">14.5</span>
                            </div>
                            <div className="info-stock info-standard">
                                <label htmlFor>TC: </label>
                                <span className="standard">13.4</span>
                            </div>
                            <div className="info-stock info-floor">
                                <label htmlFor>Sàn: </label>
                                <span className="floor">12.3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <span> <strong>Hướng dẫn:</strong> 1000 đồng - Đơn vị khối lượng: 1 cổ phiếu - Đơn vị tiền: đồng</span>
                </div>
            </div>
        </section>

    );
}

export default OrderForm;
