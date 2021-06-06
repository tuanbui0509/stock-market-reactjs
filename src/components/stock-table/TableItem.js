import React, { useEffect } from 'react';
function TableItem(props){
    const {
        macp,
        giaTC,
        giaTran,
        giaSan,
        ktTong,
        giaMua3,
        klMua3,
        giaMua2,
        klMua2,
        giaMua1,
        klMua1,
        gia,
        kl,
        giaBan1,
        klBan1,
        giaBan2,
        klBan2,
        giaBan3,
        klBan3 } = props;
    return (
        <tr className="stock" id={macp}>
            <td className="stockID" data-tooltip="Công ty công nghệ VJC">{macp}</td>
            
            <td className="special txt-floor">{giaTran}</td>
            <td className="special txt-ceil">{giaSan}</td>
            <td className="special txt-standard">{giaTC}</td>
            <td className="">{giaMua3}</td>
            <td className="">{klMua3}</td>
            <td className="">{giaMua2}</td>
            <td className="">{klMua2}</td>
            <td className="">{giaMua1}</td>
            <td className="">{klMua1}</td>
            <td className="special">{gia}</td>
            <td className="special">{kl}</td>
            <td className="">{giaBan1}</td>
            <td className="">{klBan1}</td>
            <td className="">{giaBan2}</td>
            <td className="">{klBan2}</td>
            <td className="">{giaBan3}</td>
            <td className="">{klBan3}</td>
        </tr>
    );
}
export default TableItem;