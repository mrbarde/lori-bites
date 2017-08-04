import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

const CSSAnimation = ({children, timeout, transitionName}) => {

    return(<CSSTransitionGroup 
                transitionEnterTimeout={timeout}
                transitionLeaveTimeout={timeout}
                transitionName={transitionName}>
                    {children}
            </CSSTransitionGroup>);
};

export default CSSAnimation;