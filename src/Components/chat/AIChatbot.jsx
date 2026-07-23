import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus, Loader2, Sparkles, User, Info } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content: 'Hello! Welcome to Zoya Premium Curtain. I am your AI assistant. How can I help you transform your home today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  // Local AI Logic (No API Key Required)
  const generateResponse = (userMsg) => {
    const text = userMsg.toLowerCase();
    
    if (text.includes('warranty')) {
      return "All our products (curtains, blinds, and furniture) come with a comprehensive 5-Year Warranty covering manufacturing defects and mechanisms. We stand by the premium quality of our work!";
    }
    if (text.includes('install') || text.includes('fitting')) {
      return "We provide completely FREE professional installation for all our curtains and furniture across the UAE.";
    }
    if (text.includes('delivery') || text.includes('abu dhabi') || text.includes('sharjah') || text.includes('dubai') || text.includes('location')) {
      return "Yes, we offer FREE delivery and installation across all UAE Emirates (including Dubai, Abu Dhabi, Sharjah, and more).";
    }
    if (text.includes('quote') || text.includes('price') || text.includes('cost') || text.includes('how much')) {
      return "Since all our luxury curtains and furniture are custom-tailored to perfectly fit your space, pricing varies based on dimensions and fabric choices. We offer a completely FREE home measurement and consultation! Call or WhatsApp us at +971 55 512 4614 to book your visit.";
    }
    if (text.includes('contact') || text.includes('phone') || text.includes('whatsapp') || text.includes('call') || text.includes('number')) {
      return "You can reach us anytime via Call or WhatsApp at +971 55 512 4614, or email us at info@zoyacurtains.ae. We are open daily from 9 AM to 9 PM.";
    }
    if (text.includes('where') || text.includes('address') || text.includes('locate')) {
      return "We are based in Dubai, UAE. However, we come to YOU! We offer free home measurements, consultations, and installations across all UAE Emirates. Would you like to book a visit?";
    }
    if (text.includes('curtain') || text.includes('blind')) {
      return "We offer a wide range of premium curtains including Blackout Curtains (for total darkness), Sheer Curtains, and luxury Velvet Curtains. Would you like to book a free home measurement to see our fabric samples?";
    }
    if (text.includes('furniture') || text.includes('sofa') || text.includes('bed') || text.includes('mattress') || text.includes('table')) {
      return "Beyond curtains, we craft luxury custom furniture including L-shape and U-shape Sofas, Modern Dining Sets, Upholstered Beds, Premium Mattresses, and Smart Storage solutions. Everything is custom-built to your needs!";
    }
    if (text.includes('carpet') || text.includes('rug')) {
      return "We offer a luxurious collection of premium carpets and rugs! From authentic hand-knotted Persian Silk Rugs to Modern Art Carpets and Heavy-Duty Office Carpets, we have the perfect flooring solution. We even offer bespoke custom carpets tailored to your exact dimensions.";
    }
    if (text.includes('who') || text.includes('what do you do') || text.includes('about')) {
      return "We are Zoya Premium Curtain! Your trusted source for premium custom curtains, luxury furniture, and complete home furnishings in the UAE.";
    }
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return "Hello! Welcome to Zoya Premium Curtain. Are you looking for custom curtains, furniture, or would you like to book a free home consultation?";
    }
    
    // Fallback response for unmatched questions
    if (text.includes('?')) {
      return "That's a great question! To give you the exact details and best possible service, please Call or WhatsApp our experts directly at +971 55 512 4614. We offer completely FREE home measurements across the UAE!";
    }
    
    // Default fallback
    return "Thank you for your message! To give you the best possible service, please Call or WhatsApp us directly at +971 55 512 4614. We offer completely FREE home measurements and consultations across the UAE!";
  };

  const handleCloseChat = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(false);
    
    // Reset chat history after close animation finishes
    setTimeout(() => {
      setMessages([
        {
          role: 'model',
          content: 'Hello! Welcome to Zoya Premium Curtain. I am your AI assistant. How can I help you transform your home today?'
        }
      ]);
      setInputMessage('');
    }, 300);
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage.trim();
    setInputMessage('');
    
    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    setIsLoading(true);

    // Simulate AI typing delay for a more natural feel
    setTimeout(() => {
      const responseText = generateResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', content: responseText }]);
      setIsLoading(false);
    }, 1200);
  };

  const handleQuickReply = (text) => {
    setInputMessage(text);
    // Use setTimeout to ensure state updates before sending
    setTimeout(() => {
      document.getElementById('chat-submit-btn')?.click();
    }, 50);
  };

  const quickReplies = [
    "What is your warranty?",
    "Do you offer free installation?",
    "I need a quote",
  ];

  // Floating Button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#0B1E36] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#C8A96A]/30 transition-all duration-300 border-2 border-[#C8A96A]/20 group flex items-center justify-center animate-bounce"
        aria-label="Open Chat"
      >
        <Sparkles className="absolute top-1 right-1 w-3 h-3 text-[#C8A96A] animate-pulse" />
        <MessageCircle className="w-8 h-8 group-hover:text-[#C8A96A] transition-colors" />
      </button>
    );
  }

  // Chat Window
  return (
    <div 
      className={`fixed right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E8E2D8] flex flex-col transition-all duration-300 transform origin-bottom-right ${
        isMinimized ? 'bottom-6 h-16' : 'bottom-6 h-[600px] max-h-[85vh]'
      }`}
    >
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-[#0B1E36] to-[#173054] p-4 flex justify-between items-center cursor-pointer border-b-4 border-[#C8A96A]"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl shadow-lg border border-[#C8A96A]/30">
              <img src="/logo.svg" alt="Zoya Assistant" className="w-8 h-8 object-contain" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0B1E36]"></div>
          </div>
          <div>
            <h3 className="text-white font-black text-sm leading-tight">Zoya Assistant</h3>
            <p className="text-[#C8A96A] text-xs font-semibold">Online & Ready to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-[#E8E2D8]">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <Minus className="w-5 h-5" />
          </button>
          <button 
            onClick={handleCloseChat}
            className="p-1 hover:bg-white/10 rounded transition-colors text-red-400 hover:text-red-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F5F1EA]/30 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-[#0B1E36] flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-md">
                    <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                  </div>
                )}
                
                <div 
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#C8A96A] text-[#0B1E36] font-medium rounded-tr-sm' 
                      : 'bg-white border border-[#E8E2D8] text-gray-700 rounded-tl-sm'
                  }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {msg.content}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0 mt-1 shadow-md">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="w-8 h-8 rounded-full bg-[#0B1E36] flex items-center justify-center mr-2 shadow-md">
                  <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                </div>
                <div className="bg-white border border-[#E8E2D8] p-3.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && !isLoading && (
            <div className="p-3 bg-white border-t border-[#E8E2D8] flex gap-2 overflow-x-auto no-scrollbar">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className="whitespace-nowrap px-4 py-1.5 bg-[#F5F1EA] hover:bg-[#C8A96A] hover:text-[#0B1E36] text-[#666666] text-xs font-bold rounded-full transition-colors border border-[#E8E2D8] hover:border-[#C8A96A]"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form 
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t border-[#E8E2D8] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-[#F5F1EA] text-[#222222] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A96A] text-sm transition-all border border-transparent focus:border-[#C8A96A]"
              disabled={isLoading}
            />
            <button
              id="chat-submit-btn"
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="bg-[#0B1E36] text-white p-3 rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-[#C8A96A]" />
              ) : (
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AIChatbot;
