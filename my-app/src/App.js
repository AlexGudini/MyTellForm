import React, { Component } from 'react';
import Header from './Header/Header'
import PlaceCreateForm from './PlaceCreacteForm/PlaceCreateForm';
import './App.css';

/*onHandleAdd - функция для создания формы, вызывается из CreateForm*/

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrayForm: [
                    {
                        index : 0,
                        title : 'hello'
                    }
                ]
            }
        }

    // Добавление d стек новой формы
    addFormToArray = ( form ) => {
        let buf = this.state.arrayForm;
        buf.push( form );
        this.setState({ arrayForm : buf });
        //var serialObj = JSON.stringify( this.state.arrayForm);
        //localStorage.setItem('2', serialObj);
        alert( form.index);
    }

    componentWillMount(){
       /* let buf = this.state.arrayForm.index;
        buf.push({ title : 'make'});
        alert( buf[0].title );*/
    }

    render() {
        return (
            <div >
                <Header />
                <PlaceCreateForm onHandleAdd = {this.addFormToArray} arrayForm = {this.state.arrayForm} />
            </div>
    );
  }
}

export default App;
