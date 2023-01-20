import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../SidebarChat/SidebarChat";
import db from "../../firebase";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <>
      <div className="sidebar">
        {/* Sidebar */}
        <div className="sidebar_header">
          <IconButton>
            <Avatar />
          </IconButton>

          <div className="sidebar_header_right">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>

            <IconButton>
              <ChatIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_search_Container">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <input placeholder="Search or Start new Chat" type="text" />
          </div>
        </div>

        <div className="sidebar_chats">
          <SidebarChat addNewChat />
          <SidebarChat /> <SidebarChat /> <SidebarChat />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
