// components/dls/sections/TokensSpacing.tsx
'use client';

import { useState } from 'react';
import {
  Maximize2,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  ShieldCheck,
  Grid,
  Box,
  SplitSquareVertical,
  CheckCircle2
} from 'lucide-react';
import { spacingTokensList, SpacingToken } from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensSpacingProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensSpacing({ setActiveSection }: TokensSpacingProps) {
  const [copiedTokenId, setCopiedTokenId] = useState<string | null>(null);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedTokenId(id);
    setTimeout(() => setCopiedTokenId(null), 2000);
  };

  const categories: Array<'Micro' | 'Component' | 'Structural' | 'Section'> = [
    'Micro',
    'Component',
    'Structural',
    'Section',
  ];

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
              SPACING SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Spacing System
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            A strict 4px geometric progression grid defining component paddings, inline gaps, and vertical rhythm. 
            Eliminates arbitrary pixel guesswork across engineering teams and enforces rhythm across all screen sizes.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              4px Base Unit Grid
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              12 Quantized Steps (4px – 96px)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#c2e7ff]" />
              No Arbitrary Pixel Offsets
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Spacing Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              4px Grid Kernel
            </span>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              12 Scales
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            <div className="flex items-end gap-[6px] p-[16px] rounded-[16px] bg-dls-surface-container border border-dls-line-subtle shadow-inner">
              <div className="w-[8px] h-[8px] bg-[#8ab4f8]/40 rounded-xs" title="4px" />
              <div className="w-[12px] h-[16px] bg-[#8ab4f8]/60 rounded-xs" title="8px" />
              <div className="w-[16px] h-[24px] bg-[#8ab4f8]/80 rounded-xs" title="12px" />
              <div className="w-[20px] h-[36px] bg-[#8ab4f8] rounded-xs shadow-lg" title="16px (Base)" />
              <div className="w-[24px] h-[48px] bg-[#c2e7ff] rounded-xs" title="24px" />
              <div className="w-[28px] h-[64px] bg-[#004a77] border border-[#8ab4f8]/50 rounded-xs" title="32px" />
              <div className="w-[32px] h-[84px] bg-[#002554] border border-[#8ab4f8] rounded-xs" title="48px" />
            </div>
          </div>

          {/* Bottom Row: Metric Indicators */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Default Gutter</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">16px Mobile / 24px Desktop</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">1rem = 10px</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Tokens Config & Handoff Rules)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Spacing Configs</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Pre-calculated spacing presets for Tailwind CSS v4, CSS custom properties, and enterprise AI prompt constraints.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind v4</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Pixel-Lock Classes</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enforced <code className="text-[#8ab4f8]">gap-16</code>, <code className="text-[#8ab4f8]">p-24</code>, <code className="text-[#8ab4f8]">py-32</code> mapped directly to 4px multiples.
              </p>
            </div>
            <button
              onClick={() => copyText('gap-8 gap-16 gap-24 gap-32 p-16 p-24 py-32 py-48 py-64', 'tailwind-classes')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedTokenId === 'tailwind-classes' ? 'Copied Classes!' : 'Copy Tailwind Preset'}</span>
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Box size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">SFCC Variables</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">CSS Spacing Variables</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Native <code className="text-[#8ab4f8]">var(--spacing-gap-*)</code> tokens ready for offshore ISML template integration.
              </p>
            </div>
            <button
              onClick={() => copyText('--spacing-gap-1: 0.4rem; --spacing-gap-4: 1.6rem; --spacing-gap-6: 2.4rem;', 'css-vars')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedTokenId === 'css-vars' ? 'Copied CSS Vars!' : 'Copy CSS Variables'}</span>
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Zero Arbitrary Pixels</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Negative constraint for Claude & ChatGPT Enterprise prohibiting arbitrary margins like <code className="text-red-500">p-[19px]</code>.
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
         3. WHAT IS SPACING & THE 4PX GRID FOUNDATION
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
          The 4px Base Grid Foundation
        </h2>

        <div className="text-[16px] text-dls-txt-secondary leading-[1.7] space-y-[16px] max-w-[920px]">
          <p>
            In Material Design 3, spacing establishes visual balance and content grouping. 
            GAP Japan adopts an uncompromising <strong className="text-dls-txt-primary font-bold">4px base grid kernel</strong>. Every margin, padding, and layout gutter is a mathematical multiple of 4 pixels (<code className="text-[#8ab4f8] bg-dls-surface px-[8px] py-[2px] rounded text-[14px] font-mono">4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96</code>).
          </p>

          <p>
            Arbitrary odd-pixel increments (e.g., <code className="text-red-500 bg-red-950/20 px-[8px] py-[2px] rounded text-[14px] font-mono line-through">17px</code> or <code className="text-red-500 bg-red-950/20 px-[8px] py-[2px] rounded text-[14px] font-mono line-through">23px</code>) introduce sub-pixel rounding errors on high-DPI displays and cause visual friction between design intent and engineering handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] pt-[8px]">
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[2px] rounded-full">
              INSET PADDING
            </span>
            <h3 className="text-[16px] font-bold text-dls-txt-primary mt-[10px]">Internal Padding</h3>
            <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
              Defines the inner clearance between a container’s edge and its nested children (e.g., product card boundaries, button text clearance).
            </p>
          </div>

          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle">
            <span className="text-[12px] font-mono text-dls-txt-primary bg-dls-surface-elevated border border-dls-line-subtle px-[8px] py-[2px] rounded-full">
              INLINE & STACK GAP
            </span>
            <h3 className="text-[16px] font-bold text-dls-txt-primary mt-[10px]">Element Separation</h3>
            <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
              Controlled via CSS Flex/Grid <code className="text-dls-txt-primary">gap</code> properties to separate neighboring chips, swatches, or sibling typography nodes.
            </p>
          </div>

          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle">
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[8px] py-[2px] rounded-full">
              VERTICAL RHYTHM
            </span>
            <h3 className="text-[16px] font-bold text-dls-txt-primary mt-[10px]">Section Clearance</h3>
            <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
              Generous vertical margins (48px – 96px) separating distinct marketing stories, lookbook cards, and editorial chapters.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. THE SPACING SCALE TOKENS MATRIX (With Visual Indicators)
         ========================================================= */}
      <section className="space-y-[32px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Spacing Scale Tokens Matrix
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            The 12 quantized spacing steps spanning micro-offsets, component containers, and vertical page sections.
          </p>
        </div>

        {categories.map((cat) => {
          const items = spacingTokensList.filter((item) => item.category === cat);
          return (
            <div key={cat} className="space-y-[14px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
                    <span>{cat} Spacing</span>
                  </h3>
                  <p className="text-[14px] text-dls-txt-muted mt-[2px]">
                    {cat === 'Micro' && 'Small inline adjustments, icon-to-text offsets, and badge padding (4px – 8px).'}
                    {cat === 'Component' && 'Core component insets, button padding, and standard mobile/desktop gutters (12px – 24px).'}
                    {cat === 'Structural' && 'Sub-section clearances, filter group spacing, and mobile vertical breaks (32px – 48px).'}
                    {cat === 'Section' && 'Major editorial story boundaries, hero transitions, and footer clearance (64px – 96px).'}
                  </p>
                </div>
                <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
                  {items.length} Tokens
                </span>
              </div>

              <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
                {items.map((token) => (
                  <div
                    key={token.id}
                    className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
                  >
                    <div className="min-w-[200px]">
                      <div className="flex items-center gap-[8px]">
                        <h4 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h4>
                        {token.pixels === 16 && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                            MOBILE BASE
                          </span>
                        )}
                        {token.pixels === 24 && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8ab4f8] bg-[#004a77]/80 border border-[#8ab4f8]/50 px-[6px] py-[1px] rounded">
                            DESKTOP BASE
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-[6px] mt-[4px]">
                        <span className="text-[18px] font-mono font-bold text-dls-txt-primary">
                          {token.pixels}px
                        </span>
                        <span className="text-[12px] font-mono text-[#8ab4f8]">
                          ({token.rem})
                        </span>
                      </div>
                    </div>

                    <div className="w-[140px] flex-shrink-0">
                      <div className="h-[22px] bg-dls-surface-container rounded-[6px] p-[2px] border border-dls-line-subtle flex items-center">
                        <div
                          className="h-full bg-gradient-to-r from-[#004a77] to-[#8ab4f8] rounded-[4px] transition-all"
                          style={{ width: `${Math.min(100, (token.pixels / 96) * 100)}%` }}
                          title={`${token.pixels}px visual representation`}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-dls-txt-annotation mt-[2px] block text-right">
                        {token.pixels}px Scale
                      </span>
                    </div>

                    <div className="flex-1 max-w-[420px]">
                      <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                        {token.usageExample}
                      </p>
                    </div>

                    <div className="flex items-center gap-[8px] flex-shrink-0">
                      <button
                        onClick={() => copyText(token.tailwindClass.split(' ')[0], `${token.id}-tw`)}
                        className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                        title="Copy Tailwind Class"
                      >
                        <code>{token.tailwindClass.split(' ')[0]}</code>
                        {copiedTokenId === `${token.id}-tw` ? (
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
                        {copiedTokenId === `${token.id}-css` ? (
                          <Check size={13} className="text-emerald-500" />
                        ) : (
                          <Copy size={13} className="text-dls-txt-annotation" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION CALLOUT: GO TO LAYOUT SYSTEM
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Layers size={12} className="text-[#8ab4f8]" />
              <span>MACRO ARCHITECTURE SPECIFICATION</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Looking for 12-Column Grids, Container Bounds & Mobile Sequences?
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              While <strong className="text-dls-txt-primary">Spacing</strong> defines micro-distances between elements, 
              the <strong className="text-dls-txt-primary">Layout System</strong> establishes macro-page bounds—including 4 container widths (800px – 1600px), responsive breakpoints, and strict mobile sequential storytelling.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('tokens-layout')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Layout System</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}