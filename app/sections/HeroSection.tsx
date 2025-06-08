import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const slowY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);

  return (
    <section className="u-container">
      <section className="mt-[var(--space-3xl)]">
        <div className="col-span-full flex flex-col justify-center items-center relative">
          {/* Animated Headline */}
          <h2 className="flex flex-col items-center" style={{ fontSize: 'var(--step-5)', lineHeight: 1 }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 14,
                mass: 0.5,
                delay: 0,
              }}
            >
              We're getting
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 14,
                mass: 0.5,
                delay: 0.2,
              }}
            >
              married
            </motion.span>
          </h2>

          {/* Names */}
          <h3 className="flex mt-[var(--space-3xl)] mb-[var(--space-3xl)]" style={{ fontSize: 'var(--step-4)' }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 14,
                mass: 0.5,
                delay: 0.3,
              }}
            >
              <span className="font-sans">Melisa</span>
              <span className="px-[var(--space-s)]">&</span>
              <span className="font-sans">Lucas</span>
            </motion.span>
          </h3>

          {/* Floating Background Text */}
          <motion.div
            style={{ y: slowY }}
            className="absolute left-1/2 -translate-x-1/2 top-[20%] text-[#F7C0CB] flex flex-col items-center -z-10"
          >
            <h2 className="text-center" style={{ fontSize: 'var(--step-5)', lineHeight: 0.9 }}>
              <span className="text-(length:--step-7)">C</span>
              elebrate <br /> with us
            </h2>
          </motion.div>

          {/* Decorative Arrow */}
          <img
            src="/svg/red-arrow.svg"
            alt="red-arrow"
            className="mt-[var(--space-2xl-3xl)] mb-[var(--space-2xl-3xl)] h-[var(--space-2xl)]"
          />
        </div>
      </section>
    </section>
  );
};
