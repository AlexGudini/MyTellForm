import React, { Component } from 'react';
import './create_form.css';

class CreateForm extends Component {
    constructor(props){
        super(props);
    }

    addNewForm = () => {
        let i = 0; // вносить в index номер расположения объекта в массиве arrayForm
        for( ; i < this.props.arrayForm.length; i++){
            if( !this.props.arrayForm[i] ) break;
        }
        this.props.onHandleAdd( {
            index : i,
            title : 'start'
        })
    }

    render() {
        return (
            <div className="col-md-2 create_form text-center" onClick={this.addNewForm}>
                <p className="create_form_p">Create a new form</p>
            </div>
        );
    }
}

export default CreateForm;
