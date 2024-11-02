import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  // Predefined bot responses with options for specific replies
  const botReplies = [
    { text: "I'm here to assist you with anything." },
    { text: "Let me know what you'd like to order today.", options: [
      { id: 1, name: "Pasta Alfredo", image: "/images/pasta.jpg" },
      { id: 2, name: "Margherita Pizza", image: "/images/pizza.jpg" }
    ]},
    { text: "I can help you find our best dishes.", options: [
      { id: 3, name: "Caesar Salad", image: "/images/salad.jpg" },
      { id: 4, name: "Tiramisu", image: "/images/tiramisu.jpg" }
    ]},
    { text: "Would you like to see our special menu?" },
    { text: "Feel free to ask me anything!" }
  ];

  const handleSend = () => {
    if (userInput.trim() !== '') {
      const newMessages = [...messages, { text: userInput, sender: 'user' }];
      setMessages(newMessages);
      setUserInput('');

      setIsTyping(true);
      setLoadingMessage(true);

      // Simulate bot response after a delay
      setTimeout(() => {
        const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
        setMessages((prevMessages) => [...prevMessages, { ...randomReply, sender: 'bot' }]);
        setIsTyping(false);
        setLoadingMessage(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-gray-900">
        <Navbar />

      <div id="chat-container" className="flex-grow overflow-y-auto p-4 bg-gray-800 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} mb-4`}>
            {/* Chat Message */}
            <div className={`p-3 rounded-xl shadow-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'} max-w-xs md:max-w-md lg:max-w-lg`}>
              {message.text}
            </div>

            {/* Display Options Below Message if it's a Bot Message */}
            {message.sender === 'bot' && message.options && (
              <div className="flex flex-wrap gap-4 pt-2">
                {message.options.map((dish) => (
                  <div key={dish.id} className="w-28 h-40 sm:w-32 md:w-36 lg:w-40 p-2 bg-gray-700 rounded-xl shadow-lg text-center">
                    <img src={dish.image} alt={dish.name} className="w-full md:h-4/5 sm:h-2/3 xs:h-2/3 object-cover rounded-md mb-2" />
                    <p className="text-gray-200 text-sm">{dish.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {loadingMessage && (
          <>
          <div className="flex justify-start mb-4">
            <div className="p-3 rounded-xl bg-gray-700 md:max-w-100 xs:max-w-xs shadow-lg">
              <div className="w-24 h-4 bg-gray-600 rounded-md animate-pulse mb-2"></div>
              <div className="w-36 h-4 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
          </div>
          <div className='flex flex-wrap gap-4 pt-0'>
          <div className="w-28 h-45 sm:w-32 md:w-36 lg:w-40 p-2 bg-gray-700 rounded-xl shadow-lg text-center">
            <div className="h-16 bg-gray-600 rounded-md animate-pulse mb-2 w-full"></div>
            <div className="w-24 h-4 bg-gray-600 rounded-md animate-pulse"></div>
          </div>
          <div className="w-28 h-45 sm:w-32 md:w-36 lg:w-40 p-2 bg-gray-700 rounded-xl shadow-lg text-center">
            <div className="h-16 bg-gray-600 rounded-md animate-pulse mb-2 w-full"></div>
            <div className="w-24 h-4 bg-gray-600 rounded-md animate-pulse"></div>
          </div>
          </div>
        </>
        )}
      </div>

      <div className="flex items-center px-4 py-3 bg-gray-700 shadow-lg">
        <input
          type="text"
          className="flex-grow p-3 rounded-full bg-gray-600 text-white focus:outline-none placeholder-gray-400"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSend() : null)}
        />
        <button
          className="ml-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 pb-3 rounded-full shadow-md transition duration-300"
          onClick={handleSend}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 12l18-6-6 18-6-6 6-6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
