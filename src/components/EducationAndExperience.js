import React from "react";
import { nanoid } from "nanoid";
import Field from "./Field";
import "../style/EducationAndExperience.scss";
class EducationAndExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: this.props.init[String(this.props.title).toLowerCase()],
    };
  }

  deleteEducation = (e, id) => {
    const { education } = this.state;
    const newEducation = education.filter((item) => item.id !== id);
    console.log({ education, newEducation });
    this.setState({ education: newEducation });
  };

  render() {
    return (
      <div className={this.props.className}>
        <h1 className="title">{this.props.title}
          <button
            className="add"
            onClick={() => {
              this.setState({
                education: [
                  ...this.state.education,
                  {
                    place: "Google",
                    title: "Senior Software Engineer",
                    from: " 2009",
                    to: "2017",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                    id: nanoid(),
                  },
                ],
              });
            }}
          >
            Add
          </button>
        </h1>
        {this.state.education.map((education) => {
          return (
            <div className="education" key={nanoid()}>
              <div className="degree">
                <Field
                  placeholder={education.title}
                  defaultValues={education.title}
                  key={nanoid()}
                />
              </div>
              <button
                className="delete"
                onClick={() => this.deleteEducation(this, education.id)}
              >
                Delete
              </button>
              <div className="from">
                <Field
                  placeholder={education.from}
                  defaultValues={education.from}
                  key={nanoid()}
                />
              </div>
              <div className="to">
                <Field
                  placeholder={education.to}
                  defaultValues={education.to}
                  key={nanoid()}
                />
              </div>
              <div className="place">
                <Field
                  placeholder={education.place}
                  defaultValues={education.place}
                  key={nanoid()}
                />
              </div>
              <div className="description">
                <Field
                  placeholder={education.description}
                  defaultValues={education.description}
                  key={nanoid()}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationAndExperience;
