import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { useDispatch , useSelector} from 'react-redux';
// import * as Acction from '../actions/table/index'
import Header from '../../components/Common/Header'
import LightningTable from '../../components/HomePage/LightningTable'
import Footer from '../../components/HomePage/Footer'
import OrderForm from '../../components/HomePage/FormItem/OrderForm';
import ConfirmForm from '../../components/HomePage/FormItem/ConfirmForm';

function HomePage(props){
    
    //const history = useHistory();
    // const StockList = useSelector(state => state.StockList)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(Acction.fectchListAll());
    // });
    
    return (
        <div className="App">
                <Header></Header>
                <LightningTable></LightningTable>
                <Footer></Footer>
                <OrderForm/>
                <ConfirmForm/>
        </div>
    );

}

export default HomePage;

