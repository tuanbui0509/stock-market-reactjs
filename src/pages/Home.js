import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { useDispatch , useSelector} from 'react-redux';
// import * as Acction from '../actions/table/index'
import Header from '../components/common/Header'
import Table from '../components/stock-table/Table'
import Footer from '../components/stock-table/Footer'
import  '../assets/js/main.js'
import  '../assets/js/base.js'

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
                <Table></Table>
                <Footer></Footer>
            </div>
        </div>
    );

}

export default Home;
