import * as types from './actionTypes';

var initialPushState = {
    isPushing: false
};

export function lnPush(state = initialPushState, action){
    switch (action.type) {
        case types.LN_PUSH_START:
                return Object.assign({}, state, action);
            break;
        case types.LN_PUSH_END:
                return Object.assign({}, state, action);
            break;
        default:
                return state;
            break;
    }
}

var initialRemoveState = {
    isRemoving: false
};

export function lnRemove(state = initialRemoveState, action){
    switch (action.type) {
        case types.LN_REMOVE_START:
                return Object.assign({}, state, action);
            break;
        case types.LN_REMOVE_END:
                return Object.assign({}, state, action);
            break;
        default:
                return state;
            break;
    }
}
