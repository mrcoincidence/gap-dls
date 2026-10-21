// components/dls/sections/TokensBreakpoints.tsx
'use client';

import { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  ShieldCheck,
  Code2,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Menu,
  Grid,
  Layers,
  FileCode,
  Braces
} from 'lucide-react';
import {
  sfccBreakpointsList,
  sfccBehaviorRulesList,
  SfccBreakpointItem,
  SfccBehaviorRule
} from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensBreakpointsProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensBreakpoints({ setActiveSection }: TokensBreakpointsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [simulatedWidth, setSimulatedWidth] = useState<number>(769);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getSimulatedBreakpointLabel = (w: number) => {
    if (w < 544) return { label: 'Base (<544px)', category: 'Compact Mobile', color: 'text-amber-500' };
    if (w < 769) return { label: 'sm: 544px', category: 'Standard Mobile', color: 'text-amber-500' };
    if (w < 992) return { label: 'md: 769px', category: 'Tablet / Surface', color: 'text-[#8ab4f8]' };
    if (w < 1200) return { label: 'lg: 992px', category: 'Desktop Compact', color: 'text-emerald-500' };
    if (w < 1400) return { label: 'xl: 1200px', category: 'Desktop Standard', color: 'text-emerald-500' };
    if (w < 1600) return { label: '2xl: 1400px', category: 'Wide Screen', color: 'text-purple-400' };
    return { label: '3xl: 1600px', category: 'Ultra Wide / 4K', color: 'text-purple-400' };
  };

  const currentBp = getSimulatedBreakpointLabel(simulatedWidth);

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
              STOREFRONT REFERENCE STANDARD
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Breakpoints (SFCC)
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The canonical viewport responsive boundaries powering the GAP Japan storefront. 
            Aligned strictly with Salesforce Commerce Cloud (SFCC) production templates to ensure zero discrepancy between Tokyo design intent, enterprise AI code generation, and offshore engineering execution.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              769px Critical Architectural Cutoff
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              6 Standardized Breakpoints
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              SFCC ISML & CSS Verified
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Breakpoint Ruler Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              SFCC Core Standard
            </span>
            <span className="text-[12px] font-mono text-amber-500 bg-amber-950/40 border border-amber-800/40 px-[8px] py-[2px] rounded">
              769px Cutoff
            </span>
          </div>

          {/* Center Graphic: Responsive Viewport Ruler & Dividing Line */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            {/* Ruler Graphic */}
            <div className="w-full h-[120px] rounded-[14px] bg-dls-surface-container border border-dls-line-subtle p-[12px] flex flex-col justify-between relative shadow-inner">
              {/* Top Viewport Tiers */}
              <div className="flex justify-between items-center text-[10px] font-mono text-dls-txt-annotation border-b border-dls-line-subtle pb-[4px]">
                <span>&lt;769px (Mobile)</span>
                <span className="text-amber-500 font-bold">769px</span>
                <span>&gt;=769px (Desktop)</span>
              </div>

              {/* Visual Split Boundary */}
              <div className="relative w-full h-[36px] bg-dls-canvas rounded-[6px] border border-dls-line-subtle flex items-center overflow-hidden">
                <div className="w-[48%] h-full bg-amber-500/15 border-r-2 border-dashed border-amber-500 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-amber-500 font-bold">DRAWER</span>
                </div>
                <div className="w-[52%] h-full bg-[#004a77]/25 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[#8ab4f8] font-bold">NAVBAR</span>
                </div>
              </div>

              {/* Bottom Ruler Marks */}
              <div className="flex justify-between text-[9px] font-mono text-dls-txt-annotation px-[4px]">
                <span>544px</span>
                <span className="text-[#8ab4f8]">992px</span>
                <span>1200px</span>
                <span>1600px</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Status */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">India Offshore Sync</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Zero Breakpoint Drift</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">ISML Native</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Tailwind, ISML & AI Prompt Directives)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Media Query Directives</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering standards for media query declarations across Next.js Tailwind directives, Salesforce ISML templates, and generative prompt rulesets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind v4</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">@theme Breakpoints</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Exact CSS prefix tokens: <code className="text-[#8ab4f8]">sm:544px</code>, <code className="text-[#8ab4f8]">md:769px</code>, <code className="text-[#8ab4f8]">lg:992px</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('--breakpoint-sm: 544px; --breakpoint-md: 769px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px;', 'tw-breakpoints')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-breakpoints' ? 'Copied Presets!' : 'Copy Tailwind Declarations'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <FileCode size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">SFCC SCSS Mixin</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Native Media Queries</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                SCSS media query mixin standard utilized by the India offshore engineering team.
              </p>
            </div>
            <button
              onClick={() => copyText('@media (min-width: 769px) { /* Desktop styles */ }', 'scss-mixin')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'scss-mixin' ? 'Copied SCSS!' : 'Copy SCSS Query'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">769px Cutoff Enforcement</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Prohibits AI from using standard Tailwind 768px in favor of GAP’s mandated 769px threshold.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('prompts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View System Prompt</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE VIEWPORT SIMULATOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Viewport Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Drag the viewport slider or select quick presets to test exact threshold activations.
            </p>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            <button
              onClick={() => setSimulatedWidth(375)}
              className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                simulatedWidth === 375 ? 'bg-[#004a77] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              Mobile 375px
            </button>
            <button
              onClick={() => setSimulatedWidth(544)}
              className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                simulatedWidth === 544 ? 'bg-[#004a77] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              sm: 544px
            </button>
            <button
              onClick={() => setSimulatedWidth(769)}
              className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                simulatedWidth === 769 ? 'bg-[#004a77] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              md: 769px (Cutoff)
            </button>
            <button
              onClick={() => setSimulatedWidth(1200)}
              className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                simulatedWidth === 1200 ? 'bg-[#004a77] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              xl: 1200px
            </button>
          </div>
        </div>

        {/* Simulator Box */}
        <div className="p-[24px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[20px]">
          {/* Slider and Metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
            <div className="flex items-baseline gap-[10px]">
              <span className="text-[32px] font-mono font-black text-dls-txt-primary">
                {simulatedWidth}px
              </span>
              <span className={`text-[13px] font-mono font-bold ${currentBp.color}`}>
                Active Tier: {currentBp.label} ({currentBp.category})
              </span>
            </div>

            <div className="flex items-center gap-[12px] flex-1 max-w-[420px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation">320px</span>
              <input
                type="range"
                min="320"
                max="1920"
                value={simulatedWidth}
                onChange={(e) => setSimulatedWidth(Number(e.target.value))}
                className="w-full accent-[#8ab4f8] cursor-pointer"
              />
              <span className="text-[11px] font-mono text-dls-txt-annotation">1920px</span>
            </div>
          </div>

          {/* Dynamic Component Behavior Callout */}
          <div className="p-[16px] rounded-[12px] bg-dls-canvas border border-dls-line-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px]">
            <div className="flex items-center gap-[12px]">
              {simulatedWidth < 769 ? (
                <Smartphone size={24} className="text-amber-500 flex-shrink-0" />
              ) : simulatedWidth < 992 ? (
                <Tablet size={24} className="text-[#8ab4f8] flex-shrink-0" />
              ) : (
                <Monitor size={24} className="text-emerald-500 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-[15px] font-bold text-dls-txt-primary">
                  {simulatedWidth < 769
                    ? 'Handheld Mobile Architecture Active (<769px)'
                    : simulatedWidth < 992
                    ? 'Tablet Intermediate Surface Active (769px–991px)'
                    : 'Full Multi-Column Desktop Grid Active (>=992px)'}
                </h3>
                <p className="text-[13px] text-dls-txt-muted mt-[2px]">
                  {simulatedWidth < 769
                    ? 'Header collapses to hamburger drawer. PLP locks to 2-columns. Sticky bottom CTA bar active.'
                    : simulatedWidth < 992
                    ? 'Navigation displays compact horizontal links. PLP expands to 3-columns. Filters shift to top toolbar.'
                    : '12-column grid active. Mega menu navigation active. PDP buy-box locks into sticky right rail.'}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-dls-txt-annotation bg-dls-surface px-[10px] py-[4px] rounded border border-dls-line-subtle flex-shrink-0">
              Query: @media ({simulatedWidth < 769 ? 'max-width: 768px' : 'min-width: 769px'})
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. THE 6 STANDARDIZED BREAKPOINTS MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              The 6 Standardized Breakpoints Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Exact pixel parameters and architectural shifts governing all responsive storefront templates.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            6 Production Tiers
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {sfccBreakpointsList.map((bp) => (
            <div
              key={bp.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Token & Values */}
              <div className="min-w-[240px]">
                <div className="flex items-center gap-[8px]">
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{bp.name}</h3>
                  {bp.minWidth === 769 && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/60 px-[6px] py-[1px] rounded">
                      SFCC CUTOFF
                    </span>
                  )}
                  {bp.minWidth === 1200 && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                      BASE CONTAINER
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-[6px] mt-[4px]">
                  <span className="text-[18px] font-mono font-bold text-dls-txt-primary">
                    {bp.minWidth ? `${bp.minWidth}px` : '0px'}
                  </span>
                  <span className="text-[12px] font-mono text-[#8ab4f8]">
                    ({bp.tailwindPrefix})
                  </span>
                </div>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[2px] block">
                  {bp.targetDevice}
                </span>
              </div>

              {/* Architectural Shift Description */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {bp.criticalShift}
                </p>
                <code className="text-[11px] font-mono text-dls-txt-annotation bg-dls-canvas px-[6px] py-[2px] rounded border border-dls-line-subtle mt-[4px] inline-block">
                  {bp.mediaQuery}
                </code>
              </div>

              {/* Copy Code Buttons */}
              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(bp.tailwindPrefix, `${bp.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Prefix"
                >
                  <code>{bp.tailwindPrefix}</code>
                  {copiedId === `${bp.id}-tw` ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>

                <button
                  onClick={() => copyText(bp.mediaQuery, `${bp.id}-query`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Media Query"
                >
                  <span>Query</span>
                  {copiedId === `${bp.id}-query` ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-dls-txt-annotation" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         5. SFCC PRODUCTION BEHAVIOR MATRIX (Core UI Components)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              SFCC Production Behavior Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Direct engineering specifications detailing component transformation across handheld, tablet, and desktop viewports.
            </p>
          </div>
          <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[8px] py-[3px] rounded-full">
            Engineering Directives
          </span>
        </div>

        <div className="space-y-[14px]">
          {sfccBehaviorRulesList.map((rule) => (
            <div
              key={rule.componentName}
              className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[14px]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[8px] border-b border-dls-line-subtle pb-[10px]">
                <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
                  <span>{rule.componentName}</span>
                </h3>
                <code className="text-[11px] font-mono text-[#8ab4f8] bg-dls-canvas px-[8px] py-[2px] rounded border border-dls-line-subtle">
                  {rule.technicalDirective}
                </code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] text-[13px] leading-relaxed">
                {/* Mobile Box */}
                <div className="p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle">
                  <span className="text-[11px] font-mono font-bold text-amber-500 uppercase tracking-wider block mb-[4px]">
                    Mobile (&lt; 769px)
                  </span>
                  <p className="text-dls-txt-secondary">{rule.mobileBehavior}</p>
                </div>

                {/* Tablet Box */}
                <div className="p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle">
                  <span className="text-[11px] font-mono font-bold text-[#8ab4f8] uppercase tracking-wider block mb-[4px]">
                    Tablet (769px – 991px)
                  </span>
                  <p className="text-dls-txt-secondary">{rule.tabletBehavior}</p>
                </div>

                {/* Desktop Box */}
                <div className="p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle">
                  <span className="text-[11px] font-mono font-bold text-emerald-500 uppercase tracking-wider block mb-[4px]">
                    Desktop (&gt;= 992px)
                  </span>
                  <p className="text-dls-txt-secondary">{rule.desktopBehavior}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         6. CROSS-NAVIGATION CALLOUT: GO TO RAW JSON EXPORT
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Braces size={12} className="text-[#8ab4f8]" />
              <span>MACHINE-READABLE TOKENS EXPORT</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Ready to Export All Design Tokens to JSON?
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              All Color, Typography, Spacing, Layout, Border Radius, and SFCC Breakpoint definitions can be exported directly into a single machine-readable <strong className="text-dls-txt-primary">tokens.json</strong> file for Claude, ChatGPT Enterprise, and Salesforce CI/CD pipelines.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('tokens-export')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Raw JSON Export</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}