import React from "react";
// import './style/Profile.css';
import Field from "./Field";
import { nanoid } from "nanoid";

class Profile extends React.Component {
  render() {
    const profile = this.props.init;
    return (
      Object.keys(profile).map((name) => {
        return <Field defaultValues={profile[name]} className={name} key={nanoid()} />
      })
    );
  }
}
export default Profile;
