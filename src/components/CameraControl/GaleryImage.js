import React, { Component } from 'react';
import ImgsViewer from 'react-images-viewer'
import './GaleryImage.css';
import image from './../../assets/images/aliya.jpg'

class GaleryImage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: false,
            state: props.src
        }
    }

    render() {
        return (
            <div className="galery_image">
                <div className = "image">
                    <img src={image} className="camera" 
                        width= "372" 
                        height= "372"
                        alt="Camera Logo" />
                </div>
            </div>
        )
    }

}

export default GaleryImage;