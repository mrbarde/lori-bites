import React, {Component} from 'react';
import Item from './Item';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pushEnd, removeStart, removeEnd} from '../actions';
import {CSSTransitionGroup} from 'react-transition-group';

export class Notifications extends Component{

    constructor(){
        super();
        this.state = {
            notifications: [],
            position: 'topRight',
            duration: 500,
            delay: 5000,
            animation: 'notif',
            show: true
        };
    }

    componentDidUpdate(prevProps){

        // if new push request is made
        if(!prevProps.lnPush.isPushing && this.props.lnPush.isPushing){
            var notifications = this.state.notifications
                                    .concat(this.props.lnPush.notification);
            // update notifications in component state
            this.setState({notifications});
            // end push action for new notification
            this.props.pushEnd();
        }

        // if a remove request is made
        if(!prevProps.lnRemove.isRemoving && this.props.lnRemove.isRemoving){
            // filter through notifications in state.
            var notifications = this.state.notifications.filter((item, index) => {
                if(item.id != this.props.lnRemove.notification_id){
                    return item;
                }
            });
            // update notifications in component state
            this.setState({notifications});
            // end remove action for notification
            this.props.removeEnd();
        }
    }

    componentWillMount(){
        var {position, duration, delay, animation, notifications} = this.props;

        if(position){
            this.setState({position});
        }

        if(duration){
            this.setState({duration});
        }

        if(delay){
            this.setState({delay});
        }

        if(animation){
            this.setState({animation});
        }
    }

    render(){
        var {notifications, 
            position, 
            animation, 
            timeout, 
            show} = this.state;
        return(
            <ul {...this.containerProps()}>
                <CSSTransitionGroup 
                    transitionEnterTimeout={timeout || 500}
                    transitionLeaveTimeout={timeout || 500}
                    transitionName={animation}>
                        {notifications.map(this.renderNotification.bind(this))}
                </CSSTransitionGroup>
            </ul>
        )
    }

    containerProps(){
        // get props
        var props = {};
        // set styles
        props.style = Object.assign({}, 
            styles.container,
            styles[this.state.position],
            this.props.style);
        // set classname
        props.className = (this.props.className) ? this.props.className+" " : "";
        props.className += "lori_notifications";
        // return remaining props
        return props;
    }

    renderNotification(item, index){
        // get default notification config
        var {delay} = this.state;

        let notif = Object.assign({delay, type: 'info'}, item, {
            remove: this.remove.bind(this, item.id),
            positionStyles: this.state.position
        });
        return <Item {...notif} key={item.id || index} />;
    }

    remove(id){
        this.props.removeStart(id);
    }
}

var styles = {
    container: {
        position: 'absolute',
        width: '0px',
        listStyle: 'none',
        paddingLeft: '0px',
        marginBottom: '0px',
        overflowX: 'visible',
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

const mapStateToProps = ({lnPush, lnRemove}) => { return {lnPush, lnRemove} };

const mapDispatchToProps = (dispatch) => { return bindActionCreators({pushEnd, removeEnd, removeStart}, dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);