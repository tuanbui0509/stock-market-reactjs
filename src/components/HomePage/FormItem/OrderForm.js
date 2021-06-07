import React from 'react';

const OrderForm = () => {
    return (
        <section id="my-modal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-header">
                    <h5 className="modal-header__title">Đặt lệnh</h5>
                    <i className="far fa-times-circle  modal-header__icon-close" onclick="closeForm()" />
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <form className="modal-form">
                            <div className="form-input">
                                <div className="form-item">
                                    <label htmlFor="id">Số tài khoản</label>
                                    <input id="id" type="text" placeholder={1000105} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="stockId">Mã CK</label>
                                    <input id="stockId" type="text" placeholder="BHD" />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="weight">Khối lượng</label>
                                    <input id="weight" type="number" placeholder={1000} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="price">Giá đặt</label>
                                    <input id="price" type="number" placeholder={1000105} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="pin">Mã PIN</label>
                                    <input id="pin" type="password" placeholder="******" />
                                </div>
                            </div>
                            <div className="form-submit">
                                <button type="button" onclick="confirmForm()" className="btn btn--green">MUA</button>
                                <button type="button" className="btn btn--red">BÁN</button>
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
