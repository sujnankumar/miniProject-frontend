import React, { useState, useEffect } from 'react';
import DishOption from './DishOption';
import '../css/ScrollBar.css';
import { TypeAnimation } from 'react-type-animation';
import { IoMdPause } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import axiosInstance from '../../axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  // Predefined dish options for mapping
  const dishOptions = [
    { id: 1, name: "Pasta Alfredo", image: "/images/pasta.jpg" },
    { id: 2, name: "Margherita Pizza", image: "/images/pizza.jpg" },
    { id: 3, name: "Caesar Salad", image: "/images/salad.jpg" },
    { id: 4, name: "Tiramisu", image: "/images/tiramisu.jpg" },
  ];

  // Fetch response from the backend
  const fetchChatResponse = async (userInput) => {
    try {
      const restId = 1; // Replace with the actual restaurant ID
      const sessionId = sessionStorage.getItem('session_id'); // Retrieve session_id from sessionStorage

      if (!sessionId) {
        throw new Error('Session ID not found. Please start a new session.');
      }

      const response = await axiosInstance.post(`/api/chat/${restId}`, {
        user_input: userInput,
        menu_id: 1, // Update `menu_id` dynamically if needed
        session_id: sessionId, // Pass session ID to the backend
      });

      return response.data; // Expected response: { text: string, dish_ids: [number] }
    } catch (error) {
      console.error('Error fetching chat response:', error);
      return null;
    }
  };

  const handleSend = async () => {
    if (loadingMessage || userInput.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,  
      { text: userInput, sender: 'user' },
    ]);
    setUserInput('');

    setIsTyping(true);
    setLoadingMessage(true);

    // Fetch the bot's response
    const response = await fetchChatResponse(userInput);

    if (response) {
      const { text, dish_ids } = response;
      // Map dish_ids to their respective dish objects
      const options = dish_ids
        ? dish_ids.map((id) => dishOptions.find((dish) => dish.id === id))
        : [];

      // Add the bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text, sender: 'bot', options },
      ]);
    } else {
      // Add a fallback message if the backend request fails
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, I couldn't process your request. Please try again.", sender: 'bot' },
      ]);
    }

    setIsTyping(false);
    setLoadingMessage(false);
  };

  // Scroll to the latest message
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div id="chat-container" className="flex-grow h-full overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} mb-4`}
          >
            {/* Chat Message */}
            <div
              className={`p-3 rounded-xl shadow-lg ${
                message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
              } max-w-xs md:max-w-md lg:max-w-lg`}
            >
              {message.sender === 'bot' ? (
                <TypeAnimation
                  sequence={[message.text, 1000]}
                  wrapper="span"
                  speed={75}
                  repeat={0}
                  cursor={false}
                />
              ) : (
                <span>{message.text}</span>
              )}
            </div>

            {/* Display Options Below Bot Message */}
            {message.sender === 'bot' && message.options && (
              <div className="flex flex-wrap gap-4 pt-2">
                {message.options.map((dish) => (
                  dish && <DishOption key={dish.id} dish={dish} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="p-3 rounded-xl bg-gray-700 max-w-xs shadow-lg">
              <div className="w-24 h-4 bg-gray-600 rounded-md animate-pulse mb-2"></div>
              <div className="w-36 h-4 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="flex items-center px-4 py-3 bg-gray-700 shadow-lg">
        <input
          type="text"
          className="flex-grow p-3 rounded-full bg-gray-600 text-white focus:outline-none placeholder-gray-400"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSend() : null)}
        />
        {!loadingMessage ? (
          <button
            className="ml-3 h-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-center hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full shadow-md transition duration-300 flex items-center justify-center"
            onClick={handleSend}
          >
            <IoSend className="text-[1.35rem]" />
          </button>
        ) : (
          <button
            className="ml-3 h-full p-3 bg-gray-800 animate-pulse text-white px-4 py-2 rounded-full shadow-md transition duration-300"
            disabled
          >
            <IoMdPause className="text-[1.35rem]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
