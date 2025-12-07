import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Paperclip, MoreVertical, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatInterface({ currentUser, onClose }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'teacher',
      text: 'Hi! Could you review my homework?',
      time: '10:30 AM',
      avatar: 'T'
    },
    {
      id: 2,
      sender: 'student',
      text: "Of course! I'll review it this afternoon.",
      time: '10:45 AM',
      avatar: 'S'
    },
    {
      id: 3,
      sender: 'teacher',
      text: 'Thank you! I was unsure about question 7.',
      time: '11:25 AM',
      avatar: 'T'
    },
    {
      id: 4,
      sender: 'student',
      text: "For Q7, break it down step by step. Start with what you're solving for.",
      time: '1:45 PM',
      avatar: 'S'
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'student',
      text: message,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      avatar: 'S'
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const teacher = {
    name: 'Ms. Johnson',
    status: 'Online',
    avatar: 'M'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[80vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white/30"
              >
                <span className="text-xl font-bold">{teacher.avatar}</span>
              </motion.div>
              <div>
                <h3 className="font-['Arimo'] text-xl">{teacher.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="font-['Arimo'] text-sm text-white/90">{teacher.status}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-4">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[70%] ${msg.sender === 'student' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                      msg.sender === 'student'
                        ? 'bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white'
                        : 'bg-gradient-to-br from-[#0891B2] to-[#06B6D4] text-white'
                    }`}
                  >
                    <span className="text-sm font-bold">{msg.avatar}</span>
                  </motion.div>

                  {/* Message Bubble */}
                  <div className={`flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-2xl px-5 py-3 shadow-lg ${
                        msg.sender === 'student'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white rounded-br-none'
                          : 'bg-white text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="font-['Arimo'] text-sm leading-relaxed">{msg.text}</p>
                    </motion.div>
                    <p className="font-['Arimo'] text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-6">
          <div className="flex items-end gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl flex items-center justify-center text-gray-600 transition-colors shadow-lg"
            >
              <Paperclip className="w-5 h-5" />
            </motion.button>

            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="3"
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none shadow-lg"
              />
            </div>

            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={message.trim() === ''}
              className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] rounded-xl flex items-center justify-center text-white transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
