import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-remarkable';
import "../style/Field.scss";

const Field = (props) => {
  const [value, setValue] = useState(props.defaultValues);
  const [showEdit, setShowEdit] = useState(false);
  const textInput = React.createRef();
  const node = React.createRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEdit(false);
  };

  const handleClick = (event) => {
      setShowEdit(true);
    };
    
    const handleOnChange = (event) => {
      setValue(event.target.value);
    };
    
    // if the user click outside the form automatically close it
    const handleClickOutside = (event) => {
      if (textInput.current && !event.target.contains(textInput.current)) {
        return
      }
      setShowEdit(false);
  }


  useEffect(() => {
    if (showEdit) {
      textInput.current.focus();
      const textarea = textInput.current;
      if (textarea) {
        textarea.style.height = textarea.scrollHeight / 2 + "px";
      }
    }
  }, [showEdit, textInput]);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, false);
    const textarea = textInput.current;
    if (textarea) {
      const button = document.querySelector('button');
      textarea.addEventListener("mouseover", () => {
        button.style.opacity = 1;
      }
      );
      textarea.addEventListener("mouseout", () => {
        button.style.opacity = 0;
      }
      );
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    }
  });

  return (
    <div className="Field" onMouseDown={handleClick}>
      {showEdit ? (
        <div id="form">
          <form
            onSubmit={handleSubmit}
            ref={node}
          >
            <textarea placeholder={props.placeholder} onChange={handleOnChange} value={value} ref={textInput} />
            <button id={props.className} type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div
          className={props.className}

        >
          <ReactMarkdown source={value} />
        </div>
      )
      }
    </div>
  );
}



export default Field
