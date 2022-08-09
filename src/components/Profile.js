import React from 'react';
// import './style/Profile.css';

// Profile contains the name and a description component.
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      showForm: true,
      showEdit: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
      showEdit: true,
    });
  }
  handleEdit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: true,
      showEdit: false,
    });
  }
  render() {
    return (
      <div className="Profile">
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        {this.state.showForm ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
              Description:
              <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        ) : (
          <form onSubmit={this.handleEdit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
              Description:
              <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
            </label>
            <input type="submit" value="Edit" />
          </form>
        )}
      </div>
    );
  }
}

export default Profile;