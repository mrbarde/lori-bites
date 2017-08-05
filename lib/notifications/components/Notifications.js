'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _AnimationCSS = require('./AnimationCSS');

var _AnimationCSS2 = _interopRequireDefault(_AnimationCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notifications = function (_Component) {
    _inherits(Notifications, _Component);

    function Notifications() {
        _classCallCheck(this, Notifications);

        var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this));

        _this.state = {
            notifications: [],
            position: 'topRight',
            duration: 500,
            delay: 5000,
            animationName: 'fromLeft',
            show: true
        };
        return _this;
    }

    _createClass(Notifications, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            // if new push request is made
            if (!prevProps.lnPush.isPushing && this.props.lnPush.isPushing) {
                var notifications = this.state.notifications.concat(this.props.lnPush.notification);
                // update notifications in component state
                this.setState({ notifications: notifications });
                // end push action for new notification
                this.props.pushEnd();
            }

            // if a remove request is made
            if (!prevProps.lnRemove.isRemoving && this.props.lnRemove.isRemoving) {
                // filter through notifications in state.
                var notifications = this.state.notifications.filter(function (item, index) {
                    if (item.id != _this2.props.lnRemove.notification_id) {
                        return item;
                    }
                });
                // update notifications in component state
                this.setState({ notifications: notifications });
                // end remove action for notification
                this.props.removeEnd();
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                position = _props.position,
                duration = _props.duration,
                delay = _props.delay,
                animationName = _props.animationName,
                notifications = _props.notifications;


            if (position) {
                this.setState({ position: position });
            }

            if (duration) {
                this.setState({ duration: duration });
            }

            if (delay) {
                this.setState({ delay: delay });
            }

            if (animationName) {
                this.setState({ animationName: animationName });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                notifications = _state.notifications,
                position = _state.position,
                transitionName = _state.transitionName,
                timeout = _state.timeout,
                show = _state.show;

            return _react2.default.createElement(
                'ul',
                this.containerProps(),
                _react2.default.createElement(
                    _AnimationCSS2.default,
                    { transitionName: transitionName || 'loriNoti',
                        timeout: timeout || 500 },
                    notifications.map(this.renderNotification.bind(this))
                )
            );
        }
    }, {
        key: 'containerProps',
        value: function containerProps() {
            // get props
            var props = {};
            // set styles
            props.style = Object.assign({}, styles.container, styles[this.state.position], this.props.style);
            // set classname
            props.className = this.props.className ? this.props.className + " " : "";
            props.className += "lori_notifications";
            // return remaining props
            return props;
        }
    }, {
        key: 'renderNotification',
        value: function renderNotification(item, index) {
            // get default notification config
            var delay = this.state.delay;


            var notif = Object.assign({ delay: delay, type: 'info' }, item, {
                remove: this.remove.bind(this, item.id),
                positionStyles: this.state.position
            });
            return _react2.default.createElement(_Item2.default, _extends({}, notif, { key: item.id || index }));
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            this.props.removeNotify(id);
        }
    }]);

    return Notifications;
}(_react.Component);

var styles = {
    container: {
        position: 'absolute',
        width: '0px',
        listStyle: 'none',
        paddingLeft: '0px',
        marginBottom: '0px',
        overflowX: 'hidden',
        overflowY: 'visible'
    },
    'topRight': {
        right: '20px',
        top: '40px'
    },
    'topLeft': {
        left: '20px',
        top: '40px'
    },
    'bottomLeft': {
        left: '20px',
        bottom: '40px'
    },
    'bottomRight': {
        right: '20px',
        bottom: '40px'
    }
};

var mapStateToProps = function mapStateToProps(_ref) {
    var lnPush = _ref.lnPush,
        lnRemove = _ref.lnRemove;
    return { lnPush: lnPush, lnRemove: lnRemove };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ pushEnd: _actions.pushEnd, removeEnd: _actions.removeEnd, removeStart: _actions.removeStart }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Notifications);