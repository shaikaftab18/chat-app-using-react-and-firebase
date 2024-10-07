import "./chatList.css";
const ChatList = () => {
    return (
    <div className="chatList">
        <div className="search">
    <div className="searchBar">
        <img src="./search.png"/>
        <input type="text" placeholder="            Search"/>
    </div>
    <img src="./plus.png" className="add"/>
    </div>
    </div>
)
}
export default ChatList 