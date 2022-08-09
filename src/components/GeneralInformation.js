import React from "react";
// import "./style/GeneralInformation.css";
import Field from "./Field";
import { nanoid } from "nanoid";

class GeneralInformation extends React.Component {

  render() {
    const defaultValues = {
      email: "gabrielruizvarela@gmail.com",
      phoneNumber: "12344445",
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateUntil: "",
    };
    return (
      <div className="GeneralInformation">
        {Object.keys(defaultValues).map((name) => {
          return <Field
            className={name}
            name={name}
            key={nanoid()}
            defaultValues={defaultValues[name]}
          />;
        })}
      </div>
    )
  }
}

export default GeneralInformation;