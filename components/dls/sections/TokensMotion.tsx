// components/dls/sections/TokensMotion.tsx
'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
  Code2,
  ShieldCheck,
  Clock,
  EyeOff,
  Zap,
  Layers
} from 'lucide-react';
import {
  motionDurationTokensList,
  motionCurveTokensList,
  MotionDurationToken,
  MotionCurveToken
} from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensMotionProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensMotion({ setActiveSection }: TokensMotionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // インタラクティブ・シミュレーター用ステート
  const [selectedDuration, setSelectedDuration] = useState<number>(300);
  const [selectedCurve, setSelectedCurve] = useState<string>('cubic-bezier(0.2, 0.0, 0, 1.0)');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const triggerSimulation = () => {
    setIsSimulating((prev) => !prev);
  };

  return (
    <div className="max-w-[1140px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER (20px Lead Text & 1:1 Aspect Visual)
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        {/* Left Column: Title & Lead */}
        <div className="flex-1 max-w-[660px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <button
              onClick={() => setActiveSection('tokens')}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Tokens Overview</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              TEMPORAL DYNAMICS & CURVES
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Motion & Curves
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The choreography of transition speeds and acceleration curves governing micro-interactions and modal entrances. 
            Calibrated to Google Material Design 3 physics to replace arbitrary CSS transitions with predictable, branded velocity.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              5 Quantized Durations (100ms – 800ms)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              5 M3 Physical Easing Curves
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              prefers-reduced-motion Compliant
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Curve Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Bezier Kinetics
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              M3 Natural
            </span>
          </div>

          {/* Center Graphic: Animated Kinetic Bezier Vector Visual */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            <div className="w-[200px] h-[130px] rounded-[16px] bg-dls-surface-container border border-dls-line-subtle p-[12px] flex flex-col justify-between relative shadow-inner">
              {/* Curve Line SVG */}
              <svg className="w-full h-[76px] overflow-visible" viewBox="0 0 180 70">
                <path
                  d="M 10 60 C 40 60, 60 10, 170 10"
                  fill="none"
                  stroke="var(--color-dls-line-default)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 10 60 C 40 60, 60 10, 170 10"
                  fill="none"
                  stroke="#8ab4f8"
                  strokeWidth="3.5"
                />
                {/* Control Points */}
                <circle cx="10" cy="60" r="4.5" fill="#002554" stroke="#8ab4f8" strokeWidth="2" />
                <circle cx="170" cy="10" r="4.5" fill="#10b981" stroke="white" strokeWidth="2" />
              </svg>

              <div className="flex justify-between items-center text-[10px] font-mono text-dls-txt-annotation pt-[4px] border-t border-dls-line-subtle">
                <span>0.0 (Rest)</span>
                <span className="text-[#8ab4f8]">cubic-bezier(0.2, 0, 0, 1)</span>
                <span>1.0 (Arrival)</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Default Velocity</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">300ms Standard Ease</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">GPU Accelerated</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Tailwind Presets & Directives)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Kinetic Presets</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering directives for Next.js Tailwind transition classes, CSS custom properties, and accessibility kill-switches.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Clock size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Duration</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Tailwind Durations</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Quantized steps: <code className="text-[#8ab4f8]">duration-100</code>, <code className="text-[#8ab4f8]">duration-200</code>, <code className="text-[#8ab4f8]">duration-300</code>, <code className="text-[#8ab4f8]">duration-500</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('transition-all duration-200 ease-out', 'tw-duration-preset')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-duration-preset' ? 'Copied Preset!' : 'Copy Standard Transition'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Activity size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">CSS Easing</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">M3 Bezier Variables</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Native variables: <code className="text-[#8ab4f8]">var(--ease-gap-standard)</code>, <code className="text-[#8ab4f8]">var(--ease-gap-enter)</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('--ease-gap-standard: cubic-bezier(0.2, 0, 0, 1); --ease-gap-enter: cubic-bezier(0, 0, 0.2, 1);', 'css-easing-vars')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'css-easing-vars' ? 'Copied Easing Vars!' : 'Copy Easing Variables'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <EyeOff size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">WCAG a11y</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Reduced Motion Kill-Switch</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Automatic suppression for users sensitive to vestibular motion: <code className="text-[#8ab4f8]">motion-reduce:transition-none</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('motion-reduce:transition-none motion-reduce:transform-none', 'a11y-killswitch')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'a11y-killswitch' ? 'Copied Killswitch!' : 'Copy a11y Classes'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE MOTION & EASING SIMULATOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Motion Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Combine duration speeds with acceleration curves to preview kinetic behavior in real-time.
            </p>
          </div>

          <button
            onClick={triggerSimulation}
            className="px-[16px] py-[8px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[13px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer shadow-md self-start sm:self-auto"
          >
            {isSimulating ? <RotateCcw size={14} /> : <Play size={14} />}
            <span>{isSimulating ? 'Reset Motion' : 'Play Simulation'}</span>
          </button>
        </div>

        {/* Controls Bar */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {/* Duration Selector */}
            <div>
              <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[8px]">
                1. Select Duration ({selectedDuration}ms):
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {motionDurationTokensList.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDuration(d.durationMs)}
                    className={`px-[12px] py-[5px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                      selectedDuration === d.durationMs
                        ? 'bg-[#004a77] text-white shadow-xs'
                        : 'bg-dls-canvas text-dls-txt-muted hover:text-dls-txt-primary border border-dls-line-subtle'
                    }`}
                  >
                    {d.durationMs}ms
                  </button>
                ))}
              </div>
            </div>

            {/* Curve Selector */}
            <div>
              <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[8px]">
                2. Select Easing Curve:
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {motionCurveTokensList.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCurve(c.timingFunction)}
                    className={`px-[12px] py-[5px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                      selectedCurve === c.timingFunction
                        ? 'bg-[#004a77] text-white shadow-xs'
                        : 'bg-dls-canvas text-dls-txt-muted hover:text-dls-txt-primary border border-dls-line-subtle'
                    }`}
                  >
                    {c.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Track Simulator */}
          <div className="p-[20px] rounded-[12px] bg-dls-canvas border border-dls-line-subtle space-y-[16px]">
            <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block">
              Kinetic Track:
            </span>

            {/* Track 1: Horizontal Translation */}
            <div className="relative w-full h-[48px] bg-dls-surface-container rounded-[8px] p-[6px] border border-dls-line-subtle flex items-center overflow-hidden">
              <div
                style={{
                  transitionProperty: 'transform, background-color',
                  transitionDuration: `${selectedDuration}ms`,
                  transitionTimingFunction: selectedCurve,
                  transform: isSimulating ? 'translateX(calc(100cqw - 56px))' : 'translateX(0px)',
                  containerType: 'inline-size'
                }}
                className={`w-[44px] h-[36px] rounded-[6px] flex items-center justify-center font-mono text-[11px] font-bold shadow-md cursor-pointer ${
                  isSimulating ? 'bg-emerald-500 text-black' : 'bg-[#004a77] text-white'
                }`}
                onClick={triggerSimulation}
                title="Click to toggle motion"
              >
                <span>{isSimulating ? 'ARRV' : 'START'}</span>
              </div>
            </div>

            {/* Track 2: Surface Scale & Elevation Reaction */}
            <div className="flex items-center justify-between text-[12px] font-mono text-dls-txt-muted pt-[6px]">
              <span>
                Active Config: <code className="text-[#8ab4f8]">{selectedDuration}ms</code> · <code className="text-[#8ab4f8]">{selectedCurve}</code>
              </span>
              <span className="text-emerald-500">Click box or &quot;Play Simulation&quot; to test</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. DURATION TOKENS MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Duration Scale Tokens
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Exact time intervals calibrated to human perceptual response times.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            5 Time Tiers
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {motionDurationTokensList.map((token) => (
            <div
              key={token.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="min-w-[220px]">
                <div className="flex items-center gap-[8px]">
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h3>
                  {token.durationMs === 300 && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                      DEFAULT
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-[6px] mt-[4px]">
                  <span className="text-[18px] font-mono font-bold text-dls-txt-primary">
                    {token.durationMs}ms
                  </span>
                  <span className="text-[12px] font-mono text-[#8ab4f8]">
                    ({token.durationCss})
                  </span>
                </div>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[2px] block">
                  Role: {token.role}
                </span>
              </div>

              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.usageExample}
                </p>
              </div>

              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(token.tailwindClass, `${token.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Duration"
                >
                  <code>{token.tailwindClass}</code>
                  {copiedId === `${token.id}-tw` ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-[#8ab4f8]" />}
                </button>

                <button
                  onClick={() => copyText(token.cssVariable, `${token.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{token.cssVariable}</code>
                  {copiedId === `${token.id}-css` ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-dls-txt-annotation" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         5. EASING CURVES SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Easing Curves Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Mathematical bezier cubic functions modeling natural physical acceleration and deceleration.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            5 Easing Profiles
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {motionCurveTokensList.map((curve) => (
            <div
              key={curve.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="min-w-[240px]">
                <div className="flex items-center gap-[8px]">
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{curve.name}</h3>
                  {curve.isDefault && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                      M3 BASE
                    </span>
                  )}
                </div>
                <code className="text-[12px] font-mono text-[#8ab4f8] mt-[3px] block">
                  {curve.timingFunction}
                </code>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[2px] block">
                  Role: {curve.role}
                </span>
              </div>

              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {curve.usageExample}
                </p>
              </div>

              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(curve.tailwindClass, `${curve.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Ease"
                >
                  <code>{curve.tailwindClass.split(' ')[0]}</code>
                  {copiedId === `${curve.id}-tw` ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-[#8ab4f8]" />}
                </button>

                <button
                  onClick={() => copyText(curve.cssVariable, `${curve.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{curve.cssVariable}</code>
                  {copiedId === `${curve.id}-css` ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-dls-txt-annotation" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         6. CROSS-NAVIGATION CALLOUT: GO TO Z-INDEX LAYERS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Layers size={12} className="text-[#8ab4f8]" />
              <span>SPATIAL STACKING ARCHITECTURE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Control Which Surfaces Animate Above Others?
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Smooth transitions require strict spatial ordering. Explore the <strong className="text-dls-txt-primary">Z-Index Layers</strong> tokens to eliminate overlapping visual glitches between animated drawers, sticky headers, and modal overlays.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('tokens-z-index')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Z-Index Layers</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}