import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import { async } from "q";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop = async picture => {
    await this.setState({
      pictures: this.state.pictures.concat(picture)
    });
    console.log(this.state.pictures);
    console.log(picture);
  };

  render() {
    return (
      <div>
        <div>{this.state.pictures.name}</div>
        <ImageUploader
          withIcon={false}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      </div>
    );
  }
}

export default Upload;
