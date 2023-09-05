import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./components/ChatWindow";

export interface User {
  username: string;
}

export interface MessageProps {
  username: string;
  text: string;
}

const users: User[] = [{ username: "Amy" }, { username: "John" }];

function App() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const onMessage = (username: string, message: string) => {
    const newMessage = {
      username: username,
      text: message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
