import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
var id = 3;
 
function parseCommand(message) {
  if (message[0].text.includes("market")) {
    return (responseMarket());
  }
  else if (message[0].text.includes("document")){
    return (responseDokumen());
  }
  return responseNull();
}
 
function responseNull(){
  id = id + 1
  return(
    {
      _id: id,
      text: 'Command not found, directing to mentor',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
  )
}

function responseDokumen(){
  id = id +1;
  return(
    {
      _id: id,
      text: 'Here the ways of submiting document',
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
      text: 'Check your market intelligence at Dashboard',
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
        _id: 3,
        text: 'You need to submit A document along with B document',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Mentor Tasya',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'What document do i need to prepare?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Rachel',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello, is there anything i could help with?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Mentor Tasya',
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