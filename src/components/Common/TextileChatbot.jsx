import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, ShoppingBag, Truck, Info } from 'lucide-react';

const TextileChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to PAREKH e-TRADE MARKET! How can I assist your textile business today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages([...messages, newMsg]);
    setInputValue("");

    // Simulate Bot Response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Thank you for reaching out. Our trade desk team will analyze your query regarding textile sourcing/selling and get back to you shortly.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-[100]">
      
      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-wider uppercase">Parekh e-Trade</h3>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Textile Assistant Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                    msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-white border-t border-slate-50 flex gap-2 overflow-x-auto no-scrollbar">
              {[
                { icon: <ShoppingBag size={12}/>, label: "Buy Products" },
                { icon: <Truck size={12}/>, label: "Check Auctions" }
              ].map((item, i) => (
                <button key={i} className="whitespace-nowrap bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase transition-all flex items-center gap-1">
                  {item.icon} {item.label}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your trade enquiry..."
                className="flex-1 bg-slate-50 border-none outline-none px-4 py-3 rounded-xl text-sm font-medium"
              />
              <button 
                onClick={handleSend}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BUTTONS STACK --- */}
      <div className="flex flex-col gap-3">
        {/* Chatbot Toggle Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 p-4 rounded-full shadow-2xl text-white flex items-center justify-center z-50 border-4 border-white"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>

        {/* WhatsApp Link (Already existing) */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center z-50 border-4 border-white"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
        </motion.a>
      </div>

    </div>
  );
};

export default TextileChatbot;