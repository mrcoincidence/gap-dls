// components/dls/sections/TokensAspectRatio.tsx
'use client';

import { useState } from 'react';
import {
  Crop,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Code2,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Smartphone,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';
import { aspectRatioTokensList, AspectRatioToken } from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensAspectRatioProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensAspectRatio({ setActiveSection }: TokensAspectRatioProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<string>('aspect-portrait');

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedToken = aspectRatioTokensList.find((t) => t.id === selectedTokenId) || aspectRatioTokensList[0];

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
              MEDIA PROPORTION STANDARD
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Aspect Ratio Tokens
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Mathematical proportion constraints governing product imagery, editorial lookbooks, and video containers. 
            Standardizes the iconic 3:4 apparel portrait ratio to eliminate Cumulative Layout Shift (CLS) and ensure razor-sharp vertical alignment across storefront grids.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              3:4 Iconic Apparel Core Ratio
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              Zero Cumulative Layout Shift (CLS)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              6 Quantized Proportion Tiers
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Ruler Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Apparel Proportions
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              3:4 Golden Ratio
            </span>
          </div>

          {/* Center Graphic: Nested 3:4 Portrait Inside 1:1 Square Frame */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            {/* Outer Square Guide (1:1) */}
            <div className="w-[170px] h-[170px] rounded-[16px] border border-dashed border-dls-line-subtle bg-dls-surface-container flex items-center justify-center relative">
              <span className="absolute top-[6px] left-[8px] text-[9px] font-mono text-dls-txt-annotation">
                1:1 Frame
              </span>

              {/* Nested 3:4 Core Portrait Box */}
              <div className="w-[110px] h-[146px] rounded-[8px] bg-gradient-to-b from-[#002554] to-[#001b3d] border-2 border-[#8ab4f8] shadow-2xl flex flex-col items-center justify-between p-[8px] relative overflow-hidden">
                <div className="w-full flex justify-between items-center text-[8px] font-mono text-emerald-400">
                  <span>3</span>
                  <span className="text-[7px] text-[#8ab4f8]">PORTRAIT</span>
                </div>

                <div className="text-center my-auto">
                  <ImageIcon size={22} className="text-[#8ab4f8] mx-auto mb-[2px]" />
                  <span className="text-[10px] font-mono font-bold text-white tracking-widest block">
                    3 : 4
                  </span>
                </div>

                <div className="w-full text-right text-[8px] font-mono text-emerald-400">
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">PLP Grid Integrity</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">100% Locked Vertical Rows</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">CLS = 0.00</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Tailwind Presets & Engineering Rules)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Proportion Presets & Directives</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Tailwind CSS v4 utility mappings, native CSS aspect-ratio properties, and AI system prompt guardrails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind v4</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Aspect Ratio Classes</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enforced utility classes: <code className="text-[#8ab4f8]">aspect-[3/4]</code>, <code className="text-[#8ab4f8]">aspect-square</code>, <code className="text-[#8ab4f8]">aspect-video</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('aspect-[3/4] aspect-square aspect-[9/16] aspect-[4/3] aspect-video aspect-[21/9]', 'tw-aspect-classes')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-aspect-classes' ? 'Copied Classes!' : 'Copy Aspect Classes'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Crop size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">CSS Standard</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Native CSS aspect-ratio</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Modern CSS property reserving exact layout dimensions before imagery downloads to eliminate reflow.
              </p>
            </div>
            <button
              onClick={() => copyText('aspect-ratio: 3 / 4; object-fit: cover;', 'css-aspect-rule')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'css-aspect-rule' ? 'Copied Rule!' : 'Copy CSS Property'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">No Arbitrary Heights</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Prohibits AI from setting hardcoded pixel heights (e.g. <code className="text-red-500">h-[420px]</code>) on product images.
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
         3. INTERACTIVE RATIO SIMULATOR & PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Ratio Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Inspect how proportion scaling impacts card boundaries, model framing, and vertical reading flow.
            </p>
          </div>

          {/* Ratio Selector Buttons */}
          <div className="flex flex-wrap bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            {aspectRatioTokensList.map((token) => (
              <button
                key={token.id}
                onClick={() => setSelectedTokenId(token.id)}
                className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  selectedTokenId === token.id
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                {token.ratio}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="p-[28px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row items-center justify-between gap-[32px]">
          {/* Simulated Media Container */}
          <div className="w-full max-w-[340px] flex flex-col items-center">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider mb-[8px]">
              Rendered Media Canvas ({selectedToken.ratio}):
            </span>

            <div
              className={`w-full max-w-[280px] rounded-[12px] bg-gradient-to-br from-[#002554] via-[#001f42] to-[#0b0c10] border-2 border-[#8ab4f8] shadow-2xl flex flex-col items-center justify-center p-[16px] relative overflow-hidden transition-all duration-300 ${selectedToken.tailwindClass}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(#8ab4f8_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

              <div className="relative z-10 text-center space-y-[4px]">
                <Crop size={28} className="text-[#8ab4f8] mx-auto animate-pulse" />
                <p className="text-[18px] font-mono font-bold text-white tracking-wider">
                  {selectedToken.ratio}
                </p>
                <span className="text-[11px] font-mono text-[#c2e7ff] bg-black/40 px-[8px] py-[2px] rounded border border-white/10 block">
                  {selectedToken.tailwindClass}
                </span>
              </div>

              {selectedToken.isApparelDefault && (
                <div className="absolute bottom-[8px] inset-x-[8px] text-center">
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded uppercase">
                    GAP CORE STANDARD
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Ratio Specification Details */}
          <div className="flex-1 max-w-[500px] space-y-[16px]">
            <div>
              <div className="flex items-center gap-[8px]">
                <h3 className="text-[20px] font-bold text-dls-txt-primary">
                  {selectedToken.name}
                </h3>
                {selectedToken.isApparelDefault && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                    MANDATORY FOR PLP
                  </span>
                )}
              </div>
              <p className="text-[14px] font-mono text-[#8ab4f8] mt-[2px]">
                Decimal: {selectedToken.ratioDecimal} · CSS: {selectedToken.cssProperty}
              </p>
            </div>

            <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
              {selectedToken.commerceUsage}
            </p>

            <div className="p-[14px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block">
                Engineering Directive:
              </span>
              <p className="text-[13px] text-dls-txt-muted leading-relaxed">
                Always apply <code className="text-[#8ab4f8]">object-cover w-full h-full</code> inside this container. Never allow images to dictate container height to eliminate layout thrashing during network image load.
              </p>
            </div>

            <div className="flex items-center gap-[10px] pt-[4px]">
              <button
                onClick={() => copyText(selectedToken.tailwindClass, 'selected-tw')}
                className="px-[14px] py-[8px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
              >
                <code>{selectedToken.tailwindClass}</code>
                {copiedId === 'selected-tw' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-[#8ab4f8]" />}
              </button>

              <button
                onClick={() => copyText(selectedToken.cssProperty, 'selected-css')}
                className="px-[14px] py-[8px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
              >
                <code>{selectedToken.cssProperty}</code>
                {copiedId === 'selected-css' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-dls-txt-annotation" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. ASPECT RATIO SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Aspect Ratio Tokens Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Strictly declared proportion tokens spanning apparel product shots, accessories, mobile stories, and desktop video banners.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            6 Core Ratios
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {aspectRatioTokensList.map((token) => (
            <div
              key={token.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Ratio Block & Names */}
              <div className="flex items-center gap-[16px] min-w-[240px]">
                <div
                  className={`w-[48px] rounded-[6px] bg-dls-surface-container border-2 border-[#8ab4f8] flex items-center justify-center flex-shrink-0 shadow-sm ${token.tailwindClass}`}
                  style={{ maxHeight: '64px' }}
                >
                  <span className="text-[10px] font-mono font-bold text-dls-txt-primary">
                    {token.ratio}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-[8px]">
                    <h3 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h3>
                    {token.isApparelDefault && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                        APPAREL BASE
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] font-mono text-[#8ab4f8] mt-[2px] block">
                    {token.ratio} (Decimal: {token.ratioDecimal})
                  </span>
                </div>
              </div>

              {/* Commerce Role & Description */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.commerceUsage}
                </p>
                <code className="text-[11px] font-mono text-dls-txt-annotation bg-dls-canvas px-[6px] py-[2px] rounded border border-dls-line-subtle mt-[4px] inline-block">
                  {token.cssProperty}
                </code>
              </div>

              {/* Copy Code Buttons */}
              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(token.tailwindClass, `${token.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Class"
                >
                  <code>{token.tailwindClass}</code>
                  {copiedId === `${token.id}-tw` ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>

                <button
                  onClick={() => copyText(token.cssProperty, `${token.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Property"
                >
                  <span>CSS</span>
                  {copiedId === `${token.id}-css` ? (
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
         5. CROSS-NAVIGATION CALLOUT: GO TO PRODUCT CARDS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Layers size={12} className="text-[#8ab4f8]" />
              <span>LIVE APPAREL IMPLEMENTATION</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              See 3:4 Portrait Aspect Ratio in Live Product Cards
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Observe how the mandatory <strong className="text-dls-txt-primary">aspect-[3/4]</strong> container locks model photography in place across desktop and mobile PLP grids without layout drift.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('cards')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Product Cards</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}