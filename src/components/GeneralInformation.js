import React from "react";
// import "./style/GeneralInformation.css";
import Field from "./Field";
// import { nanoid } from "nanoid";

class GeneralInformation extends React.Component {
  render() {
    return (
        <Field
          className={this.props.className}
          defaultValues={this.props.defaultValues}
        />
        );
  }
}

export default GeneralInformation;
