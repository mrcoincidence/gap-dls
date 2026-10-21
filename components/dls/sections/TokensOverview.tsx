// components/dls/sections/TokensOverview.tsx
'use client';

import {
  Palette,
  Type,
  Maximize2,
  Box,
  Smartphone,
  Braces,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
  Users,
  Code2,
  FileJson,
  Download,
  ExternalLink,
  Check,
  Cpu,
  RefreshCw,
  GitBranch
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface TokensOverviewProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensOverview({ setActiveSection }: TokensOverviewProps) {
  const tokenCards = [
    {
      id: 'tokens-color' as NavigationSection,
      title: 'Color System',
      englishTitle: 'Brand & Semantic Palettes',
      description: 'GAP Navy, dark canvas surfaces, neutral text hierarchies, functional alert badges, and border definitions.',
      icon: Palette,
      badge: '13 Tokens',
      preview: (
        <div className="flex items-center gap-[8px] mt-[12px]">
          <span className="w-[20px] h-[20px] rounded-full bg-[#002554] border border-white/20 shadow-xs" title="gap-navy" />
          <span className="w-[20px] h-[20px] rounded-full bg-[#001b3d] border border-white/20 shadow-xs" title="gap-navy-deep" />
          <span className="w-[20px] h-[20px] rounded-full bg-[#2b2b2b] border border-white/20 shadow-xs" title="gap-dark" />
          <span className="w-[20px] h-[20px] rounded-full bg-[#f5f6f8] border border-white/20 shadow-xs" title="gap-gray" />
          <span className="w-[20px] h-[20px] rounded-full bg-[#dc3545] border border-white/20 shadow-xs" title="gap-red" />
          <span className="text-[12px] font-mono text-dls-txt-muted ml-[4px]">+8 more</span>
        </div>
      )
    },
    {
      id: 'tokens-typography' as NavigationSection,
      title: 'Typography Scale',
      englishTitle: 'Font Hierarchy & Tracking',
      description: 'Official GapSans type hierarchy based on the 1rem = 10px convention across Display, Headings, Body, and Mono tags.',
      icon: Type,
      badge: '9 Scales',
      preview: (
        <div className="flex items-baseline gap-[10px] mt-[12px] font-mono text-[12px] text-dls-txt-secondary">
          <span className="text-[20px] font-black text-dls-txt-primary leading-none">Aa</span>
          <span className="text-[16px] font-bold text-dls-txt-primary">H1 35px</span>
          <span className="text-[14px] text-dls-txt-muted">Body 16px</span>
          <span className="text-[12px] text-dls-txt-annotation">Caption 12px</span>
        </div>
      )
    },
    {
      id: 'tokens-spacing' as NavigationSection,
      title: 'Spacing System',
      englishTitle: '4px Base Grid & Insets',
      description: 'Strictly enforced 4px geometric progression grid eliminating arbitrary pixel padding across micro-components.',
      icon: Maximize2,
      badge: '12 Scales',
      preview: (
        <div className="flex items-end gap-[6px] mt-[14px] h-[18px]">
          <div className="w-[4px] h-[4px] bg-[#8ab4f8] rounded-xs" title="4px" />
          <div className="w-[8px] h-[8px] bg-[#8ab4f8] rounded-xs" title="8px" />
          <div className="w-[12px] h-[12px] bg-[#8ab4f8] rounded-xs" title="12px" />
          <div className="w-[16px] h-[16px] bg-[#8ab4f8] rounded-xs" title="16px" />
          <div className="w-[24px] h-[18px] bg-[#8ab4f8]/70 rounded-xs" title="24px" />
          <span className="text-[12px] font-mono text-dls-txt-muted ml-[6px]">4px - 96px</span>
        </div>
      )
    },
    {
      id: 'tokens-layout' as NavigationSection,
      title: 'Layout System',
      englishTitle: 'Scaffolds, Grids & Sequencing',
      description: '4 Container Tiers (800px – 1600px), 12-Column Responsive Grid, and strict Mobile Sequential Choreography.',
      icon: Layers,
      badge: 'Scaffolding',
      preview: (
        <div className="flex items-center gap-[4px] mt-[14px] h-[18px]">
          <div className="flex-1 h-[14px] bg-[#004a77]/30 border border-[#8ab4f8]/30 rounded-xs" />
          <div className="flex-1 h-[14px] bg-[#004a77]/30 border border-[#8ab4f8]/30 rounded-xs" />
          <div className="flex-1 h-[14px] bg-[#004a77]/30 border border-[#8ab4f8]/30 rounded-xs" />
          <div className="flex-1 h-[14px] bg-[#004a77]/30 border border-[#8ab4f8]/30 rounded-xs" />
          <span className="text-[12px] font-mono text-dls-txt-muted ml-[6px]">12-Col</span>
        </div>
      )
    },
    {
      id: 'tokens-radius' as NavigationSection,
      title: 'Border Radius & Elevation',
      englishTitle: 'Shapes, Shadows & Glows',
      description: 'Dual-shape geometry: sharp 4px structural cards contrasted with iconic full-pill CTA buttons and elevation shadows.',
      icon: Box,
      badge: '4 Shapes',
      preview: (
        <div className="flex items-center gap-[10px] mt-[12px]">
          <div className="w-[24px] h-[20px] bg-dls-surface-elevated border border-dls-line-subtle rounded-[2px]" title="rounded-xs (2px)" />
          <div className="w-[24px] h-[20px] bg-dls-surface-elevated border border-dls-line-subtle rounded-[4px]" title="rounded-sm (4px)" />
          <div className="w-[36px] h-[20px] bg-[#004a77] border border-[#8ab4f8]/50 rounded-full" title="rounded-full" />
          <span className="text-[12px] font-mono text-dls-txt-muted ml-[4px]">Pill & Soft Square</span>
        </div>
      )
    },
    {
      id: 'tokens-breakpoints' as NavigationSection,
      title: 'Breakpoints (SFCC)',
      englishTitle: 'Storefront Reference Standard',
      description: 'Exact responsive viewport triggers aligned directly with Salesforce Commerce Cloud (SFCC) production templates.',
      icon: Smartphone,
      badge: '6 Viewports',
      preview: (
        <div className="flex items-center gap-[8px] mt-[12px] font-mono text-[12px]">
          <span className="px-[8px] py-[3px] rounded bg-dls-surface-container text-dls-txt-primary">sm: 544px</span>
          <span className="px-[8px] py-[3px] rounded bg-[#004a77] text-[#c2e7ff] font-bold">md: 769px</span>
          <span className="px-[8px] py-[3px] rounded bg-dls-surface-container text-dls-txt-primary">lg: 992px</span>
        </div>
      )
    },
    {
      id: 'tokens-export' as NavigationSection,
      title: 'Raw JSON Export',
      englishTitle: 'Machine-Readable Tokens',
      description: 'Machine-readable tokens.json export ready for direct project knowledge ingestion into Claude and ChatGPT Enterprise.',
      icon: Braces,
      badge: 'tokens.json',
      preview: (
        <div className="flex items-center gap-[6px] mt-[12px] font-mono text-[12px] text-[#8ab4f8]">
          <code>tokens.json</code>
          <span className="text-[12px] text-dls-txt-muted">Ready for AI & SFCC</span>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-[1140px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER (20px Lead Text)
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        {/* Left: Headline & Narrative */}
        <div className="flex-1 max-w-[660px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[3px] rounded-full bg-[#004a77]/20 border border-[#8ab4f8]/30 text-[#8ab4f8] text-[12px] font-mono mb-[16px]">
            <BookOpen size={13} className="text-[#8ab4f8]" />
            <span>FOUNDATIONS · DESIGN LANGUAGE SYSTEM</span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Design Tokens
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Design tokens are the atomic elements of the GAP Japan Design System. 
            They assign semantic names to raw visual design values—including brand colors, type scales, container gutters, and elevations—transforming subjective creative choices into enforceable, platform-agnostic code variables.
          </p>

          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => {
                const el = document.getElementById('token-categories');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-[20px] py-[12px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer shadow-md"
            >
              <span>Explore Token Domains</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => setActiveSection('tokens-export')}
              className="px-[18px] py-[12px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-dls-txt-secondary text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer"
            >
              <FileJson size={15} className="text-[#8ab4f8]" />
              <span>tokens.json (Raw)</span>
            </button>
          </div>
        </div>

        {/* Right: 1:1 Aspect Ratio Geometric Visual Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#dc3545]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Token Pill */}
          <div className="flex items-center justify-between z-10">
            <div className="px-[10px] py-[4px] rounded-full bg-dls-canvas/80 border border-dls-line-subtle backdrop-blur-md flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#002554] border border-white/40" />
              <span className="text-[12px] font-mono text-[#8ab4f8]">gap.color.brand.navy</span>
            </div>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              #002554
            </span>
          </div>

          {/* Center Graphic: Nested Geometric Scales */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[16px]">
            <div className="w-[180px] h-[180px] rounded-[18px] border border-dls-line-subtle bg-dls-canvas/40 flex items-center justify-center relative">
              <span className="absolute top-[8px] left-[10px] text-[12px] font-mono text-dls-txt-annotation">space-64</span>
              
              <div className="w-[124px] h-[124px] rounded-[12px] border border-[#8ab4f8]/30 bg-[#004a77]/20 flex items-center justify-center relative">
                <span className="absolute top-[6px] left-[8px] text-[12px] font-mono text-[#8ab4f8]">gap-navy-deep</span>
                
                <div className="px-[14px] py-[7px] rounded-full bg-white text-black font-bold text-[12px] shadow-lg flex items-center gap-[6px]">
                  <span>Pill 9999px</span>
                  <Check size={12} className="text-[#002554]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Typography Specimen */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Type Scale</p>
              <p className="text-[14px] font-bold text-dls-txt-primary font-sans mt-[2px]">GapSans-Bold 35px</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">1rem = 10px</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES SECTION (16px Body / 14px Card Description / 12px Labels)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">4 Source Artifacts</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Access the master configuration files and engineering packages that power the GAP Japan Design System across design tools, production codebases, and enterprise AI workspaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] pt-[6px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <FileJson size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">JSON</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">tokens.json</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Machine-readable token dictionary.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('tokens-export')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[4px] cursor-pointer"
            >
              <span>View Data</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">CSS v4</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">@theme Globals</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Tailwind CSS token directives.
              </p>
            </div>
            <a
              href="#tokens-categories"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('tokens-color');
              }}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[4px] cursor-pointer"
            >
              <span>View CSS Variables</span>
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Cpu size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">Claude/GPT</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">AI System Prompt</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Governance rules for Vibe coding.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('prompts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[4px] cursor-pointer"
            >
              <span>Copy Prompt</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <GitBranch size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-dls-txt-muted">SFCC</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">ISML Schemas</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                India offshore contract templates.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('contracts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[4px] cursor-pointer"
            >
              <span>Explore Schemas</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. WHAT'S A DESIGN TOKEN? (16px Standard Body / 12px Code)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
          What’s a design token?
        </h2>

        {/* Body Text: 16px */}
        <div className="text-[16px] text-dls-txt-secondary leading-[1.7] space-y-[16px] max-w-[920px]">
          <p>
            In traditional front-end setups, visual styles are hardcoded directly into individual style sheets or template files. A developer might write <code className="text-[#8ab4f8] bg-dls-surface px-[8px] py-[2px] rounded text-[14px] font-mono">background: #002554</code> on one component, while an offshore engineer creates <code className="text-[#8ab4f8] bg-dls-surface px-[8px] py-[2px] rounded text-[14px] font-mono">background: #001b3d</code> on another. 
            Over time, hundreds of unintended visual discrepancies accumulate across the e-commerce storefront.
          </p>

          <p>
            <strong className="text-dls-txt-primary font-bold">Design tokens replace explicit values with semantic names.</strong> They are the single source of truth for all visual properties. When you define a token, you decouple the design decision (e.g., <em>"The primary brand CTA is GAP Navy"</em>) from its technical implementation (CSS hex, RGB, or iOS Swift code).
          </p>
        </div>

        {/* Visual Comparison: Traditional CSS vs GAP Tokens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] pt-[8px]">
          {/* Before */}
          <div className="rounded-[14px] bg-dls-surface-container border border-red-900/30 p-[20px]">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[12px] font-bold text-red-500 flex items-center gap-[6px]">
                <span className="w-[6px] h-[6px] rounded-full bg-red-500" />
                Before: Hardcoded Values (Fragmented)
              </span>
              <span className="text-[12px] font-mono text-red-400">Arbitrary CSS</span>
            </div>
            <pre className="font-mono text-[12px] text-dls-txt-muted leading-relaxed overflow-x-auto bg-dls-canvas p-[14px] rounded-[8px] border border-dls-line-subtle">
              <code>{`.promo-banner {
  background-color: #002554; /* Hardcoded hex */
  padding: 19px 23px;       /* Arbitrary pixels */
  border-radius: 99px;      /* Non-standard curve */
  font-size: 15px;          /* Unsynced type size */
}`}</code>
            </pre>
            <p className="text-[12px] text-dls-txt-annotation mt-[12px] leading-relaxed">
              Causes layout drift, visual bugs, and hours of manual handoff review between Tokyo and India.
            </p>
          </div>

          {/* After */}
          <div className="rounded-[14px] bg-dls-surface-container border border-emerald-900/40 p-[20px]">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[12px] font-bold text-emerald-500 flex items-center gap-[6px]">
                <span className="w-[6px] h-[6px] rounded-full bg-emerald-500" />
                GAP DLS: Tokenized Hierarchy (Enforced)
              </span>
              <span className="text-[12px] font-mono text-emerald-400">Tailwind & CSS Tokens</span>
            </div>
            <pre className="font-mono text-[12px] text-[#8ab4f8] leading-relaxed overflow-x-auto bg-dls-canvas p-[14px] rounded-[8px] border border-dls-line-subtle">
              <code>{`<div className="
  bg-gap-navy        /* var(--color-gap-navy) */
  p-24               /* 4px Base Grid (24px)   */
  rounded-full       /* Official Pill Spec     */
  text-h4            /* GapSans 21px Scale     */
">`}</code>
            </pre>
            <p className="text-[12px] text-emerald-500 mt-[12px] leading-relaxed">
              Guaranteed visual fidelity. AI and developers assemble predefined blocks without error.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. WHY ARE TOKENS IMPORTANT? (16px Body / 14px Descriptions)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
          Why are tokens important?
        </h2>

        {/* Body Text: 16px */}
        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[920px]">
          For GAP Japan, design tokens are not merely a designer's convenience—they are an enterprise operational engine that solves key structural bottlenecks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] pt-[8px]">
          {/* Pillar 1 */}
          <div className="flex gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#004a77]/30 border border-[#004a77] flex items-center justify-center text-[#8ab4f8] flex-shrink-0 mt-[2px]">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary mb-[4px]">
                Single Source of Truth
              </h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                A brand decision made in Tokyo is defined once in tokens and automatically updates across web components, campaign lookbooks, and SFCC production templates simultaneously.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#004a77]/30 border border-[#004a77] flex items-center justify-center text-[#8ab4f8] flex-shrink-0 mt-[2px]">
              <Users size={18} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary mb-[4px]">
                Frictionless Cross-Border Handoff
              </h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Eliminates subjective interpretations between the Tokyo solo designer and the India engineering team. Engineers bind JSON data directly to verified tokens without pixel-pushing.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#004a77]/30 border border-[#004a77] flex items-center justify-center text-[#8ab4f8] flex-shrink-0 mt-[2px]">
              <RefreshCw size={18} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary mb-[4px]">
                Instant Theming & Campaign Agility
              </h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Switching a section from standard light commerce to an immersive dark lookbook requires altering a single theme token flag, reducing campaign launch cycles from weeks to hours.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#004a77]/30 border border-[#004a77] flex items-center justify-center text-[#8ab4f8] flex-shrink-0 mt-[2px]">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary mb-[4px]">
                Strict Enterprise AI Guardrails
              </h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                By injecting token rulesets into Claude and ChatGPT Enterprise, AI becomes a certified GAP design engineer that writes production-ready code while strictly prohibited from inventing arbitrary CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. TOKENS & MATERIAL DESIGN (Three-Tier System Model)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-center gap-[8px]">
          <Layers size={20} className="text-[#8ab4f8]" />
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Tokens & Material Design System Architecture
          </h2>
        </div>

        {/* Body Text: 16px */}
        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[920px]">
          GAP Japan adopts Google Material Design 3’s proven three-tier token hierarchy. 
          This modular layering ensures that foundational brand attributes can evolve without breaking individual UI components.
        </p>

        {/* 3-Tier Flow */}
        <div className="space-y-[12px] pt-[6px]">
          {/* Tier 1 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
            <div className="max-w-[440px]">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="w-[22px] h-[22px] rounded-full bg-dls-surface-container text-[#8ab4f8] border border-dls-line-subtle text-[12px] font-mono font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-[16px] font-bold text-dls-txt-primary">Reference Tokens (Global Tier)</h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Raw, literal values from the brand palette without functional context.
              </p>
            </div>

            <div className="flex items-center gap-[8px] font-mono text-[12px] bg-dls-canvas px-[14px] py-[8px] rounded-[8px] border border-dls-line-subtle">
              <span className="text-dls-txt-annotation">gap.palette.navy-001:</span>
              <span className="text-[#8ab4f8] font-bold">#002554</span>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
            <div className="max-w-[440px]">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="w-[22px] h-[22px] rounded-full bg-[#004a77] text-white border border-[#8ab4f8]/50 text-[12px] font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-[16px] font-bold text-dls-txt-primary">System Tokens (Semantic Tier)</h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Tokens assigned a semantic role in the interface, referencing a Reference Token.
              </p>
            </div>

            <div className="flex items-center gap-[8px] font-mono text-[12px] bg-dls-canvas px-[14px] py-[8px] rounded-[8px] border border-dls-line-subtle">
              <span className="text-dls-txt-annotation">gap.color.brand.primary:</span>
              <span className="text-[#8ab4f8] font-bold">var(--gap-palette-navy-001)</span>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
            <div className="max-w-[440px]">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="w-[22px] h-[22px] rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/60 text-[12px] font-mono font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-[16px] font-bold text-dls-txt-primary">Component Tokens (Element Tier)</h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Specific styling bindings for an individual component element.
              </p>
            </div>

            <div className="flex items-center gap-[8px] font-mono text-[12px] bg-dls-canvas px-[14px] py-[8px] rounded-[8px] border border-dls-line-subtle">
              <span className="text-dls-txt-annotation">product-card.button.bg:</span>
              <span className="text-emerald-500 font-bold">var(--gap-color-brand-primary)</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         6. TOKEN CATEGORIES (18px Card Title / 14px Description / 12px Badge)
         ========================================================= */}
      <section id="token-categories" className="space-y-[20px] pt-[24px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Token Categories
            </h2>
            {/* Lead: 16px */}
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Explore the individual token domain specifications, copy exact values, and inspect live component implementations.
            </p>
          </div>
          <span className="text-[12px] font-mono text-dls-txt-annotation">7 Active Domains</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] pt-[6px]">
          {tokenCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setActiveSection(card.id)}
                className="group relative rounded-[14px] bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle hover:border-[#8ab4f8]/50 p-[20px] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-[12px]">
                    <div className="w-[36px] h-[36px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle flex items-center justify-center text-[#8ab4f8] group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    {/* Badge: 12px */}
                    <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas px-[8px] py-[3px] rounded-full border border-dls-line-subtle">
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title: 18px */}
                  <h3 className="text-[18px] font-bold text-dls-txt-primary group-hover:text-[#8ab4f8] transition-colors flex items-center gap-[4px]">
                    <span>{card.title}</span>
                  </h3>
                  {/* Category Label: 12px */}
                  <p className="text-[12px] font-mono text-dls-txt-annotation mt-[2px]">
                    {card.englishTitle}
                  </p>
                  {/* Card Description: 14px */}
                  <p className="text-[14px] text-dls-txt-secondary leading-[1.6] mt-[10px]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-[18px] pt-[14px] border-t border-dls-line-subtle">
                  {card.preview}

                  {/* CTA Link: 14px */}
                  <div className="flex items-center justify-between text-[14px] font-bold text-[#8ab4f8] mt-[14px]">
                    <span>View Specifications</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}