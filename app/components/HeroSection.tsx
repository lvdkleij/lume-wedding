import logo from './lactose-1.webp';

export const HeroSection: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#423b1099',
            mixBlendMode: 'multiply',
          }}
        ></div>
        <img
          src={logo}
          style={{
            height: '100%',
            width: '100%',
          }}
        ></img>
      </div>
    </>
  );
};
