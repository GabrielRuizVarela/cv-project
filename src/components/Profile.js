import React from "react";
// import './style/Profile.css';
import Field from "./Field";
import { nanoid } from "nanoid";

// Profile contains the name and a description component.
class Profile extends React.Component {
  render() {
    const profile = this.props.init;
    return (
      <div className={this.props.className}>
        {Object.keys(profile).map((name) => <Field defaultValues={profile[name]} className={name} key={nanoid()} />)}
      </div>
    );
  }
}

export default Profile;
