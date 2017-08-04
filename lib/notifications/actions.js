'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeEnd = exports.removeStart = exports.pushEnd = exports.pushStart = undefined;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pushStart = exports.pushStart = function pushStart(notification) {
    return {
        type: types.LN_PUSH_START,
        isPushing: true,
        notification: notification
    };
};

var pushEnd = exports.pushEnd = function pushEnd() {
    return {
        type: types.LN_PUSH_END,
        isPushing: false
    };
};

var removeStart = exports.removeStart = function removeStart(notification_id) {
    return {
        type: types.LN_REMOVE_START,
        isRemoving: true,
        notification_id: notification_id
    };
};

var removeEnd = exports.removeEnd = function removeEnd() {
    return {
        type: types.LN_REMOVE_END,
        isRemoving: false
    };
};

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