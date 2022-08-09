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
  };

  handleOnChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="Field">
        {this.state.showEdit ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                />
                <button type="submit">Save</button>
              </div>
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
