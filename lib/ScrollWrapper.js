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

var ScrollWrapper = function (_Component) {
    _inherits(ScrollWrapper, _Component);

    function ScrollWrapper() {
        _classCallCheck(this, ScrollWrapper);

        return _possibleConstructorReturn(this, (ScrollWrapper.__proto__ || Object.getPrototypeOf(ScrollWrapper)).apply(this, arguments));
    }

    _createClass(ScrollWrapper, [{
        key: 'handleScroll',
        value: function handleScroll(event) {
            // Call the passed-in prop
            if (this.props.onWindowScroll) this.props.onWindowScroll(event);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll.bind(this));
        }
    }]);

    return ScrollWrapper;
}(_react.Component);

;

ScrollWrapper.propTypes = {
    onWindowScroll: _propTypes2.default.func.isRequired
};

exports.default = ScrollWrapper;