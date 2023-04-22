import React from "react"
import Button from "./Button";
import tickImage from "../tick.png";

function Modal({ isOpen, btnOk, btnOkAction, title, description }) {

    return (
        <div className="modal">
          <div className={`popup ${isOpen ? "open-popup" : ""}`}>
            <img src={tickImage} alt="Tick icon" className="my-image" />
            <h2>{title}</h2>
            <p>{description}</p>
            {btnOk && (
              <Button type="button" action={btnOkAction} text="ok" className="ok-button" />
            )}
          </div>
        </div>
      );
}

export default Modal;