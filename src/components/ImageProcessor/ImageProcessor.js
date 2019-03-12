import React, { Component } from 'react'
import ProcessImage from 'react-imgpro'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import image from './../../assets/images/aliya.jpg'

class ImageEditor extends Component {
    
    constructor() {
        super()
        this.state = {
            src: '',
            err: null,
            crop: {
              aspect: 16/9
            }
        }
    }

    onChange = (crop) => {
      this.setState({ crop });
    }
      
      render() {
        return (
          <div>
            <ReactCrop src={image} crop={this.state.crop} onChange = {this.onChange}/>
            {/*<ProcessImage
              image={image}
              resize={{ width: 700, height: 700 }}
              disableWebWorker={true}
              posterize={50}
              fade={0.2}
              processedImage={(src, err) => this.setState({ src, err})}
            />*/}
          </div>
        )
      }
}

export default ImageEditor;