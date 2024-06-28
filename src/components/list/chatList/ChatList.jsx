import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/AddUser"


const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" 
        onClick={() => setAddMode ((prve) => !prve)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>ENHYPEN</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Heeseung</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Sunoo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Sunghoon</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jay</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jake</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jungwon</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>NI-KI</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  );
};

export default ChatList