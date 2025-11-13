"use client";

import { Button } from "@/components/ui/button";
import { Check, Eye, Fingerprint, MessageSquare, Users, AlertTriangle, Search } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Bonjour... Je suis prêt à répondre à vos questions.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
      setInputValue("");
      setIsTyping(true);
      
      // TODO: Connect to Python/Ollama backend here
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Je comprends votre question... Laissez-moi réfléchir.", 
          isUser: false 
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const suspects = [
    { name: "Dr. Laurent Moreau", role: "Médecin légiste", status: "Alibi confirmé" },
    { name: "Sophie Durand", role: "Assistante juridique", status: "Comportement suspect" },
    { name: "Marc Belmont", role: "Ancien associé", status: "Contradictions détectées" }
  ];

  const clues = [
    { icon: Fingerprint, text: "Empreintes digitales sur la scène", unlocked: true },
    { icon: Eye, text: "Témoin oculaire identifié", unlocked: true },
    { icon: AlertTriangle, text: "Incohérence dans les témoignages", unlocked: false }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 w-full md:py-20">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-4 tracking-tight animate-in fade-in slide-in-from-top duration-700">
              CHATSPECTEUR
            </h1>
            <div className="absolute -inset-2 bg-blue-500/20 blur-2xl -z-10 animate-pulse" />
          </div>
          <p className="text-slate-300 text-lg md:text-xl mt-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Interrogez le criminel. Démasquez le coupable. La vérité est dans les détails.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
            <span>Propulsé par IA · Python + Ollama</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Suspects Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Liste des Suspects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {suspects.map((suspect, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/40 backdrop-blur-xl border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform: hoveredCard === index ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredCard === index ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                  }}
                >
                  <CardHeader className="p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <Users className="w-16 h-16 text-slate-700 group-hover:text-blue-500/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">{suspect.name}</CardTitle>
                    <CardDescription className="text-slate-400 text-sm mt-1">{suspect.role}</CardDescription>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs">
                      <div className={`w-2 h-2 rounded-full ${suspect.status.includes('suspect') || suspect.status.includes('Contradictions') ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                      <span className="text-slate-300">{suspect.status}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold text-white">Interrogatoire en cours</h2>
            </div>
            <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-800 h-[500px] flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/10">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.isUser 
                        ? 'bg-blue-600/90 text-white ml-auto shadow-lg shadow-blue-500/20' 
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/50 shadow-lg'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800/90 rounded-2xl px-4 py-3 border border-slate-700/50">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="border-t border-slate-800 p-4 bg-slate-900/80 backdrop-blur-sm">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Posez votre question au suspect..."
                    className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Envoyer
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Clues Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-semibold text-white">Indices & Pistes</h2>
            </div>
            <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-800 p-6 shadow-2xl shadow-amber-500/10">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Progression de l&apos;enquête</span>
                  <span className="text-amber-400 font-semibold">67%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 shadow-lg shadow-amber-500/50"
                    style={{ width: '67%' }}
                  />
                </div>
              </div>
              
              <ul className="space-y-4">
                {clues.map((clue, index) => {
                  const Icon = clue.icon;
                  return (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                        clue.unlocked 
                          ? 'bg-slate-800/50 border border-amber-500/30 shadow-lg shadow-amber-500/10' 
                          : 'bg-slate-800/20 border border-slate-700/30 opacity-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mt-0.5 ${clue.unlocked ? 'text-amber-400' : 'text-slate-600'}`} />
                      <span className={`text-sm ${clue.unlocked ? 'text-slate-200' : 'text-slate-500'}`}>
                        {clue.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button 
                className="w-full mt-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 group"
              >
                <AlertTriangle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Accuser le Coupable
              </Button>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            CHATSPECTEUR · Jeu d&apos;enquête interactif propulsé par IA
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Technologie : Python + Ollama · Interface : Next.js 15
          </p>
        </div>
      </div>
    </div>
  );
}