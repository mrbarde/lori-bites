import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ResizeWrapper extends Component{

    handleResize(event) {

        // Call the passed-in prop
        if (this.props.onWindowResize) this.props.onWindowResize(event);
    }

    render () {
        return this.props.children;
    }

    componentDidMount() {
        if (this.props.onWindowResize) window.addEventListener("resize", this.handleResize.bind(this));
    }

    componentWillUnmount() {
        if (this.props.onWindowResize) window.removeEventListener("resize", this.handleResize.bind(this));
    }
};

ResizeWrapper.propTypes = {
    onWindowResize: PropTypes.func.isRequired
};

export default ResizeWrapper;