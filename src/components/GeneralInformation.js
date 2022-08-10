import React from "react";
// import "./style/GeneralInformation.css";
import Field from "./Field";
import { nanoid } from "nanoid";

class GeneralInformation extends React.Component {
  render() {
    const { generalInformation, skills } = this.props.init;
    return (
      <div className="GeneralInformation">
        {
          Object.keys(generalInformation).map((name) => {
            return <Field defaultValues={generalInformation[name]} className={name} key={nanoid()} />
          })
        }
        {<h1 className="title">Skills</h1>}
        {<Field defaultValues={skills} className="skills" key={nanoid()} />}

      </div>
    );
  }
}

export default GeneralInformation;
