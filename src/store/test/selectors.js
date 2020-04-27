const getReducer = (state) => state.test;
const getCounter = (state) => getReducer(state).counter;

export default {  
    getCounter 
};