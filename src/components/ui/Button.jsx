const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick,
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200",
    secondary: "bg-green-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-100",
    outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    dark: "bg-gray-900 text-white hover:bg-slate-800 shadow-xl",
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;