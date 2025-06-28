import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const slowY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);

  return (
    <section className="atlas-container h-screen">
      <section className="atlas-grid h-full">
        <div className="col-start-1 sm:col-start-10 md:col-start-10 col-span-full self-center">
          <h1 className="flex heading-1 flex-col">
            <span>Melisa</span>
            <span>Lucas</span>
          </h1>
        </div>
      </section>
    </section>
  );
};
