// components/dls/sections/GetStartedView.tsx
'use client';

import {
  Compass,
  ArrowLeft,
  ArrowRight,
  Palette,
  Code2,
  GitBranch,
  Bot,
  FileCode,
  Download,
  CheckCircle2,
  Layers,
  Sparkles,
  Package,
  Terminal,
  ShieldCheck,
  Crop,
  ExternalLink
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface GetStartedViewProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function GetStartedView({ setActiveSection }: GetStartedViewProps) {
  return (
    <div className="max-w-[1240px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        <div className="flex-1 max-w-[680px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <button
              onClick={() => setActiveSection('home')}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              ONBOARDING & IMPLEMENTATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Get Started with GAP DLS
          </h1>

          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Welcome to the GAP Japan Design Language System. 
            Whether you are designing e-commerce interfaces, writing Next.js storefront code, integrating SFCC cartridges in Bangalore, or automating features with Claude and GPT, explore tailored onboarding tracks below.
          </p>

          <div className="flex items-center gap-[12px] flex-wrap">
            <button
              onClick={() => setActiveSection('tokens-export')}
              className="px-[20px] py-[12px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-md"
            >
              <Download size={15} />
              <span>Download tokens.json</span>
            </button>

            <button
              onClick={() => setActiveSection('contracts')}
              className="px-[18px] py-[12px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-dls-txt-secondary text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer"
            >
              <FileCode size={15} className="text-[#8ab4f8]" />
              <span>Explore Data Contracts</span>
            </button>
          </div>
        </div>

        {/* Right Preview Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Onboarding Path
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              4 Disciplines
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center gap-[10px] z-10 py-[12px] w-full">
            <div className="w-full p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle flex items-center justify-between">
              <span className="text-[12px] font-bold text-dls-txt-primary flex items-center gap-[6px]">
                <Palette size={14} className="text-[#8ab4f8]" />
                Designers
              </span>
              <span className="text-[10px] font-mono text-emerald-500">Figma Kit Ready</span>
            </div>

            <div className="w-full p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle flex items-center justify-between">
              <span className="text-[12px] font-bold text-dls-txt-primary flex items-center gap-[6px]">
                <Code2 size={14} className="text-emerald-400" />
                Frontend (Next.js)
              </span>
              <span className="text-[10px] font-mono text-emerald-500">Tailwind Synced</span>
            </div>

            <div className="w-full p-[12px] rounded-[10px] bg-dls-surface-container border border-dls-line-subtle flex items-center justify-between">
              <span className="text-[12px] font-bold text-dls-txt-primary flex items-center gap-[6px]">
                <GitBranch size={14} className="text-amber-400" />
                SFCC Offshore
              </span>
              <span className="text-[10px] font-mono text-emerald-500">SCAPI Bound</span>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Fast Track</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Zero Design Drift</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Material Standard</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. ROLE-BASED ONBOARDING PATHS (Material M3 Structure)
         ========================================================= */}
      <section className="space-y-[20px]">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Choose Your Track
          </h2>
          <p className="text-[15px] text-dls-txt-muted mt-[4px]">
            Step-by-step guidance curated for your specific development environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          
          {/* Track 1: For Designers */}
          <div className="p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between space-y-[16px] hover:border-[#8ab4f8]/50 transition-all">
            <div className="space-y-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-[#004a77]/20 border border-[#8ab4f8]/30 flex items-center justify-center text-[#8ab4f8]">
                <Palette size={20} />
              </div>
              <h3 className="text-[18px] font-bold text-dls-txt-primary">For Designers</h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Design high-converting storefront layouts using the official Figma library. Strict adherence to GAP’s geometric rectangular baseline (<code className="text-[#8ab4f8]">rounded-none</code>), 3:4 portrait ratios, and double-ring color swatches.
              </p>
              <ul className="space-y-[6px] text-[13px] text-dls-txt-secondary">
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Square button doctrine (solid navy, white, black)</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>3:4 aspect ratio locked product photography</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Double-ring focus states for apparel swatches</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveSection('tokens')}
              className="text-[13px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer pt-[8px]"
            >
              <span>Explore Token Foundation</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Track 2: For Frontend Engineers */}
          <div className="p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between space-y-[16px] hover:border-emerald-500/50 transition-all">
            <div className="space-y-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                <Code2 size={20} />
              </div>
              <h3 className="text-[18px] font-bold text-dls-txt-primary">For Frontend Developers (Next.js)</h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Assemble headless commerce storefronts using typed React components and Tailwind CSS. Built-in compliance with Japanese Total Price Display regulations and WCAG 2.2 touch targets.
              </p>
              <ul className="space-y-[6px] text-[13px] text-dls-txt-secondary">
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Zero runtime type errors with strict TypeScript definitions</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>CLS prevention with locked 3:4 portrait containers</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Mobile 48px tactile touch zones and sticky bottom bars</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveSection('buttons')}
              className="text-[13px] font-bold text-emerald-400 hover:underline flex items-center gap-[6px] cursor-pointer pt-[8px]"
            >
              <span>View Component Library</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Track 3: For SFCC Offshore Engineers */}
          <div className="p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between space-y-[16px] hover:border-amber-500/50 transition-all">
            <div className="space-y-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-amber-950/30 border border-amber-800/40 flex items-center justify-center text-amber-400">
                <GitBranch size={20} />
              </div>
              <h3 className="text-[18px] font-bold text-dls-txt-primary">For SFCC Offshore Teams (Bangalore)</h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Transpile master tokens into <code className="text-[#8ab4f8]">_tokens.scss</code> via Style Dictionary and bind SCAPI/OCAPI product payloads directly to DLS camelCase contracts.
              </p>
              <ul className="space-y-[6px] text-[13px] text-dls-txt-secondary">
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Automated token compilation for B2C Commerce cartridges</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>SCAPI entity to camelCase DLS property mapping</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Strict null safety for markdown prices and inventory records</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveSection('contracts')}
              className="text-[13px] font-bold text-amber-400 hover:underline flex items-center gap-[6px] cursor-pointer pt-[8px]"
            >
              <span>View Data Contracts & Mapping</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Track 4: For AI & Prompt Engineers */}
          <div className="p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between space-y-[16px] hover:border-purple-400/50 transition-all">
            <div className="space-y-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-purple-950/30 border border-purple-800/40 flex items-center justify-center text-purple-400">
                <Bot size={20} />
              </div>
              <h3 className="text-[18px] font-bold text-dls-txt-primary">For Enterprise AI (Claude / GPT)</h3>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Supercharge engineering velocity while eliminating hallucinations. Ingest calibrated system prompts and negative constraints into Claude Project Knowledge.
              </p>
              <ul className="space-y-[6px] text-[13px] text-dls-txt-secondary">
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Explicit negative constraints against arbitrary rounded corners</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Automated Pull Request audit linter templates</span>
                </li>
                <li className="flex items-center gap-[6px]">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Cross-referencing against production tokens.json</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveSection('prompts')}
              className="text-[13px] font-bold text-purple-400 hover:underline flex items-center gap-[6px] cursor-pointer pt-[8px]"
            >
              <span>View AI System Prompts</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
         3. 3-STEP QUICKSTART WORKFLOW
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Implementation Workflow
          </h2>
          <p className="text-[15px] text-dls-txt-muted mt-[4px]">
            Three steps to initialize and integrate GAP DLS into your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {/* Step 1 */}
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[10px]">
            <div className="flex items-center justify-between">
              <span className="w-[28px] h-[28px] rounded-full bg-[#002554] text-[#8ab4f8] text-[12px] font-mono font-bold flex items-center justify-center border border-[#8ab4f8]/30">
                1
              </span>
              <span className="text-[11px] font-mono text-[#8ab4f8] uppercase font-bold">Foundation</span>
            </div>
            <h3 className="text-[16px] font-bold text-dls-txt-primary">Install Design Tokens</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Download <code className="text-[#8ab4f8]">tokens.json</code> and transpile into your Tailwind config or SFCC SCSS repository. Verify Color, Typography, and 3:4 Aspect Ratio tokens.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[10px]">
            <div className="flex items-center justify-between">
              <span className="w-[28px] h-[28px] rounded-full bg-[#002554] text-emerald-400 text-[12px] font-mono font-bold flex items-center justify-center border border-emerald-500/30">
                2
              </span>
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold">Assembly</span>
            </div>
            <h3 className="text-[16px] font-bold text-dls-txt-primary">Build Component Atoms</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Implement rectangular solid Buttons, Apparel Swatches, and Price hierarchies. Combine into responsive Product Cards (4/3/2/1-column) and PDP detail modules.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[10px]">
            <div className="flex items-center justify-between">
              <span className="w-[28px] h-[28px] rounded-full bg-[#002554] text-amber-400 text-[12px] font-mono font-bold flex items-center justify-center border border-amber-500/30">
                3
              </span>
              <span className="text-[11px] font-mono text-amber-400 uppercase font-bold">Governance</span>
            </div>
            <h3 className="text-[16px] font-bold text-dls-txt-primary">Bind Contracts & Prompts</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Import <code className="text-[#8ab4f8]">gap-contracts.d.ts</code> for type safety and configure Claude / Custom GPT with system prompts to automate bug-free code generation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. KEY ARTIFACTS REPOSITORY
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Production Artifacts
          </h2>
          <p className="text-[15px] text-dls-txt-muted mt-[4px]">
            Direct access to exportable configuration files and schema bundles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
          {/* Artifact 1 */}
          <div
            onClick={() => setActiveSection('tokens-export')}
            className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-[12px]">
              <Package size={20} className="text-[#8ab4f8]" />
              <div>
                <span className="text-[13px] font-bold text-dls-txt-primary block">tokens.json</span>
                <span className="text-[11px] font-mono text-dls-txt-muted">121 Tokens · W3C DTCG</span>
              </div>
            </div>
            <ArrowRight size={14} className="text-[#8ab4f8]" />
          </div>

          {/* Artifact 2 */}
          <div
            onClick={() => setActiveSection('contracts')}
            className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-[12px]">
              <FileCode size={20} className="text-emerald-400" />
              <div>
                <span className="text-[13px] font-bold text-dls-txt-primary block">gap-contracts.d.ts</span>
                <span className="text-[11px] font-mono text-dls-txt-muted">TypeScript SCAPI Schema</span>
              </div>
            </div>
            <ArrowRight size={14} className="text-emerald-400" />
          </div>

          {/* Artifact 3 */}
          <div
            onClick={() => setActiveSection('prompts')}
            className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-[12px]">
              <Bot size={20} className="text-amber-400" />
              <div>
                <span className="text-[13px] font-bold text-dls-txt-primary block">system-prompts.md</span>
                <span className="text-[11px] font-mono text-dls-txt-muted">4 AI Role Directives</span>
              </div>
            </div>
            <ArrowRight size={14} className="text-amber-400" />
          </div>
        </div>
      </section>

    </div>
  );
}