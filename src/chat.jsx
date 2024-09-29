// import React, { useState, useEffect, useRef } from "react";
// import { FaUser, FaRobot, FaPaperPlane, FaSearch } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";

// const ChatInterface = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! Welcome to GiftGenie. How can I assist you today?", sender: "bot", timestamp: new Date(Date.now() - 300000) },
//     { id: 2, text: "Hi there! I need help finding a gift for my friend's birthday.", sender: "user", timestamp: new Date(Date.now() - 240000) },
//     { id: 3, text: "Of course! I'd be happy to help. Could you tell me more about your friend's interests?", sender: "bot", timestamp: new Date(Date.now() - 180000) },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//     setError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() === "") {
//       setError("Please enter a message");
//       return;
//     }
//     const newMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: "user",
//       timestamp: new Date(),
//     };
//     setMessages([...messages, newMessage]);
//     setInputMessage("");
//     simulateBotResponse();
//   };

//   const simulateBotResponse = () => {
//     setIsTyping(true);
//     setTimeout(() => {
//       const botResponse = {
//         id: messages.length + 2,
//         text: "Thank you for providing that information. Based on your friend's interests, I'd recommend considering a customized gift basket filled with their favorite items or a unique experience gift like a cooking class or adventure activity. Would you like more specific suggestions?",
//         sender: "bot",
//         timestamp: new Date(),
//       };
//       setMessages((prevMessages) => [...prevMessages, botResponse]);
//       setIsTyping(false);
//     }, 2000);
//   };

//   const formatTimestamp = (timestamp) => {
//     return new Intl.DateTimeFormat("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }).format(timestamp);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Implement search functionality here
//     console.log("Search query:", searchQuery);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-b from-purple-100 to-pink-200 p-4">
//       <div className="flex justify-center mb-4">
//         <div className="bg-white rounded-full p-4 shadow-lg">
//           <h1 className="text-3xl font-bold text-purple-600">GiftGenie</h1>
//         </div>
//       </div>
//       {/* <div className="relative mb-4">
//         <form onSubmit={handleSearchSubmit} className="w-full max-w-md mx-auto">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search for gift ideas..."
//             className="w-full p-4 pr-12 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500 transition-colors shadow-md"
//             aria-label="Search input"
//           />
//           <button
//             type="submit"
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
//             aria-label="Search"
//           >
//             <FaSearch />
//           </button>
//         </form>
//       </div> */}
//       <div className="flex-1 overflow-y-auto mb-4 bg-white rounded-lg shadow-lg">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4 px-4 py-2 animate-fadeIn`}
//           >
//             <div
//               className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.sender === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"} rounded-lg p-3 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl`}
//             >
//               <div className="flex items-center mb-1">
//                 {message.sender === "user" ? (
//                   <FaUser className="mr-2 text-white" />
//                 ) : (
//                   <FaRobot className="mr-2 text-purple-600" />
//                 )}
//                 <span className="font-semibold">{message.sender === "user" ? "You" : "GiftGenie"}</span>
//               </div>
//               <p className="mb-1">{message.text}</p>
//               <p className="text-xs text-right opacity-75">{formatTimestamp(message.timestamp)}</p>
//             </div>
//           </div>
//         ))}
//         {isTyping && (
//           <div className="flex justify-start mb-4 px-4 py-2 animate-fadeIn">
//             <div className="bg-gray-200 text-gray-800 rounded-lg p-3 shadow-md">
//               <div className="flex items-center">
//                 <FaRobot className="mr-2 text-purple-600" />
//                 <BsThreeDots className="text-purple-600 animate-bounce" />
//               </div>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <div className="relative">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={handleInputChange}
//             placeholder="Type your message here..."
//             className="w-full p-4 pr-12 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500 transition-colors shadow-md"
//             aria-label="Message input"
//           />
//           <button
//             type="submit"
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
//             aria-label="Send message"
//           >
//             <FaPaperPlane />
//           </button>
//         </div>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default ChatInterface;
