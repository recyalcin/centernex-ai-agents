import { Check } from 'lucide-react';
import GLOBALS, { navigate } from '../constants/general';
import CTA from '../components/ui/CTA';
import PageHero from '../components/ui/PageHero';



const Pricing = () => {
  // Global link tanımlı değilse hata almamak için yedek:
  const bookLink = GLOBALS.CALENDAR;

  return (
    <div className="bg-white">

      {/* --- HERO SECTION --- */}
      <PageHero
        badgeText="Pricing Plans"
        badgeColorClass="bg-red-100 border-red-200 text-red-800"
        dotColorClass="bg-red-600"
        titleNormal="Flexible Plans for"
        titleHighlight="Scaleable AI Growth"
        highlightColorClass="text-red-600"
        description="Choose the perfect AI voice agent plan for your business. From startups to enterprises, Centernex delivers high-performance voice solutions that grow with you."
        primaryBtnText="Try Live Demo"
        primaryBtnAction={() => navigate('demo')}
        secondaryBtnText="Book a Demo"
        secondaryBtnAction={() => window.open(bookLink, '_blank')}
        bgBlurClasses="bg-red-300 bg-opacity-30"
        isItalic={true}
      />

      {/* --- PRICING SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-gray-600 text-lg">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gold Plan */}
            <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-lg flex flex-col hover:shadow-xl transition">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Gold Plan</h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">For Emerging Businesses</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-gray-900">$497</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-purple-600 font-bold text-sm mt-2">Free 14-Day Trial</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {["Virtual Receptionist", "AI Website Chat", "Calendar Automation", "Email & SMS Marketing", "CRM Access", "Mobile App Access"].map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="w-full py-4 text-center bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition">SIGN UP</a>
            </div>

            {/* Platinum Plan */}
            <div className="border-4 border-purple-500 rounded-3xl p-8 bg-gray-900 text-white shadow-2xl flex flex-col relative transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Platinum Plan</h3>
                <p className="text-gray-400 text-sm mt-2">For Established Businesses</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-white">$797</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-purple-400 font-bold text-sm mt-2">Free 14-Day Trial</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {["Everything in Gold", "Ad Manager (1-Click)", "Lead Generation Tools", "Ad Template Library", "Training Provided", "Premium Support"].map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-300">
                    <Check className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="w-full py-4 text-center bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition">SIGN UP</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CTA />

    </div>
  );
};

export default Pricing;