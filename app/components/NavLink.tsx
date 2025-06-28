export const NavLink: React.FC<{ text: string }> = ({ text }) => {
  return (
    <a className="cursor-pointer uppercase eyebrow">
      {text}
      {/* <span className="absolute left-0 -bottom-0.3 h-0.5 w-full bg-current transform scale-x-100 origin-right transition-transform duration-400 ease-in-out group-hover:scale-x-0"></span> */}

      {/* <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-400 ease-in-out delay-400 group-hover:scale-x-100"></span> */}
    </a>
  );
};
