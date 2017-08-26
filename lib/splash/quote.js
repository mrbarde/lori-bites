'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quote = function Quote(_ref) {
    var body = _ref.body,
        author = _ref.author;

    return _react2.default.createElement(
        'div',
        { style: styles.quote },
        _react2.default.createElement(
            'p',
            { style: styles.body },
            body
        ),
        _react2.default.createElement(
            'h5',
            { style: styles.author },
            '- ' + author
        )
    );
};

var styles = {
    quote: {
        boxSizing: 'border-box',
        fontFamily: "'Lato', sans-serif",
        position: 'relative',
        float: 'none',
        clear: 'both',
        margin: '100px auto 10px auto',
        padding: '0px 20px',
        width: '480px',
        maxWidth: '100%'
    },
    body: {
        fontWeight: 300,
        fontSize: '1em',
        marginTop: '0px',
        marginBottom: '0px',
        textAlign: 'center',
        color: '#D1E1FE'
    },
    author: {
        fontWeight: 600,
        fontSize: '1em',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '0px',
        color: '#D1E1FE'
    }
};

exports.default = Quote;