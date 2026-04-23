import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Palette, 
  Trophy, 
  User, 
  Settings, 
  Plus, 
  Flame, 
  Zap, 
  Play, 
  Info, 
  Sparkles,
  Mic,
  Mic2,
  Send,
  Heart,
  GraduationCap,
  Users,
  Stars,
  Award,
  Trophy,
  TrendingUp,
  LayoutGrid,
  School,
  UserCircle,
  Subtitles,
  Fullscreen,
  Volume2,
  ArrowRight,
  Bolt,
  Undo2,
  Redo2,
  Scissors,
  Eye,
  Upload,
  Search
} from 'lucide-react';

// Using a custom icon wrapper to mimic the material symbols from screenshots if needed,
// but sticking to Lucide icons for consistency.

export default function App() {
  const [activeTab, setActiveTab] = useState('hub');

  const navItems = [
    { id: 'hub', label: 'Hub', icon: LayoutGrid },
    { id: 'learn', label: 'Learn', icon: School },
    { id: 'studio', label: 'Studio', icon: Palette },
    { id: 'arena', label: 'Arena', icon: Trophy },
    { id: 'vault', label: 'Vault', icon: UserCircle },
  ];

  return (
    <div className="flex min-h-screen bg-artistic-bg text-artistic-text overflow-hidden">
      {/* Left Vertical Rail */}
      <aside className="hidden md:flex w-24 border-r border-white/10 flex-col justify-between items-center py-10 fixed inset-y-0 left-0 bg-artistic-bg z-50">
        <div className="text-2xl font-bold tracking-tighter">L.</div>
        <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium">
          Curated Learning / 2024
        </div>
        <div className="w-2 h-2 rounded-full bg-artistic-gold shadow-[0_0_10px_#C5A059]"></div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-24 flex flex-col relative">
        {/* Navigation Bar */}
        <header className="h-24 flex items-center justify-between px-6 md:px-16 border-b border-white/5 bg-artistic-bg/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex gap-8 md:gap-12 text-[11px] uppercase tracking-widest text-white/60">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-all pb-1 border-b ${activeTab === item.id ? 'text-white border-artistic-gold' : 'hover:text-white border-transparent'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="btn-artistic">
            Profile
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 relative pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-16"
            >
              {activeTab === 'hub' && <HubScreen />}
              {activeTab === 'learn' && <LearnScreen />}
              {activeTab === 'studio' && <StudioScreen />}
              {activeTab === 'arena' && <ArenaScreen />}
              {activeTab === 'vault' && <VaultScreen />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-artistic-bg border-t border-white/5 z-50 flex justify-around items-center px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 ${isActive ? 'text-artistic-gold' : 'text-white/40'}`}
            >
              <Icon size={20} />
              <span className="text-[10px] uppercase font-bold tracking-tighter">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Screen Components ---

function HubScreen() {
  return (
    <div className="relative">
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="z-10 lg:w-3/5">
          <span className="accent-gold text-2xl block mb-4">Welcome back, Neo</span>
          <h1 className="text-[60px] md:text-[100px] leading-[0.9] font-black mb-8">
            The Hub<br/>
            <span className="opacity-40 italic font-serif lowercase tracking-normal">Syncing...</span>
          </h1>
          <div className="mt-12 max-w-sm space-y-8">
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Your learning ecosystem is balanced. 14 days of consistent exploration in the digital metropolis of Tokyo 2088.
            </p>
            
            <div className="artistic-card p-8 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-artistic-gold/5 blur-2xl rounded-full"></div>
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-artistic-gold"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-artistic-gold">Current Mission</span>
               </div>
               <h2 className="text-3xl font-bold mb-4 tracking-tighter">CYBER-NARRATIVE</h2>
               <p className="text-xs text-white/40 mb-6 uppercase tracking-widest">Tokyo 2088 / Advanced Edition</p>
               <button className="px-8 py-3 bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-artistic-gold transition-colors">
                  Resume Mission
               </button>
            </div>
          </div>
        </div>

        {/* Artistic Visual for Hub */}
        <div className="hidden lg:block relative flex-1 min-h-[500px]">
           <div className="absolute inset-0 artistic-border bg-gradient-to-br from-white/[0.03] to-transparent">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[400px] h-[400px] border border-white rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] border border-white rounded-full rotate-45"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-4/5 h-4/5 overflow-hidden artistic-border border-white/20">
                 <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASv1aC0Omf1SI68DKtNi8r-nLAEih5r5I88GJyVAuYFKbEENpKeTrZ21HVLSQhsPflZM_lygOcN4kIaUAnYW-71Hx4CuBUhCle5Lja_3WNZ9awqEw74mf9xHjjkwtp44g5uOdFXpVzoUU2xkzpLoFGrR9g0pWta4ORVob0uBm8nBVoVfQRYB6yJuoWti_RPJsVLeVp9CRyBVF08uHKUXbV25hhD2ZNB6zmf-zQb5Bvu4OkNX78ckjQ3-cPDfFtPiurjKClg7je8lE" 
                  className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  alt="Hub Visual"
                 />
                 <div className="absolute bottom-8 left-8">
                   <span className="text-[80px] font-serif opacity-10 leading-none accent-gold">14</span>
                 </div>
              </div>
           </div>
           <div className="absolute bottom-12 -left-12 rotate-[-90deg] origin-bottom-left text-[10px] uppercase tracking-[1em] text-white/10 whitespace-nowrap">
             NEO TOKYO 2088 FRAGMENT
           </div>
        </div>
      </section>

      {/* Recommended Grid in Artistic Style */}
      <section className="mt-24">
        <div className="flex items-center gap-6 mb-12">
           <h3 className="text-xl">Recommended</h3>
           <div className="flex-1 h-[1px] bg-white/5"></div>
           <Zap size={16} className="text-artistic-gold" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { title: 'Electronic Lyrical Flow', sub: 'Music • 12 mins', id: '01' },
            { title: 'The Syntax of Games', sub: 'Video • 8 mins', id: '02' },
            { title: 'Chroma Architecture', sub: 'Project • 15 mins', id: '03' },
          ].map((item) => (
            <div key={item.id} className="artistic-card p-10 border-white/5 hover:border-white/10">
              <span className="accent-gold text-4xl block mb-6 opacity-20 font-serif italic">{item.id}</span>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-2">{item.sub}</h4>
              <h3 className="text-xl tracking-tighter group-hover:text-artistic-gold transition-colors">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function LearnScreen() {
  const [learnMode, setLearnMode] = useState<'session' | 'conversation'>('session');

  return (
    <div className="space-y-16">
      <div className="flex justify-start mb-8 border-b border-white/5">
        <div className="flex gap-12 text-[11px] uppercase tracking-widest">
          <button 
            onClick={() => setLearnMode('session')}
            className={`pb-4 transition-all border-b ${learnMode === 'session' ? 'text-white border-artistic-gold' : 'text-white/40 border-transparent hover:text-white'}`}
          >
            Studio Session
          </button>
          <button 
            onClick={() => setLearnMode('conversation')}
            className={`pb-4 transition-all border-b ${learnMode === 'conversation' ? 'text-white border-artistic-gold' : 'text-white/40 border-transparent hover:text-white'}`}
          >
            Dialogue
          </button>
        </div>
      </div>

      {learnMode === 'session' ? (
        <div className="space-y-24">
          <section className="relative group overflow-hidden artistic-border border-white/20 aspect-[21/9]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrD0TWlegwrbJ2rSvieZBn5oFwQkEIinIns0hJjBv6P4V4kx7PGI44gAqOYIPwRDoci0Hmykl85OaGseTr7nqmdUyrmTtjuO-N-cDT6WQ-5XNjaQpUBTAsPLKB5ec5-RZe24QP8DVI78GnNHjTzABwKXmtjq2SQkB9YRGU6CM7AvG4IazNL6JpKEv-F6-X0PMhLDZxKFs0t3xbCV0LZlRl9WKsg2XlMrvHCB2_4BiYZLQUxfjfFYkhUHrjRR_ied6p3enh29yxt_8" 
              alt="Lesson" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-artistic-bg/40 flex flex-col justify-end p-12">
              <div className="max-w-xl">
                 <span className="accent-gold uppercase text-[10px] tracking-[0.3em] font-bold block mb-4">Masterclass Archive</span>
                 <h2 className="text-5xl font-bold mb-8">Architectural Design Thinking</h2>
                 <div className="flex items-center gap-6">
                    <button className="w-12 h-12 rounded-full artistic-border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                       <Play size={20} fill="currentColor" />
                    </button>
                    <div className="flex-1 h-[1px] bg-white/20"></div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">12:45 / 45:00</span>
                 </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tighter">Annotated Transcript</h3>
                <div className="w-8 h-[1px] bg-artistic-gold"></div>
              </div>
              <div className="space-y-8 text-2xl leading-relaxed font-light text-white/60">
                <p>The convergence of <span className="text-white font-medium border-b border-artistic-gold pb-1 italic font-serif">artificial intelligence</span> and human intuition creates an entirely new spectrum of medium.</p>
                <p>
                  This phenomenon—often misunderstood as replacement—is actually a <span className="accent-gold">multi-layered dialogue</span> between the rigid rules of logic and the fluid nature of creativity.
                </p>
                <p>By observing these intersections, we begin to map the architecture of thought itself.</p>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
              <div className="artistic-card p-10 border-artistic-gold/20">
                <span className="text-[10px] uppercase tracking-[0.3em] text-artistic-gold font-bold block mb-4">Etymology</span>
                <h3 className="text-4xl font-serif italic mb-6">INTUITION</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light mb-10">
                  Late 15th century: from late Latin <span className="italic">intuitio(n-)</span>, from <span className="italic">intueri</span> 'consider', from <span className="italic">in-</span> 'upon' + <span className="italic">tueri</span> 'look at'.
                </p>
                <button className="btn-artistic w-full py-4 text-center">Save to Lexicon</button>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 animate-in fade-in zoom-in duration-700">
          <div className="lg:col-span-12 h-[400px] artistic-border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <div className="w-[600px] h-[600px] border border-white rounded-full"></div>
                <div className="w-[500px] h-[500px] border border-white rounded-full rotate-12"></div>
                <div className="w-[400px] h-[400px] border border-white rounded-full rotate-45"></div>
             </div>
             <div className="text-center z-10 space-y-8">
                <span className="accent-gold text-xl font-serif mb-4 block">Analyzing cadence...</span>
                <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase">The Voice Arc</h1>
                <div className="flex gap-4 items-end justify-center h-12">
                  {[10, 30, 20, 60, 40, 20, 10].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="w-[1px] bg-white opacity-40" 
                      animate={{ height: [`${h}px`, `${h*1.5}px`, `${h}px`] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="artistic-card p-10">
                <span className="accent-gold text-[10px] uppercase mb-4 block">Feedback</span>
                <h3 className="text-xl mb-4 italic font-serif">Articulation</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">Your rhythm is consistent. Focus on the sharp transitions between vowel shifts in architectural terminology.</p>
             </div>
             <div className="artistic-card p-10">
                <span className="accent-gold text-[10px] uppercase mb-4 block">Metric</span>
                <h3 className="text-xl mb-4 italic font-serif">Fluency Sync</h3>
                <div className="h-10 text-4xl font-light">94.2%</div>
                <div className="mt-4 h-[1px] bg-white/10 w-full relative">
                   <div className="absolute inset-y-0 left-0 bg-artistic-gold w-[94%]"></div>
                </div>
             </div>
             <div className="flex flex-col justify-end">
                <div className="relative border-b border-white/20 pb-4">
                  <input type="text" placeholder="Respond with intent..." className="bg-transparent border-none focus:ring-0 text-white w-full uppercase text-[11px] tracking-widest" />
                  <Mic size={16} className="absolute right-0 top-0 text-white/40" />
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StudioScreen() {
  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
        <div>
          <span className="accent-gold font-serif italic text-2xl block mb-4">Project Workspace</span>
          <h1 className="text-[60px] md:text-[80px] leading-[0.85] font-black uppercase tracking-tighter">
            Digital<br/>Canvas
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="btn-artistic">Archive</button>
          <button className="px-10 py-3 bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-artistic-gold transition-colors">Export Piece</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-12">
          <div className="aspect-video relative overflow-hidden artistic-border border-white/20 bg-white/[0.02]">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbEuyw549fo0VBtw1NQgJXy1DCnY2cji14ViuRYOf6DUyW0W7mPUPYoW45IzNRdvRdpH3ixACenvBH3LOCDoPLCybA2vocctfQ2CsYE7OlJCOjKEzNrudxyyDa4NDhPe1s6LOWkfc3FKCEDet4jZMS2AEKpSU3rPNVdRDd6-3BO3rbW95NrbDhrHy0jENm7z-gew7Z2Ajazmb7SKtz0MH4naKXjPFv12JHhQePW7MguWcebQtKah3xbusjyb3Pq02fS2iPi0cbP5U" 
              alt="Asset" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 artistic-border rounded-full flex items-center justify-center bg-white text-black cursor-pointer shadow-2xl">
              <Play size={24} fill="currentColor" />
            </div>
            <div className="absolute top-10 left-10 artistic-card p-6 border-white/20">
               <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Studio.Fragment_012</span>
            </div>
          </div>
          
          <div className="h-24 artistic-border border-white/10 relative flex items-center px-8 bg-white/[0.02]">
             <div className="absolute inset-y-0 left-1/4 w-[1px] bg-artistic-gold"></div>
             <div className="flex-1 flex gap-2 overflow-hidden">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="min-w-[120px] h-12 artistic-border border-white/5 bg-white/[0.03]"></div>
                ))}
             </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-12">
          <div className="artistic-card p-10 border-white/10">
             <h3 className="text-xl mb-8 tracking-tighter">Composition Assets</h3>
             <div className="grid grid-cols-2 gap-4">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuC0O4RAKLpvu1u77fme2Yjxn9uoxvtKZi1mEnPMbNADxw-yctBd8T4rjoYvBLJgDzGC3gPV_m8BaAwRaAwjkM-Wqg2EHAcCD_uBDXVoVkDhgRPiOBi7wspRlKl2nqKjjtTjJE21IP5WCXzVi4FA2RG6z7rQqqyLtWCqC0hqCWG9tMDY0JepNaT5mGVZ-Tn1P0lR8yD23m_78FdY4jR1i4gs9EBr18WOVH5HmUSFm5i7m2zhkCwOp2N9Xb7ISwYBvC40uV9iq4Af56g',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDbH_sL76Cs5OX4RN-VYntwPARHJBquy2ikixK8kd0D1Ybz-NrKZN2Jt-9Z1I1rkgvWcJkHXSuNWwI8-Ivgxm8KkFRg378yaX-l40OiRD1ZJEqGFQrd6mL7XW2L5XHMelOtvj_c67nI-kbUQiy2rusE8l0CTKe2rdWyKTfSali0a5v3fElgSB3F73D2XGAd-2cmXFPPvA6jN_wIDAWL7JuzWLpDKefffKTiTDZca3-fPfXLmy7UIfwz98z3v3uxQqrpdUv5Dqbm-l8'
                ].map((url, i) => (
                  <div key={i} className="aspect-square grayscale hover:grayscale-0 artistic-border border-white/10 overflow-hidden cursor-pointer">
                    <img src={url} alt="asset" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-700" />
                  </div>
                ))}
                <div className="aspect-square artistic-border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 text-white/20 hover:text-white/60 transition-colors">
                  <Plus size={20} />
                  <span className="text-[9px] uppercase tracking-widest font-bold">Import</span>
                </div>
             </div>
          </div>

          <div className="artistic-card p-10 border-white/10 bg-white/[0.04]">
             <span className="accent-gold text-[10px] uppercase mb-4 block">Intelligence Flow</span>
             <p className="text-sm text-white/60 leading-relaxed font-light mb-8 italic">"Consider shifting the palette towards architectural rigidness to emphasize the fluid nature of the photography fragment."</p>
             <button className="text-[10px] uppercase tracking-widest text-artistic-gold font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Apply Suggestion <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArenaScreen() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <section className="relative artistic-border border-white/10 min-h-[400px] overflow-hidden flex flex-col justify-end p-12 bg-white/[0.02]">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRB3gskwinPjDVji3HcSnGLI3wVQADPFjY9celGkGNB-h7y7LeajMS47PL6rK9XHjuF1HQuCzJz9g7xGEVJtbOxVFpvHRxPsCmdrJBie95uFFSI885B_wc7s1jo__CFkfjtc665mhgI1KTdQSaXXlsOq4ruFrnwqFHhByoJLpBvcYHBfuhYgiv3Hxx5DNZYQGzf40q3lwFz5LzQnVJwDWOVc_GGMC1GnKX1b3CiV9FrSKobkXcvwi1WVFImyCCPidM-XuJ84q1bQo" 
            alt="Arena" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="accent-gold uppercase text-[10px] tracking-[0.4em] font-bold block mb-4">Current Exhibition</span>
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[0.85]">THE NEON<br/>GAUNTLET</h2>
          <p className="text-sm text-white/50 leading-relaxed font-light mb-10 max-w-lg italic font-serif">
            A high-speed knockout challenge exploring advanced idioms and architectural rigidness in linguistic form.
          </p>
          <button className="px-10 py-4 bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-artistic-gold transition-colors">
            Enter Arena
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 artistic-card p-12 flex flex-col justify-between">
           <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-artistic-gold font-bold mb-6">Global Status</h3>
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-light tracking-tighter">12</span>
              <span className="text-white/30 text-xs uppercase tracking-widest font-bold font-serif italic text-left">th<br/>Place</span>
            </div>
          </div>
          <div className="mt-12 space-y-4">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
              <span className="font-bold">Accuracy Goal</span>
              <span className="text-artistic-gold">85%</span>
            </div>
            <div className="h-[1px] w-full bg-white/5">
               <div className="h-full bg-artistic-gold w-[85%]"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 artistic-card p-12">
          <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
            <h3 className="text-xl tracking-tighter">LEADERBOARD / <span className="text-white/20">V.04</span></h3>
            <Trophy size={18} className="text-artistic-gold" />
          </div>
          <div className="space-y-1">
            {[
              { rank: '01', name: 'AlphaLex', lp: '12,450 LP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAw5g6zTFdqYe0SW265Ffe0-lppnmXvNdtBK3LCmfuGU2uA3OPP09i54ITFQqL7kvRB2GpP9ChgJ089t0HaQqgesOZkQt_5yucC5tXpiz4o3H3-uZ7OSkJ-D-KzKX_ic-wk94MxT5K2EVlnpZYXVwZ_EfyvpjOrmf0j0uCEzcoafKYy9zKdRY2QJYnKNoj7HXI5telpeAaq5U5roZMbUxJestTA5dVmfeyYajrQKGJfpJ1i_aHzUoQUFn2nLpHPsvCeiyKp0G_niU' },
              { rank: '02', name: 'SyntaxError', lp: '11,920 LP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKoyHkVuo4MSft7xF_q5Zi-Urgc3dbzo2BVLaHWPkJfHKg8RHF0rmJqpMW8WvE9PnJOslQtNisW_g1Ht1FCt25MghKXobglWXfv8ZznsLaKgGBrT__iUkFzlGOlacyBSdq2wTEW50SJcX_waKjiDA6MfEADzvsUq6gp0OJ2bOQY8Ol6YCqGrric293vlRyT5pFWjBqTsj2XFJ-qqVeNFflz0CTLs0f9LFzY5_CAbBTYk1NXUiYSiEWY6kNPKZm7r53z1_qkHakUUw' },
              { rank: '03', name: 'NovaSpeak', lp: '11,100 LP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKKhV4vNjTnQ8gadDhWmGS9OT1j7DyhGso0dkcjZ17cXNGqwYqvEWuqW61dtJDo5CrCo6Gm7zcPTxlkG41gyprAYGBBSDlfQGmKqXv0ZdMRXdTs2h_x2V7npMO77h537Q64fEPl2WTSpS4n2TBUF-V_ZXIwrQbGVx-yr1w7JPsHN1Obdo9dlJl04g0rznMwdhTLmcSMQ4vlQCCqZ3qx6lvAhENbUgvs27AF3zvYp1XxVnVukwEav44MIYhQ1vwbvUUfBFMreuKSzs' }
            ].map((player) => (
              <div key={player.rank} className="flex items-center gap-6 p-4 hover:bg-white/[0.03] transition-colors group">
                <span className="w-10 text-[10px] items-center gap-2 flex text-white/30 font-bold">{player.rank} <div className="w-3 h-[1px] bg-white/10 group-hover:bg-artistic-gold group-hover:w-6 transition-all"></div></span>
                <img src={player.img} alt={player.name} className="w-10 h-10 artistic-border border-white/20 grayscale" />
                <div className="flex-1">
                  <p className="text-sm font-bold uppercase tracking-widest">{player.name}</p>
                  <p className="text-[10px] text-artistic-gold tracking-[0.2em]">{player.lp}</p>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <button className="w-full mt-12 py-4 artistic-border border-white/5 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
            Full League Table
          </button>
        </div>
      </div>
    </div>
  );
}

function VaultScreen() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 artistic-card p-12 flex flex-col items-center text-center">
          <div className="relative w-48 h-48 mb-10 p-2 artistic-border border-white/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGpes5jwIRvFjXewz4zDecmDbpA2dLVUjPowqm7ScMGi-HascAu--PR-z3Q6aX0rzTpstslAx6JaahN5snMTgiLB0cczvALgbSNMVeYU3GNiInfYyh8NLO2P2JMpT23a7-jfwQ1Cf3PYMcwjPj7lJis-BNCBc93QEysNc4R1XwNRQaJ7-4nAg9pbyJ-DYmaK4-THdclO8oenPnuO5XuvGkuntIo45xH0-jkWnOoLqXBwgLHmDgzS-T44Dt1KJHd4svw5JZbe1WmdU" 
              alt="Avatar 3D" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Alex Rivera</h2>
          <span className="accent-gold text-lg italic font-serif block mt-2">Professional Collector</span>
          <div className="flex gap-4 mt-8">
            <span className="btn-artistic !px-4">V.42</span>
            <span className="btn-artistic !px-4">Bilingual</span>
          </div>
        </div>

        <div className="lg:col-span-8 artistic-card p-12 relative overflow-hidden flex flex-col">
          <div className="flex flex-col mb-16">
            <h2 className="text-2xl font-bold tracking-tighter">SKILL TOPOGRAPHY</h2>
            <p className="text-white/30 text-xs uppercase tracking-widest mt-2 font-bold font-serif italic">Curated mapping of linguistic rigidness</p>
          </div>
          
          <div className="relative flex-1 flex items-center justify-center">
            {/* Minimalist Graphic Mapping */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <div className="w-[400px] h-[400px] border border-white rotate-45"></div>
               <div className="w-[300px] h-[300px] border border-white"></div>
            </div>
            
            <div className="z-10 text-center">
               <div className="text-9xl font-black text-white/5 select-none leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 C1
               </div>
               <div className="grid grid-cols-2 gap-24 relative">
                  <div className="text-center group">
                    <div className="w-14 h-14 artistic-border border-white/20 mb-4 bg-white/5 flex items-center justify-center mx-auto group-hover:border-artistic-gold transition-colors">
                      <Mic2 size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-artistic-gold transition-colors">Speaking</span>
                  </div>
                  <div className="text-center group">
                    <div className="w-14 h-14 artistic-border border-white/20 mb-4 bg-white/5 flex items-center justify-center mx-auto group-hover:border-artistic-gold transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-artistic-gold transition-colors">Writing</span>
                  </div>
                  <div className="text-center group">
                    <div className="w-14 h-14 artistic-border border-white/20 mb-4 bg-white/5 flex items-center justify-center mx-auto group-hover:border-artistic-gold transition-colors">
                      <BookOpen size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-artistic-gold transition-colors">Reading</span>
                  </div>
                  <div className="text-center group">
                    <div className="w-14 h-14 artistic-border border-white/20 mb-4 bg-white/5 flex items-center justify-center mx-auto group-hover:border-artistic-gold transition-colors text-artistic-gold">
                      <Stars size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-artistic-gold">Syntax</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 artistic-card p-12">
           <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold tracking-tighter">LEXICON ASSETS</h3>
            <div className="w-12 h-[1px] bg-artistic-gold"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {[
              { id: 'streak', icon: Stars, label: '07 Day Streak' },
              { id: 'fast', icon: Zap, label: 'Fast Learner' },
              { id: 'global', icon: UserCircle, label: 'Global Voice', locked: true },
              { id: 'chat', icon: Users, label: 'Linguistic Flow' }
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.id} className={`flex flex-col items-center gap-6 ${badge.locked ? 'opacity-20 grayscale' : 'group cursor-pointer'}`}>
                  <div className="w-20 h-20 artistic-border border-white/10 flex items-center justify-center group-hover:border-artistic-gold transition-all duration-500 bg-white/[0.02]">
                    <Icon size={32} className="text-white/40 group-hover:text-artistic-gold" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-center text-white/30 group-hover:text-white transition-colors">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="lg:col-span-4 artistic-card p-12 flex flex-col justify-between">
          <div>
            <span className="accent-gold text-[10px] uppercase mb-4 block">Velocity Index</span>
            <div className="text-6xl font-light tracking-tighter mb-4">+12.4%</div>
            <p className="text-sm text-white/40 leading-relaxed italic font-serif">Shift in architectural rigidness over 30 days.</p>
          </div>
           <div className="mt-12">
            <div className="h-[1px] bg-white/5 w-full relative">
               <div className="absolute inset-y-0 left-0 bg-artistic-gold w-3/4"></div>
            </div>
            <div className="flex justify-between font-bold text-[9px] uppercase tracking-widest mt-4 text-white/20">
              <span>Station 42</span>
              <span>Station 43</span>
            </div>
          </div>
          <button className="w-full mt-12 py-4 bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-artistic-gold transition-colors">
            Advance Perspective
          </button>
        </div>
      </div>
    </div>
  );
}
