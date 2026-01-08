const SectionHeading = ({ badge, title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-indigo-600 bg-indigo-50 rounded-full uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase italic">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;