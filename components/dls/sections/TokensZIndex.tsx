// components/dls/sections/TokensZIndex.tsx
'use client';

import { useState } from 'react';
import {
  BringToFront,
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
  AlertTriangle,
  Eye,
  PanelRight,
  Maximize2
} from 'lucide-react';
import { zIndexTokensList, ZIndexToken } from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensZIndexProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensZIndex({ setActiveSection }: TokensZIndexProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeLayerId, setActiveLayerId] = useState<string>('z-sticky');
  const [isExploded, setIsExploded] = useState<boolean>(true);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeToken = zIndexTokensList.find((t) => t.id === activeLayerId) || zIndexTokensList[2];

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
              SPATIAL STACKING & ELEVATION PLANES
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Z-Index Layers
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The spatial elevation order governing overlapping viewports, persistent navigation bars, and modal overlays. 
            Establishes strict numerical boundaries to eradicate arbitrary z-index conflicts (e.g. z-[9999]) across storefront modules.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              8 Quantized Stacking Planes
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-500" />
              Sticky (50) vs Drawer (200) Locked
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              No Arbitrary z-[9999] Values
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Stacking Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Z-Axis Topology
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              8 Planes
            </span>
          </div>

          {/* Center Graphic: Isometric Isometric Stacking Planes */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            <div className="relative w-[180px] h-[130px] flex items-center justify-center">
              {/* Plane 1: Base (0) */}
              <div className="absolute w-[150px] h-[50px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle -rotate-12 skew-x-12 translate-y-[32px] shadow-sm flex items-center px-[8px]">
                <span className="text-[9px] font-mono text-dls-txt-annotation">Base: 0</span>
              </div>

              {/* Plane 2: Sticky (50) */}
              <div className="absolute w-[150px] h-[50px] rounded-[10px] bg-[#002554]/70 border border-[#8ab4f8]/50 -rotate-12 skew-x-12 translate-y-[8px] shadow-md flex items-center px-[8px]">
                <span className="text-[9px] font-mono text-[#c2e7ff] font-bold">Sticky: 50</span>
              </div>

              {/* Plane 3: Modal (300) */}
              <div className="absolute w-[150px] h-[50px] rounded-[10px] bg-emerald-950/80 border-2 border-emerald-500 -rotate-12 skew-x-12 -translate-y-[16px] shadow-2xl flex items-center px-[8px] z-10">
                <span className="text-[9px] font-mono text-emerald-400 font-bold">Modal: 300</span>
              </div>

              {/* Plane 4: Toast (500) */}
              <div className="absolute w-[130px] h-[36px] rounded-[8px] bg-amber-950/90 border border-amber-400 -rotate-12 skew-x-12 -translate-y-[40px] shadow-2xl flex items-center px-[8px] z-20">
                <span className="text-[9px] font-mono text-amber-300 font-bold">Toast: 500</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Collision Avoidance</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Deterministic Stacking</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Zero Leakage</span>
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
          <span className="text-[12px] font-mono text-dls-txt-muted">Stacking Presets</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Pre-defined Tailwind z-index utility classes, CSS custom variables, and offshore engineering rulesets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Resource 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Tailwind Classes</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Quantized Utilities</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Enforced stacking classes: <code className="text-[#8ab4f8]">z-50</code>, <code className="text-[#8ab4f8]">z-[100]</code>, <code className="text-[#8ab4f8]">z-[200]</code>, <code className="text-[#8ab4f8]">z-[300]</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('z-0 z-10 z-50 z-[100] z-[200] z-[300] z-[400] z-[500]', 'tw-z-classes')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-z-classes' ? 'Copied Classes!' : 'Copy Z-Index Classes'}</span>
            </button>
          </div>

          {/* Resource 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Layers size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">CSS Variables</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Stacking Variables</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Native CSS custom properties: <code className="text-[#8ab4f8]">var(--z-gap-sticky)</code>, <code className="text-[#8ab4f8]">var(--z-gap-modal)</code>.
              </p>
            </div>
            <button
              onClick={() => copyText('--z-gap-base: 0; --z-gap-sticky: 50; --z-gap-scrim: 100; --z-gap-drawer: 200; --z-gap-modal: 300;', 'css-z-vars')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'css-z-vars' ? 'Copied Variables!' : 'Copy CSS Variables'}</span>
            </button>
          </div>

          {/* Resource 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">AI Prompt Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Prohibit z-[9999]</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Explicit negative constraint for Claude & ChatGPT prohibiting arbitrary non-standard z-indices.
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
         3. INTERACTIVE SPATIAL STACKING SIMULATOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Stacking Simulator</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Inspect layer hierarchy in 3D exploded view to observe how each plane sits relative to others.
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <button
              onClick={() => setIsExploded(!isExploded)}
              className="px-[14px] py-[6px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-bold text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
            >
              <Maximize2 size={13} className="text-[#8ab4f8]" />
              <span>{isExploded ? 'Collapse Layers' : 'Explode 3D View'}</span>
            </button>
          </div>
        </div>

        {/* Simulator Workspace */}
        <div className="p-[28px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row items-center justify-between gap-[32px]">
          {/* 3D Exploded Layer Canvas */}
          <div className="w-full max-w-[340px] flex flex-col items-center">
            <span className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider mb-[12px]">
              Z-Axis Spatial Representation:
            </span>

            <div className="relative w-full max-w-[280px] h-[220px] flex flex-col items-center justify-center">
              {zIndexTokensList.map((token, index) => {
                const isActive = token.id === activeLayerId;
                const verticalOffset = isExploded ? (index - 3.5) * -24 : 0;
                return (
                  <div
                    key={token.id}
                    onClick={() => setActiveLayerId(token.id)}
                    style={{
                      transform: `perspective(600px) rotateX(45deg) rotateZ(-20deg) translateY(${verticalOffset}px)`,
                      transition: 'all 0.4s cubic-bezier(0.2, 0, 0, 1)'
                    }}
                    className={`absolute w-[220px] h-[48px] rounded-[10px] p-[8px] flex items-center justify-between cursor-pointer border shadow-md ${
                      isActive
                        ? 'bg-[#004a77] border-[#8ab4f8] text-white shadow-xl scale-105 z-30'
                        : 'bg-dls-surface-container/90 border-dls-line-subtle text-dls-txt-muted hover:text-dls-txt-primary hover:border-[#8ab4f8]/50'
                    }`}
                  >
                    <span className="text-[11px] font-bold font-mono truncate">{token.name}</span>
                    <span className="text-[10px] font-mono px-[6px] py-[1px] rounded bg-dls-canvas border border-dls-line-subtle">
                      {token.zIndexValue}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details & Directives for Active Layer */}
          <div className="flex-1 max-w-[500px] space-y-[16px]">
            <div>
              <div className="flex items-center gap-[8px]">
                <h3 className="text-[20px] font-bold text-dls-txt-primary">
                  {activeToken.name}
                </h3>
                {activeToken.isBase && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                    CRITICAL PLANE
                  </span>
                )}
              </div>
              <p className="text-[14px] font-mono text-[#8ab4f8] mt-[2px]">
                Value: {activeToken.zIndexValue} · Tailwind: {activeToken.tailwindClass} · CSS: {activeToken.cssVariable}
              </p>
            </div>

            <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
              {activeToken.commerceUsage}
            </p>

            <div className="p-[14px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block">
                Offshore Implementation Guardrail:
              </span>
              <p className="text-[13px] text-dls-txt-muted leading-relaxed">
                Elements on plane <code className="text-[#8ab4f8]">{activeToken.name}</code> must never exceed z-index {activeToken.zIndexValue + 9}. If a sub-element requires internal stacking, create a nested stacking context via <code className="text-dls-txt-primary">isolation: isolate;</code> rather than escalating global z-index numbers.
              </p>
            </div>

            <div className="flex items-center gap-[10px] pt-[4px]">
              <button
                onClick={() => copyText(activeToken.tailwindClass, 'active-tw')}
                className="px-[14px] py-[8px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
              >
                <code>{activeToken.tailwindClass}</code>
                {copiedId === 'active-tw' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-[#8ab4f8]" />}
              </button>

              <button
                onClick={() => copyText(activeToken.cssVariable, 'active-css')}
                className="px-[14px] py-[8px] rounded-[6px] bg-dls-canvas hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary flex items-center gap-[6px] transition-colors cursor-pointer"
              >
                <code>{activeToken.cssVariable}</code>
                {copiedId === 'active-css' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-dls-txt-annotation" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. Z-INDEX SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Z-Index Layers Specification Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Deterministic stacking planes eliminating cross-module visual bugs and component occlusion.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            8 Stacking Tiers
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
          {zIndexTokensList.map((token) => (
            <div
              key={token.id}
              className="p-[18px] flex flex-col lg:flex-row lg:items-center justify-between gap-[18px] hover:bg-dls-surface-elevated transition-colors"
            >
              {/* Layer Value & Name */}
              <div className="min-w-[240px]">
                <div className="flex items-center gap-[8px]">
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">{token.name}</h3>
                  {token.isBase && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[6px] py-[1px] rounded">
                      CORE
                    </span>
                  )}
                </div>
                <span className="text-[18px] font-mono font-bold text-[#8ab4f8] mt-[2px] block">
                  z-index: {token.zIndexValue}
                </span>
                <span className="text-[12px] font-mono text-dls-txt-annotation mt-[1px] block">
                  Role: {token.role}
                </span>
              </div>

              {/* Description & Commerce Role */}
              <div className="flex-1 max-w-[460px]">
                <p className="text-[14px] text-dls-txt-secondary leading-[1.6]">
                  {token.commerceUsage}
                </p>
              </div>

              {/* Copy Code Buttons */}
              <div className="flex items-center gap-[8px] flex-shrink-0">
                <button
                  onClick={() => copyText(token.tailwindClass, `${token.id}-tw`)}
                  className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                  title="Copy Tailwind Class"
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
         5. CROSS-NAVIGATION CALLOUT: MOVE TO UI COMPONENTS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>DESIGN TOKENS GOVERNANCE COMPLETE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              All 10 Token Domains Formalized — Advance to UI Components
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With Color, Typography, Spacing, Layout, Aspect Ratio, Radius, Breakpoints, Motion, Opacity, and Z-Index fully established, transition into <strong className="text-dls-txt-primary">Phase 2: UI Components Architecture</strong> starting with Atoms & Buttons.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('buttons')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Buttons & Atoms</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}