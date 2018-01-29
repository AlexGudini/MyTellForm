import React, { Component } from 'react';
import './popWindow.css';

class PopWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true,
            cancel_title: this.props.cancel_title ? this.props.cancel_title : 'Отмена',
            action_title: this.props.action_title ? this.props.action_title : 'ОК',
            title: '',
            text: ''
        }
    }

    // Обработчик закрытия модального окна, вызовет обработчик отказа
    close = () => {
        this.setState({
            visible: false
        }, function () {
            return this.promise.reject();
        });
    }
    // Обработчик действия модального окна, вызовет обработчик действия
    action = () => {
        this.setState({
            visible: false
        }, function () {
            return this.promise.resolve();
        });
    }
    // Обработчик открытия модального окна. Возвращает promise
    // ( при желании, можно передавать также названия кнопок )

    /*open =  (text, title = '') => {
        this.setState({
            visible: true,
            title: title,
            text: text
        });

        // promise необходимо обновлять при каждом новом запуске окна
        this.promise = new $.Deferred();
        return this.promise;
    }*/

    render() {

/*
        var modalClass = this.state.visible ? "modal fade in" : "modal fade";
        var modalStyles = this.state.visible ? {display: "block"} : {};
        var backdrop = this.state.visible ? (
            <div className="modal-backdrop fade in" onClick={this.close} />
        ) : null;

        var title = this.state.title ? (
            <div className="modal-header">
                <h4 className="modal-title">{this.state.title}</h4>
            </div>
        ) : null;
*/

        return (
            <div className="modal fade back_form" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopWindow;
