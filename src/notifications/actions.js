import * as types from './actionTypes';

export const pushStart = function(notification){
    // set notification id
    notification.id = (notification.id) ? notification.id : (Math.random()*10000000)
    // return a notification
    return {
        type: types.LN_PUSH_START,
        isPushing: true,
        notification
    };
}

export const pushEnd = function(){
    return {
        type: types.LN_PUSH_END,
        isPushing: false,
    };
}

export const removeStart = function(notification_id){
    return {
        type: types.LN_REMOVE_START,
        isRemoving: true,
        notification_id
    };
}

export const removeEnd = function(){
    return {
        type: types.LN_REMOVE_END,
        isRemoving: false,
    };
}

// export function push(notification){
//     return function(dispatch, getState){
//         // generate notification ID
//         notification.id = (notification.id === undefined) ? (Math.random() * 1000000) : notification.id;
//         // dispatch push start
//         dispatch(pushStart(notification));
//         // dispatch push end
//         dispatch(pushEnd());
//     };
// }

// export function remove(notification_id){
//     return function(dispatch, getState){
//         // dispatch remove start
//         dispatch(removeStart(notification_id));
//         // dispatch remove end
//         dispatch(removeEnd());
//     };
// }