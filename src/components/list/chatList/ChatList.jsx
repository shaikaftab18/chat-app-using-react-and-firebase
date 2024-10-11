import AddUser from "./addUser/addUser";
import "./chatList.css";
import {useEffect, useState} from "react";
import { doc ,onSnapshot} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import useUserStore from "../../../lib/userStore";
const ChatList = () => {
    const[chats, setChats] = useState([]);
    const[addMode, setAddMode] = useState(false);
    const{currentUser}=useUserStore();
    useEffect(()=>{
        const unSub=onSnapshot(doc(db, "userchats", currentUser.id), async(res)=>{
           const items = res.data().chats; 
          const promises = items.map(async(item)=>{ 
              const userDocRef = await getDoc(doc(db, "chats", item.receiverId));
              const userDoc = await getDoc(userDocRef);
              const user=userDocSnap.data();
              return{...item,user};
          });
          const chats = await Promise.all(promises);
          setChats(chatData.sort((a,b)=>b.updatedAt-a.updatedAt));
        });
        return()=>{
          unSub();
        }
    },[currentUser.id]);
    return (
    <div className="chatList">
        <div className="search">
    <div className="searchBar">
        <img src="./search.png"/>
        <input type="text" placeholder="            Search"/>
    </div>
    
    <img src={addMode?"./minus.png":"./plus.png"} className="add"
    onClick={()=>setAddMode(prev=>!prev)}/>
    </div>
    {chats.map((chat)=>(
    <div className="item" key={chat.chatId}>
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>{chat.lastMessage}</p>
            </div></div>))}
           {addMode && <AddUser/>}
    </div>
);
};
export default ChatList 