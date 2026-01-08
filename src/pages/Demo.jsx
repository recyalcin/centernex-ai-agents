import CTA from '../components/ui/CTA';
import PageHero from '../components/ui/PageHero';



const Demo = () => {

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <PageHero
        badgeText="Live Demo"
        badgeColorClass="bg-purple-50 border-purple-100 text-purple-700"
        dotColorClass="bg-purple-500"
        titleNormal="Experience Our"
        titleHighlight="Voice Agents Live"
        isGradientText={true}
        gradientClass="from-purple-600 to-pink-600"
        description="Choose an industry and start a conversation with our AI voice agent widget to see how naturally they handle customer interactions."
        primaryBtnText="Try Live Demo"
        primaryBtnAction={() => console.log('Demo started')}
        isItalic={true}
        bgBlurClasses="bg-pink-400 bg-opacity-30"
      />

      {/* Demo Iframe Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-white">
            <iframe
              src="showcase.html"
              className="w-full border-none"
              style={{ width: "100%", height: "650px" }}
              title="Industry Landing Page Demo"
              allow="microphone;"
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6 font-medium uppercase tracking-widest">
            Click the widget icon in the bottom right corner of the preview to start
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTA />

    </div>
  );
};

export default Demo;