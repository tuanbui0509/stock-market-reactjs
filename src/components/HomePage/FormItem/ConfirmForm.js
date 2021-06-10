import React from 'react';

const ConfirmForm = (props) => {
    // let {order} = props.confirmInfoDetailOrder;
    let { idAcc, stockId, price, weight, pin } = props.confirmOrder;
    let closeFormConfirm = () => {
        let my_modal = document.getElementById('confirm-modal');
        my_modal.style.visibility = 'hidden';
        my_modal.style.opacity = 0;
    }
    let acceptFormConfirm = () => {
        let my_modal = document.getElementById('confirm-modal');
        console.log(my_modal)
        my_modal.style.visibility = 'hidden';
        my_modal.style.opacity = 0;
    }
    return (
        <section id="confirm-modal" className="modal">
            <div className="confirm-modal">
                <div className="modal-header">
                    <h5 className="modal-header__title">xác nhận đặt lệnh</h5>
                    <i className="fas fa-info-circle modal-header__icon-info" />
                </div>
                <form className="modal-content-info">
                    <div className="modal-info">
                        <p className="modal-info-title">Quý khách có thật sự muốn đặt lệnh <span className="color-green">Mua</span>
                        </p>
                        <div className="modal-info-detail">
                            <div className="modal-info-item">
                                <p className="modal-info-label">Mã CK:</p>
                                <strong className="modal-info-value">{stockId}</strong>
                            </div>
                            <div className="modal-info-item">
                                <p className="modal-info-label">Khối lượng:</p>
                                <strong className="modal-info-value">{weight}</strong>
                            </div>
                            <div className="modal-info-item">
                                <p className="modal-info-label">Giá đặt:</p>
                                <strong className="modal-info-value">{price}</strong>
                            </div>
                            <div className="modal-info-item">
                                <p className="modal-info-label">Tài khoản:</p>
                                <strong className="modal-info-value color-red">{idAcc}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="modal-btn">
                        <button className="btn-default btn-close" onClick={closeFormConfirm}>Đóng</button>
                        <button className="btn-default btn-confirm" onClick={acceptFormConfirm}>Xác nhận</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default ConfirmForm;
