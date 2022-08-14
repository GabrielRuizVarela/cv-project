import React from "react";
// import './style/Profile.css';
import Field from "./Field";
import { nanoid } from "nanoid";

const Profile = (props) => {
  const profile = props.init;
  return (
    <div className={props.className}>
      {Object.keys(profile).map((name) => (
        <Field
          placeholder={profile[name]}
          defaultValues={profile[name]}
          className={name}
          key={nanoid()}
        />
      ))}
    </div>
  );

}

export default Profile;
