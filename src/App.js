import "./style/App.css";
import React from "react";
import { nanoid } from "nanoid";

// Create a new project using npx create-react-app cv-project. If you need a reminder on how it works, check out the previous lessons. Don’t forget to setup a GitHub repository for your project, to push your progress.
// Remove the boilerplate code created by create-react-app.
// You should use class components for this project. You’re going to find a lot of code written using class components and this practical experience will help you understand it when encountered. You’ll also revisit this project in a later lesson to replace the class components with functional ones.
// Think about how to structure your application into components. Your application should include:
//     A section to add general information like name, email, phone number.
//     A section to add your educational experience (school name, title of study, date of study)
//     A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
// Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
// Create a components folder in your src directory and add your components.
// Include a styles folder in your src directory for your CSS files. You’ll need to import these in the component files to use them.
// Don’t forget to push your solution to GitHub. You should be proud of your work and show it off to the world!

import GeneralInformation from "./components/GeneralInformation";
import Profile from "./components/Profile";
import EducationAndExperience from "./components/EducationAndExperience";

function App() {
  const generalInformation = {
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
  const skills = `- Communication\n 
      - Listening\n 
      - Detail\n
      - Oriented\n
      - Time Management\n
      - Problem Solving\n
      - Artistic Eye\n
      - Adaptability\n
      - Teamwork`;

  const education = [
    {
      place: "UNT",
      from: "2009",
      to: "20013",
      title: "Ingeniero de Sistemas",
      description: " Lorem short asdfasafsdf ",
      id: nanoid(),
    },
    {
      place: "TOP",
      from: "2021",
      to: "2022",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdf ",
      id: nanoid(),
    },
  ];

  const experience = [
    {
      place: "Google",
      from: "2019",
      to: "2021",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdf ",
      id: nanoid(),
    },
    {
      place: "Facebook",
      from: "2018",
      to: "2019",
      title: "Fullstack Developer",
      description: " Lorem short asdfasafsdf ",
      id: nanoid(),
    },
  ];

  const profile = {
    name: "Gabriel Ruiz Varela",
    yourTitle: "Fullstack Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eget consectetur nisl nisi euismod nisl. Nam euismod, nisi eu consectetur consectetur.",
  };
  return (
    <div className="App">
      <GeneralInformation init={{ generalInformation, skills }} />
      <Profile init={profile} />
      <EducationAndExperience init={{ education }} title="Education" />
      <EducationAndExperience init={{ experience }} title="Experience" />
    </div>
  );
}

export default App;
