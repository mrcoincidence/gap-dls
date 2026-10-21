// components/dls/sections/TokensExport.tsx
'use client';

import { useState, useMemo } from 'react';
import {
  Braces,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Download,
  FileJson,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Filter,
  CheckCircle2,
  Code2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import {
  gapNavyFamily,
  neutralGrayFamily,
  statusRedFamily,
  statusGoldFamily,
  statusGreenFamily,
  borderTokens,
  typographyScaleList,
  spacingTokensList,
  containerTiersList,
  responsiveGridList,
  aspectRatioTokensList,
  radiusTokensList,
  elevationTokensList,
  zIndexTokensList,
  motionDurationTokensList,
  motionCurveTokensList,
  opacityTokensList,
  sfccBreakpointsList
} from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensExportProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type TokenCategoryTab =
  | 'all'
  | 'aspect-ratio'
  | 'radius'
  | 'breakpoints'
  | 'color'
  | 'layout'
  | 'motion'
  | 'opacity'
  | 'spacing'
  | 'typography'
  | 'z-index';

export default function TokensExport({ setActiveSection }: TokensExportProps) {
  const [activeTab, setActiveTab] = useState<TokenCategoryTab>('all');
  const [copied, setCopied] = useState<boolean>(false);

  // =================================================================
  // 1. W3C Design Tokens (DTCG) 準拠データ構造の生成（全10ドメイン統合）
  // =================================================================
  const fullTokensDictionary = useMemo(() => {
    return {
      $schema: "https://design-tokens.github.io/community-group/format/",
      name: "GAP Japan Design Language System Tokens",
      version: "1.1.0",
      description: "Production token dictionary for Next.js, Salesforce Commerce Cloud (SFCC), and Enterprise AI (Claude / GPT).",
      gap: {
        // 1. Color System (38 Tokens)
        color: {
          brand: {
            navy: Object.fromEntries(
              gapNavyFamily.steps.map((s) => [
                s.step,
                { $value: s.hex, $type: "color", $description: s.description, cssVariable: s.variable, tailwind: s.tailwind }
              ])
            )
          },
          neutral: {
            gray: Object.fromEntries(
              neutralGrayFamily.steps.map((s) => [
                s.step,
                { $value: s.hex, $type: "color", $description: s.description, cssVariable: s.variable, tailwind: s.tailwind }
              ])
            )
          },
          status: {
            red: Object.fromEntries(
              statusRedFamily.steps.map((s) => [
                s.step,
                { $value: s.hex, $type: "color", $description: s.description, cssVariable: s.variable, tailwind: s.tailwind }
              ])
            ),
            gold: Object.fromEntries(
              statusGoldFamily.steps.map((s) => [
                s.step,
                { $value: s.hex, $type: "color", $description: s.description, cssVariable: s.variable, tailwind: s.tailwind }
              ])
            ),
            green: Object.fromEntries(
              statusGreenFamily.steps.map((s) => [
                s.step,
                { $value: s.hex, $type: "color", $description: s.description, cssVariable: s.variable, tailwind: s.tailwind }
              ])
            )
          },
          border: Object.fromEntries(
            borderTokens.map((b) => [
              b.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              { $value: b.hex, $type: "color", $description: b.description, cssVariable: b.variable, tailwind: b.tailwind }
            ])
          )
        },

        // 2. Typography Scale (15 Tokens)
        typography: {
          scales: Object.fromEntries(
            typographyScaleList.map((t) => [
              t.id,
              {
                category: t.category,
                level: t.level,
                fontSize: { $value: `${t.fontSizePx}px`, rem: t.fontSizeRem },
                lineHeight: { $value: t.lineHeight },
                letterSpacing: { $value: t.letterSpacing },
                fontWeights: {
                  baseline: t.baselineWeight,
                  emphasized: t.emphasizedWeight
                },
                $description: t.roleDescription
              }
            ])
          )
        },

        // 3. Spacing System (12 Tokens)
        spacing: Object.fromEntries(
          spacingTokensList.map((sp) => [
            sp.tokenName,
            {
              $value: `${sp.pixels}px`,
              rem: sp.rem,
              $type: "dimension",
              cssVariable: sp.cssVariable,
              tailwind: sp.tailwindClass,
              role: sp.role,
              $description: sp.usageExample
            }
          ])
        ),

        // 4. Layout System (7 Tokens)
        layout: {
          containers: Object.fromEntries(
            containerTiersList.map((c) => [
              c.id,
              {
                $value: `${c.widthPx}px`,
                rem: c.widthRem,
                $type: "dimension",
                cssVariable: c.cssVariable,
                tailwind: c.tailwindClass,
                role: c.role,
                $description: c.recommendedUse
              }
            ])
          ),
          grid: Object.fromEntries(
            responsiveGridList.map((g) => [
              g.breakpointName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              {
                query: g.query,
                columns: g.columns,
                gutter: `${g.gutterPx}px`,
                pageMargin: `${g.marginPx}px`,
                target: g.targetDevice,
                $description: g.behaviorNote
              }
            ])
          )
        },

        // 5. Aspect Ratio (6 Tokens)
        aspectRatio: Object.fromEntries(
          aspectRatioTokensList.map((a) => [
            a.id,
            {
              $value: a.ratio,
              decimal: a.ratioDecimal,
              $type: "ratio",
              cssProperty: a.cssProperty,
              tailwind: a.tailwindClass,
              role: a.role,
              $description: a.commerceUsage
            }
          ])
        ),

        // 6. Border Radius & Elevation (11 Tokens)
        radius: Object.fromEntries(
          radiusTokensList.map((r) => [
            r.id,
            {
              $value: typeof r.pixels === 'number' ? `${r.pixels}px` : r.pixels,
              $type: "dimension",
              cssVariable: r.cssVariable,
              tailwind: r.tailwindClass,
              role: r.role,
              $description: r.usageExample
            }
          ])
        ),
        elevation: Object.fromEntries(
          elevationTokensList.map((e) => [
            e.id,
            {
              $value: e.boxShadow,
              $type: "shadow",
              level: e.level,
              cssVariable: e.cssVariable,
              tailwind: e.tailwindClass,
              $description: e.usageExample
            }
          ])
        ),

        // 7. Z-Index Layers (8 Tokens)
        zIndex: Object.fromEntries(
          zIndexTokensList.map((z) => [
            z.id,
            {
              $value: z.zIndexValue,
              $type: "number",
              cssVariable: z.cssVariable,
              tailwind: z.tailwindClass,
              role: z.role,
              $description: z.commerceUsage
            }
          ])
        ),

        // 8. Motion & Curves (10 Tokens)
        motion: {
          durations: Object.fromEntries(
            motionDurationTokensList.map((d) => [
              d.id,
              {
                $value: `${d.durationMs}ms`,
                milliseconds: d.durationMs,
                $type: "duration",
                cssVariable: d.cssVariable,
                tailwind: d.tailwindClass,
                role: d.role,
                $description: d.usageExample
              }
            ])
          ),
          curves: Object.fromEntries(
            motionCurveTokensList.map((c) => [
              c.id,
              {
                $value: c.timingFunction,
                $type: "cubic-bezier",
                cssVariable: c.cssVariable,
                tailwind: c.tailwindClass,
                role: c.role,
                $description: c.usageExample
              }
            ])
          )
        },

        // 9. Opacity System (8 Tokens)
        opacity: Object.fromEntries(
          opacityTokensList.map((o) => [
            o.id,
            {
              $value: o.valueDecimal,
              percentage: o.percentage,
              $type: "number",
              cssVariable: o.cssVariable,
              tailwind: o.tailwindClass,
              role: o.role,
              $description: o.commerceUsage
            }
          ])
        ),

        // 10. Breakpoints (SFCC) (6 Tokens)
        breakpoints: Object.fromEntries(
          sfccBreakpointsList.map((bp) => [
            bp.id,
            {
              token: bp.tokenName,
              minWidth: bp.minWidth ? `${bp.minWidth}px` : null,
              tailwindPrefix: bp.tailwindPrefix,
              mediaQuery: bp.mediaQuery,
              target: bp.targetDevice,
              role: bp.sfccRole,
              $description: bp.criticalShift
            }
          ])
        )
      }
    };
  }, []);

  // 選択されたタブに応じたJSONスライス
  const displayedJson = useMemo(() => {
    if (activeTab === 'all') return fullTokensDictionary;
    if (activeTab === 'color') return { gap: { color: fullTokensDictionary.gap.color } };
    if (activeTab === 'typography') return { gap: { typography: fullTokensDictionary.gap.typography } };
    if (activeTab === 'spacing') return { gap: { spacing: fullTokensDictionary.gap.spacing } };
    if (activeTab === 'layout') return { gap: { layout: fullTokensDictionary.gap.layout } };
    if (activeTab === 'aspect-ratio') return { gap: { aspectRatio: fullTokensDictionary.gap.aspectRatio } };
    if (activeTab === 'radius') return { gap: { radius: fullTokensDictionary.gap.radius, elevation: fullTokensDictionary.gap.elevation } };
    if (activeTab === 'z-index') return { gap: { zIndex: fullTokensDictionary.gap.zIndex } };
    if (activeTab === 'motion') return { gap: { motion: fullTokensDictionary.gap.motion } };
    if (activeTab === 'opacity') return { gap: { opacity: fullTokensDictionary.gap.opacity } };
    if (activeTab === 'breakpoints') return { gap: { breakpoints: fullTokensDictionary.gap.breakpoints } };
    return fullTokensDictionary;
  }, [activeTab, fullTokensDictionary]);

  const jsonString = useMemo(() => JSON.stringify(displayedJson, null, 2), [displayedJson]);

  // クリップボードへコピー
  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ファイルダウンロード
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(fullTokensDictionary, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tokens.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
              MACHINE-READABLE SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Raw JSON Export
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The unified design token dictionary formatted in strict W3C Design Tokens Community Group (DTCG) compliance. 
            All 10 foundational and governance token domains are compiled for Enterprise AI system prompt ingestion, automated Figma token sync, and Salesforce Commerce Cloud CI/CD build pipelines.
          </p>

          <div className="flex items-center gap-[12px] flex-wrap">
            <button
              onClick={handleDownload}
              className="px-[20px] py-[12px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-md"
            >
              <Download size={15} />
              <span>Download tokens.json</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-[18px] py-[12px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-dls-txt-secondary text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer"
            >
              {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} className="text-[#8ab4f8]" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Active JSON'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio JSON Tree Visual Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              W3C DTCG Format
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              v1.1.0 (10 Domains)
            </span>
          </div>

          {/* Center Graphic: Stylized JSON Tree Node Hierarchy */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            <div className="w-full rounded-[14px] bg-dls-surface-container border border-dls-line-subtle p-[14px] font-mono text-[11px] space-y-[3px] shadow-inner text-dls-txt-muted">
              <div className="text-[#8ab4f8]">{`{ "gap": {`}</div>
              <div className="pl-[14px] text-emerald-500">{`"color": { "navy-700": "#002554" },`}</div>
              <div className="pl-[14px] text-amber-500">{`"aspectRatio": { "portrait": "3/4" },`}</div>
              <div className="pl-[14px] text-[#c2e7ff]">{`"zIndex": { "modal": 300 },`}</div>
              <div className="pl-[14px] text-purple-400">{`"motion": { "normal": "300ms" },`}</div>
              <div className="pl-[14px] text-rose-400">{`"opacity": { "scrim": 0.60 }`}</div>
              <div className="text-[#8ab4f8]">{`}}`}</div>
            </div>
          </div>

          {/* Bottom Row: Metric Indicators */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Total Schema Size</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">121 Tokens Defined</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">10 Domains Validated</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. INTEGRATION GUIDELINES (AI Prompts & SFCC Pipelines)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Integration Guidelines</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">AI & Engineering Protocols</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          How to ingest the master <code className="text-[#8ab4f8]">tokens.json</code> artifact into production development pipelines and enterprise AI knowledge boundaries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] pt-[6px]">
          {/* Card 1: Enterprise AI */}
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex items-center gap-[8px]">
                  <Cpu size={20} className="text-[#8ab4f8]" />
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">Enterprise AI Ingestion</h3>
                </div>
                <span className="text-[11px] font-mono text-amber-500 bg-amber-950/40 border border-amber-800/40 px-[8px] py-[2px] rounded">
                  Claude / GPT
                </span>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Upload <code className="text-dls-txt-primary">tokens.json</code> to your Claude Project Knowledge or Custom GPT knowledge repository. Instruct the AI to cross-reference every proposed CSS class against this dictionary to eliminate hallucinated pixel margins and unauthorized fonts.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('prompts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View System Prompt Governance</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 2: SFCC & Style Dictionary */}
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex items-center gap-[8px]">
                  <GitBranch size={20} className="text-[#8ab4f8]" />
                  <h3 className="text-[16px] font-bold text-dls-txt-primary">SFCC & Style Dictionary Pipeline</h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
                  Automated CI/CD
                </span>
              </div>
              <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
                Feed this JSON file into Style Dictionary or a GitHub Actions runner to transpile token values automatically into SCSS variables (<code className="text-dls-txt-primary">_tokens.scss</code>) for the India offshore SFCC repository and Next.js Tailwind themes.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('contracts')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>Explore JSON Data Contracts</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE JSON VIEWER & CHIPS TAB FILTER
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        {/* Title & Lead Text */}
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <Terminal size={22} className="text-[#8ab4f8]" />
            <span>Interactive Tokens Viewer</span>
          </h2>
          <p className="text-[14px] text-dls-txt-muted mt-[4px]">
            Filter across the 10 standardized token domains or inspect the complete master dictionary payload.
          </p>
        </div>

        {/* 11 Filter Chips: 自然な文字幅で綺麗に左揃え折り返し（間延び防止） */}
        <div className="flex flex-wrap items-center gap-[8px] pt-[4px]">
          {[
            { id: 'all', label: 'All (Complete)' },
            { id: 'aspect-ratio', label: 'Aspect Ratio' },
            { id: 'radius', label: 'Border Radius' },
            { id: 'breakpoints', label: 'Breakpoints' },
            { id: 'color', label: 'Color' },
            { id: 'layout', label: 'Layout' },
            { id: 'motion', label: 'Motion' },
            { id: 'opacity', label: 'Opacity' },
            { id: 'spacing', label: 'Spacing' },
            { id: 'typography', label: 'Typography' },
            { id: 'z-index', label: 'Z-Index' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TokenCategoryTab)}
                className={`px-[16px] py-[7px] rounded-full text-[12px] font-bold transition-all cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#002554] border-[#002554] text-white shadow-xs'
                    : 'bg-transparent border-dls-line-subtle text-dls-txt-muted hover:text-dls-txt-primary hover:border-dls-line-default hover:bg-dls-surface-elevated'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Code Viewer Panel */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xl mt-[12px]">
          {/* Header Bar */}
          <div className="px-[20px] py-[12px] bg-dls-surface-container border-b border-dls-line-subtle flex items-center justify-between text-[12px] font-mono">
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[6px]">
                <span className="w-[10px] h-[10px] rounded-full bg-red-500/80" />
                <span className="w-[10px] h-[10px] rounded-full bg-amber-500/80" />
                <span className="w-[10px] h-[10px] rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-dls-txt-annotation ml-[8px]">tokens.json — {activeTab.toUpperCase()} DOMAIN</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-[6px] text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Syntax Content Box */}
          <div className="p-[20px] bg-dls-canvas max-h-[560px] overflow-y-auto font-mono text-[12px] leading-relaxed select-text">
            <pre className="text-dls-txt-secondary whitespace-pre-wrap break-all">
              <code>{jsonString}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. CROSS-NAVIGATION: NEXT PHASE -> UI COMPONENTS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>DESIGN TOKENS COMPLETE (10 DOMAINS)</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Phase 2: UI Components Architecture
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With all 121 atomic design tokens formalized across Color, Typography, Spacing, Layout, Aspect Ratio, Radius, Z-Index, Motion, Opacity, and Breakpoints, proceed to implement the <strong className="text-dls-txt-primary">Atoms & Primitives</strong> component tier.
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