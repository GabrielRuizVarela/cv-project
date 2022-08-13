import './style/App.scss';
import React from 'react';
import { nanoid } from 'nanoid';
import defaultImage from './69A698DB-B5FC-4058-946D-A61F7EF48806.JPEG'

import GeneralInformation from './components/GeneralInformation';
import Profile from './components/Profile';
import EducationAndExperience from './components/EducationAndExperience';
import Image from './components/Image';

function App() {
  const generalInformation = {
    email: "Email: GabrielRuizVarela@gmail.com",
    phoneNumber: "Phone: +12344445",
    Links: `[Github](https:/github.com/GabrielRuizVarela) [LinkedIn](https:/linkedin.com/in/gabriel-ruiz-varela) [Twitter](https:/twitter.com/gabrielruizvarela)`,
    // [LinkedIn](https://www.linkedin.com/in/gabriel-ruiz-varela-28044153/)`// Links in markdown list format
    // schoolName: "",
    // titleOfStudy: "",
    // dateOfStudy: "",
    // companyName: "",
    // positionTitle: "",
    // mainTasks: "",
    // dateFrom: "",
    // dateUntil: "",
  };
  const skills = `
  - **Language**:  
    - English
    - Spanish
    - Portuguese   
  - **Problem solving:**
    - Detail oriented
    - Strong analytical thinking
    - Strong communication
    - Good Time Management
    - Artistic Eye
    - Adaptability
    - Teamwork`;

  const education = [
    {
      place: "UNT",
      from: "2009",
      to: "2013",
      title: "Ingeniero de Sistemas",
      description: " Lorem short asdfasafsdf asdfasafsdfasdfasafsdfasdfasafsdf",
      id: nanoid(),
    },
    {
      place: "TOP",
      from: "2021",
      to: "2022",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdf lhapyfb kafdkblkj afjniolmlaeriuasdfasafsdf asdfasafsdfasdfasafsdf",
      id: nanoid(),
    }
  ];

  const experience = [
    {
      place: "Google",
      from: "2019",
      to: "2021",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdfsdfasafsdf lhapyfb kafdkblkj afjniolmlaeriu ",
      id: nanoid(),
    },
    {
      place: "Facebook",
      from: "2018",
      to: "2019",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdf ",
      id: nanoid(),
    }
  ];

  const profile = {
    name: "Gabriel Ruiz Varela",
    yourTitle: "Fullstack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl.",
  };

  return (
    <div className="Main">
      <div id="header-img" alt="Background" />
      <div className="App">
      {console.log(defaultImage)}
        <Image className="Profile-img" image={defaultImage} id="Profile-img" alt="Profile" />
        {/* <div id='Profile-img' alt="Profile Image" /> */}
        <GeneralInformation className="GeneralIndormation" init={{ generalInformation, skills }} />
        <Profile className="Profile" init={profile} />
        <EducationAndExperience className="EducationAndExperience" init={{ education }} title="Education" />
        <EducationAndExperience className="EducationAndExperience" init={{ experience }} title="Experience" />
      </div>
    </div>
  );
}

export default App;
