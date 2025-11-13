"use client";

import { motion } from "framer-motion";
import React from "react";
import { Search, Fingerprint, Eye, Lock, AlertTriangle, UserX } from "lucide-react";

import { cn } from "@/lib/utils";

const IntegrationsSection = () => {
  return (
    <section className="relative w-full mx-auto py-32 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-blue-400/70 uppercase tracking-[0.3em] text-sm font-light">
          Enquête • Interrogatoire • Déduction
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-6xl">
          Le seul jeu d'enquête où vous devez{" "}
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"Trouver le Tueur".split(" ").map((word, i) => (
              <motion.span
                className="relative inline-block px-[6px] leading-[none]"
                key={i}
                initial={{
                  opacity: 0,
                  y: "70%",
                  rotateX: "-28deg",
                }}
                animate={{
                  opacity: 1,
                  y: "0%",
                  rotateX: "0deg",
                }}
                transition={{
                  delay: i * 0.08 + 0.1,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word === "Tueur" ? (
                  <span className="font-playfair text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-20 mt-10 flex items-center justify-center gap-4"
        >
          <SkiperUiMarquee
            showCard={1}
            className=""
            reverse={true}
            items={[
              { icon: Search, label: "Indices" },
              { icon: Fingerprint, label: "Preuves" },
              { icon: Eye, label: "Observation" },
              { icon: Lock, label: "Secrets" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            items={[
              { icon: AlertTriangle, label: "Alibis" },
              { icon: UserX, label: "Suspects" },
              { icon: Search, label: "Enquête" },
              { icon: Fingerprint, label: "ADN" },
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            items={[
              { icon: Eye, label: "Témoins" },
              { icon: Lock, label: "Coffre" },
              { icon: AlertTriangle, label: "Mensonges" },
              { icon: UserX, label: "Coupable" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            items={[
              { icon: Search, label: "Loupe" },
              { icon: Fingerprint, label: "Empreintes" },
              { icon: Eye, label: "Vision" },
              { icon: Lock, label: "Cadenas" },
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            items={[
              { icon: AlertTriangle, label: "Danger" },
              { icon: UserX, label: "Criminel" },
              { icon: Search, label: "Chercher" },
              { icon: Fingerprint, label: "Traces" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            items={[
              { icon: Eye, label: "Surveiller" },
              { icon: Lock, label: "Verrouillé" },
              { icon: AlertTriangle, label: "Alerte" },
              { icon: UserX, label: "Suspect" },
            ]}
          />
          <SkiperUiMarquee
            reverse={true}
            showCard={1}
            className=""
            items={[
              { icon: Search, label: "Analyser" },
              { icon: Fingerprint, label: "Scanner" },
              { icon: Eye, label: "Repérer" },
              { icon: Lock, label: "Sécuriser" },
            ]}
          />
        </motion.div>

        <div className="h-92 absolute bottom-20 left-0 right-0 w-full bg-blue-600/10 blur-3xl" />
      </div>
    </section>
  );
};

export { IntegrationsSection };

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  items: Array<{ icon: React.ElementType; label: string }>;
}

export function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  items,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {items.map((item, idx) => (
          <Card key={idx} icon={item.icon} label={item.label} />
        ))}
      </Marquee>
      <div className="from-black absolute top-0 z-10 h-8 w-full bg-gradient-to-b" />
      <div className="from-black absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t" />
    </div>
  );
}

function Card({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div
      className={cn(
        "border-blue-500/30 relative flex size-24 items-center shadow-md justify-center overflow-hidden rounded-3xl border p-4 backdrop-blur-sm",
        "bg-gradient-to-b from-slate-900/80 to-slate-950/90",
        "hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#3b82f61f_inset]"
      )}
    >
      <Icon className="size-8 text-blue-400/90 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
    </div>
  );
}