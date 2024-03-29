import React, { useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectSelectedImage } from '../../features/appSlice';
import './ChatView.css';
const ChatView = () => {
    const selectedImage = useSelector(selectSelectedImage)
    const history = useHistory();
    useEffect(() =>{
        if(!selectedImage){
            exit();
        }
    },[selectedImage])
    const exit = () =>{
        history.replace('/chats');
    }
    return (
        <div className="chat_view">
            <img src={selectedImage} onClick={exit} alt =""/>
            <div className="chatView_timer">
                    <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={[
                        ['#884777', 0.33],
                        ['#F78801', 0.33],
                        ['#A30000',0.33]
                    ]}
                    >
                    {({remainingTime }) =>{
                        if(remainingTime === 0){
                            exit();
                        }
                        return remainingTime;
                    }}
                    </CountdownCircleTimer>
            </div>
            
        </div>
    );
};

export default ChatView;