"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden" ref={containerRef}>
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <motion.div 
          style={{ y: heroY }}
          className="text-center px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif uppercase tracking-tighter leading-none"
          >
            Ezequiel <br /> Torres
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-lg md:text-xl uppercase tracking-widest text-neutral-500 font-sans"
          >
            Contemporary Fine Art
          </motion.p>
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section className="relative z-10 bg-background py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Art Piece 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image src="/art1.png" alt="Artwork 1" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif">Abstract Warmth</h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-sans max-w-md">
                Fluid shapes and vibrant warm colors interact to create a dynamic visual experience that challenges the boundary between form and emotion.
              </p>
            </motion.div>
          </div>

          {/* Art Piece 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image src="/art2.png" alt="Artwork 2" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 space-y-6 md:text-right flex flex-col md:items-end"
            >
              <h2 className="text-4xl md:text-5xl font-serif">Minimalist Light</h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-sans max-w-md">
                A study on space and illumination, this piece uses a pure white palette to explore how shadows define structure.
              </p>
            </motion.div>
          </div>

          {/* Art Piece 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image src="/art3.png" alt="Artwork 3" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif">Contemporary Portrait</h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-sans max-w-md">
                Expressive brushstrokes meet vibrant contemporary backgrounds to redefine the modern subject.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-12 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif">About The Artist</h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-neutral-300">
            Ezequiel Torres pushes the boundaries of contemporary art through a multidisciplinary approach. His work is characterized by an emotional resonance that invites viewers to question their perception of reality.
          </p>
          <button className="mt-8 px-8 py-4 border border-white rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300">
            Get in touch
          </button>
        </motion.div>
      </section>

    </main>
  );
}
