import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        <Header />
        <VerticalCaption />

        <ImageBlock
          src="/image/sample.jpg"
          avif="/image/lacoste-2.avif"
          motionStyle={isLarge ? { y } : {}}
          className="relative block col-span-full col-start-1 lg:col-start-7 lg:col-span-7 row-start-2 lg:row-start-1"
          overlayOpacity={0.1}
        />

        <ImageBlock
          src="/image/sample.jpg"
          avif="/image/lacoste-1.avif"
          motionStyle={isLarge ? { y: y2 } : {}}
          className="relative block col-span-6 col-start-1 sm:col-start-2 sm:col-span-5 lg:col-start-2 lg:col-span-3 row-start-4 lg:row-start-2 max-sm:-ml-4"
          overlayOpacity={0.25}
        />

        <TextBlock
          title="The venue"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit..."
          link="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12ab590d5edb6237:0x9247997e9a5c89b9?sa=X&ved=1t:8290&ictx=111"
          className="atlas-grid grid-cols-12 sm:grid-cols-5 lg:grid-cols-5 col-span-full col-start-1 sm:col-start-7 sm:col-span-5 lg:col-start-8 lg:col-span-5 row-start-3 lg:row-start-2 lg:mt-[6rem]"
        />

        <TextBlock
          title="The lodging"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit..."
          className="atlas-grid grid-cols-12 sm:grid-cols-5 lg:grid-cols-5 col-span-full col-start-1 sm:col-start-3 sm:col-span-5 lg:col-start-2 lg:col-span-5 row-start-6 lg:row-start-3 lg:mt-[12rem]"
        />

        <ImageBlock
          src="/image/sample.jpg"
          avif="/image/lacoste-3.avif"
          motionStyle={isLarge ? { y: y3 } : {}}
          className="relative block col-span-9 sm:col-span-8 lg:col-span-5 col-start-4 sm:col-start-5 lg:col-start-8 row-start-5 lg:row-start-4"
          overlayOpacity={0.25}
        />
      </section>
    </section>
  );
};

const Header = () => (
  <h2 className="heading-2 flex flex-col self-end lg:self-center col-span-10 col-start-1 lg:col-span-4 row-start-1">
    <span>Chateau</span>
    <span>de Lacoste</span>
  </h2>
);

const VerticalCaption = () => (
  <h1
    className="caption flex items-end rotate-180 mt-[40%] col-span-1 col-start-12 lg:col-start-6 row-start-1 origin-center"
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
);

interface ImageBlockProps {
  src?: string;
  avif: string;
  motionStyle: any;
  className: string;
  overlayOpacity: number;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src = '', avif, motionStyle, className, overlayOpacity }) => (
  <motion.picture style={motionStyle} className={className}>
    <source srcSet={avif} type="image/avif" />
    {src && (
      <motion.img
        src={src}
        alt="Sample"
        className="object-cover block"
        style={{ aspectRatio: '1.3', height: '100%', width: '100%' }}
      />
    )}
    <div
      className="absolute left-0 top-0 h-full w-full"
      style={{ backgroundColor: '#B0B0B0', opacity: overlayOpacity }}
    />
  </motion.picture>
);

interface TextBlockProps {
  title: string;
  text: string;
  link?: string;
  className: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, text, link, className }) => (
  <div className={className}>
    <h2 className="heading-3 col-start-1 row-start-1 -col-end-2">{title}</h2>
    <p className="text col-start-2 row-start-2 -col-end-1">{text}</p>
    {link && (
      <a href={link} className="link-detail mt-[2rem] inline-block row-start-3 col-start-2 -col-end-1">
        To the venue
      </a>
    )}
  </div>
);

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => setIsLarge(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isLarge;
}
