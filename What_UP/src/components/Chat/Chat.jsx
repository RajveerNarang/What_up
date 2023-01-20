import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import React, { useEffect, useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [random, setRandom] = useState("");
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5000));
  }, []);

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
        <div className="chat_body"></div>
        <div className="chat_footer"></div>
      </div>
    </>
  );
};

export default Chat;
