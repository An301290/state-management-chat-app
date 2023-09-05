import React from "react";
import { MessageProps } from "../App";

export interface MessageHistoryProps {
  user: {
    username: string;
  };
  messages: MessageProps[];
}

const MessageHistory = (props: MessageHistoryProps) => {
  const { user, messages } = props;
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageHistory;
