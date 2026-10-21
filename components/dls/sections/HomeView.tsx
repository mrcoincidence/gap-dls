// components/dls/sections/HomeView.tsx
'use client';

import {
  Sparkles,
  ArrowRight,
  Bell,
  Palette,
  Box,
  FileCode,
  Compass,
  CheckCircle2,
  Layers,
  Crop,
  ShieldCheck,
  Bot,
  ExternalLink,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface HomeViewProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function HomeView({ setActiveSection }: HomeViewProps) {
  return (
    <div className="max-w-[1240px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. ANNOUNCEMENT BANNER
         ========================================================= */}
      <section className="p-[16px] lg:p-[18px] rounded-[16px] bg-gradient-to-r from-[#002554]/40 via-dls-surface to-[#004a77]/20 border border-[#8ab4f8]/30 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[36px] h-[36px] rounded-full bg-[#002554] border border-[#8ab4f8]/40 flex items-center justify-center flex-shrink-0 text-[#8ab4f8]">
            <Bell size={18} />
          </div>
          <div>
            <div className="flex items-center gap-[8px]">
              <span className="px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[10px] font-mono font-bold uppercase tracking-wider">
                System Update v1.1.0
              </span>
              <span className="text-[12px] font-mono text-dls-txt-annotation">October 2026 Release</span>
            </div>
            <p className="text-[13px] font-medium text-dls-txt-primary mt-[3px]">
              All 10 token domains, Apparel Selectors, and SFCC SCAPI-compliant JSON Data Contracts are now officially deployed.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveSection('tokens-export')}
          className="px-[16px] py-[8px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-all flex items-center gap-[6px] cursor-pointer flex-shrink-0 self-start sm:self-auto shadow-xs"
        >
          <span>View Release & JSON</span>
          <ArrowRight size={13} />
        </button>
      </section>

      {/* =========================================================
         2. HERO & INTRODUCTION AREA
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[40px] pt-[8px] pb-[44px] border-b border-dls-line-subtle">
        <div className="flex-1 max-w-[720px] space-y-[20px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[3px] rounded-full bg-[#004a77]/40 border border-[#8ab4f8]/30 text-[11px] font-mono text-[#c2e7ff]">
            <Sparkles size={13} className="text-[#8ab4f8]" />
            <span>GAP JAPAN DESIGN LANGUAGE SYSTEM</span>
          </div>

          <h1 className="text-[40px] lg:text-[52px] font-black tracking-tight text-dls-txt-primary leading-[1.08]">
            Build cohesive, accessible apparel commerce at scale.
          </h1>

          <p className="text-[18px] lg:text-[20px] text-dls-txt-secondary leading-[1.6] font-normal">
            The GAP Japan Design Language System (DLS) is the unified design portal connecting brand identity (<code className="text-[#8ab4f8]">rounded-none</code> solid geometry), statutory tax-inclusive pricing, and 3:4 portrait media across cross-functional product teams, offshore engineering, and Enterprise AI workflows.
          </p>

          <div className="flex items-center gap-[14px] flex-wrap pt-[6px]">
            <button
              onClick={() => setActiveSection('get-started')}
              className="px-[24px] py-[13px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.99]"
            >
              <Compass size={16} />
              <span>Get Started</span>
            </button>

            <button
              onClick={() => setActiveSection('tokens')}
              className="px-[20px] py-[13px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-dls-txt-secondary hover:text-dls-txt-primary text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer"
            >
              <Palette size={16} className="text-[#8ab4f8]" />
              <span>Explore Design Tokens</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="w-full max-w-[360px] lg:max-w-[400px] aspect-square rounded-[32px] bg-dls-surface border border-dls-line-subtle p-[28px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[220px] h-[220px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              DLS Foundation
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Production Ready
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center gap-[12px] z-10 py-[12px] w-full">
            <div className="w-[200px] h-[40px] bg-[#002554] text-white flex items-center justify-between px-[14px] text-[12px] font-bold font-sans tracking-wider rounded-none shadow-lg">
              <span>GAP NAVY CTA</span>
              <ArrowRight size={14} className="text-[#8ab4f8]" />
            </div>
            <div className="w-[200px] p-[10px] bg-white rounded-none border border-[#e5e5e5] shadow-md flex items-baseline gap-[6px]">
              <span className="text-[16px] font-black font-mono text-[#dc3545]">¥6,290</span>
              <span className="text-[11px] font-mono text-neutral-400 line-through">¥8,990</span>
              <span className="text-[9px] font-mono text-neutral-500">(税込)</span>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider">Governed Entities</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">10 Domains · 7 Modules</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">100% Synced</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. THREE CORE PILLARS
         ========================================================= */}
      <section className="space-y-[24px]">
        <div>
          <h2 className="text-[26px] font-black text-dls-txt-primary tracking-tight">
            Explore System Pillars
          </h2>
          <p className="text-[15px] text-dls-txt-muted mt-[4px]">
            The foundational architecture structured across three operational tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          
          {/* Pillar 1: Design Tokens */}
          <div
            onClick={() => setActiveSection('tokens')}
            className="group p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/60 transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="space-y-[14px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#004a77]/20 border border-[#8ab4f8]/30 flex items-center justify-center text-[#8ab4f8]">
                <Palette size={22} />
              </div>
              <div className="space-y-[6px]">
                <span className="text-[11px] font-mono text-[#8ab4f8] font-bold uppercase tracking-wider block">
                  LAYER 01 · FOUNDATION
                </span>
                <h3 className="text-[20px] font-bold text-dls-txt-primary group-hover:text-[#8ab4f8] transition-colors">
                  Design Tokens
                </h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Manage 10 standardized domains including Color, Typography, Spacing, 3:4 Aspect Ratio, Z-Index, and Motion formatted in strict W3C DTCG compliance. Export directly to <code className="text-[#8ab4f8]">tokens.json</code> with a single click.
              </p>
            </div>

            <div className="pt-[20px] mt-[16px] border-t border-dls-line-subtle flex items-center justify-between text-[13px] font-bold text-[#8ab4f8]">
              <span>Explore 10 Token Domains</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: UI Components */}
          <div
            onClick={() => setActiveSection('buttons')}
            className="group p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="space-y-[14px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                <Box size={22} />
              </div>
              <div className="space-y-[6px]">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  LAYER 02 · MERCHANDISING
                </span>
                <h3 className="text-[20px] font-bold text-dls-txt-primary group-hover:text-emerald-400 transition-colors">
                  UI Components
                </h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Architectural rectangular solid Buttons, promotional Badges, Apparel Selectors (Swatches & Sizes), 4/3/2/1-column responsive Product Cards, and full PDP Detail Modules assembled through Atomic Design.
              </p>
            </div>

            <div className="pt-[20px] mt-[16px] border-t border-dls-line-subtle flex items-center justify-between text-[13px] font-bold text-emerald-400">
              <span>Browse Component Library</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Data & Enterprise AI */}
          <div
            onClick={() => setActiveSection('contracts')}
            className="group p-[24px] rounded-[20px] bg-dls-surface border border-dls-line-subtle hover:border-amber-500/60 transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="space-y-[14px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-amber-950/30 border border-amber-800/40 flex items-center justify-center text-amber-400">
                <Bot size={22} />
              </div>
              <div className="space-y-[6px]">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  LAYER 03 · AUTOMATION & SCAPI
                </span>
                <h3 className="text-[20px] font-bold text-dls-txt-primary group-hover:text-amber-400 transition-colors">
                  Data & Enterprise AI
                </h3>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Strict TypeScript schema contracts governing Salesforce Commerce Cloud (SFCC) SCAPI payloads, paired with calibrated system prompts to eliminate code hallucinations in Claude and Custom GPT.
              </p>
            </div>

            <div className="pt-[20px] mt-[16px] border-t border-dls-line-subtle flex items-center justify-between text-[13px] font-bold text-amber-400">
              <span>Inspect Contracts & Prompts</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
         4. ONBOARDING CALLOUT BANNER
         ========================================================= */}
      <section className="relative rounded-[24px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/40 border border-[#8ab4f8]/30 p-[32px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[700px] space-y-[8px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono">
              <Compass size={13} className="text-[#8ab4f8]" />
              <span>NEW TO GAP JAPAN DLS?</span>
            </div>
            <h3 className="text-[22px] font-bold text-dls-txt-primary">
              Onboarding & Implementation Guide
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              A step-by-step introduction designed for designers, frontend developers, offshore SFCC engineers, and prompt engineers looking to integrate the DLS foundation into active sprints.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('get-started')}
            className="px-[24px] py-[12px] rounded-full bg-white hover:bg-neutral-100 text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Get Started Guide</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[200px] h-[200px] bg-[#8ab4f8]/10 rounded-full blur-3xl pointer-events-none" />
      </section>

    </div>
  );
}