'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSSAnimation = function CSSAnimation(_ref) {
            var children = _ref.children,
                timeout = _ref.timeout,
                transitionName = _ref.transitionName;


            return _react2.default.createElement(
                        _reactTransitionGroup.CSSTransitionGroup,
                        {
                                    transitionEnterTimeout: timeout,
                                    transitionLeaveTimeout: timeout,
                                    transitionName: transitionName },
                        children
            );
};

exports.default = CSSAnimation;