import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import logo from './assets/logo.png';
import ReactMarkdown from 'react-markdown';

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [error, setError] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Fetch greeting message when the chat loads
        const fetchGreeting = async () => {
            try {
                const res = await axios.get('http://localhost:5000/greeting');
                const greeting = {
                    id: messages.length + 1,
                    text: res.data.message,
                    sender: "bot",
                    timestamp: new Date(),
                };
                setMessages([greeting]);
            } catch (error) {
                console.error("Error fetching greeting message:", error);
            }
        };

        fetchGreeting();
        scrollToBottom();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() === "") {
            setError("Please enter a message");
            return;
        }

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
        setInputMessage("");
        await sendMessageToBackend(newMessage.text);
    };

    const sendMessageToBackend = async (message) => {
        setIsTyping(true);
        try {
            const res = await axios.post('http://localhost:5000/chat', {
                message: message,
            });

            const botResponse = {
                id: messages.length + 2,
                text: res.data.response, // Bot response from the backend
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            console.error("Error sending message to backend:", error);
        }
        setIsTyping(false);
    };

    const formatTimestamp = (timestamp) => {
        return new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(timestamp);
    };
    

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-purple-100 to-pink-200 p-4">
            <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-4 shadow-lg">
                    <img src={logo} alt="background" width={150} className="mr-10 ml-10" />
                </div>
            </div>

            <div className="flex-auto overflow-y-auto mb-4 bg-white rounded-lg shadow-lg">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4 px-4 py-2 animate-fadeIn`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.sender === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"} rounded-lg p-3 shadow-md`}
                        >
                            <div className="flex items-center mb-1">
                                {message.sender === "user" ? (
                                    <FaUser className="mr-2 text-white" />
                                ) : (
                                    <FaRobot className="mr-2 text-purple-600" />
                                )}
                                <span className="font-semibold">{message.sender === "user" ? "You" : "GiftGenie"}</span>
                            </div>
                            <ReactMarkdown className="mb-1">{message.text}</ReactMarkdown>
                            <p className="text-xs text-right opacity-75">{formatTimestamp(message.timestamp)}</p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start mb-4 px-4 py-2 animate-fadeIn">
                        <div className="bg-gray-200 text-gray-800 rounded-lg p-3 shadow-md">
                            <div className="flex items-center">
                                <FaRobot className="mr-2 text-purple-600" />
                                <p className="text-purple-600">Thinking...</p>
                                <BsThreeDots className="text-purple-600 animate-bounce" />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="relative">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                        className="w-full p-4 pr-12 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500 transition-colors shadow-md"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                        <FaPaperPlane />
                    </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default Chat;
