export class Webcam {
    constructor(webcamElement, canvasElement) {
        this.webcamElement = webcamElement;
        this.canvasElement = canvasElement;
    }

    adjustVideoSize(width, height) {
        const ratio = width / height;
        if(width >= height) {
            this.webcamElement.width = ratio * this.webcamElement.height;
        } else if(width < height) {
            this.webcamElement.height = this.webcamElement.width / ratio;
        }
    }
    async setup() {
        return new Promise((resolve, reject) => {
            if(navigator.mediaDevices.getUserMedia !== undefined) {
                navigator.mediaDevices.getUserMedia({
                    audio: false, 
                    video: {facingMode: true}
                })
                .then(mediaStream => {
                    if("srcObject" in this.webcamElement) {
                        this.webcamElement.srcObject = mediaStream;
                    } else {
                        this.webcamElement.src = window.URL.createObjectURL(mediaStream);
                    }
                    this.webcamElement.onloadedmetada = (e) => {
                        this.webcamElement.play()
                    }
                })
            } else {
                reject();
            }
        })
    }

    takeBlobPhoto() {
        const { imageWith, imageHeight } = this._drawImage();
        return new Promise((resolve, reject) => {
            this.canvasElement.toBlob((blob) => {
                resolve({blob, imageHeight, imageWith})
            })
        })
    }

    takeBase64Photo({ type, quality } = { type: 'png', quality: 1 }) {
        const { imageWidth, imageHeight } = this._drawImage();
        const base64 = this.canvasElement.toDataURL('image/' + type, quality);
        return {
            imageWidth,
            imageHeight,
            base64
        };
    }

    _drawImage() {
        const imageWith = this.webcamElement.videoWidth;
        const imageHeight = this.webcamElement.videoHeight;

        const context = this.canvasElement.getContext("2d");

        this.canvasElement.width = imageWith;
        this.canvasElement.height = imageHeight;

        context.drawImage(this.webcamElement, 0, 0, imageWith, imageHeight);

        return {
            imageWith,
            imageHeight
        };
    }

}
export default Webcam