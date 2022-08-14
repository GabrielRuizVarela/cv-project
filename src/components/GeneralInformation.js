import React from "react";
import "../style/GeneralInformation.scss";
import Field from "./Field";
import { nanoid } from "nanoid";

const GeneralInformation = (props) => {
  const { generalInformation, skills } = props.init;
  return (
    <div className={props.className}>
      {Object.keys(generalInformation).map((name) => {
        return (
          <Field
            placeholder={props.placeholder}
            defaultValues={generalInformation[name]}
            className={name}
            key={nanoid()}
          />
        );
      })}
      <div className="Skill-list">
        <h1 className="title">Skills</h1>
        <Field defaultValues={skills} className="skills" key={nanoid()} />
      </div>
    </div>
  );
}

export default GeneralInformation;
