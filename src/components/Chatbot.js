// Chatbot.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

const config = {
  botName: 'Your Bot Name',
  lang: 'en',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#568648',
    },
    chatButton: {
      backgroundColor: '#568648',
    },
  },
};

const messages = [
  {
    id: 1,
    type: 'text',
    content: 'Hello! How can I help you?',
  },
];

const ChatbotComponent = () => {
  return (
    <Chatbot
      config={config}
      messages={messages}
    />
  );
};

export default ChatbotComponent;
