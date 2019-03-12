import React, { Component } from 'react';
import './header.css';
import logo from '../../CameraApp.svg'

class Header extends Component {
    constructor() {
        super();
        this.toolBoxOpen = false;
        this.state = {
            color: "#fff",
        }
    }

    showOrHide = (e) => {
        if (!this.toolBoxOpen) {
            this.toolBoxOpen = true;
            alert('We will open the toolbox');
        } else {
            alert("We will close the toolbox");
            this.toolBoxOpen = false;
        }
    }

    render() {
        const points = <div className="header_content-tools" onClick={this.showOrHide}>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>
        return (
            <div className="header" id="header-element" >
                <div className="header_content">
                    <div className="header_content-logoAndName">
                        <div className="logo">
                        <img src={logo} className="App-logo" 
                            width="25px" 
                            height="25px" 
                            alt="Camera Logo" />
                        </div>
                        <div className="sitename">Camera</div>
                    </div>
                   {points}
                    <div className="toolbox">
                        <span>Prendre une photo</span>
                        <span>Envoyer une photo en ligne</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header