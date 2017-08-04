import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollWrapper extends Component{

    handleScroll(event) {
        // Call the passed-in prop
        if (this.props.onWindowScroll) this.props.onWindowScroll(event);
    }

    render () {
        return this.props.children;
    }

    componentDidMount() {
        if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll.bind(this));
    }
};

ScrollWrapper.propTypes = {
    onWindowScroll: PropTypes.func.isRequired
};

export default ScrollWrapper;