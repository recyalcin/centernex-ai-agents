import myIcon from '../../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl">
                <img src={myIcon} className="h-12 w-12" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Centernex AI</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 font-medium">
              Next-generation AI agents for seamless business communication and workflow automation.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
            <ul className="space-y-4">
              <li><a href="/privacy_policy.html" target="blank" className="text-sm text-slate-500 font-bold hover:text-indigo-600 transition-colors uppercase tracking-widest">Privacy Policy</a></li>
              <li><a href="/terms_of_service.html" target="blank" className="text-sm text-slate-500 font-bold hover:text-indigo-600 transition-colors uppercase tracking-widest">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4">
              <li>METROVION LLC</li>
              <li>3205 Talon Dr</li>
              <li>Richardson, TX, 75082, US</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
            © 2026 Centernex AI. A Metrovion LLC Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;