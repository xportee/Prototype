import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { clientWit } from '../components/Wit'

async function parseCommand(message) {
  witAi = clientWit.message(message);
  if (witAi.intents[0].name == "MarketIntelligence") {
    return (responseMarket());
  }
  return responseNull();
}

function responseNull(){
  return(
    {
      _id: 1,
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
  return(
    {
      _id: 1,
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
        _id: 1,
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
    setMessages(previousMessages => GiftedChat.append(previousMessages, parseCommand(message)))
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