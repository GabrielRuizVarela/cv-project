import React from "react";
import "../style/Image.scss";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    };
  }

  uploadImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          image: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <div onClick={ this.uploadImage } id={this.props.id} alt={this.props.alt} style={{backgroundImage: `url(${this.state.image})`}} />
      </div>
    );
  }
}

export default Image;