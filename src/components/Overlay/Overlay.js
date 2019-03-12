import React, { Component, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import './Overlay.css'
import closeButton from '../../assets/images/close.svg';
import ImageEditor from '../ImageEditor/ImageEditor';
import ImageProcessor from '../ImageProcessor/ImageProcessor';

class Overlay extends Component {

    constructor() {
        super();
        this.state = {
            open: true
        }
    }

    close = () => {
        this.setState((state) => {
            return {open: false}
        })
        console.log(this.state)
    }

    open = () => {

    }

     render() {
         let overlayclass = '';
         const isOpen = this.state.open
         isOpen? overlayclass = 'showMe': overlayclass = 'photoOveray-hidden'
        return (
            <div className={"photoOveray " + overlayclass}>
                <div className="close-overlay">
                    <img src={closeButton} onClick={this.close} />
                </div>
                <ImageEditor></ImageEditor>
            </div>
        )
     }



}

export default Overlay