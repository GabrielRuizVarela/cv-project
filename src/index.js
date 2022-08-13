import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>
);

window.onload = () => {
  const modal = document.createElement("dialog");
  modal.setAttribute("id", "modal");
  // modal.setAttribute("open", "true");

  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");
  modal.innerHTML = `
    <div class="modal-header">
      <h2>Instructions</h2>
    </div>
    <div class="modal-body">
      <p>Click any text to edit, or hover the titles to add fields.<br>
        The fieds accept markdown syntax, and can be used to add links, images, and more.<br>
        Click the "Save" button to save your changes.<br>
        Press CTRL + P, or CMD + P on macOS, to preview your resume.<br>
        <br>
      </p>
    </div>
      <button class="modal-button" id="modal-button-close">Close</button>
  `;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  const modalButton = document.getElementById("modal-button-close");
  modalButton.addEventListener("click", () => {
    modal.remove();
  }
  );
  modal.showModal();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
