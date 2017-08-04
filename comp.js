var {_interopRequireDefault} = require('./src/helpers')
var Page = require('./src/Page.js');
var ResizeWrapper = require('./src/ResizeWrapper.js');
var ScrollWrapper = require('./src/ScrollWrapper.js');
var CreateReducer = require('./src/CreateReducer.js');
var notifications = require('./src/notifications/index');

module.exports = Object.assign({}, {
    Page: _interopRequireDefault(Page),
    ResizeWrapper: _interopRequireDefault(ResizeWrapper),
    ScrollWrapper: _interopRequireDefault(ScrollWrapper),
    CreateReducer,
}, notifications);