// components/dls/sections/TokensLayout.tsx
'use client';

import { useState } from 'react';
import {
  Layers,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  BookOpen,
  Code2,
  Maximize2,
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle2,
  Grid,
  ShieldCheck,
  SplitSquareVertical,
  AlignLeft,
  MoveDown
} from 'lucide-react';
import {
  containerTiersList,
  responsiveGridList,
  mobileSequenceStepsList,
  ContainerTier,
  ResponsiveGridTier,
  MobileSequenceStep
} from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensLayoutProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensLayout({ setActiveSection }: TokensLayoutProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeDevicePreview, setActiveDevicePreview] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

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
              LAYOUT SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Layout System
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The structural scaffold governing viewport boundaries, responsive grid density, and sequential content choreography. 
            Calibrated directly with Salesforce Commerce Cloud (SFCC) standards to ensure identical behavior from desktop flagships down to mobile viewports.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              4 Container Tiers (800px – 1600px)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              12 / 8 / 4 Column Grid Matrix
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#c2e7ff]" />
              Strict Mobile Sequential Rules
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Layout Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Scaffold Pill */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              M3 Scaffold Architecture
            </span>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              12-Col Grid
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            <div className="w-full h-[120px] rounded-[12px] bg-dls-surface-container border border-dls-line-subtle p-[6px] flex items-center justify-between gap-[3px] shadow-inner relative overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-full bg-[#004a77]/25 rounded-[3px] border border-[#8ab4f8]/20 flex items-center justify-center"
                >
                  <span className="text-[8px] font-mono text-[#8ab4f8]/60 hidden sm:inline">C</span>
                </div>
              ))}

              <div className="absolute inset-x-[15%] inset-y-[15%] rounded-[6px] border border-dashed border-emerald-400/80 bg-emerald-950/30 flex items-center justify-center">
                <span className="text-[10px] font-mono text-emerald-300 font-bold">1200px Base</span>
              </div>
            </div>
            
            <div className="flex justify-between w-full px-[6px] pt-[6px] text-[10px] font-mono text-dls-txt-annotation">
              <span>Margin 32px</span>
              <span>Gutter 24px</span>
              <span>Margin 32px</span>
            </div>
          </div>

          {/* Bottom Row: SFCC Breakpoint Indicator */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">SFCC Breakpoint</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">769px Mobile Cutoff</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">1rem = 10px</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Grid Presets & Scaffold Rules)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Layout Presets & Configs</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering directives for Next.js, Salesforce Commerce Cloud ISML templates, and generative prompt rulesets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Grid size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">CSS Grid</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">12-Column Preset</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Responsive grid declarations: <code className="text-[#8ab4f8]">grid-cols-4 md:grid-cols-8 lg:grid-cols-12</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-16 lg:gap-24', 'grid-preset')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'grid-preset' ? 'Copied Preset!' : 'Copy Grid Classes'}</span>
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Maximize2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">SFCC Max-Width</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Container Wrappers</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Centering scaffolds: <code className="text-[#8ab4f8]">max-w-[1200px] mx-auto px-16 lg:px-24</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('w-full max-w-[1200px] mx-auto px-16 md:px-24', 'container-wrapper')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'container-wrapper' ? 'Copied Wrapper!' : 'Copy Wrapper Classes'}</span>
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">Mobile Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Sequential Handoff</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Mandatory mobile transformation rule locking media to slot #1 and CTA to slot #5.
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
         3. PILLAR 1: CONTAINER MAX-WIDTH HIERARCHY
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              1. Container Max-Width Hierarchy
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Four bounded container widths ensuring comfortable reading spans, commercial density, and cinematic reach.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            4 Scaffold Tiers
          </span>
        </div>

        <div className="text-[16px] text-dls-txt-secondary leading-[1.7] space-y-[14px] max-w-[920px]">
          <p>
            Following Material Design 3 Scaffold principles, web surfaces must not stretch indefinitely across ultra-wide desktop monitors. 
            GAP layouts utilize four intentional container scales. While background visuals (colors, textures, and video strips) expand to fill the full viewport (100vw), all interactive content and typography remain strictly contained.
          </p>
        </div>

        {/* Visual Container Width Scale Comparison */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[14px]">
          <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider block">
            Container Width Visual Ratio (Comparison):
          </span>

          <div className="space-y-[10px]">
            <div className="w-full h-[36px] bg-dls-surface-container rounded-[8px] border border-dls-line-subtle px-[12px] flex items-center justify-between text-[12px] font-mono">
              <span className="text-dls-txt-primary font-bold">Container Full / Bleed</span>
              <span className="text-[#8ab4f8]">1600px (100% Viewport)</span>
            </div>

            <div className="w-[90%] h-[36px] bg-dls-surface-elevated rounded-[8px] border border-dls-line-subtle px-[12px] flex items-center justify-between text-[12px] font-mono">
              <span className="text-dls-txt-primary font-bold">Container Wide</span>
              <span className="text-[#8ab4f8]">1440px (Campaigns)</span>
            </div>

            <div className="w-[75%] h-[36px] bg-[#004a77]/30 rounded-[8px] border border-[#004a77] px-[12px] flex items-center justify-between text-[12px] font-mono shadow-xs">
              <span className="text-dls-txt-primary font-bold">Container Standard (SFCC Base)</span>
              <span className="text-emerald-500 font-bold">1200px (Default)</span>
            </div>

            <div className="w-[50%] h-[36px] bg-dls-surface-elevated rounded-[8px] border border-dls-line-subtle px-[12px] flex items-center justify-between text-[12px] font-mono">
              <span className="text-dls-txt-primary font-bold">Container Narrow</span>
              <span className="text-dls-txt-muted">800px (Editorial)</span>
            </div>
          </div>
        </div>

        {/* Detailed Container Tier Table */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {containerTiersList.map((tier) => (
            <div
              key={tier.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="min-w-[220px]">
                <div className="flex items-center gap-[8px]">
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{tier.name}</h3>
                  {tier.widthPx === 1200 && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                      BASE
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-[6px] mt-[4px]">
                  <span className="text-[18px] font-mono font-bold text-dls-txt-primary">
                    {tier.widthPx}px
                  </span>
                  <span className="text-[12px] font-mono text-[#8ab4f8]">
                    ({tier.widthRem})
                  </span>
                </div>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[2px] block">
                  Role: {tier.role}
                </span>
              </div>

              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {tier.recommendedUse}
                </p>
                <p className="text-[12px] text-dls-txt-muted mt-[4px] leading-relaxed">
                  {tier.bleedBehavior}
                </p>
              </div>

              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(tier.tailwindClass, `${tier.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Class"
                >
                  <code>{tier.tailwindClass}</code>
                  {copiedId === `${tier.id}-tw` ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-[#8ab4f8]" />
                  )}
                </button>

                <button
                  onClick={() => copyText(tier.cssVariable, `${tier.id}-css`)}
                  className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy CSS Variable"
                >
                  <code>{tier.cssVariable}</code>
                  {copiedId === `${tier.id}-css` ? (
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
         4. PILLAR 2: RESPONSIVE GRID SYSTEM (Columns, Gutters & Margins)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              2. Responsive Grid System
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              M3-derived Columns, Gutters, and Page Margins mapped to Salesforce Commerce Cloud breakpoints.
            </p>
          </div>
          <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-surface border border-dls-line-subtle px-[8px] py-[3px] rounded-full">
            3 Device Scales
          </span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[920px]">
          The layout grid adapts dynamically to the user’s viewport width. Columns expand to fill available container space, 
          while gutters (space between columns) and outer page margins (safe distance from screen edges) remain firmly locked to 4px multiples.
        </p>

        {/* Interactive Device Grid Simulator */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[16px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[10px]">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">
              Interactive Grid Topology Simulator:
            </span>

            <div className="flex bg-dls-canvas p-[3px] rounded-full border border-dls-line-subtle">
              <button
                onClick={() => setActiveDevicePreview('desktop')}
                className={`flex items-center gap-[6px] px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeDevicePreview === 'desktop' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Monitor size={13} />
                <span>Desktop (12 Cols)</span>
              </button>
              <button
                onClick={() => setActiveDevicePreview('tablet')}
                className={`flex items-center gap-[6px] px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeDevicePreview === 'tablet' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Tablet size={13} />
                <span>Tablet (8 Cols)</span>
              </button>
              <button
                onClick={() => setActiveDevicePreview('mobile')}
                className={`flex items-center gap-[6px] px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeDevicePreview === 'mobile' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Smartphone size={13} />
                <span>Mobile (4 Cols)</span>
              </button>
            </div>
          </div>

          <div className="w-full p-[16px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle">
            <div
              className={`grid transition-all duration-300 ${
                activeDevicePreview === 'desktop'
                  ? 'grid-cols-12 gap-[12px]'
                  : activeDevicePreview === 'tablet'
                  ? 'grid-cols-8 gap-[10px]'
                  : 'grid-cols-4 gap-[8px]'
              }`}
            >
              {[...Array(activeDevicePreview === 'desktop' ? 12 : activeDevicePreview === 'tablet' ? 8 : 4)].map((_, i) => (
                <div
                  key={i}
                  className="h-[64px] rounded-[6px] bg-[#004a77]/30 border border-[#8ab4f8]/30 flex flex-col items-center justify-center text-[#c2e7ff] font-mono text-[11px]"
                >
                  <span className="font-bold">Col {i + 1}</span>
                  <span className="text-[9px] text-[#8ab4f8]/70">Fluid</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-[12px] pt-[10px] border-t border-dls-line-subtle text-[12px] font-mono text-dls-txt-annotation">
              <span>
                Active Breakpoint:{' '}
                <strong className="text-dls-txt-primary">
                  {activeDevicePreview === 'desktop' ? '>=992px' : activeDevicePreview === 'tablet' ? '769px–991px' : '<769px (SFCC)'}
                </strong>
              </span>
              <span>
                Gutter:{' '}
                <strong className="text-[#8ab4f8]">
                  {activeDevicePreview === 'desktop' ? '24px (space-24)' : '16px (space-16)'}
                </strong>
              </span>
              <span>
                Safe Margin:{' '}
                <strong className="text-emerald-500">
                  {activeDevicePreview === 'desktop' ? '32px (space-32)' : activeDevicePreview === 'tablet' ? '24px' : '16px (space-16)'}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Responsive Grid Specification Table */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {responsiveGridList.map((grid) => (
            <div
              key={grid.breakpointName}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              <div className="min-w-[220px]">
                <h3 className="text-[16px] font-bold text-dls-txt-primary">{grid.breakpointName}</h3>
                <span className="text-[12px] font-mono text-[#8ab4f8] mt-[2px] block">
                  {grid.query}
                </span>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[1px] block">
                  {grid.targetDevice}
                </span>
              </div>

              <div className="flex items-center gap-[24px] min-w-[200px] text-[14px] font-mono">
                <div>
                  <span className="text-[10px] uppercase text-dls-txt-annotation block">Columns</span>
                  <span className="text-[18px] font-bold text-dls-txt-primary">{grid.columns} Cols</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-dls-txt-annotation block">Gutter</span>
                  <span className="text-[14px] font-bold text-[#8ab4f8]">{grid.gutterPx}px</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-dls-txt-annotation block">Page Margin</span>
                  <span className="text-[14px] font-bold text-emerald-500">{grid.marginPx}px</span>
                </div>
              </div>

              <div className="flex-1 max-w-[420px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {grid.behaviorNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         5. PILLAR 3: GAP MOBILE SEQUENCE STANDARD
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              3. GAP Mobile Sequence Standard
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Enforced vertical stack choreography when collapsing desktop multi-column layouts to mobile viewports.
            </p>
          </div>
          <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[8px] py-[3px] rounded-full">
            Storytelling Sequence
          </span>
        </div>

        <div className="text-[16px] text-dls-txt-secondary leading-[1.7] space-y-[14px] max-w-[920px]">
          <p>
            When a desktop two-column component collapses into a single-column flow on mobile (<code className="text-[#8ab4f8]">&lt;769px</code>), 
            naive CSS wrapping often results in narrative text displacing product visuals. 
            The GAP DLS enforces a strict 5-stage sequential choreography: visual media is prioritized at the top, followed by provenance metadata, narrative copy, commercial pricing, and the actionable touch target.
          </p>
        </div>

        <div className="space-y-[12px] pt-[6px]">
          {mobileSequenceStepsList.map((step) => (
            <div
              key={step.step}
              className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row md:items-center justify-between gap-[16px]"
            >
              <div className="flex items-center gap-[14px] min-w-[260px]">
                <span className="w-[28px] h-[28px] rounded-full bg-[#004a77] text-white border border-[#8ab4f8]/50 text-[12px] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{step.elementName}</h3>
                  <span className="text-[12px] font-mono text-[#8ab4f8]">{step.semanticRole}</span>
                </div>
              </div>

              <div className="flex-1 max-w-[460px]">
                <code className="text-[12px] font-mono text-[#8ab4f8] bg-dls-surface-container px-[8px] py-[3px] rounded border border-dls-line-subtle block mb-[4px]">
                  {step.technicalRule}
                </code>
                <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                  {step.rationale}
                </p>
              </div>

              <div className="flex items-center gap-[6px] text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[4px] rounded-[6px] flex-shrink-0">
                <CheckCircle2 size={13} />
                <span>Slot #{step.step} Locked</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         6. CROSS-NAVIGATION CALLOUT: GO TO SPACING SYSTEM
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Maximize2 size={12} className="text-[#8ab4f8]" />
              <span>MICRO ARCHITECTURE SPECIFICATION</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Looking for 4px Geometric Gaps, Insets & Component Margins?
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              While the <strong className="text-dls-txt-primary">Layout System</strong> establishes container bounds and responsive column counts, 
              the <strong className="text-dls-txt-primary">Spacing System</strong> defines micro-distances between elements using the strict 4px progression grid (4px – 96px).
            </p>
          </div>

          <button
            onClick={() => setActiveSection('tokens-spacing')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Return to Spacing System</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}