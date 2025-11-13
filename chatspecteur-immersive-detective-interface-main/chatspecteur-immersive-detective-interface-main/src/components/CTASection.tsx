"use client";

import { Play, User, MessageSquare, Search, Fingerprint, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950/40 to-slate-950/60 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative">
        <div className={`relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl shadow-2xl border border-blue-500/20 backdrop-blur-xl bg-slate-950/80 md:flex-row transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Neon glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          
          <div className="max-w-xl self-center p-6 md:p-12 relative z-10">
            <div className="inline-block mb-3">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <Search className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Investigation Interactive</span>
              </div>
            </div>
            
            <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Découvrez Chatspecteur: L&apos;Enquête Commence
            </h2>
            <p className="mt-4 text-slate-300 md:text-base leading-relaxed">
              Plongez dans une expérience d&apos;enquête immersive alimentée par l&apos;IA. 
              Interrogez les suspects, analysez leurs réponses et démasquez le criminel 
              dans ce thriller interactif nouvelle génération.
            </p>
            
            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <User className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Suspects Multiples</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">Dialogue IA Avancé</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <Fingerprint className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300">Indices Progressifs</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
                Commencer l&apos;Enquête
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:text-blue-200 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                Voir la Démo Interactive
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0 group">
            <img
              src="/mask.png"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg] opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500"
            />
            
            {/* Surveillance camera effect overlay */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-red-300">REC</span>
              </div>
              <div className="absolute top-6 left-6">
                <Eye className="w-5 h-5 text-blue-400/60 animate-pulse" />
              </div>
            </div>
            
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-20">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
            </div>
            
            <video
              src="https://assets.jitter.video/product-import-hero-hd-20.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l border-blue-500/20 object-cover pt-3.5 pl-3.5 backdrop-blur-sm shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-500 brightness-90 contrast-125 saturate-150"
            />
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400/40 rounded-br-xl" />
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(400px);
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export { CTASection };