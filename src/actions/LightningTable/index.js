import * as types from '../../constants/LightningTable/ActionType';
import callApi from '../../utils/apiCaller';

// FETCH ALL STOCKS
export const FetchListStocksRequest = () => {
    return (dispatch) => {
        return callApi('lightning', 'GET', null).then(res => {
            dispatch(FetchListStocks(res.data));
        })
    }
}

export const FetchListStocks = (stocks) => {
    return {
        type: types.FETCH_STOCKS,
        stocks
    }
}

// FETCH CHANGE STOCKS
export const FetchChangeListStocks = (stocks) => {
    return {
        type: types.LIST_CHANGE_STOCKS,
        stocks
    }
}

// FETCH GET 1 STOCK

const OrderStockRequest = id => {
    return dispatch => {
        return callApi(`lightning/${id}`, 'GET', null).then(res => {
            dispatch(GetStock(res.data));
        })
    }
}

const GetStock = stock => {
    return {
        type: types.ORDER_STOCKS,
        stock
    }
}