import React, {Component} from 'react';
import propTypes from 'prop-types';

class Page extends Component {

    componentWillMount(){
        document.title = this.props.title
    }
    
    componentDidUpdate(){
        document.title = this.props.title
    }

    render(){
        return this.props.children;
    }
}

Page.propTypes = {
    title: propTypes.string.isRequired
};

export default Page;