// components/dls/sections/TokensRadius.tsx
'use client';

import { useState } from 'react';
import {
  Box,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Code2,
  Sliders,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sun,
  Moon
} from 'lucide-react';
import {
  radiusTokensList,
  elevationTokensList,
  RadiusToken,
  ElevationToken
} from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensRadiusProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensRadius({ setActiveSection }: TokensRadiusProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedRadius, setSelectedRadius] = useState<string>('rounded-[4px]');
  const [interactivePill, setInteractivePill] = useState<boolean>(false);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
              SHAPE & ELEVATION SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Border Radius & Elevation
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            A dual-shape geometric doctrine balancing sharp, architectural 4px structural cards against iconic 9999px full-pill conversion actions. 
            Paired with calibrated surface elevations and ambient glow treatments for focused interactive moments.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-[2px] bg-emerald-500" />
              4px Architectural Card Standard
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              9999px Iconic Pill CTA Button
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              4-Tier Elevation Surfaces
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Shape Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Dual-Shape Geometry
            </span>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              6 Curvatures
            </span>
          </div>

          {/* Center Graphic: Nested 4px Soft Square with 9999px Pill Inset */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px]">
            {/* 4px Architectural Card */}
            <div className="w-[180px] h-[140px] rounded-[4px] bg-dls-surface-container border-2 border-emerald-500/70 shadow-lg flex flex-col items-center justify-center relative p-[12px]">
              <span className="absolute top-[6px] left-[8px] text-[10px] font-mono text-emerald-500 font-bold">
                4px Card Corner
              </span>

              {/* Internal 9999px Pill Button */}
              <div className="w-[130px] h-[40px] rounded-full bg-[#002554] border border-[#8ab4f8] text-white flex items-center justify-center shadow-[0_0_14px_rgba(138,180,248,0.35)]">
                <span className="text-[11px] font-bold tracking-wider uppercase font-sans">
                  Pill 9999px
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Metric Indicators */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">CTA Boundary</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Full-Pill (rounded-full)</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">M3 Surface Aligned</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Shape & Elevation Configs)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Shape & Elevation Presets</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Copy production-ready Tailwind utility classes and CSS box-shadow declarations calibrated for light and dark commerce surfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Box size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind Classes</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Radius Presets</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enforced corner rules: <code className="text-[#8ab4f8]">rounded-[4px]</code> for structural elements, <code className="text-[#8ab4f8]">rounded-full</code> for conversion CTAs.
              </p>
            </div>
            <button
              onClick={() => copyText('rounded-none rounded-[2px] rounded-[4px] rounded-[8px] rounded-[16px] rounded-full', 'radius-presets')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'radius-presets' ? 'Copied Classes!' : 'Copy Radius Classes'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Sparkles size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Ambient Glow</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Signature Glow Shadow</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Blue optical glow for focus rings, Try-On trigger button hover, and active states.
              </p>
            </div>
            <button
              onClick={() => copyText('shadow-[0_0_16px_rgba(138,180,248,0.25)]', 'glow-token')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'glow-token' ? 'Copied Glow!' : 'Copy Glow Class'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">No Arbitrary Curves</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enterprise rule prohibiting non-standard radii such as <code className="text-red-500">rounded-[12px]</code> or <code className="text-red-500">rounded-[22px]</code>.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('prompts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View AI System Prompt</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE CORNER CURVATURE PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Curvature Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Test corner radii dynamically on both structural card containers and conversion action pills.
            </p>
          </div>

          {/* Radius Selector Pills */}
          <div className="flex flex-wrap bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            {radiusTokensList.map((token) => (
              <button
                key={token.id}
                onClick={() => setSelectedRadius(token.tailwindClass)}
                className={`px-[12px] py-[5px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  selectedRadius === token.tailwindClass
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                {token.pixels === 0 ? '0px' : token.pixels === '9999px' ? 'Pill' : `${token.pixels}px`}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulator Canvas */}
        <div className="p-[28px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row items-center justify-around gap-[28px]">
          {/* Simulated Card Surface */}
          <div className="flex flex-col items-center gap-[10px]">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">
              Structural Container Test:
            </span>
            <div
              className={`w-[260px] h-[160px] bg-dls-canvas border-2 border-[#8ab4f8] p-[16px] flex flex-col justify-between transition-all duration-300 shadow-lg ${selectedRadius}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono text-[#8ab4f8] font-bold">CONTAINER #01</span>
                <span className="text-[10px] font-mono text-dls-txt-annotation">{selectedRadius}</span>
              </div>
              <p className="text-[13px] text-dls-txt-secondary leading-snug">
                Simulated card preview testing corner sharpness and nested content clearance.
              </p>
              <div className="h-[6px] w-[50%] bg-[#004a77]/50 rounded-full" />
            </div>
          </div>

          {/* Simulated CTA Button */}
          <div className="flex flex-col items-center gap-[10px]">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">
              Action Target Test:
            </span>
            <div className="flex flex-col gap-[12px] items-center justify-center h-[160px]">
              <button
                className={`px-[28px] py-[14px] bg-[#002554] text-white text-[13px] font-bold font-sans uppercase tracking-wider shadow-md hover:opacity-90 transition-all duration-300 cursor-pointer border border-[#8ab4f8]/40 ${selectedRadius}`}
              >
                Explore Collection
              </button>
              <span className="text-[11px] font-mono text-dls-txt-muted">
                Applied: <code className="text-[#8ab4f8]">{selectedRadius}</code>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. BORDER RADIUS SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Border Radius Tokens Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Strictly defined corner radii spanning zero-curvature banners to full-pill buttons.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            6 Standard Steps
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {radiusTokensList.map((token) => (
            <div
              key={token.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Preview Block & Metrics */}
              <div className="flex items-center gap-[16px] min-w-[240px]">
                <div
                  className={`w-[48px] h-[48px] bg-dls-surface-container border-2 border-[#8ab4f8] flex items-center justify-center flex-shrink-0 shadow-sm ${token.tailwindClass}`}
                >
                  <span className="text-[9px] font-mono text-dls-txt-annotation">
                    {token.pixels === 0 ? '0' : token.pixels === '9999px' ? 'Pill' : `${token.pixels}`}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-[8px]">
                    <h3 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h3>
                    {token.isBrandPill && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8ab4f8] bg-[#004a77]/80 border border-[#8ab4f8]/50 px-[6px] py-[1px] rounded">
                        BRAND PILL
                      </span>
                    )}
                    {token.pixels === 4 && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                        CARD BASE
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] font-mono text-[#8ab4f8] mt-[2px] block">
                    {token.pixels === '9999px' ? '9999px (Infinite)' : `${token.pixels}px Curvature`}
                  </span>
                </div>
              </div>

              {/* Description & Role */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.usageExample}
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
         5. ELEVATION & SHADOW SYSTEM (Surface Depths)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Elevation & Surface Depths
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Z-axis depth hierarchy guiding user focus from flat card planes to floating modal dialogs and signature glows.
            </p>
          </div>
          <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-surface border border-dls-line-subtle px-[8px] py-[3px] rounded-full">
            5 Depth Tiers
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {elevationTokensList.map((elev) => (
            <div
              key={elev.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Visual Preview Box */}
              <div className="flex items-center gap-[16px] min-w-[240px]">
                <div
                  className={`w-[48px] h-[48px] bg-dls-canvas rounded-[8px] border border-dls-line-subtle flex items-center justify-center flex-shrink-0 transition-transform ${elev.tailwindClass}`}
                >
                  <span className="text-[9px] font-mono font-bold text-dls-txt-primary">
                    {elev.level}
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{elev.name}</h3>
                  <span className="text-[12px] font-mono text-[#8ab4f8] mt-[2px] block">
                    {elev.level}
                  </span>
                </div>
              </div>

              {/* Details & Roles */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {elev.usageExample}
                </p>
                <code className="text-[11px] font-mono text-dls-txt-annotation bg-dls-canvas px-[6px] py-[2px] rounded border border-dls-line-subtle mt-[4px] inline-block">
                  {elev.boxShadow}
                </code>
              </div>

              {/* Copy Code Buttons */}
              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(elev.tailwindClass, `${elev.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Shadow"
                >
                  <code>{elev.tailwindClass.split(' ')[0]}</code>
                  {copiedId === `${elev.id}-tw` ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>

                <button
                  onClick={() => copyText(elev.cssVariable, `${elev.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{elev.cssVariable}</code>
                  {copiedId === `${elev.id}-css` ? (
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
         6. CROSS-NAVIGATION CALLOUT: GO TO PRODUCT CARDS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Layers size={12} className="text-[#8ab4f8]" />
              <span>LIVE COMPONENT INTEGRATION</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Ready to see the 4px Architecture & Pill CTA in Production?
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Inspect how the <strong className="text-dls-txt-primary">4px card curvature</strong> and <strong className="text-dls-txt-primary">9999px Pill Button</strong> combine with Color, Typography, and Spacing tokens inside the interactive Product Card playground.
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