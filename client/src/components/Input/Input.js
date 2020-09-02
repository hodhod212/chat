import React, { useState } from "react";
import "./Input.css";

function Input({ setMessage, sendMessage, message }) {
  const regex = /\//;
  const [inputs, setInputs] = useState("");
  return (
    <form className="form">
      <input
        id="/"
        list="suggestions"
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onInput={(e) => setInputs(e.target.value)}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      {regex.test(inputs) ? (
        <datalist id="suggestions">
          <option value="/" />
          <option value="/love" />
          <option value="/hate" />
          <option value="/friend" />
          <option value="/hej" />
        </datalist>
      ) : null}

      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;
