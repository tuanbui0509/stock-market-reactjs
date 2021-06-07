import * as types from '../../constants/LightningTable/ActionType';
import callApi from '../../utils/apiCaller';

// FETCH ALL STOCKS
export const actFetchListStocksRequest = () => {
    return (dispatch) => {
        return callApi('lightning', 'GET', null).then(res => {
            dispatch(actFetchListStocks(res.data));
        })
    }
}

export const actFetchListStocks = (stocks) => {
    return {
        type: types.FETCH_STOCKS,
        stocks
    }
}

// FETCH CHANGE STOCKS
export const actFetchChangeListStocks = (stocks) => {
    return {
        type: types.LIST_CHANGE_STOCKS,
        stocks
    }
}

// FETCH GET 1 STOCK

const actOrderStockRequest = id => {
    return dispatch => {
        return callApi(`lightning/${id}`, 'GET', null).then(res => {
            dispatch(actGetStock(res.data));
        })
    }
}

const actGetStock = stock => {
    return {
        type: types.ORDER_STOCKS,
        stock
    }
}