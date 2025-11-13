import React from "react";
import Link from "next/link";
import { Search, Fingerprint, Eye, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

import type { Variants } from "framer-motion";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function MainFeatureSection() {
  return (
    <div className="">
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(210,100%,50%,.12)_0,hsla(210,80%,40%,.04)_50%,hsla(210,60%,30%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,100%,60%,.08)_0,hsla(210,70%,45%,.03)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,90%,55%,.06)_0,hsla(210,60%,40%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <h2 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                    Chatspecteur
                  </span>
                </h2>
                <h2 className="mt-8 max-w-2xl text-muted-foreground tracking-wide text-pretty text-lg">
                  Menez l'enquête. Interrogez le criminel. Découvrez la vérité cachée dans ses réponses.
                </h2>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex items-center gap-2"
                >
                  <div
                    key={1}
                    className="bg-blue-500/20 rounded-[calc(var(--radius-xl)+0.125rem)] border border-blue-500/30 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                    >
                      <Link href="#link">
                        <Search className="mr-2 h-4 w-4" />
                        <span className="text-nowrap">Lancer l'enquête</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                  >
                    <Link href="#link">
                      <Eye className="mr-2 h-4 w-4" />
                      <span className="text-nowrap">Voir les suspects</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b via-background/80 to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)] ring-1 ring-blue-500/10 backdrop-blur-sm bg-gradient-to-br from-slate-900/90 to-slate-950/90">
                  <div className="relative aspect-video w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
                      <div className="flex items-center gap-4 text-blue-400">
                        <Fingerprint className="h-16 w-16 animate-pulse" />
                        <AlertTriangle className="h-12 w-12 animate-pulse delay-150" />
                        <Search className="h-14 w-14 animate-pulse delay-300" />
                      </div>
                      <p className="text-2xl font-medium text-center text-blue-300/80 tracking-wide">
                        Interface d'interrogatoire - Analyse comportementale en cours
                      </p>
                      <div className="flex gap-2 mt-4">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse delay-150" />
                        <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse delay-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </div>
  );
}