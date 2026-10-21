// components/dls/sections/TokensOpacity.tsx
'use client';

import { useState } from 'react';
import {
  Contrast,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Code2,
  Sliders,
  CheckCircle2,
  ShieldCheck,
  Eye,
  EyeOff,
  Image as ImageIcon
} from 'lucide-react';
import { opacityTokensList, OpacityToken } from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensOpacityProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensOpacity({ setActiveSection }: TokensOpacityProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<string>('opacity-scrim');
  const [isScrimActive, setIsScrimActive] = useState<boolean>(true);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedToken = opacityTokensList.find((t) => t.id === selectedTokenId) || opacityTokensList[5];

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
              SURFACE TRANSLUCENCY & MASKS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Opacity System
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Calibrated alpha channels and surface translucency levels governing modal backdrops, disabled interactive controls, and tactile hover feedback. 
            Prevents subjective transparency overrides to ensure strict text contrast compliance across layered viewports.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              60% Standard Modal Scrim Mask
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              40% Locked Disabled State
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              WCAG Contrast Validated
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Layered Translucency Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Alpha Physics
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              8 Quantized Tiers
            </span>
          </div>

          {/* Center Graphic: Overlapping Glassmorphism Discs */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            {/* Checkerboard Pattern Base (Transparency Anchor) */}
            <div className="w-[180px] h-[130px] rounded-[16px] bg-[linear-gradient(45deg,#252729_25%,transparent_25%),linear-gradient(-45deg,#252729_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#252729_75%),linear-gradient(-45deg,transparent_75%,#252729_75%)] bg-[size:16px_16px] [background-position:0_0,0_8px,8px_-8px,-8px_0px] p-[10px] flex items-center justify-center relative overflow-hidden border border-dls-line-subtle shadow-inner">
              
              {/* Layer 1: 40% Disabled Chip */}
              <div className="absolute left-[14px] top-[18px] px-[12px] py-[6px] rounded-full bg-[#002554] border border-[#8ab4f8] text-white text-[10px] font-mono opacity-40 shadow-sm">
                40% Disabled
              </div>

              {/* Layer 2: 60% Modal Scrim Overlay Mask */}
              <div className="w-[120px] h-[80px] rounded-[12px] bg-black/60 border border-white/20 backdrop-blur-xs flex flex-col items-center justify-center shadow-2xl relative z-10">
                <span className="text-[11px] font-mono font-bold text-white">60% Scrim</span>
                <span className="text-[9px] font-mono text-[#8ab4f8]">Modal Backdrop</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Perceptual Baseline</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">60% Scrim / 40% Inactive</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Zero Arbitrary Alpha</span>
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
          <span className="text-[12px] font-mono text-dls-txt-muted">Translucency Presets</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering standards for alpha transparency tokens across Next.js Tailwind directives, CSS variables, and AI code generation rules.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind v4</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Opacity Utilities</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enforced opacity classes: <code className="text-[#8ab4f8]">opacity-40</code>, <code className="text-[#8ab4f8]">opacity-60</code>, <code className="text-[#8ab4f8]">opacity-85</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('opacity-0 opacity-[0.04] opacity-[0.08] opacity-20 opacity-40 opacity-60 opacity-85 opacity-100', 'tw-opacity-classes')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-opacity-classes' ? 'Copied Classes!' : 'Copy Opacity Classes'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Contrast size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">CSS Variables</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Alpha Channel Tokens</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Variables for CSS color mix and backdrop-blur masks: <code className="text-[#8ab4f8]">var(--opacity-gap-60)</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('--opacity-gap-40: 0.40; --opacity-gap-60: 0.60; --opacity-gap-85: 0.85;', 'css-opacity-vars')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'css-opacity-vars' ? 'Copied Variables!' : 'Copy CSS Variables'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Zero Arbitrary Alphas</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Prohibits AI from generating ad-hoc values like <code className="text-red-500">bg-black/35</code> or <code className="text-red-500">opacity-55</code>.
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
         3. INTERACTIVE TRANSLUCENCY SIMULATOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Translucency Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Test alpha tokens dynamically against underlying imagery to evaluate readability and backdrop attenuation.
            </p>
          </div>

          {/* Selector Pills */}
          <div className="flex flex-wrap bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            {opacityTokensList.map((token) => (
              <button
                key={token.id}
                onClick={() => setSelectedTokenId(token.id)}
                className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  selectedTokenId === token.id
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                {token.percentage}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulator Canvas */}
        <div className="p-[28px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row items-center justify-between gap-[32px]">
          {/* Simulated Layered Media Canvas */}
          <div className="w-full max-w-[340px] flex flex-col items-center">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider mb-[8px]">
              Underlying Content + Applied Alpha:
            </span>

            {/* Canvas Box */}
            <div className="w-full max-w-[280px] h-[200px] rounded-[16px] relative overflow-hidden border-2 border-[#8ab4f8] shadow-2xl flex items-center justify-center">
              {/* Background Mock Product Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#002554] via-[#001f42] to-[#0b0c10] p-[16px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#8ab4f8]">
                  <span>GAP LOOKBOOK 2026</span>
                  <span>#002554</span>
                </div>
                <div className="text-center space-y-[2px]">
                  <p className="text-[18px] font-black text-white font-sans">
                    HEAVYWEIGHT FLEECE
                  </p>
                  <p className="text-[12px] text-emerald-400 font-mono">¥12,900 JPY</p>
                </div>
                <div className="h-[8px] bg-white/20 rounded-full w-3/4 mx-auto" />
              </div>

              {/* Dynamic Overlay Mask applied with active Opacity Token */}
              <div
                style={{ opacity: selectedToken.valueDecimal }}
                className="absolute inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none"
              />

              {/* Centered Indicator Badge */}
              <div className="relative z-10 px-[14px] py-[8px] rounded-[10px] bg-dls-surface/90 border border-white/20 backdrop-blur-md text-center shadow-xl">
                <span className="text-[11px] font-mono font-bold text-dls-txt-primary block">
                  {selectedToken.name}
                </span>
                <span className="text-[10px] font-mono text-[#8ab4f8]">
                  Value: {selectedToken.valueDecimal} ({selectedToken.percentage})
                </span>
              </div>
            </div>
          </div>

          {/* Details & Specifications Panel */}
          <div className="flex-1 max-w-[500px] space-y-[16px]">
            <div>
              <div className="flex items-center gap-[8px]">
                <h3 className="text-[20px] font-bold text-dls-txt-primary">
                  {selectedToken.name}
                </h3>
                {selectedToken.isBase && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                    MANDATORY SPEC
                  </span>
                )}
              </div>
              <p className="text-[14px] font-mono text-[#8ab4f8] mt-[2px]">
                Decimal: {selectedToken.valueDecimal} · Tailwind: {selectedToken.tailwindClass}
              </p>
            </div>

            <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
              {selectedToken.commerceUsage}
            </p>

            <div className="p-[14px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block">
                Accessibility (WCAG AA/AAA) Directive:
              </span>
              <p className="text-[13px] text-dls-txt-muted leading-relaxed">
                When displaying white body text over imagery, apply at least <code className="text-[#8ab4f8]">opacity-60 (60%)</code> dark scrim to guarantee a minimum contrast ratio of 4.5:1. Never use raw opacity directly on text containers—use semantic text color tokens instead to prevent contrast degradation.
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
                onClick={() => copyText(selectedToken.cssVariable, 'selected-css')}
                className="px-[14px] py-[8px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
              >
                <code>{selectedToken.cssVariable}</code>
                {copiedId === 'selected-css' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-dls-txt-annotation" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. OPACITY TOKENS SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Opacity Tokens Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Declared alpha constants spanning micro-wash tints to solid modal surfaces.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            8 Alpha Tiers
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {opacityTokensList.map((token) => (
            <div
              key={token.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Swatch & Values */}
              <div className="flex items-center gap-[16px] min-w-[240px]">
                {/* Visual Swatch with Checkerboard background */}
                <div className="w-[48px] h-[48px] rounded-[8px] bg-[linear-gradient(45deg,#252729_25%,transparent_25%),linear-gradient(-45deg,#252729_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#252729_75%),linear-gradient(-45deg,transparent_75%,#252729_75%)] bg-[size:10px_10px] [background-position:0_0,0_5px,5px_-5px,-5px_0px] border border-dls-line-subtle overflow-hidden relative flex-shrink-0">
                  <div
                    style={{ opacity: token.valueDecimal }}
                    className="w-full h-full bg-[#002554]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-[8px]">
                    <h3 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h3>
                    {token.isBase && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                        BASE
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] font-mono text-[#8ab4f8] mt-[2px] block">
                    {token.percentage} (Decimal: {token.valueDecimal})
                  </span>
                </div>
              </div>

              {/* Description & Role */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.commerceUsage}
                </p>
                <span className="text-[12px] font-mono text-dls-txt-muted mt-[4px] block">
                  Role: {token.role}
                </span>
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
                  onClick={() => copyText(token.cssVariable, `${token.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{token.cssVariable}</code>
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
         5. CROSS-NAVIGATION CALLOUT: GO TO Z-INDEX LAYERS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Layers size={12} className="text-[#8ab4f8]" />
              <span>SPATIAL STACKING & MASKS</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Pair Opacity Scrims with Z-Index Stacking Layers
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              A 60% modal backdrop requires an exact spatial coordinate to sit safely above sticky headers but below active dialogues. Explore the <strong className="text-dls-txt-primary">Z-Index Layers</strong> tokens to complete the structural overlay architecture.
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