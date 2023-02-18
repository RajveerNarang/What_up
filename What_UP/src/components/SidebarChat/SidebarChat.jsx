import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import db from "../../firebase";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [random, setRandom] = useState("");

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for Chat");
    console.log(roomName);
    if (roomName) {
      //do some dbms stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <>
      {/* <h1>SideBarData</h1> */}
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${random}.svg `} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last Message ....</p>
        </div>
      </div>
    </>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>
        Add New Chat{" "}
        <IconButton>
          {" "}
          <AddCircleIcon />{" "}
        </IconButton>
      </h2>
    </div>
  );
};

export default SidebarChat;
