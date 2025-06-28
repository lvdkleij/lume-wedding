import type React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

export const VenueSection: React.FC = () => {
  const ref = useRef(null);

  const isLarge = useIsLargeScreen();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 4], ['10%', '-200%']);
  const y2 = useTransform(scrollYProgress, [0, 3], ['50%', '-50%']);
  const y3 = useTransform(scrollYProgress, [0, 2], ['20%', '-150%']);

  return (
    <section ref={ref} className="atlas-container mt-[24rem]">
      <section className="atlas-grid">
        <h2 className="heading-2 col-start-1 row-start-1 col-span-10 lg:col-span-4 self-end lg:self-center flex flex-col">
          <span>Chateau </span>
          <span>de Lacoste</span>
        </h2>
        <h1
          className="flex caption items-end col-span-1 col-start-12 lg:col-start-6 row-start-1 origin-center rotate-180 mt-[40%]"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            height: 'fit-content',
          }}
        >
          the Zugspitze peak rises dramatically
          <br />
          over Alpine pastures
          <br />
        </h1>
        <div className="atlas-grid grid-cols-12 lg:grid-cols-6 col-start-1 lg:col-start-7 col-span-full lg:col-span-7 row-start-2 lg:row-start-1">
          <motion.picture style={isLarge ? { y: y } : {}} className="relative block col-span-full">
            <source srcSet="/image/lacoste-2.avif" type="image/avif" />
            <motion.img
              src="/image/sample.jpg"
              alt="Sample"
              className={`object-cover block`}
              style={{
                aspectRatio: '1.3',
                height: '100%',
                width: '100%,',
              }}
            />

            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                backgroundColor: '#B0B0B0',
                opacity: 0.1,
              }}
            ></div>
          </motion.picture>
        </div>
        <div className="col-start-2 col-span-5 lg:col-span-3 row-start-4 lg:row-start-2">
          <motion.picture style={isLarge ? { y: y2 } : {}} className="relative block">
            <source srcSet="/image/lacoste-1.avif" type="image/avif" />
            <motion.img
              alt="Sample"
              className={`object-cover block`}
              style={{
                height: '100%',
                width: '100%,',
              }}
            />

            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                backgroundColor: '#B0B0B0',
                opacity: 0.25,
              }}
            ></div>
          </motion.picture>
        </div>
        <div className="col-start-7 lg:col-start-8 col-span-5 lg:col-span-3 lg:mt-[6rem] row-start-3 lg:row-start-2">
          <h2 className="heading-3">The venue</h2>
          <p className="text mt-[1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores exercitationem aliquid
            eligendi eius iure omnis sint officia facilis. Sit nam ipsam tenetur adipisci praesentium beatae amet
            accusantium dolorum voluptas.
          </p>
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12ab590d5edb6237:0x9247997e9a5c89b9?sa=X&ved=1t:8290&ictx=111"
            className="link-detail mt-[2rem] inline-block"
          >
            To the venue
          </a>
        </div>
        <div className="col-start-3 lg:col-start-2 col-span-5 lg:col-span-3 lg:mt-[12rem] row-start-6 lg:row-start-3">
          <h2 className="heading-3">The lodging</h2>
          <p className="text mt-[1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores exercitationem aliquid
            eligendi eius iure omnis sint officia facilis. Sit nam ipsam tenetur adipisci praesentium beatae amet
            accusantium dolorum voluptas.
          </p>
        </div>
        <div className="col-start-5 lg:col-start-8 col-span-8 lg:col-span-5 row-start-5 lg:row-start-4">
          <motion.picture style={isLarge ? { y: y3 } : {}} className="relative block">
            <source srcSet="/image/lacoste-3.avif" type="image/avif" />
            <motion.img
              alt="Sample"
              className={`object-cover block`}
              style={{
                height: '100%',
                width: '100%,',
              }}
            />
            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                backgroundColor: '#B0B0B0',
                opacity: 0.25,
              }}
            ></div>
          </motion.picture>
        </div>
      </section>
    </section>
  );
};

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => setIsLarge(mediaQuery.matches);

    handleChange(); // Set initial value
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isLarge;
}
