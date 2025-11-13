"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Fingerprint, Flashlight, UserX, MessageSquare, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 md:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Interrogez, analysez, démasquez le coupable
        </h2>
        <h2 className="mt-8 max-w-2xl text-muted-foreground tracking-wide text-pretty text-lg text-zinc-400">
          Chatspecteur offre tous les outils pour mener votre enquête et identifier le criminel
        </h2>
        <div className="mx-auto mt-16 grid gap-2 sm:grid-cols-5">
          <Card 
            ref={(el) => { cardsRef.current[0] = el; }}
            className={`group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl bg-zinc-900/50 border-cyan-900/30 backdrop-blur-sm transition-all duration-700 ${visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ boxShadow: '0 0 30px rgba(34,211,238,0.1)' }}
          >
            <CardHeader>
              <div className="md:p-6">
                <p className="font-semibold text-2xl text-zinc-100">
                  Interrogatoire immersif avec{" "}
                  <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">l&apos;IA criminelle</span>
                </p>
                <p className="text-zinc-400 mt-3 font-medium max-w-sm text-sm">
                  Discutez en direct avec le suspect. Chaque réponse peut révéler un indice crucial. 
                  L&apos;intelligence artificielle simule un vrai comportement criminel.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900"></div>

              <div className="bg-zinc-950 overflow-hidden rounded-tl-lg pl-2 pt-2 border border-cyan-900/20 relative group-hover:border-cyan-700/40 transition-colors duration-300">
                <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                  <MessageSquare className="w-24 h-24 text-cyan-500/20 absolute animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 to-transparent"></div>
                  <p className="text-cyan-400/60 text-sm font-mono relative z-10">Chat interrogatoire en temps réel</p>
                </div>
              </div>
            </div>
          </Card>

          <Card 
            ref={(el) => { cardsRef.current[1] = el; }}
            className={`group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl bg-zinc-900/50 border-cyan-900/30 backdrop-blur-sm transition-all duration-700 delay-150 ${visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ boxShadow: '0 0 30px rgba(34,211,238,0.1)' }}
          >
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6 text-zinc-100">
              Identifiez les suspects, analysez leurs alibis et trouvez les contradictions cachées
            </p>

            <CardContent className="mt-auto h-full">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 bg-gradient-radial from-transparent to-zinc-900"></div>
                <div className="h-full overflow-hidden rounded-r-lg border border-cyan-900/30 bg-zinc-950/80 backdrop-blur-sm">
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-cyan-900/20 hover:border-cyan-700/40 transition-all hover:translate-x-1">
                      <UserX className="w-5 h-5 text-cyan-400" />
                      <span className="text-zinc-300 text-sm">Suspect analysé</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-cyan-900/20 hover:border-cyan-700/40 transition-all hover:translate-x-1">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <span className="text-zinc-300 text-sm">Comportement observé</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-cyan-900/20 hover:border-cyan-700/40 transition-all hover:translate-x-1">
                      <Search className="w-5 h-5 text-cyan-400" />
                      <span className="text-zinc-300 text-sm">Alibi vérifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            ref={(el) => { cardsRef.current[2] = el; }}
            className={`group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12 bg-zinc-900/50 border-cyan-900/30 backdrop-blur-sm transition-all duration-700 delay-300 ${visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ boxShadow: '0 0 30px rgba(34,211,238,0.1)' }}
          >
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-zinc-100">
              Collectez les indices et déverrouillez les preuves pour résoudre l&apos;affaire
            </p>

            <div className="flex justify-center gap-6">
              <div className="bg-zinc-800/50 relative flex aspect-square size-16 items-center rounded-lg border border-cyan-900/30 p-3 shadow-lg hover:border-cyan-700/50 hover:shadow-cyan-500/20 transition-all hover:scale-110">
                <span className="absolute right-2 top-1 block text-sm text-cyan-400 font-mono">fn</span>
                <Search className="mt-auto size-4 text-cyan-400" />
              </div>
              <div className="bg-zinc-800/50 flex aspect-square size-16 items-center justify-center rounded-lg border border-cyan-900/30 p-3 shadow-lg hover:border-cyan-700/50 hover:shadow-cyan-500/20 transition-all hover:scale-110">
                <Fingerprint className="size-6 text-cyan-400" />
              </div>
              <div className="bg-zinc-800/50 flex aspect-square size-16 items-center justify-center rounded-lg border border-cyan-900/30 p-3 shadow-lg hover:border-cyan-700/50 hover:shadow-cyan-500/20 transition-all hover:scale-110">
                <Flashlight className="size-6 text-cyan-400" />
              </div>
            </div>
          </Card>

          <Card 
            ref={(el) => { cardsRef.current[3] = el; }}
            className={`group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl bg-zinc-900/50 border-cyan-900/30 backdrop-blur-sm transition-all duration-700 delay-450 ${visibleCards.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ boxShadow: '0 0 30px rgba(34,211,238,0.1)' }}
          >
            <CardHeader className="p-6 md:p-12">
              <p className="font-semibold text-2xl text-zinc-100">
                Intégration IA. Analyse. Résolution.
              </p>
              <p className="text-zinc-400 mt-2 max-w-sm text-sm">
                Propulsé par Python et Ollama, Chatspecteur analyse chaque mot, détecte les mensonges 
                et vous guide vers la vérité. L&apos;enquête devient une science exacte.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="aspect-square border border-dashed border-cyan-900/30 rounded-lg"></div>
                <div className="bg-zinc-800/50 flex aspect-square items-center justify-center border border-cyan-900/30 p-4 rounded-lg hover:border-cyan-700/50 transition-all hover:scale-105">
                  <span className="text-cyan-400 font-bold text-xl">Py</span>
                </div>
                <div className="aspect-square border border-dashed border-cyan-900/30 rounded-lg"></div>
                <div className="bg-zinc-800/50 flex aspect-square items-center justify-center border border-cyan-900/30 p-4 rounded-lg hover:border-cyan-700/50 transition-all hover:scale-105">
                  <span className="text-cyan-400 font-bold text-sm">AI</span>
                </div>
                <div className="aspect-square border border-dashed border-cyan-900/30 rounded-lg"></div>
                <div className="bg-zinc-800/50 flex aspect-square items-center justify-center border border-cyan-900/30 p-4 rounded-lg hover:border-cyan-700/50 transition-all hover:scale-105">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}