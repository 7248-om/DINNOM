import React, { useState, useEffect, useRef } from 'react';
import { BiBot, BiSend, BiX, BiMicrophone } from 'react-icons/bi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the DINNOM AI assistant. How can I help you find the perfect outfit today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const formRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Setup Speech Recognition on component mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Your browser does not support the Web Speech API.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Stop listening after a pause
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript;
      const wakeWord = 'hello ai';

      // Check for wake word and trim it if present
      if (transcript.toLowerCase().startsWith(wakeWord)) {
        transcript = transcript.substring(wakeWord.length).trim();
      }
      setInputValue(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false); // Ensure listening state is reset on error
    };

    recognition.onend = () => {
      setIsListening(false);
      // Automatically submit the form if there's a value after listening
      if (formRef.current?.elements.query.value) {
        formRef.current.requestSubmit();
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => {
    const nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);

    // If opening the chat, start listening immediately.
    // If closing, stop any active listening session to turn off the microphone.
    if (recognitionRef.current) {
      if (nextIsOpen && !isListening) {
        recognitionRef.current.start();
      } else if (!nextIsOpen && isListening) {
        recognitionRef.current.stop();
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // Read from form elements directly to avoid stale state in onSubmit
    const trimmedInput = e.target.elements.query.value.trim();
    if (!trimmedInput) return;

    const userMessage = { text: trimmedInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: trimmedInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage = { text: data.reply, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage = { text: "I'm having a little trouble connecting right now. Please try again later.", sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for the voice search button
  const handleVoiceSearch = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  return (
    <>
      {/* A style tag is used here for the keyframes animation, which can't be done with Tailwind classes. */}
      <style>
        {`
          @keyframes loading-bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
          }
          .loading-dots span {
            animation: loading-bounce 1.4s infinite ease-in-out both;
          }
          .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
          .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
        `}
      </style>

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:bg-blue-700 transition-all duration-200 ease-in-out z-[999]"
        aria-label="Toggle Chatbot"
      >
        <BiBot className="w-7 h-7" />
      </button>

      <div
        className={`fixed bottom-24 right-6 w-[370px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-in-out z-[1000] ${
          isOpen
            ? 'scale-100 translate-y-0 opacity-100 pointer-events-auto'
            : 'scale-50 translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-zinc-900 text-white px-5 py-4 flex justify-between items-center flex-shrink-0">
          <h2 className="text-lg font-semibold">DINNOM AI</h2>
          <button onClick={toggleChat} className="bg-transparent border-none text-white cursor-pointer p-0" aria-label="Close Chatbot">
            <BiX className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow p-5 overflow-y-auto flex flex-col gap-3 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl leading-normal break-words ${
                msg.sender === 'user'
                  ? 'bg-zinc-900 text-white self-end rounded-br-md'
                  : 'bg-gray-200 text-zinc-900 self-start rounded-bl-md'
              }`}
            >
              <p className="m-0">{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="max-w-[80%] px-4 py-2.5 rounded-2xl leading-normal break-words bg-gray-200 text-zinc-900 self-start rounded-bl-md">
              <div className="loading-dots flex items-center py-1">
                <span className="h-2 w-2 bg-gray-400 rounded-full inline-block mx-0.5"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full inline-block mx-0.5"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full inline-block mx-0.5"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form ref={formRef} className="flex items-center p-2.5 border-t border-gray-200 bg-white flex-shrink-0" onSubmit={handleSendMessage}>
          <input
            name="query" // Add name for form access
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={isListening ? "Listening..." : "Ask about products..."}
            disabled={isLoading}
            className="flex-grow border-none p-2.5 text-base bg-transparent focus:outline-none placeholder:text-gray-500"
          />
          {recognitionRef.current && (
            <button
              type="button"
              onClick={handleVoiceSearch}
              disabled={isLoading || isListening}
              className={`bg-transparent border-none cursor-pointer p-2.5 transition-colors ${
                isListening ? 'text-red-500 animate-pulse' : 'text-zinc-900 hover:text-gray-500'
              } disabled:text-gray-300 disabled:cursor-not-allowed`}
              aria-label="Start voice search"
            >
              <BiMicrophone className="w-5 h-5" />
            </button>
          )}
          <button type="submit" disabled={isLoading || !inputValue.trim()} className="bg-transparent border-none cursor-pointer p-2.5 text-zinc-900 transition-colors hover:text-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed">
            <BiSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
