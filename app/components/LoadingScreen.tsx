import { motion } from 'motion/react';
export const LoadingScreen: React.FC = () => {
  return (
    <>
      <motion.div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#684c4c',
          position: 'absolute',
          zIndex: '10',
        }}
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0.99, 0.2, 0.08, 0.92],
        }}
      />
    </>
  );
};
