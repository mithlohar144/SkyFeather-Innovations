import { motion } from 'framer-motion';

const Hero = () => (
  <section className="bg-[#0f2b1a] overflow-hidden">
    {/* Text area */}
    <div className="relative container mx-auto px-6 pt-28 pb-10">

      {/* Circular rotating badge — top right */}
      <div className="hidden md:flex absolute top-24 right-6 shrink-0 w-28 h-28 items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite]">
          <path id="heroBadgePath" fill="none" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          <text fill="#a3e635" fontSize="8.5" letterSpacing="2.8">
            <textPath href="#heroBadgePath">Best Drone Agriculture Platform ★ </textPath>
          </text>
        </svg>
        <div className="w-16 h-16 rounded-full border border-white/25 flex items-center justify-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Top label */}


      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-white font-light leading-[1.1] max-w-2xl "
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
      >
        Precision Farming
        <span className="flex gap-2 items-center mt-4">
          Using Drones:{' '}
          <span className="relative inline-block" >
            <span className="relative z-10 text-4xl flex text-center px-4 py-3 font-light text-[#a3e635]">Technology</span>
            <span className="absolute inset-0 bg-[#a3e635]/15 rounded-3xl z-0" />
          </span>
        </span>
      </motion.h1>


      {/* CTA Button */}
      
    </div>

    {/* Full-width hero image */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35 }}
      className="w-full px-4 pb-4 md:px-6 md:pb-6"
    >
      <img
        src="https://images.unsplash.com/photo-1713952160156-bb59cac789a9?q=70&w=1200&auto=format&fit=crop&fm=webp"
        alt="Agricultural drone spraying over green tea fields"
        className="w-full h-[300px] md:h-[420px] object-cover rounded-2xl"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  </section>
);

export default Hero;
