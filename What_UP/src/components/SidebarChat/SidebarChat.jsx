import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  const [random, setRandom] = useState("");

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <>
      {/* <h1>SideBarData</h1> */}
      <Avatar src={`https://avatars.dicebear.com/api/human/${random}.svg `} />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message ....</p>
      </div>
    </>
  );
};

export default SidebarChat;
