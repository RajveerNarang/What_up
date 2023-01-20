import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React, { useEffect, useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState("");
  const [random, setRandom] = useState("");
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>>", input);
  };
  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <IconButton>
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${random}.svg `}
            />
          </IconButton>
          <div className="chat_headerInfo">
            <h3>Room Name</h3>
            <p>Last Seen...</p>
          </div>

          <div className="chat_headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          <p className={`chat_message ${true && "chat_receiver"} `}>
            <span className="chat_name">Rajveer</span>
            Hey Guys
            <span className="chat_timeStamp">3:30pm</span>
          </p>
        </div>
        <div className="chat_footer">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target, e.target.value)}
              type="text"
              placeholder="Type a Message..."
            />
            <button onClick={sendMessage} type="submit">
              Send a Message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </>
  );
};

export default Chat;
