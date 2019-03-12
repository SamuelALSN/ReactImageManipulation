import React, { Component, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
/*import styled from 'styled-components'*/
import logo from './logo.svg';
import closeButton from './assets/images/close.svg';
import './App.css';
import CameraControl from './components/CameraControl/CameraControl';
import GaleryImage from './components/CameraControl/GaleryImage';
import Header from './components/Layout/header';
import ImageEditor from './components/ImageEditor/ImageEditor';
import ImageProcessor from './components/ImageProcessor/ImageProcessor';
import Overlay from './components/Overlay/Overlay';

class App extends Component {

  constructor() {
    super()
    this.state = {
      overlayOpen: false
    }
  }

  componentDidMount() {
    let header = document.querySelector("#header-element")
    let height = header.getBoundingClientRect().height
    console.log(height)
    window.addEventListener('scroll', () => {
      let scrolled = window.scrollY
      if (scrolled > height) {
          console.log( 'On leve le menu' );
      }
    })

  }

  scrolling(headerH) {
   alert('scrolling')
    let scrolled = window.scrollY
    if (scrolled > headerH) {
        console.log( 'On leve le menu' );
    }
  }

  MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
    }, [])
    const {
      getRootProps, 
      getInputProps, 
      isDragActive
    } = useDropzone({onDrop})

      return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
    )
  }

  fileDroped(acceptedFiles){
    alert('ok')
  }

  openEditor() {

  }

  render() {
    return (
      <div className="App">
        {/*<div className="photoOveray" >
          <div className="close-overlay">
            <img src={closeButton} />
          </div>
          <ImageEditor></ImageEditor>
        </div>*/}
          <Overlay />
          <Header></Header>
          <div className="website-container">
            <div className="camera">
            </div>
            {/*<div className ="galery">
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
              <GaleryImage></GaleryImage>
            </div>*/}
            <Dropzone
              
              onDrop={this.fileDroped}>
                {({getRootProps, getInputProps, isDragActive}) => (
                  <section>
                    <div {...getRootProps()} className="dropzone-container" >
                      <input {...getInputProps()} />
                      {
                        isDragActive ?
                        <p>Relacherz la souris pour deposer le fichier ici...</p> :
                        <p>Glissez d&eacute;pos&eacute; une image ici pour l'editer</p>
                      }
                    </div>
                  </section>
                )}
            </Dropzone>
            {/*<div className="editor">
              <ImageProcessor></ImageProcessor>
            </div>*/}
          </div>
      </div>
    );
  }
}

export default App;