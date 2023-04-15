import React from "react"

const Modal = ({ showModal, textContent, onClose}) => {

    return (
        <div className="modal" style={{display: showModal ? "block" : "none"}}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{textContent}</p>
            </div>
        </div>
    )
}

export default Modal;