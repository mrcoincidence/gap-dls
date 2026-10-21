// components/dls/sections/TokensTypography.tsx
'use client';

import { useState } from 'react';
import {
  Type,
  ArrowLeft,
  Download,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  Sliders,
  RefreshCw,
  Layers,
  Code2
} from 'lucide-react';
import { typographyScaleList, TypographyScaleItem } from '@/data/tokensData';
import { NavigationSection } from '../Sidebar';

interface TokensTypographyProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function TokensTypography({ setActiveSection }: TokensTypographyProps) {
  const [activeWeightMode, setActiveWeightMode] = useState<'baseline' | 'emphasized'>('emphasized');
  const [customText, setCustomText] = useState('GAP JAPAN SIGNATURE CANVAS 2026');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ja'>('en');
  const [copiedTokenId, setCopiedTokenId] = useState<string | null>(null);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedTokenId(id);
    setTimeout(() => setCopiedTokenId(null), 2000);
  };

  const categories: Array<'Display' | 'Headline' | 'Title' | 'Body' | 'Label'> = [
    'Display',
    'Headline',
    'Title',
    'Body',
    'Label',
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
              TYPOGRAPHY SPECIFICATION
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Typography Scale
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            A unified typographic scale establishing clear visual hierarchy across English and Japanese e-commerce storefronts. 
            Built upon Google Material Design 3’s 5-tier architecture, guaranteeing harmonic line-heights and zero arbitrary font declarations.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#8ab4f8]" />
              5 Functional Categories
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-500" />
              1rem = 10px Root Ratio
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#c2e7ff]" />
              Baseline & Emphasized Weights
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Typography Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Type Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              GapSans Dual Engine
            </span>
            <span className="text-[12px] font-mono text-dls-txt-muted bg-dls-canvas/60 px-[8px] py-[2px] rounded border border-dls-line-subtle">
              15 Scale Tokens
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative my-auto flex items-center justify-center z-10 py-[12px]">
            <div className="absolute inset-x-[10px] top-[28%] h-[1px] bg-[#8ab4f8]/20 dashed" />
            <div className="absolute inset-x-[10px] bottom-[28%] h-[1px] bg-emerald-500/30" />
            
            <div className="flex items-baseline gap-[4px] select-none">
              <span className="text-[72px] font-black text-dls-txt-primary leading-none font-sans tracking-tight drop-shadow-2xl">
                Aa
              </span>
              <span className="text-[44px] font-bold text-[#8ab4f8] leading-none">
                あ
              </span>
            </div>
            
            <span className="absolute bottom-[16%] text-[10px] font-mono text-dls-txt-muted">
              Baseline Alignment (Cap Height)
            </span>
          </div>

          {/* Bottom Row: Metric Indicators */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Line Height</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">1.1 – 1.7 Bounded</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Noto Sans JP Ready</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Font Asset Downloads & Webfont CDNs)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Font Packages & CDNs</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Download production WOFF2 font assets for local development or copy font-family declarations for Next.js, Figma, and Salesforce Commerce Cloud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Type size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">WOFF2</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">GapSans-Bold.woff2</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Official weight (700) for hero headlines, emphasized tags, and pill CTAs.
              </p>
            </div>
            <a
              href="/fonts/GapSans-Bold.woff2"
              download
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Download size={13} />
              <span>Download Asset (Bold)</span>
            </a>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Type size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">WOFF2</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">GapSans-Regular.woff2</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Standard weight (400) for descriptive body copy and long-form editorial stories.
              </p>
            </div>
            <a
              href="/fonts/GapSans-Regular.woff2"
              download
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Download size={13} />
              <span>Download Asset (Regular)</span>
            </a>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ExternalLink size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Google Fonts</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Noto Sans JP (Japanese)</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Provisional Japanese body font supporting complete Kanji, Hiragana, and Katakana sets.
              </p>
            </div>
            <a
              href="https://fonts.google.com/specimen/Noto+Sans+JP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <ExternalLink size={13} />
              <span>Open Google Fonts</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. DUAL-LANGUAGE FONT FAMILIES SPECIFICATION
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
          Brand Font Stacks & Language Pairing
        </h2>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[920px]">
          GAP Japan operates in a bilingual commerce environment. The typography system pairs custom Latin glyphs with high-legibility Japanese Gothic typefaces to prevent baseline jitter and visual weight imbalance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] pt-[6px]">
          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[2px] rounded-full">
                PRIMARY LATIN FONT
              </span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Weights: 400, 700</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary font-sans">GapSans</h3>
            <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
              Modern geometric sans-serif engineered for high-impact apparel branding and editorial merchandising headlines.
            </p>
            
            <div className="mt-[16px] p-[12px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-[#8ab4f8] overflow-x-auto">
              <code>font-family: "GapSans-Bold", "GapSans-Regular", "Helvetica Neue", Arial, sans-serif;</code>
            </div>
          </div>

          <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/80 border border-emerald-700/60 px-[8px] py-[2px] rounded-full">
                JAPANESE LOCALE (PROVISIONAL)
              </span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Weights: 400, 700</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary">Noto Sans JP / 平成角ゴシック</h3>
            <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
              Clean universal Japanese Gothic typography ensuring razor-sharp legibility across high-density product attribute tables.
            </p>
            
            <div className="mt-[16px] p-[12px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-emerald-500 overflow-x-auto">
              <code>font-family: "Noto Sans JP", "heisei-kaku-gothic-std", "Hiragino Sans", sans-serif;</code>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. INTERACTIVE LIVE TYPE PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Type Playground</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Test custom campaign copy across all 5 scale categories with real-time weight toggling.
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="flex bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle">
              <button
                onClick={() => {
                  setSelectedLanguage('en');
                  setCustomText('GAP JAPAN SIGNATURE CANVAS 2026');
                }}
                className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  selectedLanguage === 'en' ? 'bg-dls-surface-elevated text-dls-txt-primary shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage('ja');
                  setCustomText('ギャップ ジャパン アーチロゴ フーディー 特集');
                }}
                className={`px-[10px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  selectedLanguage === 'ja' ? 'bg-dls-surface-elevated text-dls-txt-primary shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                日本語
              </button>
            </div>

            <div className="flex bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle">
              <button
                onClick={() => setActiveWeightMode('baseline')}
                className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeWeightMode === 'baseline' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                Baseline (400)
              </button>
              <button
                onClick={() => setActiveWeightMode('emphasized')}
                className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeWeightMode === 'emphasized' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                Emphasized (700)
              </button>
            </div>
          </div>
        </div>

        <div className="p-[14px] rounded-[12px] bg-dls-surface border border-dls-line-subtle">
          <label className="block text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider mb-[6px]">
            Input Preview Text:
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full bg-dls-canvas border border-dls-line-subtle rounded-[8px] px-[14px] py-[10px] text-[16px] text-dls-txt-primary font-sans focus:outline-none focus:border-[#8ab4f8] transition-colors"
            placeholder="Type custom text to preview typography rendering..."
          />
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle p-[24px] space-y-[28px] overflow-hidden">
          <div>
            <div className="flex items-center justify-between border-b border-dls-line-subtle pb-[6px] mb-[10px]">
              <span className="text-[12px] font-mono text-[#8ab4f8]">Display Large · 50px (5.0rem)</span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Line Height: 1.1</span>
            </div>
            <p
              className={`text-[50px] leading-[1.1] text-dls-txt-primary tracking-tight truncate ${
                activeWeightMode === 'emphasized' ? 'font-black' : 'font-normal'
              }`}
            >
              {customText}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-dls-line-subtle pb-[6px] mb-[10px]">
              <span className="text-[12px] font-mono text-[#8ab4f8]">Headline Medium · 28px (2.8rem)</span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Line Height: 1.3</span>
            </div>
            <p
              className={`text-[28px] leading-[1.3] text-dls-txt-primary truncate ${
                activeWeightMode === 'emphasized' ? 'font-bold' : 'font-normal'
              }`}
            >
              {customText}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-dls-line-subtle pb-[6px] mb-[10px]">
              <span className="text-[12px] font-mono text-[#8ab4f8]">Title Large · 20px (2.0rem)</span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Line Height: 1.4</span>
            </div>
            <p
              className={`text-[20px] leading-[1.4] text-dls-txt-primary truncate ${
                activeWeightMode === 'emphasized' ? 'font-bold' : 'font-normal'
              }`}
            >
              {customText}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-dls-line-subtle pb-[6px] mb-[10px]">
              <span className="text-[12px] font-mono text-[#8ab4f8]">Body Large · 16px (1.6rem)</span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Line Height: 1.7</span>
            </div>
            <p
              className={`text-[16px] leading-[1.7] text-dls-txt-secondary ${
                activeWeightMode === 'emphasized' ? 'font-bold' : 'font-normal'
              }`}
            >
              {customText}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-dls-line-subtle pb-[6px] mb-[10px]">
              <span className="text-[12px] font-mono text-[#8ab4f8]">Label Medium · 12px (1.2rem)</span>
              <span className="text-[12px] font-mono text-dls-txt-muted">Tracking: 0.08em (Caps)</span>
            </div>
            <p
              className={`text-[12px] leading-[1.4] text-dls-txt-primary uppercase tracking-wider ${
                activeWeightMode === 'emphasized' ? 'font-bold' : 'font-normal'
              }`}
            >
              {customText}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. THE 5-TIER TYPE SCALE TOKENS SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[32px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            The 5-Tier Type Scale Tokens Matrix
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Comprehensive design token declarations for all 15 scale levels across Display, Headline, Title, Body, and Label.
          </p>
        </div>

        {categories.map((cat) => {
          const items = typographyScaleList.filter((item) => item.category === cat);
          return (
            <div key={cat} className="space-y-[14px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
                    <span>{cat} Scale</span>
                  </h3>
                  <p className="text-[14px] text-dls-txt-muted mt-[2px]">
                    {cat === 'Display' && 'Large, impactful typographic anchors for flagship campaign moments and hero viewports.'}
                    {cat === 'Headline' && 'Section headers and high-emphasis category titles on PLP and PDP grids.'}
                    {cat === 'Title' && 'Component and card-level headlines balancing scannability with compact layout footprints.'}
                    {cat === 'Body' && 'High-legibility reading text formatted for optimal character count per line.'}
                    {cat === 'Label' && 'All-caps and compact navigational text for CTA buttons, badges, chips, and micro-labels.'}
                  </p>
                </div>
                <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
                  3 Levels (L / M / S)
                </span>
              </div>

              <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs divide-y divide-dls-line-subtle">
                {items.map((token) => (
                  <div
                    key={token.id}
                    className="p-[20px] flex flex-col lg:flex-row lg:items-center justify-between gap-[20px] hover:bg-dls-surface-elevated transition-colors"
                  >
                    <div className="min-w-[200px]">
                      <div className="flex items-center gap-[8px]">
                        <h4 className="text-[16px] font-bold text-dls-txt-primary">
                          {token.category} {token.level}
                        </h4>
                      </div>
                      <div className="flex items-baseline gap-[6px] mt-[4px]">
                        <span className="text-[18px] font-mono font-bold text-dls-txt-primary">
                          {token.fontSizePx}px
                        </span>
                        <span className="text-[12px] font-mono text-[#8ab4f8]">
                          ({token.fontSizeRem})
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px] text-[12px] font-mono text-dls-txt-annotation mt-[4px]">
                        <span>LH: {token.lineHeight}</span>
                        <span>•</span>
                        <span>LS: {token.letterSpacing}</span>
                      </div>
                    </div>

                    <div className="flex-1 max-w-[500px]">
                      <p
                        style={{
                          fontSize: `${token.fontSizePx}px`,
                          lineHeight: token.lineHeight,
                          letterSpacing: token.letterSpacing,
                          fontWeight: activeWeightMode === 'emphasized' ? 700 : 400,
                        }}
                        className={`text-dls-txt-primary transition-all truncate ${
                          token.category === 'Label' ? 'uppercase' : ''
                        }`}
                      >
                        {token.sampleText}
                      </p>
                      <p className="text-[12px] text-dls-txt-muted mt-[6px] leading-relaxed">
                        {token.roleDescription}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[8px] flex-shrink-0">
                      <div className="px-[10px] py-[6px] rounded-[6px] bg-dls-canvas border border-dls-line-subtle text-[12px] font-mono text-dls-txt-secondary">
                        <span>{activeWeightMode === 'emphasized' ? 'Bold (700)' : 'Regular (400)'}</span>
                      </div>

                      <button
                        onClick={() => copyText(`text-${token.id}`, token.id)}
                        className="px-[12px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[12px] font-mono text-[#c2e7ff] flex items-center gap-[6px] transition-colors cursor-pointer"
                        title="Copy Tailwind / Token Class"
                      >
                        <code>text-{token.id}</code>
                        {copiedTokenId === token.id ? (
                          <Check size={13} className="text-emerald-500" />
                        ) : (
                          <Copy size={13} className="text-[#8ab4f8]" />
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

    </div>
  );
}