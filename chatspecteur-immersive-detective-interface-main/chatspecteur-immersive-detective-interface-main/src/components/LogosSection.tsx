"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Search, Fingerprint, Lightbulb, Users, AlertCircle } from "lucide-react";

// Placeholder suspect data - TODO: Connect to Python/Ollama backend
const SUSPECTS = [
  {
    id: 1,
    name: "Alexandre Dubois",
    role: "Directeur Financier",
    alibi: "En réunion",
    status: "suspect",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/mercury.svg"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Responsable Marketing",
    alibi: "Au gymnase",
    status: "suspect",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/watershed.svg"
  },
  {
    id: 3,
    name: "Thomas Rousseau",
    role: "Ingénieur Logiciel",
    alibi: "Chez lui",
    status: "suspect",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg"
  },
  {
    id: 4,
    name: "Marie Laurent",
    role: "Directrice RH",
    alibi: "En déplacement",
    status: "suspect",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/descript.svg"
  }
];

// TODO: Connect to backend for real clues
const INITIAL_CLUES = [
  { id: 1, text: "L'arme du crime: un couteau de cuisine", icon: Search },
  { id: 2, text: "Heure du crime: entre 21h et 23h", icon: Fingerprint },
  { id: 3, text: "Lieu: bureau du 5ème étage", icon: Lightbulb }
];

const LogoSection = () => {
  const [messages, setMessages] = useState([
    { sender: "system", text: "Interrogatoire en cours... Posez vos questions au suspect." }
  ]);
  const [input, setInput] = useState("");
  const [clues, setClues] = useState(INITIAL_CLUES);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const messagesEndRef = useRef(null);
  const [progress, setProgress] = useState(30);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typewriter effect for criminal responses
  const typewriterEffect = (text, callback) => {
    setIsTyping(true);
    let index = 0;
    const tempMsg = { sender: "criminal", text: "" };
    setMessages(prev => [...prev, tempMsg]);

    const interval = setInterval(() => {
      if (index < text.length) {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            sender: "criminal",
            text: text.substring(0, index + 1)
          };
          return newMessages;
        });
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 30);
  };

  // TODO: Connect to Python/Ollama backend
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Simulate AI response - Replace with actual backend call
    setTimeout(() => {
      const responses = [
        "Je n'étais pas là ce soir-là... enfin, je crois.",
        "Pourquoi cette question ? Vous doutez de moi ?",
        "Je préfère ne pas répondre sans mon avocat.",
        "C'est une accusation grave que vous portez là."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      typewriterEffect(randomResponse);
    }, 1000);
  };

  // TODO: Connect accusation to backend
  const handleAccuse = (suspect) => {
    setSelectedSuspect(suspect);
    // Backend logic here
    console.log("Accusation:", suspect.name);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            CHATSPECTEUR
          </h1>
          <p className="text-xl text-blue-200/80 font-light tracking-wide">
            Interrogez le criminel. Démasquez le coupable. La vérité est dans les détails.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-cyan-300/60">
            <AlertCircle className="w-4 h-4" />
            <span>Propulsé par IA • Python + Ollama</span>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Suspects Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold tracking-tight">Suspects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUSPECTS.map((suspect, index) => (
                <div
                  key={suspect.id}
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleAccuse(suspect)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-3xl font-bold">
                        {suspect.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-1">{suspect.name}</h3>
                    <p className="text-sm text-blue-300/70 text-center mb-3">{suspect.role}</p>
                    <div className="bg-slate-800/50 rounded-lg p-2 text-xs text-center">
                      <span className="text-cyan-400">Alibi:</span> {suspect.alibi}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-[600px] flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                Interrogatoire en direct
              </h2>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                          : msg.sender === "criminal"
                          ? "bg-red-950/30 border border-red-500/30 text-red-100"
                          : "bg-slate-800/50 text-blue-200 text-center w-full"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800/50 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-slate-800/50 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-6 py-3 font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Clues Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-[600px] flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <h2 className="text-2xl font-semibold mb-4">Indices collectés</h2>
              
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-300">Progression</span>
                  <span className="text-cyan-400 font-semibold">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Clues list */}
              <div className="space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
                {clues.map((clue, idx) => {
                  const Icon = clue.icon;
                  return (
                    <div
                      key={clue.id}
                      className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-4 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] animate-fade-in-up"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <p className="text-sm text-blue-100/90 leading-relaxed">{clue.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Accuse button */}
              <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl px-6 py-4 font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2 group">
                <AlertCircle className="w-5 h-5 group-hover:animate-pulse" />
                ACCUSER LE COUPABLE
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-blue-300/60 text-sm border-t border-blue-500/10">
          <p>© 2024 Chatspecteur • Jeu d&apos;enquête interactif</p>
          <p className="mt-2">Propulsé par Intelligence Artificielle • Backend Python + Ollama</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out both; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thumb-blue-500\/50::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.5); border-radius: 3px; }
        .scrollbar-track-transparent::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </section>
  );
};

export { LogoSection };