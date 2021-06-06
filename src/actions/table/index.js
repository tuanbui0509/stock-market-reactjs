import * as actionType from '../../constants/table/index';
import api from '../../axios/index';
export const listAll = (data)=>{
    return {
        type : actionType.LIST_ALL,
        data
    }
}

export const fectchListAll = ()=>{
    return (dispatch) =>{   
        return api('lingting','GET',null).then(res =>{
            console.log(res);
            dispatch(listAll(res.data));
        })
    }
}

export const fetchChangeList = (data)=>{
    return{
        type : actionType.LIST_CHANGE,
        data
    }
}