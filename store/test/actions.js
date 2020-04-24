import {createAction} from 'redux-actions';

export const MODIFY_COUNTER = 'MODIFY_COUNTER';
export const modifyCounter = createAction(MODIFY_COUNTER);

export default { modifyCounter }