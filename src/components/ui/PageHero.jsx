import Button from './Button';



const PageHero = ({ 
  badgeText, 
  badgeColorClass = "bg-indigo-50 border-indigo-100 text-indigo-600",
  dotColorClass = "bg-indigo-500",
  titleNormal, 
  titleHighlight, 
  highlightColorClass = "text-indigo-600",
  description,
  primaryBtnText,
  primaryBtnAction,
  secondaryBtnText,
  secondaryBtnAction,
  isItalic = false,
  isGradientText = false,
  gradientClass = "from-purple-600 to-pink-600",
  bgBlurClasses = "bg-purple-100 bg-opacity-50",
  Icon
}) => {
  return (
    <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-96 ${bgBlurClasses} rounded-full filter blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="mb-8">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${badgeColorClass} text-sm`}>
            {Icon && <Icon className="h-4 w-4" />}
            <span className={`h-2 w-2 rounded-full animate-pulse ${dotColorClass}`}></span>
            <span className="font-bold uppercase tracking-widest text-xs">{badgeText}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight uppercase ${isItalic ? 'italic' : ''} text-gray-900`}>
          {titleNormal} <br />
          {isGradientText ? (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>
              {titleHighlight}
            </span>
          ) : (
            <span className={highlightColorClass}>{titleHighlight}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {primaryBtnText && (
            <Button onClick={primaryBtnAction} variant="dark" className="w-full sm:w-auto px-10">
              {primaryBtnText}
              <span className="inline-block ml-3 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            </Button>
          )}
          {secondaryBtnText && (
            <Button onClick={secondaryBtnAction} variant="outline" className="w-full sm:w-auto px-10">
              {secondaryBtnText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;