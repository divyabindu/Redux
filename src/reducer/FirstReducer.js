

export default function(state={}, action){
    switch(action.type){
        case 'CREDENTIALS' :
            return {...state, token:action.payload};
        case 'DATA' :
            return {...state, data: action.payload}
    }
    return state
}