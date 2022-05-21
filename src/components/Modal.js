import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src="../images/icon-close.svg" alt="Close" />
          </button>
        </div>
        <img src="../images/image-rules.svg" alt="ImageRules" />
      </div>
    </div>, document.getElementById('modal')
  );
}

export default Modal