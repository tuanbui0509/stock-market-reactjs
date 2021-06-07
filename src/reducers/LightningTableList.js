import * as actionType from '../constants/LightningTable/ActionType';
const initState = [];

var myReducer = (state = initState , action)=>{
    switch(action.type){
        case actionType.FETCH_STOCKS :
            state = action.data;
            console.log(state);
        return [...state];
        case actionType.LIST_CHANGE_STOCKS :
            var element = action.data;
            var index = findIndex(state , element);
            state[index] = element;
        return [...state]
        default : return state
    }
    
}

var findIndex = (state , element) =>{
    
    for(let  i = 0 ; i < state.length; i ++){
        if(state[i].macp === element.macp){
             return i;
        }
    }
    return -1;
}
export default myReducer;