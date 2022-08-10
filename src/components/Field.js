import React from "react";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValues,
      showEdit: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showEdit: false,
    });
  };

  handleClick = (event) => {
    this.setState({
      showEdit: true,
    });
  }

  handleOnChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  // if the user click outside the form automatically close it
  handleClickOutside = (event) => {
    if (!event.target.contains(this.node)) {
      return;
    }
    this.setState({
      showEdit: false,
    });
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="Field">
        {this.state.showEdit ? (
          <div id="form">
            <form onSubmit={this.handleSubmit} onClick={this.handleClickOutside} ref={(node) => { this.node = node }} >
              {/* <div> */}
              <input ref={(input) => { this.nameInput = input; }} type="text" value={this.state.value} onChange={this.handleOnChange} />
              <button type="submit">Save</button>
              {/* </div> */}
            </form>
          </div>
        ) : (
          <div>
            <div
              className={this.props.className}
              onMouseDown={this.handleClick}
            >
              {this.state.value}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Field;
