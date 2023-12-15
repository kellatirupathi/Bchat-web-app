import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  const calculateTimeDifference = (timestamp) => {
    const now = new Date();
    const messageTime = timestamp.toDate();
    const differenceInSeconds = Math.floor((now - messageTime) / 1000);
  
    if (differenceInSeconds < 60) {
      return "just now";
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    } else {
      const options = { month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
      return messageTime.toLocaleDateString("en-US", options);
    }
  };



  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img className="seven"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{calculateTimeDifference(message.date)}</span>
      </div>
      <div className="messageContent">
        <p className="thirt">{message.text}</p>
        {message.img && <img src={message.img} alt="" className="twel" />}
      </div>
    </div>
  );
};

export default Message;
