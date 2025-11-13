"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Eye, Search, Fingerprint, AlertCircle, Lightbulb } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Inspecteur Durand",
    role: "Commissaire Principal",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Chatspecteur a révolutionné nos méthodes d'interrogatoire. L'interface permet de déceler les mensonges avec efficacité.",
  },
  {
    name: "Sophie Martin",
    role: "Analyste Criminelle",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "L'intégration des indices et le système d'analyse comportementale sont impressionnants. Un outil indispensable pour nos enquêtes.",
  },
  {
    name: "Marc Rousseau",
    role: "Chef d'Unité",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Gérer les interrogatoires n'a jamais été aussi simple. L'interface intuitive nous fait gagner un temps précieux sur le terrain.",
  },
  {
    name: "Claire Fontaine",
    role: "Profileuse Experte",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Les outils d'analyse psychologique ont considérablement amélioré notre taux de résolution. Un système remarquable et fiable.",
  },
  {
    name: "Thomas Bernard",
    role: "Lieutenant Detective",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "Du point de vue tactique, la flexibilité de Chatspecteur est exceptionnelle. C'est devenu un outil essentiel pour nos opérations.",
  },
  {
    name: "Lucas Moreau",
    role: "Agent Spécialisé",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "En tant qu'enquêteur, j'apprécie la robustesse et la simplicité de Chatspecteur. Il a rationalisé nos procédures considérablement.",
  },
];

const TestimonialSection = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 w-full mx-auto overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-cyan-400">
          <Eye className="h-6 w-auto text-cyan-400 animate-pulse" />
          <span className="relative">
            Plus de 1000+ enquêteurs utilisent Chatspecteur
            <span className="absolute inset-0 blur-sm bg-cyan-400/20"></span>
          </span>
        </div>

        <h2 className="text-balance text-center text-3xl font-medium md:text-4xl lg:text-6xl text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          Nos enquêteurs témoignent
        </h2>
        <p className="text-slate-400 text-center mx-auto mt-4 max-w-2xl text-lg">
          Rejoignez un réseau mondial d'inspecteurs, profileurs et analystes qui résolvent des affaires avec Chatspecteur.
        </p>
      </div>
      <div className="lg:w-full mx-auto ">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-gradient-to-l after:from-slate-950 after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none bg-slate-900/50 border-cyan-900/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group">
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/60 transition-all duration-300">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-cyan-400/80">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <AlertCircle className="size-5 fill-cyan-500 text-cyan-500" />
                        <AlertCircle className="size-5 fill-cyan-500 text-cyan-500" />
                        <AlertCircle className="size-5 fill-cyan-500 text-cyan-500" />
                        <AlertCircle className="size-5 fill-cyan-500 text-cyan-500" />
                        <AlertCircle className="size-5 fill-cyan-500 text-cyan-500" />
                      </div>
                    </div>
                    <q className="leading-7 text-slate-300">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };