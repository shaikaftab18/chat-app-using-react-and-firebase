import './chat.css'; 
import { useState } from 'react'; 
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
const[open, setOpen] = useState(false); 
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="avatar"/>
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor </p>
          </div>
        </div>
        <div className="icons">
          .<img src="./phone.png" alt="phone"/>
          <img src="./video.png" alt="video"/>
          <img src="./info.png" alt="menu"/>
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">

      <div className="icons">
        <img src="./img.png" alt="img"/>
        <img src="./mic.png" alt="mic"/>
        <img src="./camera.png" alt="camera"/>
      </div>
        <input type="text" placeholder="Type a message.."/>
        <img src='./emoji.png' alt="emoji" onClick={()=> setOpen((prev)=>!prev)}/>
        <EmojiPicker open={open}/>
    <button className='sendButton'>Send</button>
      </div>
    </div>
  );
}
export default Chat