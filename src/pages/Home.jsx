import React from 'react';
import {
  ChevronRight, Play, House, Stethoscope, Briefcase,
  Scissors, ShoppingCart, DollarSign, UtensilsCrossed,
  Car, GraduationCap, CheckCircle2, TrendingUp, Clock,
  Mic, ChevronRightCircle,
  Users, Share, Cpu, CalendarDays, Globe, Target,
  GitBranch, MessageCircle, Smartphone, PhoneCall,
  Monitor, Voicemail, UserCheck, Bot, Instagram, Sparkles
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import { GLOBALS, navigate } from '../constants/general';
import img1 from '../assets/inner-sec-img-v2.webp';
import img2 from '../assets/chat.webp';
import img3 from '../assets/inner-sec-img3-v2.webp';
import CTA from '../components/ui/CTA';
import PageHero from '../components/ui/PageHero';



const Home = () => {

  const coreFeatures = [
    { title: "Contact Management", subtitle: "Organize Your Contacts", icon: Users, color: "bg-blue-500" },
    { title: "Social Media Scheduler", subtitle: "Social Media Automation", icon: Share, color: "bg-indigo-500" },
    { title: "Workflow Automation", subtitle: "Time Saving Automations", icon: Cpu, color: "bg-purple-500" },
    { title: "Calendars", subtitle: "Build Unlimited Calendars", icon: CalendarDays, color: "bg-green-500" },
    { title: "Communities", subtitle: "Grow Your Membership", icon: Globe, color: "bg-pink-500" },
    { title: "Lead Sources", subtitle: "Integrate Lead Generation", icon: Target, color: "bg-red-500" },
    { title: "Pipelines", subtitle: "Create Unlimited Pipelines", icon: GitBranch, color: "bg-yellow-500" },
    { title: "Inbound & Outbound SMS", subtitle: "Missed Call Text Back", icon: MessageCircle, color: "bg-blue-400" },
    { title: "Mobile App", subtitle: "iOS & Android Mobile App", icon: Smartphone, color: "bg-gray-800" },
    { title: "Inbound & Outbound Calling", subtitle: "Personalized Engagement", icon: PhoneCall, color: "bg-indigo-600" },
    { title: "Funnel & Website Builder", subtitle: "Build For Success", icon: Monitor, color: "bg-indigo-500" },
    { title: "Ringless Voicemail Drops", subtitle: "Nurture Your Leads", icon: Voicemail, color: "bg-purple-500" },
    { title: "Affiliate Program Manager", subtitle: "Affiliate Program Management", icon: UserCheck, color: "bg-green-600" },
    { title: "AI Sales Bot", subtitle: "Conversational Sales Bot", icon: Bot, color: "bg-indigo-700" },
    { title: "FB & Instagram Messaging", subtitle: "Automated Social Messaging", icon: Instagram, color: "bg-pink-600" },
    { title: "AI Content Generator", subtitle: "Create Engaging Content", icon: Sparkles, color: "bg-yellow-600" }
  ];

  return (
    <div>

      {/* Hero Section */}
      <PageHero
        badgeText="Next Gen CRM Agents"
        titleNormal="Humanized"
        titleHighlight="AI Agents"
        description="Seamlessly automate your customer interactions with our advanced AI-driven CRM solutions."
        primaryBtnText="Try Live Demo"
        primaryBtnAction={() => navigate('demo')}
        secondaryBtnText="View ROI Calculator"
        secondaryBtnAction={() => navigate('roi')}
        highlightColorClass="text-yellow-600"
        bgBlurClasses="bg-blue-800 bg-opacity-40"
        isItalic={true}
        Icon={Sparkles}
      />

      {/* Section: DO YOU WANT MORE CUSTOMERS? */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-indigo-100 rounded-full blur-[100px] opacity-20"></div>
              <img
                loading="lazy"
                decoding="async"
                width="1000"
                height="832"
                src={img1}
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl border border-gray-100"
                alt="Customer acquisition solutions"
                srcSet={`${img1} 1000w, ${img1} 300w, ${img1} 768w`}
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <Badge className="bg-indigo-100 text-indigo-700 mb-6">Drive Growth</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 uppercase tracking-tight">
                  Do you want more customers?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  CRM Pros helps businesses acquire new customers, foster loyalty, and drive massive growth through proven, AI-powered tactics.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Lead Generation & Lead Nurturing",
                  "Targeted Marketing Campaigns",
                  "Conversion Optimization",
                  "Customer Engagement",
                  "Data-Driven Insights"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-700 group">
                    <div className="p-1.5 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors shadow-sm">
                      <ChevronRightCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => navigate('contact')} variant="primary" className="px-10 shadow-indigo-100">Get Started</Button>
                <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="outline" className="px-10">Book a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: DO YOU WANT TO KEEP YOUR CLIENTS LONGER? */}
      <section className="py-32 bg-gray-50 relative overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-700 mb-6">Retention Engine</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 uppercase tracking-tight">
                  Do you want to keep your clients longer?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  CRM Pros empowers businesses to build strong relationships, enhance customer loyalty, and develop long-term business success. The platform’s robust CRM capabilities allow users to create personalized communication messages, customer satisfaction monitoring, proactive support and engagement via a communication intelligence network.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "WebChat Support Widget",
                  "Email Automation Sequences",
                  "SMS Call-Text Back Feature",
                  "Customer Login Portal",
                  "Market Research/Surveys",
                  "Account Consolidation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-700 group">
                    <div className="p-1.5 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors shadow-sm shrink-0">
                      <ChevronRightCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => navigate('contact')} variant="dark" className="px-10">Get Started</Button>
                <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="outline" className="px-10">Book a Demo</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-green-100 rounded-full blur-[100px] opacity-20"></div>
              <img
                loading="lazy"
                decoding="async"
                width="1000"
                height="832"
                src={img2}
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl border border-gray-100"
                alt="Customer support chat interface"
                srcSet={`${img2} 1000w, ${img2} 300w, ${img2} 768w`}
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: DO YOU WANT TO SCALE YOUR BUSINESS? */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-indigo-100 rounded-full blur-[100px] opacity-20"></div>
              <img
                loading="lazy"
                decoding="async"
                width="1000"
                height="832"
                src={img3}
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl border border-gray-100"
                alt="Business scaling analytics"
                srcSet={`${img3} 1000w, ${img3} 300w, ${img3} 768w`}
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <Badge className="bg-pink-100 text-pink-700 mb-6">Scale Intelligence</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 uppercase tracking-tight">
                  Do you want to scale your business?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  CRM Pros was intentionally designed to be flexible and adaptable. By utilizing the platform’s data-driven insights, CRM Pros empowers users to make important business decisions when it comes to reaching new markets, enhancing customer retention, and ultimately determining the company’s operational maturity roadmap toward scalability and long-term success.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "New Solution Offering Capability",
                  "Business Intelligence Pipeline Management",
                  "Simple Invoice and Payment Processing",
                  "Calendar/Appointment Booking Integration System"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-700 group">
                    <div className="p-1.5 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors shadow-sm">
                      <ChevronRightCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => navigate('contact')} variant="primary" className="px-10 shadow-pink-100">Get Started</Button>
                <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="outline" className="px-10">Book a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Made Simple Feature Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Business Growth Made Simple"
            subtitle="Capture, Convert, & Close — All From One Powerful Platform"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-trangray-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                  <div className={`h-16 w-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {feature.title.split('<br>').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && feature.title.includes('<br>') && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{feature.subtitle}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigate('contact')} variant="primary" className="px-12 py-4 text-lg">
              Get Started
            </Button>
            <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="outline" className="px-12 py-4 text-lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Section: SMART WEBSITES */} 
      <section className="py-32 bg-white relative overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-yellow-100 text-yellow-700 mb-6">Smart Websites</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 uppercase tracking-tight">
                  Need a website that actually brings in customers?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Most websites only look good. Smart Websites do more — they help you capture leads, answer questions, guide visitors, and turn traffic into real business. With Centernex, your website becomes more than an online presence. It becomes a 24/7 growth engine.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Modern, high-converting website design",
                  "Built to capture and qualify leads",
                  "AI-powered chat and voice interactions",
                  "Instant appointment and inquiry handling",
                  "Connected directly to your CRM and workflows"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-700 group">
                    <div className="p-1.5 bg-yellow-50 rounded-full group-hover:bg-yellow-100 transition-colors shadow-sm">
                      <ChevronRightCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Add a Voice Agent. Turn your website into a live sales assistant.
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Give visitors a faster, more human way to engage. Your AI Voice Agent can answer questions, qualify prospects, schedule appointments, and help customers take the next step — automatically, day or night.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => navigate('contact')} variant="primary" className="px-10 shadow-yellow-100">
                  Build My Smart Website
                </Button>
                <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="outline" className="px-10">
                  Book a Demo
                </Button>
              </div>
            </div>

<div className="relative">
  <div className="absolute -inset-10 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>

  <div className="relative bg-[#0F172A] rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B]"></div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="font-bold text-xl">Smart Website + Voice Agent</div>
          <div className="text-yellow-300 text-sm mt-1">
            Your website that speaks, converts, and books
          </div>
        </div>
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-yellow-500 to-orange-400 flex items-center justify-center shadow-lg">
          <Globe className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
          <div className="text-sm text-gray-300 mb-2">Visitor says</div>
          <div className="font-medium leading-relaxed">
            “Hi, I’m looking for a website for my business and I also need help
            handling incoming leads.”
          </div>
        </div>

        <div className="bg-yellow-500/12 border border-yellow-400/30 rounded-2xl p-4">
          <div className="text-sm text-yellow-300 mb-2">Centernex AI responds</div>
          <div className="font-medium leading-relaxed">
            “We can build you a Smart Website that not only looks professional,
            but also answers customer questions, captures leads, and books
            appointments with a built-in AI Voice Agent.”
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
          <div className="text-yellow-300 text-xs uppercase font-bold mb-2">Website</div>
          <div className="font-semibold">Built to Convert</div>
          <div className="text-sm mt-1">
            Modern, mobile-ready, lead-focused pages
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
          <div className="text-yellow-300 text-xs uppercase font-bold mb-2">Voice AI</div>
          <div className="font-semibold">Built to Respond</div>
          <div className="text-sm mt-1">
            Answers, qualifies, and books 24/7
          </div>
        </div>
      </div>

      <div className="absolute -right-6 bottom-8 bg-yellow-500 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5" />
        <div className="text-left">
          <div className="text-sm font-bold">More Than a Website</div>
          <div className="text-[10px] text-yellow-100 uppercase font-black">
            It Works For You
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Features Showcase - Voice AI details */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Effortless Smart Voice AI"
            subtitle="Why Centernex? Our platform powers your calls 24/7 with enterprise-level reliability and human-like intelligence."
          />

          <div className="grid grid-cols-1 gap-32">
            {/* Feature 1: Natural Voice */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-10 bg-indigo-100 rounded-full blur-[80px] opacity-30"></div>
                  <div className="relative bg-[#0F172A] rounded-[2.5rem] p-8 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <Mic className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Live AI Estimation</div>
                        <div className="text-indigo-300 text-xs flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping"></span>
                          Processing voice...
                        </div>
                      </div>
                      <div className="ml-auto bg-white/10 px-3 py-1 rounded-full text-xs font-mono text-indigo-100">03:12</div>
                    </div>

                    <div className="flex items-end justify-center gap-1.5 h-24 mb-10 px-4">
                      {[40, 75, 35, 90, 55, 85, 40, 70, 45, 80, 50, 65].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-indigo-600 text-white px-5 py-3 rounded-2xl rounded-tr-none text-sm font-medium max-w-[85%] shadow-lg shadow-indigo-500/10">
                          "I have a leak in my attic. Can you give me a rough estimate for a shingle replacement?"
                        </div>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 border-2 border-white/20">
                          <span className="text-[10px] font-bold text-white uppercase">AI</span>
                        </div>
                        <div className="bg-white/10 text-gray-100 px-5 py-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] border border-white/10">
                          "I've analyzed your roof size. A full replacement would be around **€12,000 - €14,000**. Shall I book a pro for an inspection?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge className="bg-purple-100 text-purple-700">Next-Gen Voice</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Natural Voice Conversations</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Human-like AI voices that understand context, handle interruptions, and speak naturally. Multilingual support with sophisticated accent adaptation ensures your global audience feels heard.
                </p>
                <Button href="#demo" variant="dark" className="group">
                  Start Talking
                  <ChevronRight className="h-4 w-4 group-hover:trangray-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Feature 2: Appointment Booking */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700">Smart Scheduling</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Instant Appointment Booking</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Seamlessly integrate with your team's calendars to schedule, modify, and confirm appointments in real-time. Smart conflict detection ensures no double-bookings, ever.
                </p>
                <Button href={GLOBALS.CALENDAR} target="_blank" rel="noopener noreferrer" variant="dark" className="group">
                  Book Smarter
                  <ChevronRight className="h-4 w-4 group-hover:trangray-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-10 bg-blue-100 rounded-full blur-[80px] opacity-30"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-lg font-bold text-gray-900">November 2025</span>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"><Play className="h-4 w-4 rotate-180" /></button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"><Play className="h-4 w-4" /></button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-y-4 text-center mb-8">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{day}</div>
                    ))}
                    {[...Array(30)].map((_, i) => {
                      const day = i + 1;
                      const isSelected = day === 18;
                      const isToday = day === 12;
                      return (
                        <div key={i} className={`py-3 text-sm font-semibold cursor-pointer transition-all rounded-xl
                            ${isSelected ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-110' : 'text-gray-600 hover:bg-gray-50'}
                            ${isToday ? 'text-indigo-600 ring-2 ring-indigo-50' : ''}
                          `}>
                          {day}
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {['09:00 AM', '10:30 AM', '02:00 PM'].map((time, i) => (
                      <div key={time} className={`py-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer
                          ${i === 1 ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-500 hover:border-indigo-200'}
                        `}>
                        {time}
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-6 bottom-10 bg-green-500 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                    <CheckCircle2 className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm font-bold">98% Efficient</div>
                      <div className="text-[10px] text-green-100 uppercase font-black">AI Auto-Schedule</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Built for Every Industry"
            subtitle="From healthcare to automotive, Centernex adapts to your business's unique challenges with pre-trained industry-specific AI agents."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Real Estate Agent", desc: "Qualify buyers, schedule viewings, answer property questions", icon: House, badge: "Most Popular", color: "indigo", metrics: { conv: "89%", res: "2.3s" }, checks: ["Lead Qualification", "Viewing Scheduling", "Property Q&A"] },
              { title: "Healthcare Receptionist", desc: "Book appointments, handle patient inquiries, HIPAA compliant", icon: Stethoscope, badge: "HIPAA Ready", color: "green", metrics: { conv: "92%", res: "1.8s" }, checks: ["Appointment Booking", "Patient Screening", "Insurance Verification"] },
              { title: "SaaS Sales Agent", desc: "Demo scheduling, feature questions, pricing inquiries", icon: Briefcase, badge: "High Converting", color: "yellow", metrics: { conv: "85%", res: "2.1s" }, checks: ["Demo Scheduling", "Feature Explanation", "Pricing Guidance"] },
              { title: "Barber Shop Receptionist", desc: "Multi-barber scheduling, appointments, modifications", icon: Scissors, badge: "Advanced Scheduling", color: "pink", metrics: { conv: "91%", res: "1.9s" }, checks: ["Multi-Resource Scheduling", "Real-time Availability", "Appointment Management"] },
              { title: "E-commerce Support", desc: "Order tracking, product questions, returns handling", icon: ShoppingCart, badge: "24/7 Support", color: "red", metrics: { conv: "78%", res: "1.5s" }, checks: ["Order Tracking", "Product Info", "Returns Processing"] },
              { title: "Financial Advisor", desc: "Appointment scheduling, service inquiries, compliance-ready", icon: DollarSign, badge: "Secure", color: "green", metrics: { conv: "87%", res: "2.0s" }, checks: ["Appointment Scheduling", "Service Inquiries", "Compliance Ready"] },
              { title: "Restaurant Host", desc: "Reservation booking, menu questions, special requests", icon: UtensilsCrossed, badge: "New", color: "purple", metrics: { conv: "83%", res: "1.6s" }, checks: ["Reservation Booking", "Menu Information", "Special Requests"] },
              { title: "Automotive Service", desc: "Service scheduling, maintenance reminders, parts inquiries", icon: Car, badge: "Popular", color: "yellow", metrics: { conv: "80%", res: "2.2s" }, checks: ["Service Scheduling", "Maintenance Reminders", "Parts Availability"] },
              { title: "Education Counselor", desc: "Course inquiries, enrollment assistance, program info", icon: GraduationCap, badge: "Trusted", color: "blue", metrics: { conv: "86%", res: "2.4s" }, checks: ["Course Information", "Enrollment Help", "Program Details"] }
            ].map((ind, idx) => {
              const Icon = ind.icon;
              const colors = {
                indigo: "from-indigo-500 to-blue-600 shadow-indigo-200",
                green: "from-green-500 to-green-600 shadow-green-200",
                pink: "from-pink-500 to-purple-600 shadow-pink-200",
                yellow: "from-yellow-500 to-yellow-600 shadow-yellow-200",
                red: "from-red-500 to-pink-600 shadow-red-200",
                purple: "from-purple-500 to-blue-600 shadow-purple-200",
                blue: "from-blue-500 to-indigo-600 shadow-blue-200"
              }[ind.color];

              return (
                <div key={idx} className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 flex flex-col hover:-trangray-y-1">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${colors} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 text-white`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <Badge className="bg-gray-50 text-gray-600 border border-gray-100">{ind.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{ind.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center"><TrendingUp className="h-4 w-4 text-green-600" /></div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{ind.metrics.conv}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Conv.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center"><Clock className="h-4 w-4 text-blue-600" /></div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{ind.metrics.res}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Resp.</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {ind.checks.map((check, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        {check}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Button href="#contact" variant="dark" className="flex-1 py-2.5">Learn More</Button>
                    <a href="#demo" className="w-11 h-11 p-0 flex items-center justify-center">
                      <Play className="h-4 w-4 fill-gray-700" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />


    </div>
  );
};

export default Home;