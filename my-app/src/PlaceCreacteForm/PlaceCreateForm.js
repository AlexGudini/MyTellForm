import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Form from './Form';
import PopWindow from "../PopWindow/PopWindow";

class PlaceCreateForm extends Component {
    constructor(props){
        super(props);
    }

    render() {

        let bufArray = this.props.arrayForm;
        let allForms = bufArray.map( (bufArray) =>
            <Form key = { bufArray.index} title = { bufArray.title } /> );

        return (
            <div className="container place_create_form" >
                <PopWindow isOpen = 'false'/>
                <div className="row">

                    <CreateForm onHandleAdd={this.props.onHandleAdd} arrayForm = {this.props.arrayForm}/>
                    { allForms }

                </div>

            </div>
        );
    }
}

export default PlaceCreateForm;
