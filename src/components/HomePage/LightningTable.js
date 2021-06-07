import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as signalR from "@microsoft/signalr";
import * as action from '../../actions/LightningTable/index'
import LightningTableItem from './LightningTableItem'
function LightningTable(props) {
    const [state, setState] = useState(true);
    const LightningTableList = useSelector(state => state.LightningTableList);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     const hubConnection = new signalR.HubConnectionBuilder()
    //     .withUrl(url.url + "/signalr")
    //     .configureLogging(signalR.LogLevel.Information)  
    //     .build();
    //     hubConnection.on("message", message => {
    //         let json = JSON.parse(message);
    //         json = json[0];
    //         let e = {
    //             macp : json.MACP,
    //             giaTC : json.GiaTC,
    //             giaTran : json.GiaTran,
    //             giaSan : json.GiaSan,
    //             ktTong : json.KTTong,
    //             giaMua3 : json.GiaMua3,
    //             klMua3 : json.KLMua3,
    //             giaMua2 : json.GiaMua2,
    //             klMua2 : json.KLMua2,
    //             giaMua1 : json.GiaMua1,
    //             klMua1 : json.KLMua1,
    //             gia : json.Gia,
    //             kl : json.KL,
    //             giaBan1 : json.GiaBan1,
    //             klBan1 : json.KLBan1,
    //             giaBan2 :json.GiaBan2,
    //             klBan2  : json.KLBan2,
    //             giaBan3 : json.GiaBan3,
    //             klBan3 : json.KLBan3
    //         }
    //         console.log(e);
    //         dispatch(action.fetchChangeList(e));
    //     });
    //     hubConnection.start();
    //     //setState(!state);
    // },state)
    useEffect(() => {
        dispatch(action.FetchListStocksRequest());
    }, []);

    let element = LightningTableList.map((value, index) => {
        return <LightningTableItem
            key={index}
            macp={value.macp}
            giaTC={value.giaTC}
            giaTran={value.giaTran}
            giaSan={value.giaSan}
            ktTong={value.ktTong}
            giaMua3={value.giaMua3}
            klMua3={value.klMua3}
            giaMua2={value.giaMua2}
            klMua2={value.klMua2}
            giaMua1={value.giaMua1}
            klMua1={value.klMua1}
            gia={value.gia}
            kl={value.kl}
            giaBan1={value.giaBan1}
            klBan1={value.klBan1}
            giaBan2={value.giaBan2}
            klBan2={value.klBan2}
            giaBan3={value.giaBan3}
            klBan3={value.klBan3}
             />
    })
    return (
        <main class="content-wp">
            <section className="content">
                <div className="content__search">
                    <input type="text" placeholder="Nhập mã CK ..." className="content__search-input" />
                    <i className=" content__search-icon fas fa-search" />
                </div>
                <div className="content__tab-pill content__tab-pill--active" onclick="openCity(event, 'HCM')">
                    <div className="content__tab-title">HCM</div>
                </div>
                <div className="content__tab-pill" onclick="openCity(event, 'HNX')">
                    <div className="content__tab-title">HNX</div>
                </div>
            </section>
            <section className="table-light-wp">
                <table className="table-light__header">
                    <thead className="table-light__header--fixed">
                        <tr className="table-light__header-first">
                            <th rowSpan={2}>
                                CK
                        </th>
                            <th rowSpan={2}>
                                Trần
                        </th>
                            <th rowSpan={2}>
                                Sàn
                        </th>
                            <th rowSpan={2}>
                                TC
                        </th>
                            <th rowSpan={1} colSpan={6}>
                                Bên mua
                        </th>
                            <th rowSpan={1} colSpan={2}>
                                Khớp lệnh
                        </th>
                            <th rowSpan={1} colSpan={6}>
                                Bên bán
                        </th>
                        </tr>
                        <tr className="table-light__header-second">
                            <th>Giá 3</th>
                            <th>KL 3</th>
                            <th>Giá 2</th>
                            <th>KL 2</th>
                            <th>Giá 1</th>
                            <th>KL 1</th>
                            <th>Giá</th>
                            <th>KL</th>
                            <th>Giá 1</th>
                            <th>KL 1</th>
                            <th>Giá 2</th>
                            <th>KL 2</th>
                            <th>Giá 3</th>
                            <th>KL 3</th>
                        </tr>
                    </thead>
                </table>
                <div>
                    <table className="table-light__content" id="HCM">
                        <tbody className="line-stocks"> {/* 1 stock */}
                            {element}
                        </tbody>
                    </table>
                    <table className="table-light__content" id="HNX">
                        <tbody className="line-stocks">
                            {/* 1 stock */}
                            <tr className="stock" id="BID" ondblclick="showModalMatching()">
                                <td className="stockID" data-tooltip="Ngân hàng Thương mại Cổ phần Đầu tư và Phát triển Việt Nam ">
                                    AAA</td>
                                <td className="special txt-floor">50.7</td>
                                <td className="special txt-ceil">44.1</td>
                                <td className="special txt-standard">47.4</td>
                                <td className>48.7</td>
                                <td className>70,100</td>
                                <td className>48.75</td>
                                <td className>5,300</td>
                                <td className>48.8</td>
                                <td className>17,500</td>
                                <td className="special">48.8</td>
                                <td className="special">15,000</td>
                                <td className>48.9</td>
                                <td className>14,500</td>
                                <td className>48.95</td>
                                <td className>14,500</td>
                                <td className>49</td>
                                <td className>14,500</td>
                            </tr>
                            <tr className="stock" id="VJC">
                                <td className="stockID" data-tooltip="Công ty công nghệ VJC">BBB</td>
                                <td className="special txt-floor">114</td>
                                <td className="special txt-ceil">99.2</td>
                                <td className="special txt-standard">106.6</td>
                                <td className>99.2</td>
                                <td className>1,100</td>
                                <td className>106.5</td>
                                <td className>5,300</td>
                                <td className>106.7</td>
                                <td className>17,500</td>
                                <td className="special">106.9</td>
                                <td className="special">15,000</td>
                                <td className>106.9</td>
                                <td className>14,500</td>
                                <td className>107</td>
                                <td className>14,500</td>
                                <td className>107.1</td>
                                <td className>14,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </section>
            <section class="order-matching" onclick="showModalMatching()">
                <i class="fas fa-cart-plus"></i>
                <span>Đặt lệnh</span>
            </section>
        </main>
    );

}
export default LightningTable;