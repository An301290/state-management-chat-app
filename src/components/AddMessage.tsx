import React, { useState } from "react";

interface AddMessageProps {
  onMessage: (message: string) => void;
}

const AddMessage = (props: AddMessageProps) => {
  const { onMessage } = props;
  const [message, setMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessage(message);
    setMessage("");
  };

  const isDisabled = () => {
    return message === "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          value={message}
          placeholder="Enter your message..."
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMessage;
