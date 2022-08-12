import React from "react";
import ReactMarkdown from 'react-remarkable';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
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

  // if the user click outside the form automatically close it
  handleClickOutside = (event) => {
    if (!event.target.contains(this.node)) {
      return;
    }
    this.setState({
      showEdit: false,
    });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  focus() {
    this.textInput.current.focus();
  }
  componentDidUpdate() {
    if (this.state.showEdit) {
      this.textInput.current.focus();
    }
  }

  render() {
    return (
      <div className="Field">
        {this.state.showEdit ? (
          <div id="form">
            <form
              onSubmit={this.handleSubmit}
              onClick={this.handleClickOutside}
              ref={(node) => {
                this.node = node;
              }}
            >
            <textarea onChange={this.handleOnChange} value={this.state.value} ref={this.textInput} />
            <button type="submit">Save</button>
          </form>
          </div>
    ) : (
      <div>
        <div
          className={this.props.className}
          onMouseDown={this.handleClick}
        >
          <ReactMarkdown source={this.state.value} />
        </div>
      </div>
    )
  }
      </div>
    );
  }
}

export default Field;
