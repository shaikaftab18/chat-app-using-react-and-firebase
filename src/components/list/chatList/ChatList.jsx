import "./chatList.css";
import {useState} from "react";
const ChatList = () => {
    const[addMode, setAddMode] = useState(false);
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
    <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
            <div className="item">
        < img src="./avatar.png"/>
        <div className="texts">
            <span>John Doe</span>
            <p>hello</p>
            </div></div>
    </div>
)
}
export default ChatList 