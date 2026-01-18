import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Abhijeet's AI Assistant. Ask me about his Experience or Projects!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- LOGIC TO HANDLE RESPONSES ---
  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();

    // 1. EXPERIENCE REQUEST
    if (lowerText.includes("experience") || lowerText.includes("background") || lowerText.includes("skills")) {
      return `Here is a summary of my professional experience:

• Developed and enhanced full-stack web applications using React.js, Next.js, and Strapi Headless CMS, delivering fast, SEO-optimized interfaces.

• Built responsive UI components and scalable design systems with Tailwind CSS, Radix UI, and Framer Motion.

• Worked in an Agile environment with cross-functional teams to design, test, and launch new product capabilities using React Query and TypeScript.

• Improved application speed and stability by applying best practices in caching, API integration, and code optimization.`;
    }

    // 2. PROJECT LIST REQUEST (General)
    if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("made")) {
      return `I have worked on several key projects:

Professional Work:
• Property Guess Game
• SaaS Based Project

College Projects:
• Shopify Clone
• Chat Application
• Todo List App

Do you need an in-detail overview of which project?`;
    }

    // 3. PROJECT DETAILS - Shopify
    if (lowerText.includes("shopify")) {
      return `Shopify Clone Details:
• Created and maintained a full-featured e-commerce platform with real-time shopping workflows using Razorpay, Redux Toolkit, and React Router.
• Integrated secure online payments through Razorpay’s Payment Gateway.
• Managed global application state using Redux Toolkit and built scalable server-side modules with Strapi Headless CMS.`;
    }

    // 4. PROJECT DETAILS - Chat App
    if (lowerText.includes("chat")) {
      return `Chat Application Details:
• Built a real-time chat system with Socket.IO for instant messaging and Axios for efficient API communication.
• Designed a modern, responsive interface using Styled Components to deliver a cohesive messaging experience.`;
    }

    // 5. PROJECT DETAILS - Todo List
    if (lowerText.includes("todo")) {
      return `Todo List App Details:
• Developed a responsive and interactive to-do application using React.js.
• Built RESTful APIs with Node.js and Express.js to support fast and reliable CRUD operations.`;
    }

    // 6. PROJECT DETAILS - Professional (Property/SaaS)
    if (lowerText.includes("property") || lowerText.includes("guess") || lowerText.includes("saas")) {
      return `For my professional work, I developed a Property Guess Game (real-time price guessing) and 'Swaykart', an influencer marketing SaaS platform involving complex data scraping and dashboards.`;
    }

    return "I can tell you about my Experience or my Projects (Shopify, Chat App, etc.). What would you like to know?";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      setMessages((prev) => [...prev, { role: "assistant", text: responseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-blue-600 text-white flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full"><Bot size={20} /></div>
              <div><h3 className="font-semibold">Abhijeet's Bot</h3><p className="text-xs text-blue-100">Assistant</p></div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/20">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`p-3 rounded-2xl text-sm max-w-[85%] whitespace-pre-wrap ${
                    msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-tl-none"
                  }`}>{msg.text}</div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-gray-400 ml-4">Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Experience or Projects..." className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                <button type="submit" disabled={!input.trim()} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"><Send size={18} /></button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;