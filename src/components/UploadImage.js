import React from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import { Image } from "cloudinary-react";
import axios from "axios";
import { getLabels } from "../store/picture/actions";
import "../index.scss";
const url = "https://api.cloudinary.com/v1_1/ddag7qg0v/image/upload";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDrop = this.onDrop.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage(file) {
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", "coifpjwc");

    axios
      .post(url, body)
      .then((result) => {
        //console.log("result in axios.then", result);
        const image = result.data;
        this.setState(image);
        //console.log(image);
        this.props.getLabels(image.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onDrop(picture) {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    //console.log(picture[0]);
    this.uploadImage(picture[0]);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {Object.keys(this.state).length === 0 ? (
          <ImageUploader
            fileContainerStyle={{
              background: "none",
              width: "50%",
              marginTop: "40px",
            }}
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        ) : (
          <Image
            cloudName="ddag7qg0v"
            publicId={this.state.public_id}
            width="300"
            style={{ marginTop: "40px" }}
            crop="scale"
          />
        )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.session.token
//   }
// }

const mapDispatchToProps = {
  getLabels,
};

export default connect(null, mapDispatchToProps)(UploadImage);
