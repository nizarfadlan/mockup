import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  BarChart3,
  Bot,
  BrainCircuit,
  Briefcase,
  Building,
  Calculator,
  ChevronDown,
  CircleDot,
  Cpu,
  Crosshair,
  Database,
  FileSearch,
  FileText,
  Filter,
  GitMerge,
  Globe,
  Hexagon,
  History,
  Landmark,
  LayoutDashboard,
  Map,
  MonitorPlay,
  Network,
  Plug,
  Radar,
  RefreshCw,
  ScanLine,
  Server,
  ServerCog,
  Share2,
  Shield,
  ShieldAlert,
  Terminal,
  TrendingUp,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { ComponentType } from "react";

export default function InsightAI() {
  return (
    <>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #000000;
          color: #f4f4f5;
          overflow-x: hidden;
        }
        .glow-dot { box-shadow: 0 0 16px 3px rgba(59, 130, 246, 0.7); }
        .glow-red { box-shadow: 0 0 16px 3px rgba(239, 68, 68, 0.7); }
        .glow-purple { box-shadow: 0 0 20px 2px rgba(168, 85, 247, 0.4); }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E");
        }
        .mockup-scroll::-webkit-scrollbar { width: 4px; height: 4px; }
        .mockup-scroll::-webkit-scrollbar-track { background: transparent; }
        .mockup-scroll::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
        .flow-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: flow 4s ease-in-out infinite;
        }
        @keyframes flow {
          0% { stroke-dashoffset: 400; opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>

      <div className="antialiased bg-noise relative selection:bg-blue-500/30">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/40 backdrop-blur-lg supports-[backdrop-filter]:bg-[#050505]/40 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 font-semibold text-white tracking-tight text-lg">
                <Hexagon className="w-5 h-5 text-blue-500" />
                Insight AI
              </div>
              <div className="hidden md:flex gap-6 text-neutral-400 font-medium">
                <a href="#" className="hover:text-white transition flex items-center gap-1">
                  Products <ChevronDown className="w-3 h-3" />
                </a>
                <a href="#" className="hover:text-white transition">Platform</a>
                <a href="#" className="hover:text-white transition">Docs</a>
                <a href="#" className="hover:text-white transition">Pricing</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white text-black px-4 py-2 rounded-md text-xs font-semibold hover:bg-neutral-200 transition" type="button">
                Start building
              </button>
              <button className="border border-neutral-700 bg-black/50 px-4 py-2 rounded-md text-xs font-semibold hover:bg-neutral-800 transition hidden sm:block" type="button">
                Get a demo
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-40 pb-6 px-6 max-w-5xl mx-auto text-center z-10">
          <h1 className="text-[3.5rem] leading-[1.1] md:text-[5.5rem] font-medium tracking-tight mb-6 text-white">
            Ship reliable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">cyber defense</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Monitor, evaluate, and deploy network defenses with an AI-powered Threat Intelligence Ecosystem Platform.
          </p>
          <div className="flex items-center justify-center gap-4 relative z-20">
            <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="button">
              Start building
            </button>
            <button className="border border-neutral-700 bg-[#0a0a0a] px-6 py-3 rounded-md text-sm font-semibold hover:bg-neutral-800 transition" type="button">
              Get a demo
            </button>
          </div>
        </section>

        {/* Animated Tree Graph */}
        <div className="relative w-full h-72 md:h-[450px] flex justify-center overflow-hidden">
          <svg viewBox="0 0 1200 500" className="w-full max-w-[1400px] h-full opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g fill="#a3a3a3" fontSize="14" fontFamily="monospace" textAnchor="middle" fontWeight="500" letterSpacing="1">
              <text x="150" y="30">Ingest</text>
              <text x="450" y="30">Analyze</text>
              <text x="750" y="30">Predict</text>
              <text x="1050" y="30">Defend</text>
            </g>
            <path d="M150 60 C150 300, 600 250, 600 500" stroke="#1f2937" strokeWidth="2" />
            <path d="M450 60 C450 300, 600 250, 600 500" stroke="#1f2937" strokeWidth="2" />
            <path d="M750 60 C750 300, 600 250, 600 500" stroke="#1f2937" strokeWidth="2" />
            <path d="M1050 60 C1050 300, 600 250, 600 500" stroke="#1f2937" strokeWidth="2" />
            <path d="M150 60 C150 300, 600 250, 600 500" stroke="url(#grad1)" strokeWidth="3" className="flow-line" style={{ animationDelay: "0s" }} />
            <path d="M450 60 C450 300, 600 250, 600 500" stroke="url(#grad1)" strokeWidth="3" className="flow-line" style={{ animationDelay: "1.2s" }} />
            <path d="M750 60 C750 300, 600 250, 600 500" stroke="url(#grad1)" strokeWidth="3" className="flow-line" style={{ animationDelay: "0.6s" }} />
            <path d="M1050 60 C1050 300, 600 250, 600 500" stroke="url(#grad1)" strokeWidth="3" className="flow-line" style={{ animationDelay: "1.8s" }} />
            <circle cx="600" cy="500" r="5" fill="#22d3ee" className="glow-dot" />
          </svg>
        </div>

        {/* Logo Strip */}
        <section className="border-y border-neutral-900 bg-black/50 py-10 px-6 relative z-20">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <p className="text-neutral-500 text-sm mb-6 font-medium">
              Insight AI empowers cybersecurity teams across government agencies and global enterprises
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-serif"><Shield className="w-6 h-6" /> BSSN</div>
              <div className="flex items-center gap-2 text-xl font-bold"><Landmark className="w-6 h-6" /> BANK INDONESIA</div>
              <div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><Building className="w-6 h-6" /> KOMINFO</div>
              <div className="flex items-center gap-2 text-xl font-bold"><Server className="w-6 h-6" /> TELKOM</div>
              <div className="flex items-center gap-2 text-xl font-bold"><Briefcase className="w-6 h-6" /> BUMN</div>
            </div>
          </div>
        </section>

        {/* Main Platform / Timeline Layout */}
        <section className="relative max-w-[1400px] mx-auto px-6 pb-24 pt-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[32px] md:left-[96px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-900 rounded-full" />

            {/* Header Text */}
            <div className="relative pl-[64px] md:pl-[144px] mb-32 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="absolute left-[27px] md:left-[91px] top-10 w-3 h-3 bg-blue-500 rounded-full glow-dot z-10">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                  Insight AI Platform<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Engineering</span>
                </h2>
              </div>
              <p className="text-neutral-400 text-sm max-w-sm font-mono text-xs md:text-right md:pb-2">
                Integrate unlimited data sources — running consistently with the infrastructure you already have.
              </p>
            </div>

            {/* MODULE 1: INFORMATION DASHBOARD */}
            <div className="relative pl-[64px] md:pl-[144px] mb-40 grid lg:grid-cols-12 gap-12 items-start">
              <div className="absolute left-[27px] md:left-[91px] top-2 w-3 h-3 bg-blue-500 rounded-full z-10 glow-dot" />

              <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">
                  <CircleDot className="w-3 h-3" /> Observability Layer
                </div>
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <LayoutDashboard className="w-6 h-6" />
                  <h3 className="text-2xl font-medium text-white">Information Dashboard</h3>
                </div>
                <h4 className="text-xl font-light tracking-tight mb-4 text-neutral-300">A unified cyber threat visualization hub.</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Unifies information from internal security monitoring, external threat intelligence (commercial feeds, ISAC), and open sources (OSINT). Everything is categorized in real time.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Plug className="w-3 h-3" /> Intel Connector</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Radar className="w-3 h-3" /> Internal SIEM</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Bot className="w-3 h-3" /> Auto-Categorization</span>
                </div>
                <button className="border border-neutral-700 bg-black/50 text-neutral-300 px-4 py-2 rounded text-xs font-medium hover:bg-neutral-800 transition flex items-center gap-2 backdrop-blur-md" type="button">
                  Dashboard Docs <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </div>

              {/* Dashboard Mockup */}
              <div className="lg:col-span-8 group perspective">
                <div className="rounded-xl border border-neutral-800/60 bg-gradient-to-br from-[#0a0a0a] to-[#000000] shadow-2xl overflow-hidden flex flex-col h-[520px] transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
                  <div className="h-12 border-b border-neutral-800/60 flex items-center justify-between px-4 bg-black/50 backdrop-blur-md">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-1.5 mr-2">
                        <div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" />
                      </div>
                      <span className="text-[11px] text-white bg-neutral-800/50 px-3 py-1 rounded-md flex items-center gap-2"><LayoutDashboard className="w-3 h-3" /> Overview</span>
                      <span className="text-[11px] text-neutral-500 hover:text-neutral-300 transition cursor-pointer">Threat Map</span>
                      <span className="text-[11px] text-neutral-500 hover:text-neutral-300 transition cursor-pointer">Live Ingestion</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Live Sync
                    </div>
                  </div>
                  <div className="flex-1 p-5 mockup-scroll overflow-y-auto flex flex-col gap-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">Active IOCs</div>
                          <TrendingUp className="w-3 h-3 text-blue-500" />
                        </div>
                        <div className="text-2xl font-semibold text-white mb-2">14,209</div>
                        <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points="0,15 20,10 40,18 60,5 80,12 100,2" />
                        </svg>
                      </div>
                      <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">Critical Alerts</div>
                          <AlertTriangle className="w-3 h-3 text-red-500" />
                        </div>
                        <div className="text-2xl font-semibold text-white mb-2">342</div>
                        <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <polyline fill="none" stroke="#ef4444" strokeWidth="2" points="0,18 20,15 40,16 60,8 80,4 100,0" />
                        </svg>
                      </div>
                      <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">Data Ingest (GB)</div>
                          <Database className="w-3 h-3 text-purple-500" />
                        </div>
                        <div className="text-2xl font-semibold text-white mb-2">8.4T</div>
                        <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <polyline fill="none" stroke="#a855f7" strokeWidth="2" points="0,10 20,12 40,8 60,10 80,6 100,5" />
                        </svg>
                      </div>
                    </div>
                    {/* Data Table */}
                    <div className="flex-1 bg-neutral-900/40 border border-neutral-800/60 rounded-lg backdrop-blur-sm flex flex-col overflow-hidden">
                      <div className="px-4 py-3 border-b border-neutral-800/60 flex justify-between items-center">
                        <div className="text-[11px] font-semibold text-white flex items-center gap-2"><Filter className="w-3 h-3" /> Auto-Categorized Intel Feed</div>
                      </div>
                      <div className="flex-1 p-2 space-y-1">
                        <div className="grid grid-cols-12 gap-2 px-3 py-1.5 text-[9px] text-neutral-500 font-mono uppercase tracking-wider border-b border-neutral-800/40">
                          <div className="col-span-2">Severity</div><div className="col-span-2">Source</div><div className="col-span-2">Actor/Type</div><div className="col-span-6">Description</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-3 py-2.5 text-[10px] bg-neutral-800/20 hover:bg-neutral-800/50 rounded transition items-center">
                          <div className="col-span-2 flex"><span className="bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded text-[9px]">CRITICAL</span></div>
                          <div className="col-span-2 text-neutral-400">SIEM (Internal)</div>
                          <div className="col-span-2 text-white font-mono">DDoS / Botnet</div>
                          <div className="col-span-6 text-neutral-300 truncate">Anomalous spike targeting core banking API gateway.</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-3 py-2.5 text-[10px] bg-neutral-800/20 hover:bg-neutral-800/50 rounded transition items-center">
                          <div className="col-span-2 flex"><span className="bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded text-[9px]">HIGH</span></div>
                          <div className="col-span-2 text-neutral-400">DarkWeb Crawler</div>
                          <div className="col-span-2 text-white font-mono">Ransomware</div>
                          <div className="col-span-6 text-neutral-300 truncate">New LockBit 3.0 variant hash extracted from forum post.</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-3 py-2.5 text-[10px] bg-neutral-800/20 hover:bg-neutral-800/50 rounded transition items-center">
                          <div className="col-span-2 flex"><span className="bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded text-[9px]">MEDIUM</span></div>
                          <div className="col-span-2 text-neutral-400">ISAC Commercial</div>
                          <div className="col-span-2 text-white font-mono">APT-36</div>
                          <div className="col-span-6 text-neutral-300 truncate">Phishing indicators updated. 12 new domains added to blocklist.</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-3 py-2.5 text-[10px] bg-neutral-800/20 hover:bg-neutral-800/50 rounded transition items-center">
                          <div className="col-span-2 flex"><span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded text-[9px]">INFO</span></div>
                          <div className="col-span-2 text-neutral-400">OSINT</div>
                          <div className="col-span-2 text-white font-mono">CVE-2026-X</div>
                          <div className="col-span-6 text-neutral-300 truncate">Vulnerability scanning detected on external perimeter. Mitigated.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODULE 2: GRAPH ANALYSIS */}
            <div className="relative pl-[64px] md:pl-[144px] mb-40 grid lg:grid-cols-12 gap-12 items-start">
              <div className="absolute left-[27px] md:left-[91px] top-2 w-3 h-3 bg-neutral-800 border-2 border-neutral-600 rounded-full z-10 transition-colors duration-500 hover:bg-purple-500 hover:border-white" />

              {/* Graph Mockup (Left) */}
              <div className="lg:col-span-8 order-2 lg:order-1 group perspective">
                <div className="rounded-xl border border-neutral-800/60 bg-gradient-to-br from-[#0a0a0a] to-[#050505] shadow-2xl overflow-hidden flex flex-col h-[520px] transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] relative">
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded p-1.5 flex flex-col gap-1">
                      <button className="p-1 hover:bg-neutral-800 rounded text-neutral-400" type="button"><ZoomIn className="w-3 h-3" /></button>
                      <button className="p-1 hover:bg-neutral-800 rounded text-neutral-400" type="button"><ZoomOut className="w-3 h-3" /></button>
                      <button className="p-1 hover:bg-neutral-800 rounded text-neutral-400" type="button"><Crosshair className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="flex-1 relative bg-[#020202] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
                    <svg className="w-full h-full relative z-10" viewBox="0 0 800 500">
                      <path d="M400 250 L250 150 M400 250 L550 180 M400 250 L380 380 M250 150 L150 200 M550 180 L650 120 M380 380 L500 420" stroke="#334155" strokeWidth="1.5" strokeDasharray="4" />
                      <path d="M400 250 L480 290 M480 290 L600 320" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                      <path d="M380 380 L280 400" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
                      <circle cx="400" cy="250" r="30" fill="none" stroke="#a855f7" strokeWidth="1" className="animate-ping-slow" />
                      <circle cx="400" cy="250" r="18" fill="#000" stroke="#a855f7" strokeWidth="3" className="glow-purple" />
                      <text x="400" y="246" fill="#fff" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">APT-29</text>
                      <text x="400" y="285" fill="#a855f7" fontSize="10" fontFamily="monospace" textAnchor="middle">Entity Merged (94%)</text>
                      <circle cx="250" cy="150" r="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                      <text x="250" y="130" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">IP: 192.x.x.1</text>
                      <circle cx="550" cy="180" r="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                      <text x="550" y="160" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">Domain: x-auth.net</text>
                      <circle cx="380" cy="380" r="14" fill="#450a0a" stroke="#ef4444" strokeWidth="2" className="glow-red" />
                      <text x="380" y="410" fill="#ef4444" fontSize="10" fontFamily="monospace" textAnchor="middle">Payload.exe</text>
                      <circle cx="280" cy="400" r="8" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="280" y="420" fill="#fca5a5" fontSize="9" fontFamily="monospace" textAnchor="middle">Hash: a8f9...</text>
                      <circle cx="480" cy="290" r="10" fill="#2e1065" stroke="#a855f7" strokeWidth="1.5" />
                      <text x="520" y="285" fill="#d8b4fe" fontSize="9" fontFamily="monospace">TTP: Spearphishing</text>
                    </svg>
                    {/* Side Inspector Panel */}
                    <div className="absolute right-4 top-4 bottom-4 w-64 bg-black/80 backdrop-blur-xl border border-neutral-800 rounded-lg p-4 flex flex-col shadow-2xl z-20">
                      <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                        <div className="text-[11px] font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-500" /> Node Inspector
                        </div>
                        <X className="w-3 h-3 text-neutral-500 cursor-pointer" />
                      </div>
                      <div className="mb-4">
                        <div className="text-[10px] text-neutral-500 mb-1">Selected Entity</div>
                        <div className="bg-purple-900/20 border border-purple-500/30 rounded p-2 text-white text-xs font-mono flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" /> APT-29 (Cozy Bear)
                        </div>
                      </div>
                      <div className="space-y-3 flex-1 overflow-y-auto mockup-scroll pr-1">
                        <div>
                          <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-1">Entity Resolution</div>
                          <p className="text-[10px] text-neutral-300 leading-relaxed bg-neutral-900/50 p-2 rounded border border-neutral-800">
                            Profiles are merged from 3 independent intelligence sources based on shared TTPs and IP infrastructure history.
                          </p>
                        </div>
                        <div>
                          <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-1">Temporal Timeline</div>
                          <div className="border-l border-neutral-800 ml-1.5 pl-3 space-y-2 py-1">
                            <div className="relative">
                              <div className="absolute -left-[17px] top-1 w-2 h-2 bg-neutral-600 rounded-full" />
                              <div className="text-[9px] text-neutral-500">12 Oct</div>
                              <div className="text-[10px] text-white">Domain Registered</div>
                            </div>
                            <div className="relative">
                              <div className="absolute -left-[17px] top-1 w-2 h-2 bg-purple-500 rounded-full" />
                              <div className="text-[9px] text-neutral-500">14 Oct</div>
                              <div className="text-[10px] text-white">First C2 Activity</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-[10px] py-1.5 rounded transition mt-2" type="button">Expand Full Graph</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-28 self-start">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">
                  <CircleDot className="w-3 h-3" /> Investigation
                </div>
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Network className="w-6 h-6" />
                  <h3 className="text-2xl font-medium text-white">Graph Analysis Module</h3>
                </div>
                <h4 className="text-xl font-light tracking-tight mb-4 text-neutral-300">Reveal hidden relationships across cyber infrastructure.</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  The Graph Database engine supports multi-hop analysis across campaigns. It merges threat actor identity profiles (Entity Resolution) and tracks technical asset movement through temporal analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Share2 className="w-3 h-3" /> Entity Resolution</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><History className="w-3 h-3" /> Temporal Engine</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Map className="w-3 h-3" /> Infra Mapping</span>
                </div>
                <button className="border border-neutral-700 bg-black/50 text-neutral-300 px-4 py-2 rounded text-xs font-medium hover:bg-neutral-800 transition flex items-center gap-2 backdrop-blur-md" type="button">
                  Graph API Docs <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </div>
            </div>

            {/* MODULE 3: RISK PREDICTION AI */}
            <div className="relative pl-[64px] md:pl-[144px] mb-10 grid lg:grid-cols-12 gap-12 items-start">
              <div className="absolute left-[27px] md:left-[91px] top-2 w-3 h-3 bg-neutral-800 border-2 border-neutral-600 rounded-full z-10 transition-colors duration-500 hover:bg-red-500 hover:border-white" />

              <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">
                  <CircleDot className="w-3 h-3" /> Strategic Defense
                </div>
                <div className="flex items-center gap-2 mb-3 text-red-400">
                  <BrainCircuit className="w-6 h-6" />
                  <h3 className="text-2xl font-medium text-white">Risk Prediction AI</h3>
                </div>
                <h4 className="text-xl font-light tracking-tight mb-4 text-neutral-300">Anticipate attacks before they happen.</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Comprehensively evaluates asset risk levels. The AI engine detects anomalies (deviations from baseline) and predicts future threat trends using geopolitical dynamics and historical data features (Feature Engineering).
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Activity className="w-3 h-3" /> Anomaly Detection</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><BarChart3 className="w-3 h-3" /> Risk Scoring</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1"><Cpu className="w-3 h-3" /> Predict Model</span>
                </div>
                <button className="border border-neutral-700 bg-black/50 text-neutral-300 px-4 py-2 rounded text-xs font-medium hover:bg-neutral-800 transition flex items-center gap-2 backdrop-blur-md" type="button">
                  ML Pipelines <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </div>

              {/* Risk Prediction Mockup */}
              <div className="lg:col-span-8 group perspective">
                <div className="rounded-xl border border-neutral-800/60 bg-[#070707] shadow-2xl overflow-hidden flex flex-col h-[520px] transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(239,68,68,0.1)]">
                  <div className="h-10 border-b border-neutral-800/60 flex items-center px-4 bg-neutral-900/40 justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                      <Cpu className="w-3 h-3" /> risk_evaluation_engine_v2.pt
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-500/20">Model Status: Online</div>
                  </div>
                  <div className="flex-1 p-5 flex flex-col gap-5 overflow-y-auto mockup-scroll relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
                    {/* Risk Dial & Explainable AI */}
                    <div className="grid grid-cols-5 gap-5">
                      <div className="col-span-2 bg-black/40 border border-neutral-800 rounded-xl p-4 flex flex-col items-center justify-center relative backdrop-blur-sm">
                        <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest mb-4">Enterprise Risk</div>
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="251" strokeDashoffset="35" strokeLinecap="round" className="transition-all duration-1000" />
                          </svg>
                          <div className="absolute text-center">
                            <div className="text-4xl font-light text-white tracking-tighter">87</div>
                            <div className="text-[9px] text-red-400 uppercase tracking-widest">High Risk</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 bg-black/40 border border-neutral-800 rounded-xl p-4 backdrop-blur-sm flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                            <BarChart2 className="w-3 h-3" /> Explainable AI Breakdown
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[10px] text-neutral-300 mb-1 font-mono"><span>Geopolitical_Anomaly</span> <span className="text-red-400">+78%</span></div>
                            <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-red-600 to-red-400 w-[78%]" /></div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-neutral-300 mb-1 font-mono"><span>Attack_Surface_Vuln</span> <span className="text-orange-400">+61%</span></div>
                            <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[61%]" /></div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-neutral-300 mb-1 font-mono"><span>Historical_Exposure</span> <span className="text-blue-400">+42%</span></div>
                            <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[42%]" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Anomaly Chart & Terminal */}
                    <div className="flex-1 grid grid-cols-2 gap-5">
                      <div className="bg-black/40 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
                        <div className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest mb-2">Network Anomaly Plot</div>
                        <svg className="w-full h-24" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M0,35 L10,32 L20,34 L30,30 L40,33 L50,31 L60,34 L70,32 L80,35 L90,33 L100,34 L100,40 L0,40 Z" fill="#1e293b" opacity="0.5" />
                          <polyline fill="none" stroke="#3b82f6" strokeWidth="1.5" points="0,32 10,29 20,31 30,28 40,30 50,28 60,10 70,5 80,12 90,30 100,32" />
                          <circle cx="70" cy="5" r="2" fill="#ef4444" className="animate-ping-slow" />
                          <circle cx="70" cy="5" r="1.5" fill="#ef4444" />
                          <line x1="70" y1="5" x2="70" y2="40" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2" />
                        </svg>
                        <div className="text-[9px] text-red-400 mt-2 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Deviation detected at t-2m
                        </div>
                      </div>
                      <div className="bg-[#020202] border border-neutral-800 rounded-xl p-3 font-mono text-[9px] text-neutral-400 shadow-inner flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-neutral-800/50">
                          <span className="uppercase tracking-widest text-neutral-600">Model Log</span>
                          <Terminal className="w-3 h-3 text-neutral-600" />
                        </div>
                        <div className="space-y-1 overflow-y-auto">
                          <div className="text-green-500">&gt; Executing eval_pipeline()</div>
                          <div>&gt; Ingesting recent SIEM features... [OK]</div>
                          <div className="text-yellow-400">&gt; WARNING: Volumetric spike on Port 443.</div>
                          <div>&gt; Correlating with Intel Connector...</div>
                          <div className="text-red-400 font-bold mt-1">&gt; ALERT: Signature overlaps with APT-29 cluster.</div>
                          <div className="text-red-400">&gt; Predictive Confidence: 94%</div>
                          <div className="text-white">&gt; Generating mitigation playbook... <span className="animate-pulse">_</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="bg-black py-32 px-6 border-t border-white/10 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 md:text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-6">
                <FileText className="w-3 h-3" /> AI Technical Specifications
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                Component & Sub-Module Architecture
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                A detailed breakdown of capabilities included in the AI development license extension for system maintenance and operations.
              </p>
            </div>

            <div className="space-y-24">
              {/* A. Information Dashboard */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                  <div className="flex items-center gap-3 text-blue-500 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20"><LayoutDashboard className="w-5 h-5" /></div>
                    <h3 className="text-2xl font-medium text-white">Information Dashboard</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    A cyber threat data visualization and integration center that supports strategic decision-making. It automatically groups all information by relevant categories and stores data in a centralized repository for incident investigation.
                  </p>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {([
                    ["Visualization Layer", "A unified web interface with charts, heatmaps, geographic views, and KPIs for strategic decision-making.", BarChart3, "text-blue-400"],
                    ["Threat Intel Connector", "Connects to external sources (commercial feeds, OSINT, ISAC) through APIs to retrieve the latest IOCs and reports.", Plug, "text-blue-400"],
                    ["Internal Monitoring Connector", "Collects and consolidates data from internal security systems (SIEM, EDR, IDS/IPS, firewall).", ShieldAlert, "text-blue-400"],
                    ["Open Source Crawler", "Crawls and ingests public open sources and dark web monitoring feeds to enrich threat context.", Globe, "text-blue-400"],
                    ["Auto-Categorization Engine", "An automated classification engine for actors, attack types, sectors, and regions based on a defined taxonomy.", Bot, "text-blue-400"],
                    ["Centralized Repository", "A unified data store for structured and unstructured information used in historical correlation and investigations.", Database, "text-blue-400"],
                    ["Role Management", "Manages authorization and authentication to ensure sensitive information is only accessed by approved users.", FileText, "text-blue-400"],
                  ] satisfies Array<[string, string, ComponentType<{ className?: string }>, string]>).map(([title, desc, Icon, iconColor]) => (
                    <div key={title} className="p-5 rounded-xl bg-[#050505] border border-neutral-800 hover:border-blue-500/50 transition duration-300 group">
                      <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                        <Icon className={`w-4 h-4 text-neutral-500 group-hover:${iconColor}`} /> {title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

              {/* B. Graph Analysis */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                  <div className="flex items-center gap-3 text-purple-500 mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"><Network className="w-5 h-5" /></div>
                    <h3 className="text-2xl font-medium text-white">Graph Analysis Module</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Supports deep analysis of relationships between actors, infrastructure, shared attack patterns (TTPs), and campaign coordination. Identifies key actors and propagation paths that could target national interests.
                  </p>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {([
                    ["Graph Database Engine", "A graph storage engine that holds actor entities, infrastructure, IOCs, and relationships for multi-hop traversal queries.", Share2, "text-purple-400"],
                    ["Entity Resolution Service", "Merges identical entities across representations from multiple sources, preventing duplicate threat actor nodes.", GitMerge, "text-purple-400"],
                    ["Relationship Inference Engine", "Analyzes shared TTPs and activity timelines to uncover hidden relationships between attack campaigns.", GitMerge, "text-purple-400"],
                    ["Infrastructure Mapping", "Maps C2 servers, domains, IPs, ASNs, and technical certificates used by actors along with their relationships.", ServerCog, "text-purple-400"],
                    ["Graph Vis Interface", "An interactive interface with zoom, pan, relationship filtering, and node expansion for visual analyst exploration.", MonitorPlay, "text-purple-400"],
                    ["Temporal Analysis Engine", "Cross-timeframe analysis that sequences activity chronologically and reveals attack propagation paths.", History, "text-purple-400"],
                  ] satisfies Array<[string, string, ComponentType<{ className?: string }>, string]>).map(([title, desc, Icon, iconColor]) => (
                    <div key={title} className="p-5 rounded-xl bg-[#050505] border border-neutral-800 hover:border-purple-500/50 transition duration-300 group">
                      <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                        <Icon className={`w-4 h-4 text-neutral-500 group-hover:${iconColor}`} /> {title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

              {/* C. Risk Prediction */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                  <div className="flex items-center gap-3 text-red-500 mb-4">
                    <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20"><BrainCircuit className="w-5 h-5" /></div>
                    <h3 className="text-2xl font-medium text-white">Risk Prediction Module</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    A core AI-powered component for assessing risk levels and future threat trends. It combines vulnerabilities, incident history, asset exposure, and geopolitical dynamics.
                  </p>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {([
                    ["Risk Scoring Engine", "Calculates measurable risk scores for assets and sectors by combining vulnerabilities, exposure, and incident history.", Calculator, "text-red-400"],
                    ["Exposure Analysis", "Measures how exposed assets are to attacks, including external attack surfaces and target digital footprints.", ScanLine, "text-red-400"],
                    ["Historical Analyzer", "Reviews incident history for related assets and sectors to identify recurring attack patterns and success trends.", FileSearch, "text-red-400"],
                    ["Anomaly Detection Engine", "An ML anomaly detection engine that recognizes security activity deviations from normal network baselines.", Activity, "text-red-400"],
                    ["Predictive AI Model", "Forecasts future attack trend directions by combining historical data with current intelligence.", Cpu, "text-red-400"],
                    ["Model Eval Pipeline", "Manages dataset update cycles, periodic retraining, and performance validation to keep AI model predictions accurate.", RefreshCw, "text-red-400"],
                    ["Feature Engineering", "Extracts features, normalizes data, and prepares training-ready datasets for all predictive AI models.", Filter, "text-red-400"],
                    ["Risk Reporting", "Reports risk scores with explanations of contributing factors (Explainable AI) for decision-makers.", FileText, "text-red-400"],
                  ] satisfies Array<[string, string, ComponentType<{ className?: string }>, string]>).map(([title, desc, Icon, iconColor]) => (
                    <div key={title} className="p-5 rounded-xl bg-[#050505] border border-neutral-800 hover:border-red-500/50 transition duration-300 group">
                      <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                        <Icon className={`w-4 h-4 text-neutral-500 group-hover:${iconColor}`} /> {title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build with Frameworks (Light Section) */}
        <section className="bg-[#f8f9fa] text-[#111827] py-24 px-6 border-t border-neutral-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between mb-16 items-end gap-6">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl">
                Build cross-sector security capabilities
              </h2>
              <p className="text-neutral-500 text-sm max-w-sm font-mono">
                Customized for deployment scenarios across intelligence agencies and national-scale private enterprises.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="h-32 bg-[#050505] rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-8 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] text-blue-300 font-mono absolute left-6 z-10">SIEM</div>
                  <div className="w-20 h-8 bg-neutral-800 border border-neutral-600 rounded flex items-center justify-center text-[10px] text-neutral-300 font-mono z-10">Core</div>
                  <div className="w-16 h-8 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center text-[10px] text-purple-300 font-mono absolute right-6 z-10">UI</div>
                  <div className="absolute h-[1px] w-full bg-neutral-700" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-black rounded text-white flex items-center justify-center"><Plug className="w-3 h-3" /></div>
                  <h4 className="font-semibold text-lg">Central Integration</h4>
                </div>
                <p className="text-sm text-neutral-600">Seamless integration between legacy systems (EDR/IPS) and modern threat analytics.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="h-32 bg-[#050505] rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full border border-blue-500 absolute top-5 left-1/2 -translate-x-1/2 bg-blue-500/10 z-10" />
                  <div className="w-8 h-8 rounded-full border border-neutral-500 absolute bottom-5 left-12 bg-neutral-900 z-10" />
                  <div className="w-8 h-8 rounded-full border border-neutral-500 absolute bottom-5 right-12 bg-neutral-900 z-10" />
                  <svg className="absolute inset-0 w-full h-full"><line x1="50%" y1="36" x2="30%" y2="84" stroke="#4b5563" strokeWidth="2" /><line x1="50%" y1="36" x2="70%" y2="84" stroke="#4b5563" strokeWidth="2" /></svg>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-black rounded text-white flex items-center justify-center"><Share2 className="w-3 h-3" /></div>
                  <h4 className="font-semibold text-lg">Graph Engine</h4>
                </div>
                <p className="text-sm text-neutral-600">Scalable relationship mapping across millions of threat actor entity nodes.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="h-32 bg-[#050505] rounded-lg mb-8 flex items-center justify-center">
                  <div className="flex gap-2 items-end h-16">
                    <div className="w-5 bg-neutral-700 h-[30%] rounded-t-sm" />
                    <div className="w-5 bg-neutral-700 h-[50%] rounded-t-sm" />
                    <div className="w-5 bg-red-500 h-[100%] rounded-t-sm" />
                    <div className="w-5 bg-neutral-700 h-[40%] rounded-t-sm" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-black rounded text-white flex items-center justify-center"><Zap className="w-3 h-3" /></div>
                  <h4 className="font-semibold text-lg">Anomaly AI</h4>
                </div>
                <p className="text-sm text-neutral-600">Machine Learning models focused on detecting traffic deviations and outliers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white text-black py-24 px-6 border-t border-neutral-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                Primary use cases
              </h2>
              <button className="border border-neutral-300 bg-transparent px-4 py-2 rounded text-xs font-semibold hover:bg-neutral-100 transition" type="button">
                View more scenarios
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-center gap-2 font-bold text-xl mb-6 text-blue-600">
                  <Radar className="w-6 h-6" /> Early Warning System
                </div>
                <h4 className="text-lg font-medium mb-3">National Infrastructure Early Detection</h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-1">
                  The system detects reconnaissance activity on government IPs before ransomware attacks occur. It reduces response time (MTTR) by up to 80% with automated mitigation.
                </p>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
                  Read Scenario <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-center gap-2 font-bold text-xl mb-6 text-purple-600">
                  <Landmark className="w-6 h-6" /> Financial Sector
                </div>
                <h4 className="text-lg font-medium mb-3">Fraud & Data Leak Prevention</h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-1">
                  Detects bank credential sales on the dark web in real time. Insight AI automatically maps the actors behind phishing campaigns and blocks related domains.
                </p>
                <a href="#" className="text-xs font-semibold text-purple-600 hover:text-purple-800 flex items-center gap-1 group">
                  Read Scenario <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-center gap-2 font-bold text-xl mb-6 text-red-600">
                  <Crosshair className="w-6 h-6" /> APT Tracking
                </div>
                <h4 className="text-lg font-medium mb-3">Advanced Persistent Threat Investigation</h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-1">
                  Uses Graph Analysis to connect TTP fragments used by the APT-29 group, revealing a hidden C2 server network targeting the energy sector.
                </p>
                <a href="#" className="text-xs font-semibold text-red-600 hover:text-red-800 flex items-center gap-1 group">
                  Read Scenario <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Social Proof */}
        <section className="bg-white text-black py-32 px-6">
          <div className="max-w-[1400px] mx-auto text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Join the ecosystem of <br />
                <span className="text-blue-600">agencies and enterprises</span><br /> securing national infrastructure.
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                Supports hundreds of cyber analysts in reading attack directions before they happen through multi-source integration and AI-powered prediction.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-12 md:gap-16">
              <div>
                <div className="text-6xl md:text-7xl font-medium tracking-tighter mb-2">500M+</div>
                <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">Logs Analyzed / Day</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-medium tracking-tighter mb-2">150+</div>
                <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">OSINT & SIEM Integrations</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-medium tracking-tighter mb-2">99%</div>
                <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">Anomaly Detection Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="relative overflow-hidden py-32 px-6 flex flex-col items-center justify-center bg-black border-b border-neutral-900">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">
              Bring your cyber defense <br />into focus
            </h2>
            <p className="text-neutral-400 mb-10 max-w-lg mx-auto">
              Start integrating security modules end to end. Monitor from one platform and manage risk proactively.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-neutral-200 transition" type="button">Start building</button>
              <button className="border border-neutral-700 bg-[#0a0a0a] px-6 py-3 rounded-md text-sm font-semibold hover:bg-neutral-800 transition" type="button">Get a demo</button>
            </div>
          </div>
        </section>

        {/* Standard Footer */}
        <footer className="bg-black py-12 px-6 text-sm text-neutral-500">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-semibold text-white tracking-tight mb-4 text-lg">
                <Hexagon className="w-5 h-5 text-blue-500" /> Insight AI
              </div>
              <p className="text-xs">AI Development License Extension Platform 2026.</p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Products</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">Information Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">Graph Analysis</a></li>
                <li><a href="#" className="hover:text-white transition">Risk Prediction AI</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Resources</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Security Specs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Company</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" /> All systems operational
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
