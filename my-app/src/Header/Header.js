import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-fluid header">
                <div className="container">
                    <div className="row header_row">
                        <div className="col-md-8 col-md-offset-5">
                            <a href="#">
                                Tellform
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;