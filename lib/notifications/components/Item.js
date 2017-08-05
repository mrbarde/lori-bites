'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_Component) {
    _inherits(Notification, _Component);

    function Notification() {
        _classCallCheck(this, Notification);

        // initialise state
        var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

        _this.state = {
            show: true,
            timeout: null
            // bind methods
        };_this.remove = _this.remove.bind(_this);
        return _this;
    }

    _createClass(Notification, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.sticky && typeof this.props.delay !== 'undefined') {
                var timeout = setTimeout(this.remove, this.props.delay);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;
            var _props = this.props,
                animation = _props.animation,
                duration = _props.duration,
                type = _props.type,
                className = _props.className,
                message = _props.message;


            type = !type ? 'info' : type;

            className = className ? " " + className : '';

            var containerStyles = Object.assign({}, styles.default.container, styles[type]['container']);
            var closeStyles = Object.assign({}, styles.default.close, styles[type]['close']);
            var messageStyles = Object.assign({}, styles.default.message, styles[type]['message']);

            return _react2.default.createElement(
                'li',
                { style: containerStyles, className: "ln_notif_" + type + className },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', style: closeStyles, className: 'ln_notif_close' },
                    '\xD7'
                ),
                _react2.default.createElement(
                    'p',
                    { style: messageStyles, className: 'ln_notif_message' },
                    message
                )
            );
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.props.remove();
        }
    }]);

    return Notification;
}(_react.Component);

// define styles


var styles = {
    default: {
        container: {
            position: 'relative',
            float: 'left',
            width: '300px',
            marginBottom: '20px',
            padding: '30px 15px',
            backgroundColor: '#ffffff',
            border: 'solid 1px #666666'
        },
        close: {
            position: 'absolute',
            top: '10px',
            right: '15px',
            color: '#999999',
            fontSize: '14px'
        },
        message: {
            color: '#666666',
            margin: '0px 0px',
            fontSize: '13px'
        }
    },
    info: {
        container: {},
        close: {},
        message: {}
    },
    success: {
        container: {},
        close: {},
        message: {}
    },
    warning: {
        container: {},
        close: {},
        message: {}
    },
    danger: {
        container: {},
        close: {},
        message: {}
    }
};

// define component property types
Notification.propTypes = {
    message: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf(['info', 'success', 'warning', 'danger']),
    className: _propTypes2.default.string,
    delay: _propTypes2.default.number.isRequired,
    sticky: _propTypes2.default.bool,
    positionStyles: _propTypes2.default.string
};

exports.default = Notification;