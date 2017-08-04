'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lnPush = lnPush;
exports.lnRemove = lnRemove;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialPushState = {
    isPushing: false
};

function lnPush() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPushState;
    var action = arguments[1];

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

function lnRemove() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRemoveState;
    var action = arguments[1];

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