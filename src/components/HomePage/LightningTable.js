import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as signalR from "@microsoft/signalr";
import * as action from '../../actions/LightningTable/index'
import LightningTableItem from './LightningTableItem'
function LightningTable(props){
    const [state, setState] = useState(true);
    const LightningTableList = useSelector(state =>state.LightningTableList);
    const dispatch = useDispatch();
    
    var element;
    // useEffect(()=>{
    //     const hubConnection = new signalR.HubConnectionBuilder()
    //     .withUrl(url.url + "/signalr")
    //     .configureLogging(signalR.LogLevel.Information)  
    //     .build();
    //     hubConnection.on("message", message => {
    //         var json = JSON.parse(message);
    //         json = json[0];
    //         var e = {
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
    useEffect(()=>{
        dispatch(action.actFetchListStocksRequest());   
    },[]);
    element = LightningTableList.map((value ,index) =>{
        return  <LightningTableItem
        key = {index}
        macp ={value.macp}
        giaTC ={value.giaTC}
        giaTran = {value.giaTran}
        giaSan = {value.giaSan}
        ktTong = {value.ktTong}
        giaMua3 = {value.giaMua3}
        klMua3 = {value.klMua3}
        giaMua2 = {value.giaMua2}
        klMua2 = {value.klMua2}
        giaMua1 = {value.giaMua1}
        klMua1 = {value.klMua1}  
        gia = {value.gia}
        kl = {value.kl}
        giaBan1 = {value.giaBan1}
        klBan1 ={value.klBan1}
        giaBan2 = {value.giaBan2}
        klBan2 = {value.klBan2}
        giaBan3 = {value.giaBan3}
        klBan3 = {value.klBan3}
        />
    })
    return(
        <main class="content-wp">
            <section className="content">
                <div className="content__search">
                <input type="text" placeholder="Nhập mã CK ..." className="content__search-input" />
                <i className=" content__search-icon fas fa-search" />
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
                <table className="table-light__content">
                    <tbody className="line-stocks">
                        {element}
                    </tbody>
                </table>
            </section>
        </main>
    );

}
export default LightningTable;