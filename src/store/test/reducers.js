import { MODIFY_COUNTER } from './actions'
/*creo il reducer: responsabile delle modifiche allo state, ossia risponde alle action dispatchate - RITORNA SEMPRE UN NUOVO STATE*/

const reducers = function(state = {counter: 0}, action){
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

export default reducers;