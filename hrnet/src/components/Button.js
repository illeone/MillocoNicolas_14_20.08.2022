import React, { useEffect, useRef } from "react";

function Button({ text, action }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>';
  }, []);

  return (
    <button ref={buttonRef} onClick={action} className="button smoke dark">
      {text}
    </button>
  );
}

export default Button;