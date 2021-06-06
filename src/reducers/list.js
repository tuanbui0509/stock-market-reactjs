import * as actionType from '../constants/table/index';
const initState = [];

var myReducer = (state = initState , action)=>{
    switch(action.type){
        case actionType.LIST_ALL :
            state = action.data;
            console.log(state);
        return [...state];
        case actionType.LIST_CHANGE :
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