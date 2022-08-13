import React from "react";
import ReactMarkdown from 'react-remarkable';
import "../style/Field.scss";

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
    // when you hover over a div set the opacity of button to 1, but only for the corresponding div
    const textarea = this.textInput.current;
    if (textarea) {
      const button = textarea.querySelector('button');
      textarea.addEventListener("mouseover", () => {
        button.style.opacity = 1;
      }
      );
      textarea.addEventListener("mouseout", () => {
        button.style.opacity = 0;
      }
      );
    }

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
    const textarea = this.textInput.current;
    if (textarea) {
      textarea.style.height = textarea.scrollHeight/2 + "px";
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
              <textarea placeholder={this.props.placeholder} onChange={this.handleOnChange} value={this.state.value} ref={this.textInput} />
              <button id={this.props.className} type="submit">Save</button>
            </form>
          </div>
        ) : (
          <div
            className={this.props.className}
              onMouseDown={this.handleClick}
          >
            <ReactMarkdown source={this.state.value} />
          </div>
        )
        }
      </div>
    );
  }
}

export default Field;
