import AddUser from "./addUser/addUser";
import "./chatList.css";
import { useEffect, useState } from "react";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import useUserStore from "../../../lib/userStore";

const ChatList = ({ changeChatId }) => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser?.id) return;

    console.log("Current User:", currentUser); // Log current user once

    const unSub = onSnapshot(doc(db, "userChats", currentUser.id), async (res) => {
      if (!res.exists()) return;

      const items = res.data().chats || [];
      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDoc = await getDoc(userDocRef);
        const user = userDoc.exists() ? userDoc.data() : null;
        return { ...item, user };
      });

      try {
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    });

    return () => {
      unSub();
    };
  }, [currentUser?.id]); // Only re-run the effect if currentUser.id changes

  const handleChatAdded = (newChat) => {
    setChats((prevChats) => [newChat, ...prevChats]);
    setAddMode(false); // Close the add user mode after adding a chat
  };

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          className="add"
          alt="Add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div className="item" key={chat.chatId} onClick={() => changeChatId(chat.chatId, chat.user)}>
          <img src={chat.user?.avatar || "./avatar.png"} alt="Avatar" />
          <div className="texts">
            <span>{chat.user?.username || "Unknown User"}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser onChatAdded={handleChatAdded} />}
    </div>
  );
};

export default ChatList;