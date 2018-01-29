import React, { Component } from 'react';
import './myform.css';

// title - св-во имя формы

class Form extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-md-2 myform " >
                <p className="myform_p"> {this.props.title} </p>
            </div>
        );
    }
}

export default Form;
