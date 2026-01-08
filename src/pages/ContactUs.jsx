import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import GLOBALS from '../constants/general';
import PageHero from '../components/ui/PageHero';



const ContactUs = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://api.centernex.com/js/form_embed.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     if (document.body.contains(script)) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <PageHero
        badgeText="Contact Us"
        badgeColorClass="bg-green-50 border-green-200 text-green-700"
        dotColorClass="bg-green-500"
        titleNormal="Let's Start a"
        titleHighlight="Conversation"
        highlightColorClass="text-green-600"
        description="Ready to transform your business communication? Get in touch with our team today."
        primaryBtnText="Talk To Us"
        primaryBtnAction={() => console.log('Contact form')}
        secondaryBtnText="Schedule Demo"
        secondaryBtnAction={() => window.location.href = GLOBALS.CALENDAR}
        bgBlurClasses="bg-green-400 bg-opacity-40"
        isItalic={true}
      />

      {/* Info Cards Section */}
      <section className="py-12 border-t border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative flex items-start space-x-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-sm text-gray-500 mb-2">For general inquiries</p>
                  <p className="font-semibold text-gray-900">contact@centernex.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative flex items-start space-x-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-sm text-gray-500 mb-2">Mon-Fri, 9am-6pm PT</p>
                  <p className="font-semibold text-gray-900">+1 936-241-0390</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative flex items-start space-x-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-sm text-gray-500 mb-2">3205 Talon Dr. Suite 300</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">Richardson, TX 75082, US</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & FAQ Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight uppercase italic">Let's Connect</h3>
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-white">
                <iframe
                  src="https://api.centernex.com/widget/form/oRlVMxpdxMamVStFmSUz"
                  className="w-full"
                  style={{ height: '750px', border: 'none' }}
                  id="inline-oRlVMxpdxMamVStFmSUz"
                  title="A2P Form"
                  scrolling="yes"
                ></iframe>
              </div>
            </div>

            {/* Why Contact Us Column */}
            <div className="lg:pl-8">
              <div className="rounded-3xl bg-gray-50 p-8 md:p-12 h-full border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Why Contact Us?</h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expert Support</h4>
                      <p className="text-gray-600">Talk directly with our voice AI specialists.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Global Team</h4>
                      <p className="text-gray-600">Support available across multiple time zones.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Prefer to schedule a call?</h4>
                  <p className="text-gray-600 mb-6">Book a 30-minute call with our team to discuss your specific needs.</p>
                  <a
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-all shadow-sm group"
                    href={GLOBALS.CALENDAR}
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;