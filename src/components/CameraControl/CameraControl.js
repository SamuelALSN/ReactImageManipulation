import React, { Component } from 'react';
import Webcam from '../../webcam'; 

class CameraControl extends Component {
    constructor() {
        super();
        this.webcam = null;
        this.state = {
            capturedImage: null,
            captured: false,
            uploading: false
        }
    }

    componentDidMount() {
        this.canvasElement = document.createElement('canvas')
        this.webcam = new Webcam(
            document.querySelector("#webcam"),
            this.canvasElement
        );
        this.webcam.setup().catch(() => {
            console.log("Error occur when accessing your webcam");
        })
    }
    render() {
        const buttons  = this.state.captured ?
            <div className="buttons">
                <button 
                    className="button Cancel"
                    onClick={this.cancelCapture}>
                    Cancel capture
                </button>
                <button 
                    className="button upload"
                    onClick={this.uploadImage}
                >
                    Upload Image 
                </button>
            </div>
            :
            <button 
                className="button capture"
                onClick={this.captureImage}
            >
                Capture Image
            </button>
        return (
            <div className="camera_container">
                <div className="camera_container-video">
                    
                </div>
            </div>
        )
    }

    /*<div className="camera_container-buttons">{buttons}</div>
    <video autoPlay playsInline muted id="webcam" wwidth="100%" height="100%"></video>*/


    captureImage = async () => {
        const captureData = this.webcam.takeBase64Photo({
            type: 'jpeg',
            quality: 0.8
        });
        console.log(captureData)
    }
}
export default CameraControl;