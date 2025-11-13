"use client";

import {
  ArrowRight,
  Eye,
  Fingerprint,
  Search,
  Send,
  Users,
  AlertTriangle,
  FileText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useRef } from "react";

const SUSPECTS_LIST = [
  {
    id: 1,
    name: "Marc Dubois",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alibi: "Était au bureau",
    behavior: "Nerveux",
    contradictions: 2,
  },
  {
    id: 2,
    name: "Sophie Martin",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alibi: "Chez une amie",
    behavior: "Calme",
    contradictions: 0,
  },
  {
    id: 3,
    name: "Thomas Leroy",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    alibi: "En déplacement",
    behavior: "Évasif",
    contradictions: 3,
  },
  {
    id: 4,
    name: "Claire Bernard",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    alibi: "À la salle de sport",
    behavior: "Coopératif",
    contradictions: 1,
  },
];

const CLUES_LIST = [
  { icon: Fingerprint, text: "Empreintes sur l'arme", unlocked: true },
  { icon: Eye, text: "Témoin près de la scène", unlocked: true },
  { icon: FileText, text: "Message crypté trouvé", unlocked: false },
  { icon: Search, text: "Indice ADN en analyse", unlocked: false },
];

import { useForm } from "react-hook-form";

const ChatInterface = () => {
  const form = useForm<{ message: string }>({
    defaultValues: { message: "" },
  });

  const [messages, setMessages] = useState([
    { role: "system", content: "Bienvenue dans la salle d'interrogatoire. Posez vos questions..." },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (data: { message: string }) => {
    if (!data.message.trim()) return;
    
    // TODO: Connecter au backend Python/Ollama
    setMessages(prev => [...prev, { role: "user", content: data.message }]);
    form.reset();
    
    // Simuler la réponse du criminel
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "criminal", 
        content: "Je vous assure que je n'étais pas là-bas ce soir-là..." 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/20">
        <div className="size-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse" />
        <h3 className="text-cyan-400 font-semibold text-lg tracking-wide">Interrogatoire en cours</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div
              className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                msg.role === "user"
                  ? "bg-cyan-600/30 border border-cyan-500/40 text-cyan-100 shadow-lg shadow-cyan-500/20"
                  : msg.role === "system"
                  ? "bg-slate-700/50 border border-slate-600/40 text-slate-300 italic"
                  : "bg-red-900/30 border border-red-500/40 text-red-100 shadow-lg shadow-red-500/20"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-red-900/30 border border-red-500/40 px-5 py-3 rounded-2xl">
              <div className="flex gap-1">
                <span className="size-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                <span className="size-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <span className="size-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-3">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Posez votre question au suspect..."
                    className="bg-slate-800/50 border-cyan-500/30 text-cyan-100 placeholder:text-slate-500 rounded-xl h-12 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-xl px-6 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </Form>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  const [selectedSuspect, setSelectedSuspect] = useState<number | null>(null);
  const [progress, setProgress] = useState(40);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-20">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10">
        <div className="flex w-full flex-col gap-16">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-8 animate-fadeIn">
            <Badge
              variant="outline"
              className="bg-slate-900/80 backdrop-blur-xl border-cyan-500/40 shadow-lg shadow-cyan-500/20 px-5 py-2 rounded-full text-sm font-semibold text-cyan-400 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
            >
              <AlertTriangle className="size-4 mr-2" />
              Enquête en cours
            </Badge>
            
            <h1 className="text-center text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-bold leading-[0.9] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent tracking-tighter drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Chatspecteur
            </h1>
            
            <div className="flex w-full max-w-[48rem] flex-col items-center justify-center gap-4">
              <p className="text-center text-[1.35rem] font-medium leading-relaxed text-slate-300 tracking-wide">
                Interrogez le criminel, analysez ses réponses et démasquez le coupable parmi les suspects
              </p>
            </div>
          </div>

          {/* Zone Suspects */}
          <div className="w-full max-w-[85rem] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="size-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-cyan-400">Suspects principaux</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUSPECTS_LIST.map((suspect, idx) => (
                <div
                  key={suspect.id}
                  onClick={() => setSelectedSuspect(suspect.id)}
                  className={`group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn ${
                    selectedSuspect === suspect.id
                      ? "border-cyan-500 shadow-2xl shadow-cyan-500/30"
                      : "border-slate-700/50 hover:border-cyan-500/50 shadow-xl shadow-slate-900/50"
                  }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                  
                  <div className="relative p-6 flex flex-col gap-4">
                    <div className="aspect-square w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500">
                      <img src={suspect.image} alt={suspect.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-cyan-100 mb-3">{suspect.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Alibi :</span>
                          <span className="text-slate-300 font-medium">{suspect.alibi}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Comportement :</span>
                          <span className="text-slate-300 font-medium">{suspect.behavior}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Contradictions :</span>
                          <Badge variant={suspect.contradictions > 2 ? "destructive" : "outline"} className="text-xs">
                            {suspect.contradictions}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="w-full max-w-[85rem] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="size-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400">Salle d'interrogatoire</h2>
            </div>
            <ChatInterface />
          </div>

          {/* Indices */}
          <div className="w-full max-w-[85rem] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Search className="size-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-cyan-400">Indices découverts</h2>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-400 text-sm font-medium">Progression de l'enquête</span>
                  <span className="text-cyan-400 text-sm font-bold">{progress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLUES_LIST.map((clue, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                      clue.unlocked
                        ? "bg-cyan-900/20 border-cyan-500/40 shadow-lg shadow-cyan-500/20"
                        : "bg-slate-800/30 border-slate-700/30 opacity-50"
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${clue.unlocked ? "bg-cyan-500/20" : "bg-slate-700/30"}`}>
                      <clue.icon className={`size-5 ${clue.unlocked ? "text-cyan-400" : "text-slate-500"}`} />
                    </div>
                    <span className={`text-sm font-medium ${clue.unlocked ? "text-cyan-100" : "text-slate-500"}`}>
                      {clue.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bouton Accuser */}
          <div className="w-full max-w-[85rem] mx-auto flex justify-center">
            <Button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 hover:scale-110 border border-red-500/50"
              onClick={() => {
                // TODO: Logique d'accusation à connecter
                alert("Qui accusez-vous ?");
              }}
            >
              <AlertTriangle className="size-5 mr-2" />
              Accuser un suspect
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>

          {/* Footer */}
          <div className="w-full max-w-[85rem] mx-auto pt-12 border-t border-slate-800">
            <p className="text-center text-slate-500 text-sm">
              Chatspecteur © 2024 · Propulsé par IA (Python + Ollama)
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export { HeroSection };