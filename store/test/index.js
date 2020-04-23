import {createAction} from 'redux-actions';


export const MODIFY_COUNTER = 'MODIFY_COUNTER';
export const modifyCounter = createAction(MODIFY_COUNTER);

/*creo il reducer: responsabile delle modifiche allo state, ossia risponde alle action dispatchate - RITORNA SEMPRE UN NUOVO STATE*/
export const reducers = function(state = {counter: 0}, action){
    if(typeof state === 'undefined') {
        return 0
    }
    switch(action.type){
        case MODIFY_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload
            };
            default:
                return state
    }
}