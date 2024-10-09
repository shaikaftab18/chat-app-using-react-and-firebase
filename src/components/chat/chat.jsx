import './chat.css'; 
import { useEffect, useRef, useState } from 'react'; 
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
const[open, setOpen] = useState(false); 
const[text, setText] = useState('');
const endRef=useRef(null);
useEffect(()=>{
  endRef.current.scrollIntoView({behavior:'smooth'});
},[]);
const handeEmoji = (e) => {
setText((prev)=>prev+e.emoji);
setOpen(false);
}
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
      <div className="center">
        <div className="message">

      <img src="./avatar.png" alt="avatar"/>
      <div className="texts">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati? Harum cum neque magni officia ducimus distinctio omnis vitae quae, dolores sit eiu
        s iure eveniet quos aliquid saepe in atque?
        </p>
        <span>1 min ago</span>
      </div>
      <div></div>

      </div>
      <div className="message own">

<img src="./avatar.png" alt="avatar"/>
<div className="texts">
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati? Harum cum neque magni officia ducimus distinctio omnis vitae quae, dolores sit eiu
  s iure eveniet quos aliquid saepe in atque?
  </p>
  <span>1 min ago</span>
</div>

</div>
<div className="message">

<img src="./avatar.png" alt="avatar"/>
<div className="texts">
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati? Harum cum neque magni officia ducimus distinctio omnis vitae quae, dolores sit eiu
  s iure eveniet quos aliquid saepe in atque?
  </p>
  <span>1 min ago</span>
</div>

</div>
<div className="message own ">

<img src="./avatar.png" alt="avatar"/>
<div className="texts">
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati? Harum cum neque magni officia ducimus distinctio omnis vitae quae, dolores sit eiu
  s iure eveniet quos aliquid saepe in atque?
  </p>
  <span>1 min ago</span>
</div>

</div>
<div ref={endRef}></div>
        </div>
      <div className="bottom">

      <div className="icons">
        <img src="./img.png" alt="img"/>
        <img src="./mic.png" alt="mic"/>
        <img src="./camera.png" alt="camera"/>
      </div>
        <input type="text" placeholder="Type a message.." value={text} onChange={e=>setText(e.target.value)}/>
        <div className="emoji">

        <img src='./emoji.png' alt="emoji" onClick={()=> setOpen((prev)=>!prev)}/>
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handeEmoji}/>
        </div>
          </div>
    <button className='sendButton'>Send</button>
      </div>
    </div>
  );
}
export default Chat