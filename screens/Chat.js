import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
var id = 1;
 
function parseCommand(message) {
  if (message[0].text.includes("market")) {
    return (responseMarket());
  }
  return responseNull();
}
 
function responseNull(){
  id = id + 1
  return(
    {
      _id: id,
      text: 'Command tidak ditemukan?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
  )
}
 
function responseMarket(){
  id = id +1;
  return(
    {
      _id: id,
      text: 'Cek Market Intelligence kamu',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
  )
}
 
export default function Example() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: id,
        text: 'Hello, ada yang bisa Roby bantu?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    setMessages(previousMessages => GiftedChat.append(previousMessages, parseCommand(messages)))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}