import { useMemo, useState } from 'react';
import { Check, X, Info } from 'lucide-react';
import GLOBALS, { navigate } from '../constants/general';
import CTA from '../components/ui/CTA';
import PageHero from '../components/ui/PageHero';

const Pricing = () => {
  const bookLink = GLOBALS.CALENDAR;

  const [selectedFeature, setSelectedFeature] = useState(null);

  const goldFeatures = useMemo(
    () => [
      {
        title: 'Virtual Receptionist',
        description:
          'An AI-powered receptionist that answers incoming calls, greets customers professionally, handles common questions, and routes conversations based on your business rules.'
      },
      {
        title: 'AI Website Chat',
        description:
          'A smart website chat assistant that engages visitors in real time, answers questions, captures leads, and helps move prospects toward booking or purchase.'
      },
      {
        title: 'Calendar Automation',
        description:
          'Automates scheduling workflows by checking availability, booking appointments, sending confirmations, and reducing manual back-and-forth.'
      },
      {
        title: 'Email & SMS Marketing',
        description:
          'Launch and automate follow-up campaigns through email and SMS so you can nurture leads, re-engage contacts, and improve conversions.'
      },
      {
        title: 'Reputation Management',
        description:
          'Helps you collect reviews, monitor customer feedback, and strengthen your online reputation across key platforms.'
      },
      {
        title: 'CRM Access',
        description:
          'Centralized access to your customer relationship tools, allowing you to manage leads, contacts, conversations, and opportunities in one place.'
      },
      {
        title: 'Mobile App Access',
        description:
          'Use your CRM and communication tools on the go from mobile devices, so your team stays connected anywhere.'
      }
    ],
    []
  );

  const platinumFeatures = useMemo(
    () => [
      {
        title: 'Everything in Gold',
        description:
          'Includes all features from the Gold Plan, giving you the full core CRM, communication, and automation foundation.'
      },
      {
        title: 'Ad Manager (1-Click)',
        description:
          'Simplifies campaign launch and management so you can deploy ads faster with less setup and fewer manual steps.'
      },
      {
        title: 'Lead Generation Tools',
        description:
          'Advanced tools for capturing, qualifying, and organizing new leads from multiple channels into your sales pipeline.'
      },
      {
        title: 'Ad Template Library',
        description:
          'Pre-built ad templates designed to help you launch campaigns quickly while maintaining professional messaging and structure.'
      },
      {
        title: 'Training Provided',
        description:
          'Onboarding and guided training to help your team understand the platform, workflows, and best practices for getting results.'
      },
      {
        title: 'Premium Support',
        description:
          'Priority support access for faster response times, deeper assistance, and a more hands-on customer experience.'
      }
    ],
    []
  );

  const FeatureItem = ({ feature, dark = false }) => {
    return (
      <button
        type="button"
        onClick={() => setSelectedFeature(feature)}
        className={`w-full text-left flex items-center justify-between gap-3 rounded-2xl px-4 py-3 border transition-all duration-200 group
          ${
            dark
              ? 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
              : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200'
          }`}
      >
        <div className="flex items-center space-x-3 min-w-0">
          <Check className={`h-5 w-5 shrink-0 ${dark ? 'text-purple-400' : 'text-green-500'}`} />
          <span className={`text-sm font-medium ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
            {feature.title}
          </span>
        </div>

        <div
          className={`shrink-0 rounded-full p-1.5 transition-colors ${
            dark
              ? 'bg-white/10 text-gray-300 group-hover:bg-white/15'
              : 'bg-white text-gray-500 group-hover:bg-gray-100'
          }`}
        >
          <Info className="h-4 w-4" />
        </div>
      </button>
    );
  };

  return (
    <div className="bg-white">
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

              <div className="space-y-3 mb-10 flex-grow">
                {goldFeatures.map((feature, i) => (
                  <FeatureItem key={i} feature={feature} />
                ))}
              </div>

              <a
                href="#contact"
                className="w-full py-4 text-center bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition"
              >
                SIGN UP
              </a>
            </div>

            {/* Platinum Plan */}
            <div className="border-4 border-purple-500 rounded-3xl p-8 bg-gray-900 text-white shadow-2xl flex flex-col relative transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Platinum Plan</h3>
                <p className="text-gray-400 text-sm mt-2">For Established Businesses</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-white">$797</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-purple-400 font-bold text-sm mt-2">Free 14-Day Trial</p>
              </div>

              <div className="space-y-3 mb-10 flex-grow">
                {platinumFeatures.map((feature, i) => (
                  <FeatureItem key={i} feature={feature} dark />
                ))}
              </div>

              <a
                href="#contact"
                className="w-full py-4 text-center bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Feature Popup */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedFeature(null)}
        >
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

          <div
            className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-gray-100 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  <Info className="h-3.5 w-3.5" />
                  Feature Details
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-gray-600 leading-relaxed text-base">
              {selectedFeature.description}
            </p>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;