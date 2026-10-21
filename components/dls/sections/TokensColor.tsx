// components/dls/sections/TokensColor.tsx
'use client';

import { useState } from 'react';
import {
  gapNavyFamily,
  neutralGrayFamily,
  statusRedFamily,
  statusGoldFamily,
  statusGreenFamily,
  borderTokens,
  ColorFamily,
  ColorScaleStep
} from '@/data/tokensData';
import {
  Copy,
  Check,
  ArrowLeft,
  Palette,
  ShieldCheck,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface TokensColorProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensColor({ setActiveSection }: TokensColorProps) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyText = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedValue(val);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const renderScaleStrip = (family: ColorFamily) => (
    <div className="w-full rounded-[12px] overflow-hidden border border-dls-line-subtle p-[4px] bg-dls-surface-container">
      <div className="flex h-[40px] w-full rounded-[8px] overflow-hidden">
        {family.steps.map((step) => (
          <div
            key={step.step}
            onClick={() => copyText(step.hex)}
            className="flex-1 h-full cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center group relative"
            style={{ backgroundColor: step.hex }}
            title={`${step.name}: ${step.hex}`}
          >
            <span
              className={`text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity ${
                parseInt(step.step, 10) >= 500 ? 'text-white' : 'text-black'
              }`}
            >
              {step.step}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-[6px] pt-[6px] text-[11px] font-mono text-dls-txt-annotation">
        <span>{family.steps[0].step} (Lightest)</span>
        <span>{family.steps[family.steps.length - 1].step} (Deepest)</span>
      </div>
    </div>
  );

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
              COLOR SYSTEM SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Color System
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            A mathematically calibrated chromatic scale spanning from iconic GAP Navy to high-contrast monochrome neutrals and promotional alert palettes. 
            All steps provide guaranteed accessibility ratios across light and dark commerce viewports.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#002554] border border-white/40" />
              10-Step Brand Navy
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#555555] border border-white/40" />
              10-Step Neutral Gray
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#dc3545] border border-white/40" />
              5-Step Functional Scales
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#dc3545]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Info */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Chromatic Hierarchy
            </span>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              31 Variables
            </span>
          </div>

          {/* Center Graphic: Concentric Color Discs */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            {/* Outer Navy Ring */}
            <div className="w-[180px] h-[180px] rounded-full bg-[#002554] border-[4px] border-[#001b3d] shadow-2xl flex items-center justify-center relative">
              <span className="absolute top-[10px] text-[10px] font-mono text-white/80">700 Base</span>

              {/* Mid Accent Disc */}
              <div className="w-[120px] h-[120px] rounded-full bg-[#0066cc] border-[4px] border-[#00478f] flex items-center justify-center relative">
                <span className="absolute top-[8px] text-[10px] font-mono text-white/90">500 Accent</span>

                {/* Core White Pill */}
                <div className="w-[64px] h-[64px] rounded-full bg-white text-[#002554] flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[12px] font-black font-mono">GAP</span>
                  <span className="text-[8px] font-bold">NAVY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Swatch Palette Indicator */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div className="flex items-center gap-[6px]">
              <span className="w-[12px] h-[12px] rounded-full bg-[#dc3545]" title="Red 500" />
              <span className="w-[12px] h-[12px] rounded-full bg-[#f59e0b]" title="Gold 500" />
              <span className="w-[12px] h-[12px] rounded-full bg-[#10b981]" title="Green 500" />
              <span className="w-[12px] h-[12px] rounded-full bg-[#2b2b2b] border border-white/20" title="Dark 800" />
            </div>
            <span className="text-[12px] font-mono text-emerald-500">WCAG AAA Ready</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. BRAND CORE: GAP NAVY (10-Step Scale)
         ========================================================= */}
      <section className="space-y-[20px]">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              {gapNavyFamily.name}
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              {gapNavyFamily.description}
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            10-Step Geometric Scale
          </span>
        </div>

        {/* Continuous Swatch Strip */}
        {renderScaleStrip(gapNavyFamily)}

        {/* Detailed Token Table */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {gapNavyFamily.steps.map((token) => (
            <div
              key={token.step}
              className="p-[16px] flex flex-col md:flex-row md:items-center justify-between gap-[16px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="flex items-center gap-[14px] min-w-[220px]">
                <div
                  onClick={() => copyText(token.hex)}
                  className="w-[44px] h-[44px] rounded-[10px] border border-white/20 shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center group"
                  style={{ backgroundColor: token.hex }}
                  title="Click to copy HEX"
                >
                  <Copy size={14} className="text-white opacity-0 group-hover:opacity-100 drop-shadow" />
                </div>
                <div>
                  <div className="flex items-center gap-[8px]">
                    <h3 className="text-[16px] font-bold text-dls-txt-primary leading-tight">
                      {token.name}
                    </h3>
                    {token.isBase && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                        BASE
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => copyText(token.hex)}
                    className="text-[12px] font-mono text-[#8ab4f8] hover:underline mt-[3px] block cursor-pointer"
                  >
                    {token.hex}
                  </button>
                </div>
              </div>

              <div className="flex-1 max-w-[480px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.description}
                </p>
              </div>

              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(token.variable)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{token.variable}</code>
                  {copiedValue === token.variable ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-dls-txt-annotation" />
                  )}
                </button>

                <button
                  onClick={() => copyText(token.tailwind)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Class"
                >
                  <code>{token.tailwind}</code>
                  {copiedValue === token.tailwind ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         3. NEUTRAL & SURFACES: NEUTRAL GRAY (10-Step Scale)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              {neutralGrayFamily.name}
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              {neutralGrayFamily.description}
            </p>
          </div>
          <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-surface border border-dls-line-subtle px-[8px] py-[3px] rounded-full">
            10-Step Monochromatic
          </span>
        </div>

        {/* Continuous Swatch Strip */}
        {renderScaleStrip(neutralGrayFamily)}

        {/* Detailed Token Table */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {neutralGrayFamily.steps.map((token) => (
            <div
              key={token.step}
              className="p-[16px] flex flex-col md:flex-row md:items-center justify-between gap-[16px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="flex items-center gap-[14px] min-w-[220px]">
                <div
                  onClick={() => copyText(token.hex)}
                  className="w-[44px] h-[44px] rounded-[10px] border border-white/20 shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center group"
                  style={{ backgroundColor: token.hex }}
                  title="Click to copy HEX"
                >
                  <Copy size={14} className="text-white opacity-0 group-hover:opacity-100 drop-shadow" />
                </div>
                <div>
                  <div className="flex items-center gap-[8px]">
                    <h3 className="text-[16px] font-bold text-dls-txt-primary leading-tight">
                      {token.name}
                    </h3>
                    {token.isBase && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                        BASE
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => copyText(token.hex)}
                    className="text-[12px] font-mono text-[#8ab4f8] hover:underline mt-[3px] block cursor-pointer"
                  >
                    {token.hex}
                  </button>
                </div>
              </div>

              <div className="flex-1 max-w-[480px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.description}
                </p>
              </div>

              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(token.variable)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{token.variable}</code>
                  {copiedValue === token.variable ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-dls-txt-annotation" />
                  )}
                </button>

                <button
                  onClick={() => copyText(token.tailwind)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-dls-surface-elevated hover:bg-dls-surface-container border border-dls-line-subtle text-[12px] font-mono text-dls-txt-primary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Class"
                >
                  <code>{token.tailwind}</code>
                  {copiedValue === token.tailwind ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         4. FUNCTIONAL & STATUS: RED, GOLD, GREEN (5-Step Scales)
         ========================================================= */}
      <section className="space-y-[32px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Functional & Status Systems
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Calibrated 5-step scales designed for situational alerting, discount callouts, star review averages, and real-time inventory validation.
          </p>
        </div>

        {/* Status Red, Gold, Green in sequence */}
        {[statusRedFamily, statusGoldFamily, statusGreenFamily].map((family) => (
          <div key={family.id} className="space-y-[14px]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
                  <span>{family.name}</span>
                </h3>
                <p className="text-[14px] text-dls-txt-muted mt-[2px]">{family.description}</p>
              </div>
              <span className="text-[12px] font-mono text-dls-txt-annotation">5-Step Scale</span>
            </div>

            {renderScaleStrip(family)}

            <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
              {family.steps.map((token) => (
                <div
                  key={token.step}
                  className="p-[14px] flex flex-col md:flex-row md:items-center justify-between gap-[16px] hover:bg-dls-surface-elevated transition-colors"
                >
                  <div className="flex items-center gap-[14px] min-w-[200px]">
                    <div
                      onClick={() => copyText(token.hex)}
                      className="w-[38px] h-[38px] rounded-[8px] border border-white/20 shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center group"
                      style={{ backgroundColor: token.hex }}
                    >
                      <Copy size={13} className="text-white opacity-0 group-hover:opacity-100 drop-shadow" />
                    </div>
                    <div>
                      <div className="flex items-center gap-[6px]">
                        <h4 className="text-[14px] font-bold text-dls-txt-primary leading-tight">
                          {token.name}
                        </h4>
                        {token.isBase && (
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950 border border-emerald-700/60 px-[5px] py-[1px] rounded">
                            BASE
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] font-mono text-[#8ab4f8]">{token.hex}</span>
                    </div>
                  </div>

                  <div className="flex-1 max-w-[460px]">
                    <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                      {token.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-[8px] flex-shrink-0">
                    <button
                      onClick={() => copyText(token.variable)}
                      className="px-[10px] py-[5px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] cursor-pointer"
                    >
                      <code>{token.variable}</code>
                    </button>
                    <button
                      onClick={() => copyText(token.tailwind)}
                      className="px-[10px] py-[5px] rounded-[6px] bg-dls-surface-elevated hover:bg-dls-surface-container border border-dls-line-subtle text-[12px] font-mono text-dls-txt-primary flex items-center gap-[6px] cursor-pointer"
                    >
                      <code>{token.tailwind}</code>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================
         5. BORDERS & BOUNDARY TOKENS (Fixed / Static Tokens)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Borders & Dividing Strokes
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Fixed-value boundaries. By deliberate design, borders do not scale geometrically to ensure unified hair-line divisions across templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] pt-[6px]">
          {borderTokens.map((border) => (
            <div
              key={border.variable}
              className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-[12px]">
                  <div
                    className="w-[28px] h-[28px] rounded-[6px] border-[2px] border-white/40"
                    style={{ backgroundColor: border.hex }}
                  />
                  <span className="text-[12px] font-mono text-[#8ab4f8]">{border.hex}</span>
                </div>
                <h3 className="text-[16px] font-bold text-dls-txt-primary mb-[4px]">{border.name}</h3>
                <p className="text-[14px] text-dls-txt-muted leading-[1.6] mb-[16px]">
                  {border.description}
                </p>
              </div>

              <div className="space-y-[6px] pt-[12px] border-t border-dls-line-subtle">
                <button
                  onClick={() => copyText(border.variable)}
                  className="w-full px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated text-[12px] font-mono text-dls-txt-secondary flex items-center justify-between border border-dls-line-subtle cursor-pointer"
                >
                  <span>{border.variable}</span>
                  <Copy size={12} className="text-dls-txt-annotation" />
                </button>
                <button
                  onClick={() => copyText(border.tailwind)}
                  className="w-full px-[10px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/50 text-[12px] font-mono text-[#c2e7ff] flex items-center justify-between border border-[#004a77] cursor-pointer"
                >
                  <span>{border.tailwind}</span>
                  <Copy size={12} className="text-[#8ab4f8]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}