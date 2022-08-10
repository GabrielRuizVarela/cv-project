import React from "react";
import { nanoid } from "nanoid";
import Field from "./Field";

class EducationAndExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: this.props.init[String(this.props.title).toLowerCase()],
    }
  }

  deleteEducation = (e, id) => {
    const { education } = this.state;
    const newEducation = education.filter(item => item.id !== id);
    console.log({ education, newEducation });
    this.setState({ education: newEducation });
  }

  render() {
    return (
      <div className={this.props.className }>
        <h1 className="title">{this.props.title}</h1>
        <button className="add" onClick={() => {
          this.setState({
            education: [...this.state.education, {
              place: "",
              title: "",
              from: "",
              to: "",
              description: "",
              id: nanoid()
            }],
          });
        }}>+</button>
        {this.state.education.map((education) => {
          return (
            <div className="education" key={nanoid()}>
              <Field defaultValues={education.startDate} className={'from'} key={nanoid()} />
              <Field defaultValues={education.endDate} className={'to'} key={nanoid()} />
              <Field defaultValues={education.title} className={'title'} key={nanoid()} />
              <Field defaultValues={education.place} className={'place'} key={nanoid()} />
              <Field defaultValues={education.description} className={'description'} key={nanoid()} />
              <button className="delete" onClick={() => this.deleteEducation(this, education.id)}>Delete</button>
            </div>
          );
        })
        }
      </div>

    )
  }
}

export default EducationAndExperience;