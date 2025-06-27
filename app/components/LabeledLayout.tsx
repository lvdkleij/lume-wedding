type LabeledLayoutProps = {
  eyebrow: React.ReactNode;
  mainText: React.ReactNode;
  className?: string;
};

export const LabeledLayout: React.FC<LabeledLayoutProps> = ({ eyebrow, mainText, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="uppercase eyebrow">{eyebrow}</div>
      <div className="bg-[#c3c2c0] h-1 w-1/12 mt-4"></div>
      <div className="mt-9">{mainText}</div>
    </div>
  );
};
