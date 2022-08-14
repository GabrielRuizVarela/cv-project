import React,{useState} from "react";
import "../style/Image.scss";

const Image = (props) => {
  const [image, setImage] = useState(props.image);
  const uploadImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    };
  }

  return (
    <div className={props.className}>
      <div onClick={uploadImage} id={props.id} alt={props.alt} style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}

export default Image;