import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './chats.css';
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from '../../firebase';
import Chat from "./Chat";
const Chats = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        db.collection("posts")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>
         setPosts(
             snapshot.docs.map((doc) =>({
                 id:doc.id,
                 data:doc.data(),
             }))
         )
        
        );
    },[]);
    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar"/>
                <div className='chats_search'>
                  <SearchIcon/>
                  <input placeholder="friends" input="text" />
                </div>
                <ChatBubbleIcon className="chats_bubble"/>
            </div>
            <div className="chats_posts">
                 {
                     posts.map(({id,data:
                        {profilePic,username,timestamp,imageUrl,read},}) =>(
                            <Chat
                              key={id}
                              id={id}
                              username={username}
                              imageUrl={imageUrl}
                              timestamp={timestamp}
                              read={read}
                              profilePic={profilePic}
                            />
                        ))
                 }
            </div>
            
        </div>
    );
};

export default Chats;