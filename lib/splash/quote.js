'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _env = require('env');

var _env2 = _interopRequireDefault(_env);

var _quote = require('./styles/quote.scss');

var _quote2 = _interopRequireDefault(_quote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quote = function quote(_ref) {
    var body = _ref.body,
        author = _ref.author;

    return _react2.default.createElement(
        'div',
        { styleName: 'quote' },
        _react2.default.createElement(
            'p',
            { styleName: 'body' },
            body
        ),
        _react2.default.createElement(
            'h5',
            { styleName: 'author' },
            '- ' + author
        )
    );
};

exports.default = (0, _reactCssModules2.default)(quote, _quote2.default, _env2.default.cssModulesOptions);