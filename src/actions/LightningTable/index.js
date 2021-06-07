import * as actionType from '../../constants/LightningTable/ActionType';
import callApi from '../../utils/apiCaller';

export const actFetchListStocksRequest = () => {
    return (dispatch) => {
        return callApi('lightning', 'GET', null).then(res => {
            dispatch(actFetchListStocks(res.data));
        })
    }
}

export const actFetchListStocks = (data) => {
    return {
        type: actionType.FETCH_STOCKS,
        data
    }
}

export const fetchChangeList = (data) => {
    return {
        type: actionType.LIST_CHANGE_STOCKS,
        data
    }
}