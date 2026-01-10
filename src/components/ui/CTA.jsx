import { ArrowRight, Phone } from 'lucide-react';
import { GLOBALS, navigate } from '../../constants/general';

const CTA = () => {

  return (
    <>
      {/* Call to Action Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Decorative Background Blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 bg-opacity-20 rounded-full filter blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 bg-opacity-20 rounded-full filter blur-3xl transform translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white bg-opacity-10 border border-white border-opacity-20 text-xs font-bold text-gray-300 mb-8 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Start Your AI Journey</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
            Focus on What Matters,<br />
            <span className="text-gray-500">Let Centernex Handle the Calls</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of businesses automating their customer communications with AI-powered voice agents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => navigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-xl"
            >
              <Phone size={18} className="mr-2" />
              Talk To Us
              <ArrowRight size={18} className="ml-3" />
            </button>

            <a href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-white border-opacity-30 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 transition"
            >
              Book a Demo
              <ArrowRight size={18} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </>

  );
};

export default CTA;