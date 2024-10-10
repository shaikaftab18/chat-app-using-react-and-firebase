import "./userinfo.css"
import { useUserStore } from "../../../lib/useuserStore";
const UserInfo =()=>{
    const { currentUser } = useUserStore();
    return (
        <div className='userInfo'>
            <div className="user">
           <img src="./avatar.png"/>
           <h2>currentUser.username </h2>
            </div>
            <div className="icons">
                <img src="./more.png"/>
                <img src="./video.png"/>
                <img src="./edit.png"/>
                </div>
        </div>
    )
}
export default UserInfo