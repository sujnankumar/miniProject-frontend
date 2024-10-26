import React, { useState, useEffect } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false); // State for skeleton screen

  // Predefined bot responses
  const botReplies = [
    "I'm here to assist you with anything.",
    "Let me know what you'd like to order today.",
    "I can help you find our best dishes.",
    "Would you like to see our special menu?",
    "Feel free to ask me anything!"
  ];

  // Handle user input submission
  const handleSend = () => {
    if (userInput.trim() !== '') {
      const newMessages = [...messages, { text: userInput, sender: 'user' }];
      setMessages(newMessages);
      setUserInput('');

      // Show the skeleton screen as a placeholder while bot is 'thinking'
      setIsTyping(true);
      setLoadingMessage(true);

      // Simulate bot response after a delay
      setTimeout(() => {
        const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
        setMessages((prevMessages) => [...prevMessages, { text: randomReply, sender: 'bot' }]);
        setIsTyping(false);
        setLoadingMessage(false); // Remove skeleton screen once the message is ready
      }, 2000);
    }
  };

  useEffect(() => {
    // Scroll to bottom whenever messages change
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* AI Assistant Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
        <h1 className="text-lg font-bold text-white">miniChat</h1>
        {/* <button className="relative">
          <span className="text-white">Go to Cart</span>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-3 w-3 bg-red-500 rounded-full"></span>
        </button> */}
        <button className="relative flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l3.6 7.59L8 13H20a2 2 0 002-2V5a2 2 0 00-2-2H6L5 1H3"
    />
    <circle cx="9" cy="21" r="1" fill="currentColor" />
    <circle cx="17" cy="21" r="1" fill="currentColor" />
  </svg>
  <span className="text-white">Go to Cart</span>
  <span className="absolute top-0 right-0 inline-flex items-center justify-center h-3 w-3 bg-red-500 rounded-full"></span>
</button>
      </div>

      {/* Chat Section */}
      <div id="chat-container" className="flex-grow overflow-y-auto p-4 bg-gray-800 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`p-3 rounded-xl shadow-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'} max-w-xs`}>
              {message.text}
            </div>
          </div>
        ))} 

        {/* Skeleton Screen for Bot Message */}
        {loadingMessage && (
          <div className="flex justify-start mb-4">
            <div className="p-3 rounded-xl bg-gray-700 max-w-xs shadow-lg">
              {/* Skeleton block */}
              <div className="w-24 h-4 bg-gray-600 rounded-md animate-pulse mb-2"></div>
              <div className="w-36 h-4 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.25 12l18-6-6 18-6-6 6-6-6 6"
            />
        </svg>
        </button>

      </div>
    </div>
  );
};

export default Chatbot;
