import type React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const VenueSection: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Make the right image move up faster
  const y = useTransform(scrollYProgress, [0, 3], ['10%', '-40%']);

  return (
    <section ref={ref} className="u-container mt-[24rem] bg-[#F3F2F1]">
      <section className="u-grid">
        <h2 className="heading-2 col-start-1 row-start-1 col-span-4 self-center">
          <span>Chateau </span>
          <span>de Lacoste</span>
        </h2>
        <div className="u-grid grid-cols-8 col-start-5 col-span-8 row-start-1">
          <h1
            className="flex caption items-end col-span-1 col-start-1 origin-center rotate-180 mt-[40%]"
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
          <div className="col-start-2 col-span-7">
            <motion.picture style={{ y: y }} className="relative block">
              <source srcSet="/image/lacoste-2.avif" type="image/avif" />
              <img
                src="/image/sample.jpg"
                alt="Sample"
                className="object-cover block"
                style={{
                  aspectRatio: '1.3',
                  height: '100%',
                  width: '100%,',
                }}
              />
            </motion.picture>
          </div>
        </div>
        {/* <div className="relative col-span-full row-start-2 h-[45rem]">
          <picture className="absolute w-1/2 left-0 z-10">
            <source srcSet="/image/lacoste-1.avif" type="image/avif" />
            <img src="/image/sample.jpg" alt="Sample" />
          </picture>
          <motion.picture style={{ y: y }} className="absolute w-7/12 right-0 top-[0rem]">
            <source srcSet="/image/lacoste-2.avif" type="image/avif" />
            <img src="/image/sample.jpg" alt="Sample" />
          </motion.picture>
        </div> */}
        {/* <LabeledLayout
          className="col-start-1 sm:col-start-3 md:col-start-3 lg:col-start-3 col-span-full sm:col-span-10 md:col-span-8 lg:col-span-6 row-start-3"
          eyebrow="the venue"
          mainText={
            <h2 className="heading-2 flex flex-col ">
              <span>Lieu dit,</span>
              <span>24250 Castelnaud-la-Chapelle,</span>
              <span>France</span>
            </h2>
          }
        ></LabeledLayout>
        <LabeledLayout
          className="col-start-1 sm:col-start-10 md:col-start-10 lg:col-start-10 col-span-full sm:col-span-10 md:col-span-8 lg:col-span-6 row-start-4"
          eyebrow="the travel"
          mainText={
            <h2 className="heading-2 flex flex-col ">
              <span>Friday</span>
              <span>June 12-14</span>
              <span>2026</span>
            </h2>
          }
        ></LabeledLayout>
        <LabeledLayout
          eyebrow="the lodging"
          mainText={
            <p className="body">
              Dear Amandine, Join us in celebrating as Melisa Duman and Lucas van der Kleij say “I do” at the beautiful
              Château de Lacoste, Dordogne, France.
            </p>
          }
          className="col-start-1 sm:col-start-17 md:col-start-16 lg:col-start-16 col-span-full sm:col-span-8 md:col-span-6 row-start-5"
        ></LabeledLayout>
        <LabeledLayout
          eyebrow="the activities"
          mainText={
            <p className="body">
              Dear Amandine, Join us in celebrating as Melisa Duman and Lucas van der Kleij say “I do” at the beautiful
              Château de Lacoste, Dordogne, France.
            </p>
          }
          className="col-start-1 sm:col-start-10 md:col-start-10 lg:col-start-10 col-span-full sm:col-span-10 md:col-span-8 lg:col-span-6 row-start-6"
        ></LabeledLayout> */}
      </section>
    </section>
  );
};
