'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _splash = require('./styles/splash.scss');

var _splash2 = _interopRequireDefault(_splash);

var _env = require('env');

var _env2 = _interopRequireDefault(_env);

var _logo = require('../assets/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _quote = require('./presenters/quote.jsx');

var _quote2 = _interopRequireDefault(_quote);

var _Page = require('../Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Home View
 */
var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		// initialise state
		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.state = {
			quotes: [{
				body: 'For God so loved the World that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
				author: 'Jesus Christ'
			}, {
				body: 'With the new day comes new strength and new thoughts.',
				author: 'Eleanor Roosevelt'
			}, {
				body: 'Well done is better than well said.',
				author: 'Benjamin Franklin'
			}, {
				body: 'Start where you are. Use what you have. Do what you can.',
				author: 'Arthur Ashe'
			}, {
				body: 'Let the beauty of what you love be what you do.',
				author: 'Rumi'
			}, {
				body: 'Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.',
				author: 'Plato'
			}],
			quote: null
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// get random index between 0 and 5
			var index = Math.floor(Math.random() * 6);
			// select quote
			var quote = this.state.quotes[index];
			// set quote
			this.setState({ quote: quote });

			setTimeout(this.testNotification, 5000);
		}
	}, {
		key: 'render',
		value: function render() {
			var quote = this.state.quote;
			// return view

			return _react2.default.createElement(
				_Page2.default,
				{ title: 'Welcome to Lori Framework' },
				_react2.default.createElement(
					'div',
					{ styleName: 'spanned' },
					_react2.default.createElement('div', { styleName: 'column' }),
					_react2.default.createElement(
						'div',
						{ styleName: 'column' },
						_react2.default.createElement('img', { src: _logo2.default, styleName: 'logo' }),
						_react2.default.createElement(
							'h5',
							{ styleName: 'message' },
							'Build something great...'
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'https://mrbarde.github.io/lori', target: '_blank', styleName: 'link' },
								'Documentation'
							)
						),
						quote && _react2.default.createElement(_quote2.default, quote)
					),
					_react2.default.createElement('div', { styleName: 'column' })
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactCssModules2.default)(Home, _splash2.default, _env2.default.cssModulesOptions));