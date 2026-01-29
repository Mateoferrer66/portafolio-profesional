import React, { useState, useEffect, useRef } from 'react';

// --- Types ---
type Message = {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    options?: string[]; // Quick replies
    action?: string;   // Link or action
    type?: 'text' | 'image' | 'link';
};

interface ChatWidgetProps {
    className?: string; // Allow overriding classes
    client?: string; // Astro specific, but fine to ignore or type
}

const ChatWidget = ({ className }: ChatWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showBadge, setShowBadge] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Initial greeting
    useEffect(() => {
        // Auto-open after delay (optional, keeping it subtle for now, just badge)
        const timer = setTimeout(() => {
            if (messages.length === 0) {
                addBotMessage("¡Hola! 👋 Soy el asistente virtual de Mateo.");
                setTimeout(() => {
                    addBotMessage("¿En qué puedo ayudarte hoy?", [
                        "Ver Portafolio 🎨",
                        "Cotizar Servicio 🚀",
                        "Soporte Tienda 🛒",
                        "Hablemos 💬"
                    ]);
                }, 800);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowBadge(false);
        setHasInteracted(true);
    };

    const addBotMessage = (text: string, options?: string[]) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                id: Date.now(),
                text,
                sender: 'bot',
                options
            }]);
        }, 1200); // Simulated "thinking" time
    };

    const handleOptionClick = (option: string) => {
        // Add user message immediately
        setMessages(prev => [...prev, {
            id: Date.now(),
            text: option,
            sender: 'user'
        }]);

        // Logic flow
        processUserResponse(option);
    };

    const processUserResponse = (text: string) => {
        const lowerText = text.toLowerCase();

        if (lowerText.includes("portafolio")) {
            addBotMessage("¡Excelente elección! Puedes ver mis proyectos más recientes en la sección de 'Work'.", ["Ir a Portafolio", "Volver al menú"]);
        } else if (lowerText.includes("cotizar")) {
            addBotMessage("Me encantaría colaborar contigo. ¿Qué tipo de proyecto tienes en mente?", [
                "Web App / Sitio Web 🌐",
                "Diseño UX/UI 🖌️",
                "E-commerce 🏦",
                "Otro"
            ]);
        } else if (lowerText.includes("tienda") || lowerText.includes("soporte")) {
            addBotMessage("Para temas de la tienda, revisa la sección 'Shop' o escríbeme directamente si tuviste un problema con una compra.", ["Ir a la Tienda", "Contactar Soporte"]);
        } else if (lowerText.includes("hablemos") || lowerText.includes("contactar")) {
            addBotMessage("Puedes escribirme directamente a mi WhatsApp para una respuesta rápida.", ["Abrir WhatsApp 📱"]);
        } else if (lowerText.includes("web") || lowerText.includes("design") || lowerText.includes("e-commerce")) {
            addBotMessage("¡Genial! Ese es mi fuerte. Te sugiero que me envíes los detalles por WhatsApp para darte un estimado.", ["Abrir WhatsApp 📱"]);
        } else if (lowerText.includes("ir a portafolio")) {
            window.location.href = '/work/';
        } else if (lowerText.includes("ir a la tienda")) {
            window.location.href = '/shop/';
        } else if (lowerText.includes("abrir whatsapp")) {
            window.open('https://wa.me/573005059987', '_blank');
        } else {
            // Fallback
            addBotMessage("Entendido. ¿Deseas saber algo más?", [
                "Ver Portafolio 🎨",
                "Cotizar Servicio 🚀"
            ]);
        }
    };

    return (
        <div className={className || "fixed right-5 z-[5000] flex flex-col items-end gap-4 bottom-24"}>
            {/* Chat Window */}
            <div
                className={`
                    w-[320px] sm:w-[350px]
                    bg-white/90 dark:bg-slate-900/90
                    backdrop-blur-xl border border-white/20 dark:border-slate-700/50
                    shadow-2xl rounded-2xl overflow-hidden
                    transition-all duration-300 origin-bottom-right
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none absolute bottom-16'}
                `}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                                🤖
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-indigo-600 rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Asistente Virtual</h3>
                            <p className="text-xs text-indigo-200">En línea ahora</p>
                        </div>
                    </div>
                    <button onClick={toggleChat} aria-label="Cerrar chat" className="text-white/80 hover:text-white transition p-1 hover:bg-white/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                {/* Body */}
                <div className="h-[350px] overflow-y-auto p-4 bg-slate-50 dark:bg-slate-800/50 scroll-smooth custom-scrollbar">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col mb-4 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                            <div
                                className={`
                                    max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                    ${msg.sender === 'user'
                                        ? 'bg-violet-600 text-white rounded-br-none'
                                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-100 dark:border-slate-600'}
                                `}
                            >
                                {msg.text}
                            </div>

                            {/* Quick Replies */}
                            {msg.options && (
                                <div className="flex flex-wrap gap-2 mt-3 animate-fade-in">
                                    {msg.options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionClick(option)}
                                            className="text-xs py-1.5 px-3 bg-white dark:bg-slate-700 border border-violet-200 dark:border-slate-600 text-violet-600 dark:text-violet-300 rounded-full hover:bg-violet-50 dark:hover:bg-slate-600 hover:scale-105 transition-all shadow-sm"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex items-center gap-1.5 ml-2 mb-4 bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none w-fit shadow-sm border border-slate-100 dark:border-slate-600">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef}></div>
                </div>

                {/* Input Placeholder (Disabled for now as it's guided flow, but visually present) */}
                <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-center text-slate-500 dark:text-slate-400">Selecciona una opción para continuar</p>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`
                    group relative flex items-center justify-center w-14 h-14 rounded-full 
                    bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/30 
                    transition-all duration-300 hover:scale-110
                    ${isOpen ? 'rotate-90 scale-0 opacity-0 hidden' : 'scale-100 opacity-100'}
                `}
                aria-label="Chatbot"
            >
                {/* Ping Animation */}
                {!hasInteracted && showBadge && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center">1</span>
                    </span>
                )}

                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </div>
    );
};

export default ChatWidget;
