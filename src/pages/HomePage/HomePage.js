import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { useDispatch , useSelector} from 'react-redux';
// import * as Acction from '../actions/table/index'
import Header from '../../components/Common/Header'
import LightningTable from '../../components/HomePage/LightningTable'
import Footer from '../../components/HomePage/Footer'
import  '../../assets/js/main.js'
import  '../../assets/js/base.js'

function Home(props){
    
    //const history = useHistory();
    // const StockList = useSelector(state => state.StockList)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(Acction.fectchListAll());
    // });
    
    return (
        <div className="App">
            <div className="site-wrap">
                <Header></Header>
                <LightningTable></LightningTable>
                <Footer></Footer>
            </div>
        </div>
    );

}

export default Home;
