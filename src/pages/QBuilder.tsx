import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Command,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  LayoutDashboard,
  LineChart,
  Menu,
  Moon,
  MousePointer2,
  Network,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  Quote,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Table,
  Terminal,
  Users,
  X,
} from "lucide-react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// --- THEME CONTEXT ---
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});
const useTheme = () => useContext(ThemeContext);

// --- HOOKS & UTILS ---
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          entry.target.classList.remove("opacity-0", "translate-y-12", "scale-[0.98]");
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: string;
  className?: string;
}> = ({ children, delay = "", className = "" }) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 translate-y-12 scale-[0.98] ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const { isDark } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const spotlightColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group transition-colors duration-500 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none">
        {children}
      </div>
    </div>
  );
};

// --- UI MOCKUP COMPONENTS ---

const AIQueryMockup = () => {
  const { isDark } = useTheme();
  const fullText = "Generate a monthly revenue report grouped by region for the last 6 months.";
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setPhase(1);
        setTimeout(() => setPhase(2), 1500);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className={`w-[320px] md:w-100 backdrop-blur-xl border rounded-2xl overflow-hidden flex flex-col font-sans select-none transition-colors duration-500 shadow-2xl ${
        isDark ? "bg-[#0a0a0a]/90 border-white/10" : "bg-white/90 border-black/10"
      }`}
    >
      <div
        className={`h-10 border-b flex items-center px-4 justify-between transition-colors duration-500 ${
          isDark ? "bg-white/2 border-white/5" : "bg-zinc-50 border-black/5"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-xs font-semibold ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-500" /> AI Query Assistant
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div
          className={`border rounded-lg p-3 text-xs leading-relaxed font-medium min-h-15 transition-colors duration-500 ${
            isDark
              ? "bg-blue-500/10 border-blue-500/20 text-blue-200"
              : "bg-blue-50 border-blue-100 text-blue-800"
          }`}
        >
          &ldquo;{displayedText}
          {phase === 0 && <span className="animate-pulse">|</span>}&rdquo;
        </div>
        <div
          className={`h-px my-1 transition-colors duration-500 ${isDark ? "bg-white/5" : "bg-black/5"}`}
        ></div>

        <div
          className={`font-mono text-[10px] md:text-xs leading-relaxed p-3 rounded-lg border min-h-30 flex flex-col justify-center transition-colors duration-500 ${
            isDark
              ? "bg-[#050505] border-white/5 text-zinc-300"
              : "bg-zinc-50 border-black/5 text-zinc-700"
          }`}
        >
          {phase === 1 && (
            <div className="flex items-center justify-center gap-2 text-zinc-500 animate-pulse">
              <Sparkles className="w-4 h-4" /> Synthesizing optimized SQL...
            </div>
          )}
          {phase === 2 && (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <span className="text-blue-500">SELECT</span> region, <br />
              &nbsp;&nbsp;DATE_TRUNC(
              <span className="text-zinc-400">&apos;month&apos;</span>, date){" "}
              <span className="text-blue-500">AS</span> mth,
              <br />
              &nbsp;&nbsp;SUM(revenue) <span className="text-blue-500">AS</span> total
              <br />
              <span className="text-blue-500">FROM</span> sales_data
              <br />
              <span className="text-blue-500">GROUP BY</span> 1, 2;
            </div>
          )}
        </div>

        <button
          type="button"
          className={`w-full text-xs py-2 rounded transition flex justify-center items-center gap-2 font-medium ${
            phase === 2
              ? isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
              : isDark
                ? "bg-white/10 text-white/50 cursor-not-allowed"
                : "bg-black/5 text-black/40 cursor-not-allowed"
          }`}
        >
          <Terminal className="w-3.5 h-3.5" /> Run Pipeline
        </button>
      </div>
    </div>
  );
};

const DashboardMockup = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-87.5 md:w-150 h-95 md:h-112.5 backdrop-blur-2xl border rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans select-none relative z-20 transition-colors duration-500 ${
        isDark ? "bg-[#050505]/80 border-white/10" : "bg-white/80 border-black/10"
      }`}
    >
      <div
        className={`h-12 border-b flex items-center px-4 justify-between transition-colors duration-500 ${
          isDark ? "bg-white/3 border-white/10" : "bg-zinc-50 border-black/10"
        }`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-700"></div>
        </div>
        <div
          className={`text-xs font-semibold px-4 py-1.5 rounded-full border flex items-center gap-2 transition-colors duration-500 ${
            isDark
              ? "bg-zinc-900 border-white/5 text-zinc-300"
              : "bg-white border-black/10 text-zinc-700 shadow-sm"
          }`}
        >
          <LayoutDashboard
            className={`w-3.5 h-3.5 ${isDark ? "text-zinc-400" : "text-blue-500"}`}
          />{" "}
          Executive Overview
        </div>
        <div className="w-12"></div>
      </div>

      <div className="p-4 md:p-6 flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`border rounded-xl p-4 transition-colors duration-500 ${
              isDark ? "bg-white/5 border-white/5" : "bg-zinc-50 border-black/5"
            }`}
          >
            <div className={`text-xs mb-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
              Total Revenue
            </div>
            <div
              className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}
            >
              $1.24M
            </div>
            <div className="text-[10px] text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </div>
          </div>
          <div
            className={`border rounded-xl p-4 relative overflow-hidden transition-colors duration-500 ${
              isDark ? "bg-white/5 border-white/5" : "bg-zinc-50 border-black/5"
            }`}
          >
            <div className={`text-xs mb-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
              Active Users
            </div>
            <div
              className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}
            >
              45,290
            </div>
            <div className="text-[10px] text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +5.2%
            </div>
          </div>
        </div>

        <div
          className={`flex-1 border rounded-xl p-4 flex flex-col h-full min-h-37.5 transition-colors duration-500 ${
            isDark ? "bg-white/5 border-white/5" : "bg-zinc-50 border-black/5"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className={`text-sm font-semibold ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
              Revenue Growth
            </div>
            <div className="flex gap-2">
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center text-blue-500 ${
                  isDark ? "bg-white/10" : "bg-white shadow-sm border border-black/5"
                }`}
              >
                <BarChart3 className="w-3 h-3" />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex items-end justify-between gap-1 md:gap-2">
            {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-t-sm border-t border-x transition-all duration-500 ${
                  i === 6
                    ? "bg-blue-500 border-blue-400"
                    : isDark
                      ? "bg-zinc-700 border-zinc-600"
                      : "bg-zinc-200 border-zinc-300"
                }`}
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataSourcesMockup = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-70 md:w-[320px] backdrop-blur-xl border rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans select-none transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a]/90 border-white/10" : "bg-white/90 border-black/10"
      }`}
    >
      <div
        className={`h-10 border-b flex items-center px-4 justify-between transition-colors duration-500 ${
          isDark ? "bg-white/2 border-white/5" : "bg-zinc-50 border-black/5"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-xs font-semibold ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          <Database className="w-3.5 h-3.5 text-zinc-400" /> Data Connections
        </div>
        <span
          className={`flex items-center gap-1.5 text-[9px] px-2 py-0.5 rounded-full border font-bold transition-colors duration-500 ${
            isDark
              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
              : "bg-blue-50 text-blue-600 border-blue-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Synchronized
        </span>
      </div>
      <div className="p-4 space-y-3">
        {(
          [
            {
              name: "Production DB",
              type: "PostgreSQL",
              color: "text-blue-500",
              bg: isDark ? "bg-blue-500/10" : "bg-blue-50",
            },
            {
              name: "Analytics Cluster",
              type: "Snowflake",
              color: "text-blue-500",
              bg: isDark ? "bg-blue-500/10" : "bg-blue-50",
            },
            {
              name: "Payment Gateway",
              type: "Stripe API",
              color: "text-zinc-500",
              bg: isDark ? "bg-zinc-800" : "bg-zinc-100",
            },
          ] as const
        ).map((src, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-colors duration-500 ${
              isDark
                ? "bg-white/5 border-white/5 hover:bg-white/10"
                : "bg-zinc-50 border-black/5 hover:bg-zinc-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${src.bg}`}>
                <Database className={`w-4 h-4 ${src.color}`} />
              </div>
              <div>
                <div className={`text-xs font-bold ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>
                  {src.name}
                </div>
                <div className="text-[10px] text-zinc-500">{src.type}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] flex items-center justify-end gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- DEVELOPER EXPERIENCE CODE MOCKUP ---
const IDEMockup = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-full h-full min-h-75 border rounded-2xl flex flex-col overflow-hidden font-mono text-xs md:text-sm shadow-2xl transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a] border-white/10" : "bg-[#1e1e1e] border-black/20"
      }`}
    >
      <div
        className={`h-10 border-b flex items-center px-4 gap-4 transition-colors duration-500 ${
          isDark ? "bg-[#111] border-white/5" : "bg-[#2d2d2d] border-black/20"
        }`}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 text-zinc-400 font-sans text-xs">
          <FileCode2 className="w-3.5 h-3.5" /> CustomChart.jsx
        </div>
      </div>
      <div className="p-4 md:p-6 text-zinc-300 flex-1 overflow-x-auto whitespace-pre">
        <span className="text-pink-400">import</span> {"{"} useQuery, DataGrid {"}"}{" "}
        <span className="text-pink-400">from</span>{" "}
        <span className="text-green-300">&apos;@qbuilder/react&apos;</span>
        {";"}
        <br />
        <br />
        <span className="text-pink-400">export default function</span>{" "}
        <span className="text-blue-300">CustomDashboard</span>() {"{"}
        <br />
        {"  "}
        <span className="text-pink-400">const</span> {"{"} data, isLoading {"}"} ={" "}
        <span className="text-blue-300">useQuery</span>(
        <span className="text-green-300">&apos;get_revenue_data&apos;</span>);
        <br />
        <br />
        {"  "}
        <span className="text-pink-400">if</span> (isLoading){" "}
        <span className="text-pink-400">return</span> &lt;
        <span className="text-blue-300">Spinner</span> /&gt;;
        <br />
        <br />
        {"  "}
        <span className="text-pink-400">return</span> (<br />
        {"    "}&lt;<span className="text-blue-300">div</span>{" "}
        <span className="text-blue-200">className</span>=
        <span className="text-green-300">&quot;p-6 bg-white rounded-xl&quot;</span>
        &gt;
        <br />
        {"      "}&lt;<span className="text-blue-300">h1</span>&gt;Live Revenue Sync&lt;/
        <span className="text-blue-300">h1</span>&gt;
        <br />
        {"      "}&lt;<span className="text-blue-300">DataGrid</span>{" "}
        <span className="text-blue-200">source</span>={"{"}data{"}"}{" "}
        <span className="text-blue-200">interactive</span> /&gt;
        <br />
        {"    "}&lt;/<span className="text-blue-300">div</span>&gt;
        <br />
        {"  "});
        <br />
        {"}"}
      </div>
    </div>
  );
};

// --- BOTTOM DESIGNER UI ---
const DesignerUI = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-full h-150 border-t border-x rounded-t-3xl flex flex-col overflow-hidden shadow-2xl font-sans text-left z-20 relative transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10"
      }`}
    >
      <div
        className={`h-14 border-b flex items-center justify-between px-6 transition-colors duration-500 ${
          isDark ? "bg-[#0f0f0f] border-white/10" : "bg-zinc-50 border-black/10"
        }`}
      >
        <div className="flex items-center gap-6">
          <div
            className={`text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-2 border transition-colors duration-500 ${
              isDark
                ? "bg-white/5 text-zinc-300 border-white/5"
                : "bg-white text-zinc-700 border-black/10 shadow-sm"
            }`}
          >
            <LayoutDashboard className="w-3 h-3 text-blue-500" /> Executive Dashboard{" "}
            <ChevronDown className="w-3 h-3 text-zinc-500" />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="text-zinc-500 hover:text-blue-500 text-xs font-semibold px-3 py-1.5 transition"
          >
            Preview
          </button>
          <button
            type="button"
            className={`text-xs font-bold px-5 py-1.5 rounded-md transition shadow-md ${
              isDark
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
          >
            Publish App
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`hidden md:flex w-64 border-r flex-col text-sm transition-colors duration-500 ${
            isDark ? "bg-[#0a0a0a] border-white/10" : "bg-zinc-50 border-black/10"
          }`}
        >
          <div
            className={`p-4 border-b font-semibold transition-colors duration-500 ${
              isDark ? "border-white/5 text-zinc-300" : "border-black/5 text-zinc-800"
            }`}
          >
            Components
          </div>
          <div className="p-4 space-y-6 overflow-y-auto">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-3">
                Charts
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={`border rounded p-3 flex flex-col items-center gap-2 cursor-grab transition shadow-sm ${
                    isDark
                      ? "bg-white/5 border-white/5 hover:bg-white/10"
                      : "bg-white border-black/5 hover:bg-zinc-100"
                  }`}
                >
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] text-zinc-500">Bar</span>
                </div>
                <div
                  className={`border rounded p-3 flex flex-col items-center gap-2 cursor-grab transition shadow-sm ${
                    isDark
                      ? "bg-white/5 border-white/5 hover:bg-white/10"
                      : "bg-white border-black/5 hover:bg-zinc-100"
                  }`}
                >
                  <LineChart className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] text-zinc-500">Line</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-3">
                Data
              </div>
              <div className="space-y-2">
                <div
                  className={`border rounded p-2 flex items-center gap-3 cursor-grab transition shadow-sm ${
                    isDark
                      ? "bg-white/5 border-white/5 hover:bg-white/10"
                      : "bg-white border-black/5 hover:bg-zinc-100"
                  }`}
                >
                  <Table className="w-4 h-4 text-zinc-400" />
                  <span className={`text-[11px] ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                    Data Grid
                  </span>
                </div>
                <div
                  className={`border rounded p-2 flex items-center gap-3 cursor-grab transition shadow-sm ${
                    isDark
                      ? "bg-white/5 border-white/5 hover:bg-white/10"
                      : "bg-white border-black/5 hover:bg-zinc-100"
                  }`}
                >
                  <Activity className="w-4 h-4 text-zinc-400" />
                  <span className={`text-[11px] ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                    KPI Metric
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 p-6 lg:p-8 relative overflow-y-auto flex justify-center items-start transition-colors duration-500 ${
            isDark ? "bg-[#050505] bg-mini-grid-dark" : "bg-zinc-100 bg-mini-grid-light"
          }`}
        >
          <div className="w-full max-w-3xl grid grid-cols-3 gap-4 lg:gap-6 relative z-10">
            <div
              className={`border rounded-xl p-5 shadow-sm transition-colors duration-500 ${
                isDark ? "bg-zinc-900/80 border-white/5" : "bg-white border-black/5"
              }`}
            >
              <div className="text-zinc-500 text-xs font-semibold mb-2">Total Sales</div>
              <div className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                $845,290
              </div>
              <div className="text-[10px] text-emerald-500 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +14.5%
              </div>
            </div>

            <div
              className={`border-2 border-blue-500 rounded-xl p-5 relative shadow-lg transition-colors duration-500 ${
                isDark ? "bg-zinc-900/80" : "bg-white"
              }`}
            >
              <div className="absolute -top-3 left-4 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow">
                KPI Metric
              </div>
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm"></div>

              <div className="text-zinc-500 text-xs font-semibold mb-2">New Customers</div>
              <div className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                1,240
              </div>
              <div className="text-[10px] text-emerald-500 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +8.2%
              </div>
            </div>

            <div
              className={`border rounded-xl p-5 shadow-sm transition-colors duration-500 ${
                isDark ? "bg-zinc-900/80 border-white/5" : "bg-white border-black/5"
              }`}
            >
              <div className="text-zinc-500 text-xs font-semibold mb-2">Churn Rate</div>
              <div className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                2.4%
              </div>
              <div className="text-[10px] text-red-500 flex items-center gap-1">-0.5%</div>
            </div>

            <div
              className={`col-span-3 border rounded-xl p-6 h-64 flex flex-col shadow-sm transition-colors duration-500 ${
                isDark ? "bg-zinc-900/80 border-white/5" : "bg-white border-black/5"
              }`}
            >
              <div
                className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}
              >
                Revenue by Region
              </div>
              <div className="flex-1 w-full flex items-end justify-between gap-2">
                {[40, 65, 85, 50, 70].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-sm border-t border-x relative group/bar hover:opacity-80 transition-all duration-500 ${
                      i === 2
                        ? "bg-blue-500 border-blue-400"
                        : isDark
                          ? "bg-zinc-700 border-zinc-600"
                          : "bg-zinc-200 border-zinc-300"
                    }`}
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-medium text-zinc-500 w-full px-2">
                <span className="w-full text-center">NA</span>
                <span className="w-full text-center">EMEA</span>
                <span className="w-full text-center">APAC</span>
                <span className="w-full text-center">LATAM</span>
                <span className="w-full text-center">AFR</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden lg:flex w-72 border-l flex-col text-xs overflow-y-auto transition-colors duration-500 ${
            isDark ? "bg-[#0a0a0a] border-white/10" : "bg-zinc-50 border-black/10"
          }`}
        >
          <div
            className={`flex border-b p-1 transition-colors duration-500 ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-black/5"
            }`}
          >
            <button
              type="button"
              className="flex-1 py-2 text-center text-zinc-500 hover:text-blue-500 font-medium rounded transition"
            >
              Style
            </button>
            <button
              type="button"
              className={`flex-1 py-2 text-center font-semibold rounded border shadow-sm transition-colors duration-500 ${
                isDark
                  ? "bg-zinc-800 text-white border-white/10"
                  : "bg-zinc-100 text-zinc-900 border-black/10"
              }`}
            >
              Data
            </button>
            <button
              type="button"
              className="flex-1 py-2 text-center text-zinc-500 hover:text-blue-500 font-medium rounded transition"
            >
              Logic
            </button>
          </div>

          <div className="p-5 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-3 flex items-center justify-between">
                Data Source <Settings className="w-3 h-3 cursor-pointer" />
              </div>
              <div
                className={`border rounded p-2.5 flex items-center gap-2 mb-2 shadow-inner transition-colors duration-500 ${
                  isDark ? "bg-black border-blue-500/30" : "bg-white border-blue-200"
                }`}
              >
                <Terminal className="w-4 h-4 text-blue-500" />
                <span
                  className={`font-mono text-[11px] truncate flex-1 ${
                    isDark ? "text-zinc-300" : "text-zinc-800"
                  }`}
                >
                  q_new_customers
                </span>
                <ChevronDown className="w-3 h-3 text-zinc-500" />
              </div>
            </div>

            <div
              className={`h-px transition-colors duration-500 ${isDark ? "bg-white/10" : "bg-black/10"}`}
            ></div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-3">
                Field Mapping
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-zinc-500 mb-1.5 flex justify-between">
                    Metric Value{" "}
                    <span
                      className={`text-[9px] px-1 rounded ${
                        isDark ? "bg-white/10 text-zinc-400" : "bg-black/5 text-zinc-600"
                      }`}
                    >
                      Number
                    </span>
                  </div>
                  <div
                    className={`border rounded px-2.5 py-2 flex justify-between items-center cursor-pointer transition shadow-sm ${
                      isDark
                        ? "bg-black border-white/10 hover:border-white/30"
                        : "bg-white border-black/10 hover:border-black/30"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] ${
                        isDark ? "text-zinc-300" : "text-zinc-800"
                      }`}
                    >
                      <span className="text-blue-500 font-bold">∑</span> count_users
                    </span>
                    <ChevronDown className="w-3 h-3 text-zinc-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function QBuilder() {
  // Theme State (true = Dark, false = Light)
  const [isDark, setIsDark] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("connect");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll Event
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust body background color class based on theme
  useEffect(() => {
    document.body.className = `antialiased overflow-x-hidden transition-colors duration-500 ${
      isDark ? "bg-[#050505] text-white dark-mode-scroll" : "bg-zinc-50 text-zinc-900"
    }`;
  }, [isDark]);

  // Parallax Mouse Effect
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroRef.current.style.setProperty("--tilt-x", `${y}deg`);
    heroRef.current.style.setProperty("--tilt-y", `${-x}deg`);
  };

  const faqs = [
    {
      q: "Can I self-host QBuilder on my own infrastructure?",
      a: "Yes. Enterprise customers can deploy QBuilder on AWS, GCP, or Azure using our Docker images or Helm charts. We ensure your data never leaves your VPC.",
    },
    {
      q: "Does QBuilder store my database credentials?",
      a: "No. We use a proprietary zero-trust tunneling architecture. Credentials are encrypted at rest with keys managed by your own KMS (Key Management Service).",
    },
    {
      q: "Can I export my dashboards as pure React code?",
      a: "Absolutely. You are never locked in. One click exports your entire visual dashboard into clean, maintainable React components and Tailwind CSS.",
    },
    {
      q: "How does the pricing scale with my user base?",
      a: "Unlike legacy BI tools, we do not charge per end-user viewer. You only pay for the internal developers and editors who actively build dashboards on the platform.",
    },
  ];

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
      <div className="min-h-screen relative font-sans selection:bg-blue-500/30">
        {/* TOP BANNER */}
        <div
          className={`border-b text-xs font-medium text-center py-2.5 px-4 flex items-center justify-center gap-2 cursor-pointer relative z-60 transition-colors duration-500 ${
            isDark
              ? "bg-zinc-900 border-white/10 text-zinc-300 hover:bg-zinc-800"
              : "bg-zinc-100 border-black/5 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
            NEW
          </span>
          Announcing QBuilder AI 2.0: Generate complex SQL & automate reports with a single prompt.
          <span
            className={`flex items-center underline underline-offset-2 font-semibold ${
              isDark ? "text-white" : "text-blue-600"
            }`}
          >
            Read Launch Post <ArrowRight className="w-3 h-3 ml-1" />
          </span>
        </div>

        {/* AMBIENT BACKGROUNDS */}
        <div
          className={`fixed inset-0 z-0 pointer-events-none transition-all duration-500 ${
            isDark ? "bg-grid-dark opacity-40" : "bg-grid-light opacity-60"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full pointer-events-none z-0 transition-all duration-500 ${
            isDark ? "bg-blue-600/10 blur-[150px]" : "bg-blue-400/10 blur-[100px]"
          }`}
        ></div>

        {/* FLOATING NAVBAR */}
        <div
          className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            scrolled
              ? "top-4 w-[95%] lg:w-[85%] max-w-300"
              : "top-10 w-full px-6 lg:px-12 max-w-350"
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
              scrolled
                ? `${
                    isDark
                      ? "bg-[#0a0a0a]/80 border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]"
                      : "bg-white/80 border border-black/10 shadow-lg"
                  } backdrop-blur-xl rounded-full px-6 py-3`
                : "bg-transparent border-transparent py-4"
            }`}
          >
            <div className="flex items-center gap-8">
              <div
                className={`text-xl font-bold tracking-tight flex items-center gap-2 cursor-pointer ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center ${
                    isDark ? "bg-white" : "bg-zinc-900"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-sm ${isDark ? "bg-blue-600" : "bg-white"}`}
                  ></div>
                </div>
                QBuilder
              </div>
              <div
                className={`hidden lg:flex items-center gap-6 text-sm font-medium ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                <button
                  type="button"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  Platform
                </button>
                <button
                  type="button"
                  className={`transition flex items-center gap-1 ${
                    isDark ? "hover:text-white" : "hover:text-zinc-900"
                  }`}
                >
                  Solutions
                </button>
                <button
                  type="button"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  Customers
                </button>
                <button
                  type="button"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  Pricing
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition ${
                  isDark ? "text-zinc-400 hover:bg-zinc-800" : "text-zinc-500 hover:bg-zinc-100"
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                type="button"
                className={`transition px-2 ${
                  isDark ? "text-zinc-300 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Log in
              </button>
              <button
                type="button"
                className={`px-5 py-2.5 rounded-full transition shadow-md ${
                  isDark
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                Start for free
              </button>
            </div>
            <button
              type="button"
              className={`lg:hidden ${isDark ? "text-white" : "text-zinc-900"}`}
            >
              <Menu />
            </button>
          </nav>
        </div>

        {/* HERO SECTION */}
        <main
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          className="relative z-10 pt-40 pb-20 max-w-350 mx-auto flex flex-col items-center justify-center overflow-hidden"
        >
          <div
            className="text-center px-4 max-w-4xl mx-auto mb-16 relative z-30 transition-transform duration-200"
            style={{
              transform:
                "rotateX(calc(var(--tilt-x, 0) * 0.2)) rotateY(calc(var(--tilt-y, 0) * 0.2))",
            }}
          >
            <Reveal>
              <div
                className={`inline-flex items-center gap-2 border px-3 py-1.5 rounded-full text-xs font-medium mb-8 backdrop-blur-md transition-colors duration-500 ${
                  isDark
                    ? "bg-white/5 border-white/10 text-zinc-300"
                    : "bg-white/50 border-black/10 text-zinc-600 shadow-sm"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-zinc-400" /> Build BI tools without the frontend
                code.
              </div>
              <h1
                className={`text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Ship Data Apps.
                <br />
                <span
                  className={`text-transparent bg-clip-text bg-linear-to-r ${
                    isDark
                      ? "from-zinc-100 via-zinc-400 to-zinc-600"
                      : "from-blue-600 via-indigo-600 to-emerald-600"
                  }`}
                >
                  At the speed of thought.
                </span>
              </h1>
              <p
                className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Connect your databases, let AI generate the heavy SQL, and visually design
                enterprise-grade dashboards. The ultimate platform for fast-moving data teams.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  className={`w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-xl ${
                    isDark
                      ? "bg-white text-black shadow-white/10"
                      : "bg-zinc-900 text-white shadow-black/10"
                  }`}
                >
                  Start Building Free
                </button>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className={`w-full sm:w-auto border px-8 py-4 rounded-full text-base font-medium transition flex items-center justify-center gap-2 backdrop-blur-md ${
                    isDark
                      ? "bg-white/5 hover:bg-white/10 border-white/10 text-white"
                      : "bg-white hover:bg-zinc-50 border-black/10 text-zinc-800 shadow-sm"
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" /> View Live Demo
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay="delay-200" className="w-full">
            <div
              className="relative w-full h-112.5 md:h-150 flex justify-center items-center mt-10 md:mt-0 transition-transform duration-200 ease-out"
              style={{
                transform: "rotateX(var(--tilt-x, 0)) rotateY(var(--tilt-y, 0))",
              }}
            >
              <div
                className="absolute z-10 animate-float"
                style={
                  {
                    "--rot": "-6deg",
                    transform: "translateX(-45%) scale(0.65)",
                  } as React.CSSProperties
                }
              >
                <div className="md:transform md:translate-x-[-70%] lg:translate-x-[-90%] md:scale-85 lg:scale-90 opacity-80 hover:opacity-100 hover:z-40 transition-all duration-500 cursor-pointer">
                  <AIQueryMockup />
                </div>
              </div>
              <div
                className="absolute z-10 animate-float"
                style={
                  {
                    "--rot": "6deg",
                    transform: "translateX(45%) scale(0.65)",
                  } as React.CSSProperties
                }
              >
                <div className="md:transform md:translate-x-[70%] lg:translate-x-[90%] md:scale-85 lg:scale-90 opacity-80 hover:opacity-100 hover:z-40 transition-all duration-500 cursor-pointer">
                  <DataSourcesMockup />
                </div>
              </div>
              <div
                className="absolute z-30 animate-float"
                style={{ "--rot": "0deg" } as React.CSSProperties}
              >
                <div className="transform scale-90 md:scale-100 hover:scale-[1.02] transition-transform duration-500">
                  <DashboardMockup />
                </div>
              </div>
            </div>
          </Reveal>
        </main>

        {/* LOGO TICKER */}
        <div
          className={`relative py-12 border-y overflow-hidden z-10 transition-colors duration-500 ${
            isDark ? "bg-white/1 border-white/5" : "bg-black/1 border-black/5"
          }`}
        >
          <div
            className={`absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r z-20 transition-colors duration-500 ${
              isDark ? "from-[#050505] to-transparent" : "from-zinc-50 to-transparent"
            }`}
          ></div>
          <div
            className={`absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l z-20 transition-colors duration-500 ${
              isDark ? "from-[#050505] to-transparent" : "from-zinc-50 to-transparent"
            }`}
          ></div>
          <div className="flex items-center gap-24 animate-[marquee_40s_linear_infinite] whitespace-nowrap px-10">
            {[...Array(2)].map((_, j) => (
              <React.Fragment key={j}>
                {[
                  "Snowflake",
                  "Stripe",
                  "Databricks",
                  "Linear",
                  "Supabase",
                  "Vercel",
                  "Notion",
                  "Ramp",
                ].map((logo, i) => (
                  <span
                    key={`${j}-${i}`}
                    className={`text-xl md:text-2xl font-black uppercase tracking-widest transition-colors duration-500 ${
                      isDark ? "text-white/20" : "text-black/20"
                    }`}
                  >
                    {logo}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS SECTION */}
        <section className="py-32 px-6 max-w-300 mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className={`text-3xl lg:text-5xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                The fastest path to production.
              </h2>
              <p
                className={`text-lg font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                From raw database connection to a fully interactive dashboard in minutes. We handle
                the infrastructure, you focus on delivering insights.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay="delay-100">
              <div className="space-y-4">
                {[
                  {
                    id: "connect",
                    icon: <Database />,
                    title: "1. Unify Your Data",
                    desc: "Securely integrate PostgreSQL, Snowflake, MongoDB, or any REST API in seconds with zero configuration.",
                  },
                  {
                    id: "query",
                    icon: <Terminal />,
                    title: "2. Query with AI & SQL",
                    desc: "Write standard SQL, or let our native LLM synthesize complex CTEs and joins automatically based on your prompt.",
                  },
                  {
                    id: "visualize",
                    icon: <BarChart3 />,
                    title: "3. Drag, Drop, & Deploy",
                    desc: "Bind data to beautiful, responsive React charts visually. Publish and share with a single click.",
                  },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      activeTab === tab.id
                        ? isDark
                          ? "bg-white/10 border-white/20"
                          : "bg-white border-black/10 shadow-md"
                        : isDark
                          ? "bg-transparent border-transparent hover:bg-white/5"
                          : "bg-transparent border-transparent hover:bg-black/5"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-2 font-bold text-lg transition-colors duration-500 ${
                        activeTab === tab.id
                          ? isDark
                            ? "text-white"
                            : "text-blue-600"
                          : isDark
                            ? "text-zinc-500"
                            : "text-zinc-500"
                      }`}
                    >
                      {tab.icon} {tab.title}
                    </div>
                    <p
                      className={`pl-10 text-sm leading-relaxed transition-colors duration-500 ${
                        activeTab === tab.id
                          ? isDark
                            ? "text-zinc-300"
                            : "text-zinc-700"
                          : "text-zinc-500 hidden"
                      }`}
                    >
                      {tab.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal
              delay="delay-200"
              className={`border rounded-3xl p-6 h-100 flex items-center justify-center relative overflow-hidden shadow-2xl transition-colors duration-500 ${
                isDark ? "bg-[#0a0a0a] border-white/10" : "bg-zinc-100 border-black/10"
              }`}
            >
              <div
                className={`absolute inset-0 blur-[50px] transition-colors duration-500 ${
                  isDark ? "bg-blue-500/5" : "bg-blue-500/10"
                }`}
              ></div>
              <div className="relative z-10 w-full">
                {activeTab === "connect" && (
                  <div className="animate-[fadeIn_0.5s_ease-out] flex justify-center scale-110">
                    <DataSourcesMockup />
                  </div>
                )}
                {activeTab === "query" && (
                  <div className="animate-[fadeIn_0.5s_ease-out] flex justify-center scale-110">
                    <div
                      className={`w-87.5 rounded-xl border p-4 font-mono text-xs shadow-xl transition-colors duration-500 ${
                        isDark
                          ? "bg-[#111] border-white/10 text-blue-400"
                          : "bg-white border-black/10 text-blue-600"
                      }`}
                    >
                      <span className={isDark ? "text-zinc-400" : "text-zinc-500"}>
                        &gt; Connecting to Production DB...
                      </span>
                      <br />
                      <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>
                        ✓ Secure SSL Connection established
                      </span>
                      <br />
                      <br />
                      SELECT * FROM users LIMIT 100;
                      <br />
                      <span className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                        Query OK, 100 rows fetched in 0.02s
                      </span>
                    </div>
                  </div>
                )}
                {activeTab === "visualize" && (
                  <div className="animate-[fadeIn_0.5s_ease-out] flex justify-center scale-90">
                    <DashboardMockup />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTEGRATIONS / ECOSYSTEM HUB */}
        <section
          className={`py-24 px-6 relative z-10 border-t transition-colors duration-500 ${
            isDark ? "bg-[#030303] border-white/5" : "bg-zinc-50 border-black/5"
          }`}
        >
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Connects to your entire stack.
              </h2>
              <p
                className={`text-lg font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Native integrations for standardized databases, data warehouses, and custom
                REST/GraphQL APIs. Secure tunneling out of the box.
              </p>
            </div>
          </Reveal>
          <Reveal delay="delay-100" className="max-w-250 mx-auto">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {[
                "PostgreSQL",
                "Snowflake",
                "MySQL",
                "MongoDB",
                "Redis",
                "Stripe API",
                "Salesforce",
                "BigQuery",
                "AWS S3",
                "GraphQL",
              ].map((tech, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full border shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20"
                      : "bg-white border-black/10 text-zinc-700 hover:shadow-md"
                  }`}
                >
                  {i % 3 === 0 ? (
                    <Database className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                  ) : i % 2 === 0 ? (
                    <Network
                      className={`w-4 h-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                  ) : (
                    <Globe
                      className={`w-4 h-4 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                    />
                  )}
                  <span className="font-semibold text-sm">{tech}</span>
                </div>
              ))}
              <div
                className={`flex items-center gap-2 px-5 py-3 rounded-full border border-dashed transition-all duration-300 cursor-pointer ${
                  isDark
                    ? "bg-transparent border-white/20 text-zinc-500 hover:border-white/40 hover:text-white"
                    : "bg-transparent border-black/20 text-zinc-500 hover:border-black/40 hover:text-black"
                }`}
              >
                <Plus className="w-4 h-4" />{" "}
                <span className="font-semibold text-sm">View all 50+ Integrations</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* BENTO GRID SECTION */}
        <section className="py-20 px-6 max-w-300 mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Enterprise power. Startup agility.
              </h2>
              <p
                className={`text-lg font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Engineered for scale. From real-time multiplayer to SOC2 compliance, QBuilder equips
                your team with world-class primitives out of the box.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[420px]">
            {/* Box 1 (Wide): Visual Builder */}
            <Reveal className="md:col-span-2 h-full">
              <SpotlightCard
                className={`border rounded-3xl p-6 md:p-8 flex flex-col items-start justify-between h-full gap-6 transition-colors duration-500 ${
                  isDark
                    ? "bg-[#0a0a0a] border-white/10"
                    : "bg-white border-black/5 shadow-xl shadow-black/5"
                }`}
              >
                <div className="relative z-10 max-w-md pointer-events-auto">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-500 ${
                      isDark
                        ? "bg-white/5 border-white/10 text-zinc-300"
                        : "bg-zinc-100 border-black/5 text-zinc-700"
                    }`}
                  >
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Pixel-Perfect UI Builder
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    Say goodbye to wrangling React states or CSS. Map your data outputs directly
                    onto interactive, responsive components onto an infinite canvas.
                  </p>
                </div>

                <div
                  className={`relative w-full flex-1 border rounded-xl overflow-hidden flex font-sans mt-3 transition-colors duration-500 ${
                    isDark
                      ? "bg-[#0c0c0c] border-white/10 shadow-2xl"
                      : "bg-zinc-50 border-black/5 shadow-inner"
                  }`}
                >
                  <div
                    className={`w-16 border-r p-2 flex flex-col gap-2 transition-colors duration-500 ${
                      isDark ? "bg-[#080808] border-white/5" : "bg-white border-black/5"
                    }`}
                  >
                    <div
                      className={`w-full aspect-square rounded flex items-center justify-center transition-colors duration-500 ${
                        isDark ? "bg-white/5 text-zinc-400" : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      <BarChart3 size={14} />
                    </div>
                    <div
                      className={`w-full aspect-square border rounded flex items-center justify-center transition-colors duration-500 ${
                        isDark
                          ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                          : "bg-blue-50 border-blue-200 text-blue-600"
                      }`}
                    >
                      <PieChart size={14} />
                    </div>
                    <div
                      className={`w-full aspect-square rounded flex items-center justify-center transition-colors duration-500 ${
                        isDark ? "bg-white/5 text-zinc-400" : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      <Table size={14} />
                    </div>
                  </div>
                  <div
                    className={`flex-1 p-4 relative overflow-hidden flex items-center justify-center transition-colors duration-500 ${
                      isDark ? "bg-mini-grid-dark" : "bg-mini-grid-light"
                    }`}
                  >
                    <div
                      className={`w-48 h-28 border-2 border-blue-500 rounded-lg rotate-3 p-3 flex flex-col transition-colors duration-500 ${
                        isDark
                          ? "bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                          : "bg-white shadow-xl"
                      }`}
                    >
                      <div
                        className={`h-3 w-1/2 rounded mb-auto transition-colors duration-500 ${
                          isDark ? "bg-zinc-700" : "bg-zinc-200"
                        }`}
                      ></div>
                      <div className="w-full flex items-end gap-1.5 h-12 mt-2">
                        <div className="flex-1 bg-blue-500 rounded-sm h-[40%]"></div>
                        <div className="flex-1 bg-blue-500 rounded-sm h-[70%]"></div>
                        <div className="flex-1 bg-blue-500 rounded-sm h-full"></div>
                        <div className="flex-1 bg-blue-500 rounded-sm h-[60%]"></div>
                      </div>
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <MousePointer2 size={12} className="fill-white text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Box 2 (Square): Multiplayer */}
            <Reveal delay="delay-100" className="h-full">
              <SpotlightCard
                className={`border rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between gap-6 transition-colors duration-500 ${
                  isDark
                    ? "bg-[#0a0a0a] border-white/10"
                    : "bg-white border-black/5 shadow-xl shadow-black/5"
                }`}
              >
                <div className="relative z-10 pointer-events-auto">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-500 ${
                      isDark
                        ? "bg-white/5 border-white/10 text-zinc-300"
                        : "bg-zinc-100 border-black/5 text-zinc-700"
                    }`}
                  >
                    <Users className="w-6 h-6" />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Real-time Collab
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    Build alongside your team. Share queries, leave comments, and watch updates
                    instantly.
                  </p>
                </div>

                <div
                  className={`relative w-full flex-1 border rounded-xl overflow-hidden p-3 pt-6 mt-3 transition-colors duration-500 ${
                    isDark ? "bg-[#111] border-white/10" : "bg-zinc-50 border-black/5 shadow-inner"
                  }`}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-zinc-500 font-bold uppercase">
                    Live Dashboard
                  </div>
                  <div className="flex gap-2 mb-2">
                    <div
                      className={`h-10 flex-1 rounded border transition-colors duration-500 ${
                        isDark ? "bg-white/5 border-white/5" : "bg-white border-black/5"
                      }`}
                    ></div>
                    <div
                      className={`h-10 flex-1 rounded border transition-colors duration-500 ${
                        isDark ? "bg-white/5 border-white/5" : "bg-white border-black/5"
                      }`}
                    ></div>
                  </div>
                  <div
                    className={`h-20 w-full rounded border flex items-end px-2 gap-1 pb-1 transition-colors duration-500 ${
                      isDark ? "bg-white/5 border-white/5" : "bg-white border-black/5"
                    }`}
                  >
                    <div
                      className={`w-full h-[30%] rounded-sm transition-colors duration-500 ${
                        isDark ? "bg-zinc-800" : "bg-zinc-200"
                      }`}
                    ></div>
                    <div
                      className={`w-full h-[50%] rounded-sm transition-colors duration-500 ${
                        isDark ? "bg-zinc-800" : "bg-zinc-200"
                      }`}
                    ></div>
                    <div
                      className={`w-full h-[80%] rounded-sm transition-colors duration-500 ${
                        isDark ? "bg-zinc-800" : "bg-zinc-200"
                      }`}
                    ></div>
                  </div>
                  <div className="absolute top-8 left-[15%] animate-cursor-1 z-10">
                    <MousePointer2 className="w-5 h-5 text-blue-500 fill-blue-500 drop-shadow-md" />
                    <div className="bg-blue-500 text-white text-[9px] px-2 py-0.5 rounded shadow mt-0.5 font-medium">
                      Dan
                    </div>
                  </div>
                  <div className="absolute top-16 right-[20%] animate-cursor-2 z-10">
                    <MousePointer2 className="w-5 h-5 text-emerald-500 fill-emerald-500 drop-shadow-md" />
                    <div className="bg-emerald-500 text-white font-bold text-[9px] px-2 py-0.5 rounded shadow mt-0.5">
                      Sarah
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Box 3 (Square): Security */}
            <Reveal delay="delay-200" className="h-full">
              <SpotlightCard
                className={`border rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between gap-6 transition-colors duration-500 ${
                  isDark
                    ? "bg-[#0a0a0a] border-white/10"
                    : "bg-white border-black/5 shadow-xl shadow-black/5"
                }`}
              >
                <div className="relative z-10 pointer-events-auto">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-500 ${
                      isDark
                        ? "bg-white/5 border-white/10 text-zinc-300"
                        : "bg-zinc-100 border-black/5 text-zinc-700"
                    }`}
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Enterprise Security
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    SOC2 compliant by default. Built-in granular RBAC, SSO, and comprehensive audit
                    logs.
                  </p>
                </div>

                <div
                  className={`relative w-full flex-1 border rounded-xl overflow-hidden flex flex-col font-mono text-[9px] md:text-[10px] mt-3 transition-colors duration-500 ${
                    isDark ? "bg-[#111] border-white/10" : "bg-zinc-50 border-black/5 shadow-inner"
                  }`}
                >
                  <div
                    className={`border-b p-2 uppercase tracking-wider font-bold transition-colors duration-500 ${
                      isDark
                        ? "bg-black border-white/5 text-zinc-500"
                        : "bg-zinc-100 border-black/5 text-zinc-600"
                    }`}
                  >
                    Access Control
                  </div>
                  <div className="p-2 space-y-2 flex-1">
                    <div
                      className={`flex justify-between items-center p-1.5 rounded transition ${
                        isDark ? "hover:bg-white/5" : "hover:bg-black/5"
                      }`}
                    >
                      <span
                        className={`font-sans font-medium flex items-center gap-1.5 ${
                          isDark ? "text-zinc-300" : "text-zinc-800"
                        }`}
                      >
                        <Users size={10} /> Engineering
                      </span>
                      <span
                        className={`border px-1.5 py-0.5 rounded transition-colors duration-500 ${
                          isDark
                            ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                            : "bg-blue-50 border-blue-200 text-blue-600"
                        }`}
                      >
                        Admin
                      </span>
                    </div>
                    <div
                      className={`flex justify-between items-center p-1.5 rounded transition ${
                        isDark ? "hover:bg-white/5" : "hover:bg-black/5"
                      }`}
                    >
                      <span
                        className={`font-sans font-medium flex items-center gap-1.5 ${
                          isDark ? "text-zinc-300" : "text-zinc-800"
                        }`}
                      >
                        <Users size={10} /> Marketing
                      </span>
                      <span
                        className={`border px-1.5 py-0.5 rounded transition-colors duration-500 ${
                          isDark
                            ? "bg-zinc-800 border-zinc-700 text-zinc-400"
                            : "bg-zinc-200 border-zinc-300 text-zinc-700"
                        }`}
                      >
                        Viewer
                      </span>
                    </div>
                    <div
                      className={`flex justify-between items-center p-1.5 rounded transition ${
                        isDark ? "hover:bg-white/5" : "hover:bg-black/5"
                      }`}
                    >
                      <span
                        className={`font-sans font-medium flex items-center gap-1.5 ${
                          isDark ? "text-zinc-300" : "text-zinc-800"
                        }`}
                      >
                        <Users size={10} /> External Vendor
                      </span>
                      <span
                        className={`border px-1.5 py-0.5 rounded transition-colors duration-500 ${
                          isDark
                            ? "bg-red-500/10 border-red-500/20 text-red-400"
                            : "bg-red-50 border-red-200 text-red-600"
                        }`}
                      >
                        Denied
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Box 4 (Wide): Query Engine */}
            <Reveal delay="delay-300" className="md:col-span-2 h-full">
              <SpotlightCard
                className={`border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start justify-between h-full gap-6 transition-colors duration-500 ${
                  isDark
                    ? "bg-[#0a0a0a] border-white/10"
                    : "bg-white border-black/5 shadow-xl shadow-black/5"
                }`}
              >
                <div className="relative z-10 max-w-md pointer-events-auto">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors duration-500 ${
                      isDark
                        ? "bg-white/5 border-white/10 text-blue-400"
                        : "bg-blue-50 border-blue-100 text-blue-600"
                    }`}
                  >
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Blazing Fast Query Engine
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    Join structured SQL data with external REST APIs natively in memory. Stream
                    millions of rows directly to the client in milliseconds.
                  </p>
                </div>

                <div
                  className={`relative w-full flex-1 border rounded-xl flex flex-col overflow-hidden font-mono md:self-stretch mt-3 transition-colors duration-500 ${
                    isDark
                      ? "bg-[#111] border-white/10 shadow-2xl"
                      : "bg-zinc-50 border-black/5 shadow-inner"
                  }`}
                >
                  <div
                    className={`h-[55%] border-b p-3 text-[10px] md:text-xs leading-relaxed relative transition-colors duration-500 ${
                      isDark
                        ? "bg-[#080808] border-white/5 text-zinc-300"
                        : "bg-white border-black/5 text-zinc-800"
                    }`}
                  >
                    <div
                      className={`absolute top-2 right-2 text-[8px] px-1.5 py-0.5 rounded transition-colors duration-500 ${
                        isDark
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-emerald-50 border border-emerald-200 text-emerald-600"
                      }`}
                    >
                      42ms
                    </div>
                    <span className="text-blue-500">SELECT</span> u.id, u.name, SUM(p.amount){" "}
                    <span className="text-blue-500">AS</span> total
                    <br />
                    <span className="text-blue-500">FROM</span> postgres.users u
                    <br />
                    <span className="text-blue-500">JOIN</span> stripe_api.payments p{" "}
                    <span className="text-blue-500">ON</span> u.id = p.user_id
                    <br />
                    <span className="text-blue-500">GROUP BY</span> 1, 2;
                  </div>
                  <div
                    className={`flex-1 p-2 flex flex-col transition-colors duration-500 ${
                      isDark ? "bg-[#0c0c0c]" : "bg-zinc-50"
                    }`}
                  >
                    <div
                      className={`grid grid-cols-3 gap-2 text-[9px] font-bold border-b pb-1 mb-1 uppercase tracking-wider transition-colors duration-500 ${
                        isDark ? "text-zinc-500 border-white/5" : "text-zinc-600 border-black/5"
                      }`}
                    >
                      <span>id</span>
                      <span>name</span>
                      <span>total</span>
                    </div>
                    <div
                      className={`grid grid-cols-3 gap-2 text-[9px] py-1 rounded px-1 transition-colors duration-500 ${
                        isDark ? "text-zinc-400 hover:bg-white/5" : "text-zinc-700 hover:bg-black/5"
                      }`}
                    >
                      <span>usr_9x</span>
                      <span>Alex Doe</span>
                      <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>
                        $1,240
                      </span>
                    </div>
                    <div
                      className={`grid grid-cols-3 gap-2 text-[9px] py-1 rounded px-1 transition-colors duration-500 ${
                        isDark ? "text-zinc-400 hover:bg-white/5" : "text-zinc-700 hover:bg-black/5"
                      }`}
                    >
                      <span>usr_3b</span>
                      <span>Sarah L.</span>
                      <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>$890</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </section>

        {/* DEVELOPER EXPERIENCE SECTION */}
        <section className="py-24 px-6 max-w-300 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay="delay-200" className="order-2 lg:order-1">
              <IDEMockup />
            </Reveal>
            <Reveal delay="delay-100" className="order-1 lg:order-2 space-y-6">
              <div
                className={`inline-flex items-center gap-2 border px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${
                  isDark
                    ? "bg-white/5 border-white/10 text-zinc-400"
                    : "bg-black/5 border-black/10 text-zinc-600"
                }`}
              >
                <Command className="w-3.5 h-3.5" /> For Developers
              </div>
              <h2
                className={`text-3xl lg:text-5xl font-bold tracking-tight transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                No glass ceilings.
                <br />
                Code when you need it.
              </h2>
              <p
                className={`text-lg font-light leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Don&apos;t let the visual canvas limit your engineering team. QBuilder is built on
                standard web technologies, allowing developers to extend logic infinitely.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isDark ? "bg-white/10 text-white" : "bg-black/5 text-black"
                    }`}
                  >
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>
                      Write Custom React/JS
                    </h4>
                    <p className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-600"}`}>
                      Drop into the built-in IDE to write complex transformations or import external
                      NPM packages seamlessly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isDark ? "bg-white/10 text-white" : "bg-black/5 text-black"
                    }`}
                  >
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>
                      Git Sync & CI/CD
                    </h4>
                    <p className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-600"}`}>
                      Everything is stored as code. Sync with GitHub, create branches, and deploy
                      via your existing CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className={`py-24 px-6 max-w-300 mx-auto relative z-10 border-t transition-colors duration-500 ${
            isDark ? "border-white/5" : "border-black/5"
          }`}
        >
          <Reveal>
            <div className="text-center mb-16">
              <h2
                className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Trusted by Data Pioneers
              </h2>
              <p
                className={`text-lg font-light max-w-2xl mx-auto transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                See how modern tech companies are accelerating their workflows and saving thousands
                of engineering hours.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Jenkins",
                role: "VP of Engineering, FinTech Co",
                quote:
                  "QBuilder cut our internal dashboard development time by 90%. What used to take a whole sprint now takes our analysts mere hours. The AI generation is truly magical.",
              },
              {
                name: "Michael Chen",
                role: "Head of Data, SaaS Inc",
                quote:
                  "Our data analysts are now essentially full-stack app builders. We completely removed the bottleneck of waiting for frontend resources to ship internal BI tools.",
              },
              {
                name: "Elena Rostova",
                role: "Lead Data Scientist, HealthApp",
                quote:
                  "The ability to seamlessly join our Snowflake warehouse metrics with live Stripe revenue data in a single chart without writing custom scripts is a total game changer.",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={`delay-[${i * 100}ms]`}>
                <div
                  className={`border rounded-2xl p-6 h-full flex flex-col justify-between transition-colors duration-500 ${
                    isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10 shadow-lg"
                  }`}
                >
                  <Quote
                    className={`w-8 h-8 mb-4 transition-colors duration-500 ${
                      isDark ? "text-white/10" : "text-black/5"
                    }`}
                  />
                  <p
                    className={`text-sm leading-relaxed mb-6 font-light transition-colors duration-500 ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${
                        isDark
                          ? "bg-zinc-800 text-white"
                          : "bg-zinc-100 text-zinc-900 border border-black/5"
                      }`}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold transition-colors duration-500 ${
                          isDark ? "text-zinc-200" : "text-zinc-900"
                        }`}
                      >
                        {t.name}
                      </div>
                      <div className="text-[10px] text-zinc-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRICING SNEAK PEEK */}
        <section
          className={`py-24 px-6 max-w-250 mx-auto relative z-10 border-t transition-colors duration-500 ${
            isDark ? "border-white/5" : "border-black/5"
          }`}
        >
          <Reveal>
            <div className="text-center mb-16">
              <h2
                className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Transparent, scalable pricing
              </h2>
              <p
                className={`text-lg font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Start building for free. Scale up when your team grows.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Hobby",
                price: "$0",
                desc: "For individuals exploring data.",
                features: [
                  "Up to 3 Active Apps",
                  "1 Database Connection",
                  "Community Discord Support",
                ],
              },
              {
                name: "Pro",
                price: "$49",
                desc: "For fast-moving product teams.",
                features: [
                  "Unlimited Data Apps",
                  "5 Database Connections",
                  "AI Query Assistant",
                  "Priority Email Support",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For large scale organizations.",
                features: [
                  "Unlimited Everything",
                  "SSO & Advanced RBAC",
                  "VPC / Self-Hosted Option",
                  "Dedicated Success Manager",
                ],
              },
            ].map((p, i) => (
              <Reveal key={i} delay={`delay-[${i * 100}ms]`}>
                <div
                  className={`rounded-3xl p-8 border h-full flex flex-col transition-colors duration-500 ${
                    p.highlight
                      ? isDark
                        ? "bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                        : "bg-blue-50/50 border-blue-200 shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
                      : isDark
                        ? "bg-[#0a0a0a] border-white/10"
                        : "bg-white border-black/10 shadow-xl"
                  }`}
                >
                  <div
                    className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-zinc-900"}`}
                  >
                    {p.name}
                  </div>
                  <div className="text-zinc-500 text-xs mb-6 h-8">{p.desc}</div>
                  <div
                    className={`text-4xl font-extrabold mb-8 transition-colors duration-500 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {p.price}
                    <span className="text-sm text-zinc-500 font-medium">
                      {p.price !== "Custom" && "/mo"}
                    </span>
                  </div>
                  <div className="space-y-4 mb-8 flex-1">
                    {p.features.map((f, j) => (
                      <div
                        key={j}
                        className={`flex items-center gap-3 text-sm transition-colors duration-500 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${isDark ? "text-zinc-400" : "text-blue-500"}`}
                        />{" "}
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`w-full py-3 rounded-full font-bold transition shadow-md ${
                      p.highlight
                        ? isDark
                          ? "bg-white text-black hover:bg-zinc-200"
                          : "bg-zinc-900 text-white hover:bg-zinc-800"
                        : isDark
                          ? "bg-white/5 text-white hover:bg-white/10 shadow-none"
                          : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-black/5 shadow-none"
                    }`}
                  >
                    {p.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section
          className={`py-24 px-6 relative z-10 border-t transition-colors duration-500 ${
            isDark ? "bg-[#050505] border-white/5" : "bg-white border-black/5"
          }`}
        >
          <div className="max-w-[800px] mx-auto">
            <Reveal>
              <h2
                className={`text-3xl font-bold mb-10 text-center transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={`delay-[${idx * 100}ms]`}>
                  <div
                    className={`border rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                      isDark
                        ? "bg-[#0a0a0a] border-white/10 hover:border-white/20"
                        : "bg-zinc-50 border-black/10 hover:border-black/20"
                    }`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div
                      className={`px-6 py-5 flex items-center justify-between font-semibold ${
                        isDark ? "text-zinc-200" : "text-zinc-800"
                      }`}
                    >
                      {faq.q}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openFaq === idx ? "rotate-180" : ""
                        } ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                      />
                    </div>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA + DESIGNER UI */}
        <section
          className={`pt-24 px-6 relative overflow-hidden z-10 border-t transition-colors duration-500 ${
            isDark ? "bg-[#050505] border-white/5" : "bg-zinc-50 border-black/5"
          }`}
        >
          <div
            className={`absolute bottom-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 blur-[120px] pointer-events-none transition-colors duration-500 ${
              isDark ? "bg-blue-600/10" : "bg-blue-300/30"
            }`}
          ></div>
          <div className="max-w-200 mx-auto text-center relative z-20 mb-24">
            <Reveal>
              <div
                className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors duration-500 ${
                  isDark
                    ? "bg-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    : "bg-white border border-black/5 shadow-xl"
                }`}
              >
                <LayoutDashboard className={`w-8 h-8 ${isDark ? "text-black" : "text-blue-600"}`} />
              </div>
              <h2
                className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Empower your team
                <br />
                with data today.
              </h2>
              <p
                className={`text-xl mb-10 max-w-xl mx-auto font-light transition-colors duration-500 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Join thousands of forward-thinking engineering teams building the next generation of
                internal tools. Stop building from scratch.
              </p>
              <button
                type="button"
                className={`px-10 py-4 rounded-full text-lg font-bold transition hover:scale-105 active:scale-95 shadow-xl ${
                  isDark
                    ? "bg-white text-black shadow-white/10"
                    : "bg-zinc-900 text-white shadow-black/10"
                }`}
              >
                Start Building For Free
              </button>
            </Reveal>
          </div>

          <Reveal delay="delay-400" className="w-full max-w-300 px-4 mx-auto relative z-20">
            <DesignerUI />
          </Reveal>
        </section>

        {/* FULL FOOTER */}
        <footer
          className={`py-20 px-6 relative z-30 border-t transition-colors duration-500 ${
            isDark ? "bg-[#050505] border-white/10" : "bg-white border-black/5"
          }`}
        >
          <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 text-sm">
            <div className="col-span-2 lg:col-span-2">
              <div
                className={`text-2xl font-black tracking-tighter flex items-center gap-2 mb-6 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center transition-colors duration-500 ${
                    isDark ? "bg-white" : "bg-zinc-900"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-sm transition-colors duration-500 ${
                      isDark ? "bg-blue-600" : "bg-white"
                    }`}
                  ></div>
                </div>
                QBuilder
              </div>
              <p className="text-zinc-500 font-medium leading-relaxed">
                © 2026 QBuilder Technologies.
                <br />
                Democratizing internal tools.
              </p>
              <div className="flex gap-4 mt-6 text-zinc-500">
                <a
                  href="#"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                >
                  Discord
                </a>
              </div>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 uppercase text-xs tracking-wider transition-colors duration-500 ${
                  isDark ? "text-zinc-200" : "text-zinc-900"
                }`}
              >
                Product
              </h4>
              <ul className="space-y-4 text-zinc-500 font-medium">
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    App Builder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    BI Dashboards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Query Engine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 uppercase text-xs tracking-wider transition-colors duration-500 ${
                  isDark ? "text-zinc-200" : "text-zinc-900"
                }`}
              >
                Resources
              </h4>
              <ul className="space-y-4 text-zinc-500 font-medium">
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 uppercase text-xs tracking-wider transition-colors duration-500 ${
                  isDark ? "text-zinc-200" : "text-zinc-900"
                }`}
              >
                Company
              </h4>
              <ul className="space-y-4 text-zinc-500 font-medium">
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition ${isDark ? "hover:text-white" : "hover:text-zinc-900"}`}
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <h4
                className={`font-bold mb-6 uppercase text-xs tracking-wider transition-colors duration-500 ${
                  isDark ? "text-zinc-200" : "text-zinc-900"
                }`}
              >
                Subscribe
              </h4>
              <p className="text-zinc-500 mb-4 font-medium">
                Get the latest updates and data engineering tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`border rounded-md px-4 py-2 w-full text-sm focus:outline-none transition-colors duration-500 ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white focus:border-zinc-500"
                      : "bg-zinc-50 border-black/10 text-zinc-900 focus:border-blue-500 shadow-inner"
                  }`}
                />
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md font-bold transition shadow-md ${
                    isDark
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* VIDEO MODAL LIGHTBOX */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
              onClick={() => setIsVideoOpen(false)}
            ></div>
            <div
              className={`relative w-full max-w-4xl border rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 ${
                isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10"
              }`}
              style={{
                animation: "scaleIn 0.3s ease-out forwards",
                opacity: 0,
              }}
            >
              <div
                className="absolute top-4 right-4 z-10 cursor-pointer text-white/80 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur transition"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="w-5 h-5" />
              </div>
              <div className="w-full aspect-video bg-[#111] flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
                <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer z-10" />
                <div className="mt-4 font-medium text-white z-10">QBuilder Product Demo (2:14)</div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}
