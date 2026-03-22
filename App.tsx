import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Moon, Sun, ArrowLeft, Instagram, Facebook, MapPin, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { ViewState, MenuSection, MenuItem } from './types';
import { MENU_DATA } from './constants';

const Logo: React.FC<{ className?: string, variant?: 'black' | 'cream' }> = ({ className = "", variant = 'black' }) => (
  <img 
    src="/mojalogomorning.png" 
    alt="Moja Logo" 
    className={`object-contain ${className}`}
    style={{ 
      filter: variant === 'black' ? 'brightness(0)' : 'url(#cream-filter)'
    }}
    referrerPolicy="no-referrer"
  />
);

const MenuItemRow: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex justify-between items-baseline py-2 border-b border-current/10 group hover:bg-current/5 transition-colors px-2 rounded">
    <div className="flex flex-col">
      <span className="font-medium group-hover:translate-x-1 transition-transform">{item.name}</span>
      {item.description && <span className="text-xs opacity-60 italic">{item.description}</span>}
    </div>
    <div className="flex gap-4 text-sm font-mono">
      {item.price && <span>£{item.price}</span>}
      {item.priceR && <span title="Regular">R £{item.priceR}</span>}
      {item.priceL && <span title="Large">L £{item.priceL}</span>}
      {item.priceQty1 && <span title="Qty 1">1x £{item.priceQty1}</span>}
      {item.priceQty3 && <span title="Qty 3">3x £{item.priceQty3}</span>}
      {item.pricePot && <span title="Pot">Pot £{item.pricePot}</span>}
    </div>
  </div>
);

const BoxedMenuSection: React.FC<{ section: MenuSection; isDay: boolean }> = ({ section, isDay }) => (
  <div className={`border ${isDay ? 'border-black/10 bg-black/5' : 'border-white/20 bg-white/5'} p-6 h-full flex flex-col`}>
    <div className={`flex justify-between items-end mb-6 border-b ${isDay ? 'border-black/10' : 'border-white/10'} pb-3`}>
      <h3 className="text-xl font-bold uppercase tracking-widest">{section.title}</h3>
      {section.headers && (
        <div className="flex gap-8 text-xs font-bold opacity-60">
          {section.headers.map(h => <span key={h} className="w-10 text-center">{h}</span>)}
        </div>
      )}
    </div>
    <div className={`space-y-4 flex-1 ${section.columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 space-y-0' : ''}`}>
      {section.items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-start text-sm">
          <div className="flex-1 pr-6">
            <div className="font-medium uppercase tracking-wide">{item.name}</div>
            {item.description && (
              <div className="text-[11px] opacity-50 italic leading-snug mt-1">
                {item.description.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-8 font-mono text-xs pt-1">
             {section.headers ? (
               <>
                 {section.headers.includes("R") && <span className="w-10 text-center">{item.priceR || '-'}</span>}
                 {section.headers.includes("L") && <span className="w-10 text-center">{item.priceL || '-'}</span>}
                 {section.headers.includes("POT") && <span className="w-10 text-center">{item.pricePot || '-'}</span>}
                 {section.headers.includes("1x") && <span className="w-10 text-center">{item.priceQty1 || '-'}</span>}
                 {section.headers.includes("3x") && <span className="w-10 text-center">{item.priceQty3 || '-'}</span>}
               </>
             ) : (
               <span className="font-bold">{item.price ? `£${item.price}` : ''}</span>
             )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LandingPage: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#F5F5F0] overflow-x-hidden">
      <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden font-sans border-b border-black/5">
        {/* Day Side */}
        <motion.div 
          className="relative flex-1 h-full bg-[#F5F5F0] text-[#262626] cursor-pointer group overflow-hidden border-b md:border-b-0 md:border-r border-black/5"
          whileHover={{ flex: 1.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={() => setView('day')}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center flex flex-col items-center"
            >
              <Logo variant="black" className="h-16 md:h-24 w-auto mb-6" />
              <p className="text-sm uppercase tracking-[0.3em] font-sans mb-10 text-[#262626]">daytime bake, brew, lunch</p>
              
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-[#262626] px-8 py-4 rounded-full group-hover:bg-[#262626] group-hover:text-[#F5F5F0] transition-all duration-300">
                View Daytime Menu <Coffee size={14} />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#262626]/5 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 opacity-5">
            <Sun size={200} strokeWidth={0.5} />
          </div>
        </motion.div>

        {/* Evening Side */}
        <motion.div 
          className="relative flex-1 h-full bg-[#262626] text-[#D1C7B7] cursor-pointer group overflow-hidden"
          whileHover={{ flex: 1.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={() => setView('evening')}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="relative mb-6">
                <span className="absolute -top-10 -left-8 md:-top-16 md:-left-20 text-4xl md:text-7xl font-script text-[#D1C7B7] z-20 whitespace-nowrap pointer-events-none -rotate-[15deg] drop-shadow-sm">
                  evenings at
                </span>
                <Logo variant="cream" className="h-16 md:h-24 w-auto" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] font-sans mb-10 text-[#D1C7B7]">Kitchen & Refreshments</p>

              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-[#D1C7B7] px-8 py-4 rounded-full group-hover:bg-[#D1C7B7] group-hover:text-[#262626] transition-all duration-300">
                View Evening Menu <Moon size={14} />
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 opacity-5">
            <Moon size={200} strokeWidth={0.5} />
          </div>
        </motion.div>
      </div>

    {/* About Us Section */}
    <section id="about-us" className="py-32 px-6 bg-[#F5F5F0] text-[#262626]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.5em] opacity-50 mb-4 block">Our Story</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8">The Heart of Moja</h2>
          <div className="w-16 h-px bg-[#444444] mx-auto opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg leading-relaxed opacity-80">
            <p>
              "Moja" literally translates to "delicious" in Bengali, and it's the philosophy behind every dish and drink we serve. We are more than just a cafe; we are a community space dedicated to quality, comfort, and authentic flavors.
            </p>
            <p>
              Looking for a study-friendly cafe? We warmly welcome students to make Moja their afternoon home. With a relaxed atmosphere and premium coffee, it's the ideal spot to hit the books or work on projects over a perfectly brewed latte or a refreshing iced matcha.
            </p>
            <p>
              As the day turns to dusk, Moja transforms into a vibrant kitchen. Experience the transition from daytime brew to evening refreshments, where we serve a curated dinner menu of vibrant small plates and signature sodas. Whether you're here to study or socialize, Moja is your local destination for flavor and focus.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
              alt="Cafe Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Simple Landing Footer */}
    <footer className="py-20 px-6 bg-[#4b4e4f] text-[#D1C7B7] border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <Logo variant="cream" className="h-10 w-auto md:items-start mb-6" />
          <p className="text-sm opacity-80">"Moja" means delicious. Join us for your daily brew or evening refreshments.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest font-bold opacity-60">Visit Us</h4>
          <p className="text-sm">1 Storer Rd<br />Loughborough LE11 5EQ</p>
          <p className="text-sm">Mon - Fri: 08:00 - 23:00<br />Sat - Sun: 09:00 - 00:00</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest font-bold opacity-60">Connect</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.instagram.com/moja.uk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575217365874&sk=photos" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=1+Storer+Rd+Loughborough+LE11+5EQ" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <MapPin size={20} />
            </a>
          </div>
          <p className="text-sm opacity-80">hello@moja-cafe.com</p>
        </div>
      </div>
      <div className="mt-20 text-center text-[10px] uppercase tracking-[0.3em] opacity-40">
        &copy; 2026 Moja Cafe. All Rights Reserved.
      </div>
    </footer>
  </div>
  );
};

const ExperiencePage: React.FC<{ 
  type: 'day' | 'evening', 
  setView: (v: ViewState) => void,
  isMenuOpen: boolean,
  toggleMenu: () => void
}> = ({ 
  type, 
  setView, 
  isMenuOpen, 
  toggleMenu 
}) => {
  const isDay = type === 'day';
  const bgColor = isDay ? 'bg-[#F5F5F0]' : 'bg-[#262626]';
  const textColor = isDay ? 'text-[#262626]' : 'text-[#D1C7B7]';
  const accentColor = isDay ? 'bg-[#262626] text-[#F5F5F0]' : 'bg-[#D1C7B7] text-[#262626]';
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${bgColor} ${textColor} font-sans transition-colors duration-700`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-[#4b4e4f] shadow-md transition-colors duration-500">
        <button 
          onClick={() => setView('landing')}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D1C7B7] hover:opacity-50 transition-opacity pl-4"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <Logo variant="cream" className="h-8 w-auto" />
        <button 
          onClick={toggleMenu}
          className="p-2 text-[#D1C7B7] hover:bg-white/10 rounded-full transition-colors pr-4"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-40 ${bgColor} flex flex-col items-center justify-center p-12`}
          >
            <div className="flex flex-col gap-8 text-center">
              <button onClick={() => { setView('day'); toggleMenu(); }} className="text-4xl font-serif italic hover:opacity-50">Daytime</button>
              <button onClick={() => { setView('evening'); toggleMenu(); }} className="text-4xl font-serif italic hover:opacity-50">Evenings</button>
              <div className="h-px w-12 bg-current mx-auto opacity-30 my-4" />
              <div className="flex gap-6 justify-center">
                <Instagram size={24} className="cursor-pointer hover:opacity-50" />
                <MapPin size={24} className="cursor-pointer hover:opacity-50" />
                <Phone size={24} className="cursor-pointer hover:opacity-50" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block">
              {isDay ? 'Morning Rituals' : 'After Hours'}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight">
              {isDay ? 'Your Daily Brew & Bake' : 'Kitchen & Refreshments'}
            </h1>
            <p className="text-lg opacity-80 max-w-md mb-10 leading-relaxed">
              {isDay 
                ? 'Indulge in warm, artisan pastries alongside our expertly roasted espresso. The perfect start to your morning.'
                : 'As the sun sets, Moja transforms. Discover our curated selection of small plates and signature evening drinks.'}
            </p>
            <button 
              onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold ${accentColor} hover:scale-105 transition-transform shadow-xl`}
            >
              View Full Menu
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={isDay 
                ? "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                : "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"}
              alt={isDay ? "Coffee and bread" : "Evening drinks"}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu-section" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Logo className="h-8 md:h-12 mb-6" variant={isDay ? 'black' : 'cream'} />
          <h1 className={`text-3xl md:text-5xl font-serif tracking-[0.3em] uppercase border-t border-b ${isDay ? 'border-black/10' : 'border-white/20'} py-6 px-12 text-center`}>
             {isDay ? 'Daytime Menu' : 'Evening Menu'}
          </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(isDay ? MENU_DATA.day : MENU_DATA.evening).map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={section.columns === 2 ? "md:col-span-2" : ""}
            >
              <BoxedMenuSection section={section} isDay={isDay} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-[#4b4e4f] text-[#D1C7B7] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <Logo className="md:items-start mb-6" variant="cream" />
            <p className="text-sm opacity-80">Crafting moments, from the first light of dawn to the last toast of the night.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold opacity-60">Visit Us</h4>
            <p className="text-sm">1 Storer Rd<br />Loughborough LE11 5EQ</p>
            <p className="text-sm">Mon - Fri: 08:00 - 23:00<br />Sat - Sun: 09:00 - 00:00</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold opacity-60">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://www.instagram.com/moja.uk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575217365874&sk=photos" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=1+Storer+Rd+Loughborough+LE11+5EQ" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <MapPin size={20} />
              </a>
            </div>
            <p className="text-sm opacity-80">hello@moja-cafe.com</p>
          </div>
        </div>
        <div className="mt-20 text-center text-[10px] uppercase tracking-[0.3em] opacity-40">
          &copy; 2026 Moja Cafe. All Rights Reserved.
        </div>
      </footer>
    </motion.div>
  );
};

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* SVG Filter for Cream Color #D1C7B7 */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="cream-filter">
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0.8196
                    0 0 0 0 0.7804
                    0 0 0 0 0.7176
                    0 0 0 1 0" 
          />
        </filter>
      </svg>
      <AnimatePresence mode="wait">
      {view === 'landing' && <LandingPage key="landing" setView={setView} />}
      {view === 'day' && (
        <ExperiencePage 
          key="day" 
          type="day" 
          setView={setView} 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
        />
      )}
      {view === 'evening' && (
        <ExperiencePage 
          key="evening" 
          type="evening" 
          setView={setView} 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
        />
      )}
      </AnimatePresence>
    </>
  );
}
