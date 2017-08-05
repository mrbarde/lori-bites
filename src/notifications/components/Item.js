import React, {Component} from 'react';
import propTypes from 'prop-types';

class Notification extends Component {

    constructor(){
        super();
        // initialise state
        this.state = {
            show: true,
            timeout: null
        }
        // bind methods
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        if(!this.props.sticky && typeof this.props.delay !== 'undefined'){
            let timeout = setTimeout(this.remove, this.props.delay)
        }
    }

    render(){
        var {show} = this.state;
        var {animation, duration, type, className, message, positionStyles} = this.props;

        type = (!type) ? 'info' : type;

        className = (className) ? " "+className : '';

        let containerStyles = Object.assign({}, styles.default.container, styles[type]['container'], styles[positionStyles]);
        let closeStyles = Object.assign({}, styles.default.close, styles[type]['close']);
        let messageStyles = Object.assign({}, styles.default.message, styles[type]['message']);

        return(<li style={containerStyles} className={"ln_notif_"+type+className}>
                <a href="javascript:;" style={closeStyles} className="ln_notif_close">
                    &times;
                </a>
                <p style={messageStyles} className="ln_notif_message">{message}</p>
            </li>);
    }

    remove(){
        this.props.remove();
    }

}

// define styles
var styles = {
    default: {
        container: {
            position: 'relative',
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
    },
    topRight: {
        float: 'right'
    },
    topLeft: {
        float: 'left'
    },
    bottomRight: {
        float: 'right'
    },
    bottomLeft: {
        float: 'left'
    }
};

// define component property types
Notification.propTypes = {
    message: propTypes.string.isRequired,
    type: propTypes.oneOf(['info', 'success', 'warning', 'danger']),
    className: propTypes.string,
    delay: propTypes.number.isRequired,
    sticky: propTypes.bool,
    positionStyles: propTypes.string.isRequired
}

export default Notification;