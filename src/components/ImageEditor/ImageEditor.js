import React, { Component } from 'react';
import ReactCrop from 'react-image-crop'
import ProcessImage from 'react-imgpro';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageEditor.css';
import image from './../../assets/images/bouchon.jpg'
import cropTool from './../../assets/images/crop.svg'
import rotateTool from './../../assets/images/rotate-image2.svg'
import invertTool from './../../assets/images/invert2.svg'
import checkButton from './../../assets/images/Checkmark.svg'
import cancelButton from './../../assets/images/close2.svg'
//let Caman = require('caman').Caman

class ImageEditor extends Component {

    constructor(props) {
        super(props);
        this.image = ''
        this.pixelCrop = '';
        this.state = {
            open: false,
            cropEnable: false,
            err: null,
            crop: {
              aspect: 1/1
            }
        }
    }

    handleImageLoaded = (image) => {
        this.image = image
    }

    onChange = (crop) => {
        console.log(crop)
        this.setState({ crop });
    }

    onComplete = (crop, pixelCrop) => {
        this.pixelCrop = pixelCrop
        this.setState((state) => {
             return {crop: crop} 
        });
        console.log(this.pixelCrop)
    }

    cropValidated = () => {
        console.log(this.state.crop)
        console.log(this.image)
        this.getCroppedImg(this.image, this.pixelCrop, "croped")
        /*Caman('#my-image', function () {
            this.brightness(10);
            this.contrast(30);
            this.sepia(60);
            this.saturation(-30);
            this.render();
        });*/
    }

    cropCanceled = (crop) => {
        alert('crop canceled')
    }

    dragStart = () => {
        this.setState((state) => {
            return {cropEnable: true}
        })
        console.log('user start design')
    }

    getCroppedImg = (image, pixelCrop, fileName) => {

        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        console.log(base64Image)
    }


    render() {

        let cropState = this.state.cropEnable? 'active' : 'disable'

        return (
            <div className="editor">
                <div className="editor__toolbar-tools">
                    <div className="tools">
                        <div className="editor__toolbar-tool crop">
                            <img alt="crop tool" src={cropTool} />
                        </div>
                        <div className="editor__toolbar-tool rotate">
                            <img alt="rotate tool"src={rotateTool} />
                        </div>
                        <div className="editor__toolbar-tool rotate">
                            <img alt="invert tool" src={invertTool} />
                        </div>
                    </div>
                    <div className="validation"> 
                        <div className={"editor__toolbar-btn btn-" + cropState} onClick={this.cropValidated}>
                            <img alt="invert tool" src={checkButton} />
                        </div>
                        <div className={"editor__toolbar-btn btn-" + cropState} onClick={this.cropCanceled}>
                            <img alt="invert tool" src={cancelButton} />
                        </div>
                    </div>
                </div>

                <div className="editor__image-container">
                    <div className="editor__image">
                    {/*<ProcessImage
                        image={image}
                        resize={{ width: 600, height: 500 }}
                        colors={{
                            mix: {
                                color: 'mistyrose',
                                amount: 20
                            }
                        }}
                        sepia={true}
                        greyscale={true}
                        disableWebWorker={true}
                        processedImage={(src, err) => this.setState({ src, err})}
                    />*/}
                    
                    <ReactCrop 
                            src={image} 
                            crop={this.state.crop}
                            onImageLoaded={this.handleImageLoaded}
                            onDragStart={this.dragStart}
                            onChange = {this.onChange}
                            onComplete = {this.onComplete}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default ImageEditor;