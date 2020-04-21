import React, { useEffect } from "react";
import ImageUploader from "react-images-upload";
import { Image } from "cloudinary-react";
import axios from "axios";
import "../index.scss";

const uploadImage = (file) => {
  const url = "https://api.cloudinary.com/v1_1/ddag7qg0v/image/upload";

  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", "coifpjwc");

  axios
    .post(url, body)
    .then((result) => {
      console.log(result);
      const image = result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    console.log(picture[0]);
    uploadImage(picture[0]);
  }
  // componentDidMount() {
  //   this.uploadImage()
  // }

  render() {
    return (
      <div>
        <ImageUploader
          fileContainerStyle={{
            background: "none",
            width: "50%",
            marginTop: "30px",
          }}
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <Image cloudName="ddag7qg0v" publicId="" width="300" crop="scale" />
      </div>
    );
  }
}
