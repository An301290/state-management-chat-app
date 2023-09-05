import React from "react";
import { MessageProps } from "../App";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

interface ChatWindowProps {
  user: {
    username: string;
  };
  messages: MessageProps[];
  onMessage: (username: string, message: string) => void;
}
const ChatWindow = (props: ChatWindowProps) => {
  const { user, messages, onMessage } = props;
  const handleOnMessage = (message: string) => {
    onMessage(user.username, message);
  };
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <MessageHistory messages={messages} user={user} />
      <AddMessage onMessage={handleOnMessage} />
    </div>
  );
};

export default ChatWindow;
