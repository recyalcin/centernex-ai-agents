import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import GLOBALS, { navigate } from '../constants/general';
import CTA from '../components/ui/CTA';
import PageHero from '../components/ui/PageHero';



const ROICalculator = () => {
  // Global link tanımlı değilse hata almamak için yedek:
  const bookLink = GLOBALS.CALENDAR;
  // State tanımlamaları (Başlangıç değerleri HTML'deki ile aynı)
  const [leads, setLeads] = useState(500);
  const [rev, setRev] = useState(1000);
  const [conv, setConv] = useState(10);
  const [staff, setStaff] = useState(2000);
  const [usage, setUsage] = useState(2.5);

  // Hesaplanan değerler için state
  const [results, setResults] = useState({
    recovery: 0,
    savings: 0,
    annualNet: 0,
    roiPerc: 0
  });

  // Her input değiştiğinde hesaplamayı yapan useEffect
  useEffect(() => {
    const fixedFee = 500;
    const convRate = conv / 100;

    // Logic: 30% conversion lift from instant speed-to-lead
    const aiConvRate = Math.min(convRate * 1.30, 0.50);
    const monthlyRevenueGain = leads * (aiConvRate - convRate) * rev;

    // Logic: 75% of outreach tasks are automated
    const monthlyStaffSavings = staff * 0.75;

    const totalMonthlyInvestment = fixedFee + (leads * usage);
    const monthlyNetProfit = (monthlyRevenueGain + monthlyStaffSavings) - totalMonthlyInvestment;
    const annualNetProfit = monthlyNetProfit * 12;
    const roiPerc = (monthlyNetProfit / totalMonthlyInvestment) * 100;

    setResults({
      recovery: Math.round(monthlyRevenueGain),
      savings: Math.round(monthlyStaffSavings),
      annualNet: Math.round(annualNetProfit),
      roiPerc: Math.round(roiPerc)
    });
  }, [leads, rev, conv, staff, usage]);

  return (
    <div className="bg-white">

      {/* --- HERO SECTION --- */}
      <PageHero
        badgeText="ROI Calculator"
        badgeColorClass="bg-purple-50 border-purple-200 text-purple-700"
        dotColorClass="bg-purple-500"
        titleNormal="Calculate Your"
        titleHighlight="Return on Investment"
        highlightColorClass="text-purple-600"
        description="See how much revenue you could generate and costs you could save with Centernex's AI voice agents."
        primaryBtnText="Try Live Demo"
        primaryBtnAction={() => navigate('demo')}
        secondaryBtnText="Book a Demo"
        secondaryBtnAction={() => window.open(bookLink, '_blank')}
        bgBlurClasses="bg-purple-400 bg-opacity-40"
        isItalic={true}
      />

      {/* --- IFRAME SECTION (Yükseklik Sorunu Çözüldü) --- */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-0">

            {/* Sol Taraf: Inputlar */}
            <div className="lg:col-span-7 p-8 border-r border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Value Simulation</h2>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">Calculate projected cost savings and revenue growth side-by-side.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {/* Monthly Leads */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Monthly Leads</label>
                    <span className="text-sm font-bold text-indigo-600">{leads.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="50" max="3000" step="50" value={leads}
                    onChange={(e) => setLeads(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-400">New leads from all channels.</p>
                </div>

                {/* Lead Value */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Lead Value ($)</label>
                    <span className="text-sm font-bold text-indigo-600">${rev.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="10" max="10000" step="10" value={rev}
                    onChange={(e) => setRev(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-400">Average revenue per sale.</p>
                </div>

                {/* Conv Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Conv. Rate (%)</label>
                    <span className="text-sm font-bold text-indigo-600">{conv}%</span>
                  </div>
                  <input
                    type="range" min="1" max="40" step="1" value={conv}
                    onChange={(e) => setConv(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-400">Your current closing rate.</p>
                </div>

                {/* Staff Cost */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Staff Cost ($)</label>
                    <span className="text-sm font-bold text-red-500">${staff.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="0" max="10000" step="100" value={staff}
                    onChange={(e) => setStaff(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-400">Salary for manual outreach.</p>
                </div>
              </div>

              {/* Investment Breakdown Box */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-[10px] font-black text-gray-800 uppercase mb-4 flex items-center">
                  <span className="mr-2">ℹ️</span> Investment Breakdown
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Agency Fixed Fee</span>
                    <div className="text-lg font-black text-gray-800 mt-1">$500.00</div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">AI Usage Credits</span>
                      <span className="text-xs font-bold text-indigo-600">${usage.toFixed(2)}</span>
                    </div>
                    <input
                      type="range" min="1" max="5" step="0.5" value={usage}
                      onChange={(e) => setUsage(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white rounded-lg appearance-none cursor-pointer mt-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Sonuçlar (Koyu Panel) */}
            <div className="lg:col-span-5 p-10 bg-gray-900 text-white flex flex-col justify-between">
              <div className="space-y-10">
                <div>
                  <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">Revenue Recovery</p>
                  <h3 className="text-4xl font-black mt-2 tracking-tighter">${results.recovery.toLocaleString()}</h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed italic opacity-80">Money captured from leads that previously wouldn't have been reached in time.</p>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Efficiency Savings</p>
                  <h3 className="text-3xl font-black mt-2 tracking-tighter">${results.savings.toLocaleString()}</h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed opacity-80">Value of staff time reclaimed from manual outreach.</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Annual Net ROI</p>
                  <span className={`text-[10px] font-black px-2 py-1 rounded border ${results.roiPerc > 0 ? 'text-green-400 border-green-400 bg-green-400 bg-opacity-10' : 'text-red-400 border-red-400 bg-red-400 bg-opacity-10'}`}>
                    {results.roiPerc > 0 ? '+' : ''}{results.roiPerc}% ROI
                  </span>
                </div>
                <h3 className="text-6xl font-black text-white tracking-tighter">${results.annualNet.toLocaleString()}</h3>
                <p className="text-[10px] text-gray-500 mt-4 font-medium uppercase">After all agency fees and usage costs.</p>

                <a
                  href="https://api.centernex.com/widget/bookings/book-a-meeting-23421231231"
                  className="block w-full mt-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

              <a href="#" className="w-full py-4 text-center bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition">SIGN UP</a>
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

              <a href="#" className="w-full py-4 text-center bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition">SIGN UP</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CTA />

    </div>
  );
};

export default ROICalculator;