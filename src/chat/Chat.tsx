import React, {useEffect, useRef, useState} from 'react';
import ChatInput from './ChatInput';
import ChatMessage from "./ChatMessage";
import {WebSocketMessage, WebsocketStates} from "./types";
import {Divider, Box} from "@material-ui/core";

const Chat = () => {
  const wsServerUrl = process.env.REACT_APP_WEBSOCKET_SERVER_URL ?? '';
  if(wsServerUrl === '') {
    console.error('Please create a .env.local file and add REACT_APP_WEBSOCKET_SERVER_URL pointing to the server');
  }
  const ws = useRef<WebSocket>(new WebSocket(wsServerUrl));
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const [nick, setNick] = useState<string>(`Anonymous user ${Math.round(Math.random()*10000)}`)
  const [websocketStatus, setWebsocketStatus] = useState<WebsocketStates>(WebsocketStates.CONNECTING)

  useEffect(() => {
    if(ws.current) {
      ws.current.onopen = () => {
        setWebsocketStatus(WebsocketStates.CONNECTED);
      }
      ws.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        handleAddMessage(message as WebSocketMessage);
      }
      ws.current.onclose = () => {
        setWebsocketStatus(WebsocketStates.DISCONNECTED);
      }
    }
  });

  const handleAddMessage = (newMessage: WebSocketMessage) => {
    setMessages([...messages, newMessage]);
  }

  const handleSendMessage = (newMessage: string) => {
    if(nick !== '' && newMessage !== '') {
      const message: WebSocketMessage = { name: nick, message: newMessage }
      ws.current.send(JSON.stringify(message));
      handleAddMessage(message);
    }
  }

  const handleUpdateNick = (newNick: string) => {
    setNick(newNick);
  }

  if(websocketStatus !== WebsocketStates.CONNECTED) {
    return <div>Connecting to websocket</div>;
  }

  return (
    <>
      {messages.map((message, index) =>
        <ChatMessage key={`${index}`} message={message}/>,
      )}
      <Box py={2}>
        <Divider component="hr" />
      </Box>
      <ChatInput
        nick={nick}
        updateNick={handleUpdateNick}
        sendMessage={handleSendMessage}
      />
    </>
  );
};

export default Chat;