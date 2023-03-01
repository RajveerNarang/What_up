import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [random, setRandom] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Sent Text >>>", input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      msgs: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <IconButton>
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${Math.floor(
                Math.random() * 5000
              )}.svg `}
            />
          </IconButton>
          <div className="chat_headerInfo">
            <h3>{roomName}</h3>
            <p>
              Last Seen{" "}
              {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()}
            </p>
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
          {messages.map((messages) => (
            <p
              className={`chat_message ${
                messages.name === user.displayName && "chat_receiver"
              } `}
            >
              <span className="chat_name">{messages.name}</span>
              {/* Hey Guys */} {messages.msgs}
              <span className="chat_timeStamp">
                {new Date(messages.timestamp?.toDate()).toGMTString()}
              </span>
            </p>
          ))}
        </div>
        <div className="chat_footer">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
