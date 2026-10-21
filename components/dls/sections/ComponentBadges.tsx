// components/dls/sections/ComponentBadges.tsx
'use client';

import { useState } from 'react';
import {
  Tag,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  X,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Leaf,
  Layers,
  Code2,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentBadgesProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type BadgeCategory = 'promo' | 'stock' | 'attribute' | 'filter';
type BadgeTone = 'red' | 'navy' | 'black' | 'green' | 'gray';
type BadgeSize = 'md' | 'sm';

export default function ComponentBadges({ setActiveSection }: ComponentBadgesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // プレイグラウンド用ステート
  const [category, setCategory] = useState<BadgeCategory>('promo');
  const [tone, setTone] = useState<BadgeTone>('red');
  const [size, setSize] = useState<BadgeSize>('md');
  const [labelText, setLabelText] = useState<string>('SALE');
  const [hasIcon, setHasIcon] = useState<boolean>(false);
  const [isDismissible, setIsDismissible] = useState<boolean>(false);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // スタイル計算ロジック（GAP特有のスクエア＆ミニマル）
  const getBadgeClasses = (t: BadgeTone, s: BadgeSize, cat: BadgeCategory) => {
    const sizeClasses = s === 'md' ? 'h-[24px] px-[8px] text-[11px]' : 'h-[20px] px-[6px] text-[10px]';

    let toneClasses = '';
    if (t === 'red') {
      toneClasses = 'bg-[#dc3545] text-white';
    } else if (t === 'navy') {
      toneClasses = 'bg-[#002554] text-white';
    } else if (t === 'black') {
      toneClasses = 'bg-[#0b0c10] text-white';
    } else if (t === 'green') {
      toneClasses = 'bg-[#10b981] text-white';
    } else {
      toneClasses = 'bg-dls-surface-container text-dls-txt-secondary border border-dls-line-subtle';
    }

    const shapeClasses = cat === 'filter' ? 'rounded-[2px]' : 'rounded-none';

    return `inline-flex items-center gap-[5px] font-mono font-bold tracking-widest uppercase select-none ${shapeClasses} ${sizeClasses} ${toneClasses}`;
  };

  // 生成コードの取得
  const getRenderedCodeSnippet = () => {
    const classes = getBadgeClasses(tone, size, category);
    return `<span className="${classes}">
  ${hasIcon ? '<Flame size={12} />\n  ' : ''}<span>${labelText}</span>${isDismissible ? '\n  <button className="hover:opacity-75"><X size={12} /></button>' : ''}
</span>`;
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
              onClick={() => setActiveSection('overview')}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>UI Components</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              ATOMS · METADATA LABELS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Badges & Chips
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Compact visual flags and dismissible micro-chips conveying commercial status, sustainability provenance, and active filtering states. 
            Styled with GAP’s architectural square geometry to prevent visual clutter across product card grids.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#dc3545]" />
              Promotional Flags (Sale / Exclusive)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#10b981]" />
              Real-time Inventory Signals
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-dls-surface-container border border-dls-line-subtle" />
              Dismissible Facet Chips
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Badge Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#dc3545]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Square Tags
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              High Contrast
            </span>
          </div>

          {/* Center Graphic: Layered Badges over Card Surface */}
          <div className="relative my-auto flex flex-col items-center justify-center gap-[10px] z-10 py-[12px] w-full">
            {/* Sale Flag */}
            <div className="px-[12px] py-[6px] bg-[#dc3545] text-white text-[12px] font-mono font-bold tracking-widest uppercase rounded-none shadow-md flex items-center gap-[6px]">
              <Flame size={13} />
              <span>SALE · 30% OFF</span>
            </div>

            {/* Online Exclusive */}
            <div className="px-[12px] py-[6px] bg-[#002554] text-white text-[12px] font-mono font-bold tracking-widest uppercase rounded-none shadow-md">
              <span>ONLINE EXCLUSIVE</span>
            </div>

            {/* In-Stock Indicator Chip */}
            <div className="px-[10px] py-[5px] bg-dls-canvas border border-dls-line-subtle text-dls-txt-primary text-[11px] font-mono font-bold tracking-wider rounded-[2px] shadow-sm flex items-center gap-[6px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#10b981]" />
              <span>IN STOCK</span>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Visual Hierarchy</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Solid Micro-Containers</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Zero Reflow</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Directives & Standards)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Label Engineering Directives</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Placement conventions for model photography overlays, faceted filtering containers, and automated inventory sync.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Card 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Tag size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Overlay Anchor</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Top-Left Image Anchor</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Promotional tags (<code className="text-[#8ab4f8]">SALE</code>, <code className="text-[#8ab4f8]">NEW</code>) must sit at absolute <code className="text-dls-txt-primary">top-8 left-8</code> over the 3:4 product canvas.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] flex items-center gap-[4px]">
              <span>Absolute placement standard</span>
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Tailwind Classes</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Typography Tokens</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                All badges enforce <code className="text-[#8ab4f8]">font-mono font-bold uppercase tracking-widest</code> for maximum legibility at small scales.
              </p>
            </div>
            <button
              onClick={() => copyText('font-mono font-bold uppercase tracking-widest text-[11px] h-[24px] px-[8px]', 'badge-typography-preset')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'badge-typography-preset' ? 'Copied Presets!' : 'Copy Typography Classes'}</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">Color Contrast</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">WCAG Solid Contrast</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Solid white text on <code className="text-red-500">#dc3545</code> and <code className="text-[#8ab4f8]">#002554</code> guarantees &gt;4.5:1 ratio over busy background prints.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('tokens-color')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View Brand Color Tokens</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE BADGE PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <Sliders size={22} className="text-[#8ab4f8]" />
            <span>Interactive Badge Playground</span>
          </h2>
          <p className="text-[14px] text-dls-txt-muted mt-[2px]">
            Customize badge tones, label sizes, icons, and dismissible close triggers.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {/* Tone Selector */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                1. Color / Tone
              </label>
              <div className="flex flex-wrap gap-[6px]">
                {(['red', 'navy', 'black', 'green', 'gray'] as BadgeTone[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-[12px] py-[6px] rounded-[6px] text-[12px] font-bold capitalize transition-all cursor-pointer border ${
                      tone === t
                        ? 'bg-[#004a77] text-white border-[#004a77]'
                        : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                2. Size Tier
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setSize('md')}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    size === 'md'
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Medium (24px)
                </button>
                <button
                  onClick={() => setSize('sm')}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    size === 'sm'
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Small (20px)
                </button>
              </div>
            </div>

            {/* Leading Icon Toggle */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                3. Leading Icon
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setHasIcon(false)}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    !hasIcon
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  No Icon
                </button>
                <button
                  onClick={() => setHasIcon(true)}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    hasIcon
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  With Icon
                </button>
              </div>
            </div>

            {/* Dismissible Toggle */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                4. Dismissible (Filter)
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => {
                    setIsDismissible(false);
                    setCategory('promo');
                  }}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    !isDismissible
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Static
                </button>
                <button
                  onClick={() => {
                    setIsDismissible(true);
                    setCategory('filter');
                  }}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    isDismissible
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Close (×)
                </button>
              </div>
            </div>
          </div>

          {/* Label Input */}
          <div className="pt-[4px]">
            <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
              Badge Label Text:
            </label>
            <input
              type="text"
              value={labelText}
              onChange={(e) => setLabelText(e.target.value)}
              className="w-full bg-dls-canvas border border-dls-line-subtle rounded-[6px] px-[12px] py-[8px] text-[13px] text-dls-txt-primary focus:outline-none focus:border-[#8ab4f8]"
            />
          </div>
        </div>

        {/* Live Simulator Canvas */}
        <div className="p-[28px] lg:p-[32px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col lg:flex-row items-stretch justify-between gap-[28px]">
          {/* Left Canvas */}
          <div className="min-w-0 flex-1 flex flex-col items-center justify-center min-h-[180px] p-[32px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle relative overflow-hidden">
            <span className="absolute top-[8px] left-[10px] text-[10px] font-mono text-dls-txt-annotation">
              PREVIEW CANVAS
            </span>

            <span className={getBadgeClasses(tone, size, category)}>
              {hasIcon && <Flame size={size === 'sm' ? 11 : 13} />}
              <span>{labelText}</span>
              {isDismissible && (
                <button
                  onClick={() => alert('Filter dismiss triggered')}
                  className="hover:opacity-75 transition-opacity cursor-pointer ml-[2px]"
                  title="Remove Filter"
                >
                  <X size={size === 'sm' ? 11 : 13} />
                </button>
              )}
            </span>
          </div>

          {/* Right Code */}
          <div className="min-w-0 flex-1 flex flex-col justify-between space-y-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
                JSX Code Specimen:
              </span>
              <button
                onClick={() => copyText(getRenderedCodeSnippet(), 'active-badge-snippet')}
                className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
              >
                {copiedId === 'active-badge-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedId === 'active-badge-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-[16px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-dls-txt-secondary overflow-x-auto leading-relaxed max-h-[220px] whitespace-pre-wrap break-all">
              <code>{getRenderedCodeSnippet()}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. SPECIFICATION MATRIX (4 Core Apparel Categories)
         ========================================================= */}
      <section className="space-y-[28px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Badge & Chip Inventory
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Standardized classifications across promotional overlays, live stock signals, provenance metadata, and faceted search chips.
          </p>
        </div>

        {/* 1. Promotional Product Badges */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-[#dc3545]" />
              <span>1. Promotional Product Badges (Image Overlays)</span>
            </h3>
            <span className="text-[12px] font-mono text-[#8ab4f8]">Top-Left Image Anchors</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* SALE */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Sale / Markdown</span>
              <span className="inline-flex items-center h-[24px] px-[8px] bg-[#dc3545] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-none shadow-xs">
                SALE
              </span>
            </div>

            {/* PERCENTAGE */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Discount Callout</span>
              <span className="inline-flex items-center h-[24px] px-[8px] bg-[#dc3545] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-none shadow-xs">
                -30% OFF
              </span>
            </div>

            {/* NEW ARRIVAL */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Seasonal Release</span>
              <span className="inline-flex items-center h-[24px] px-[8px] bg-[#002554] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-none shadow-xs">
                NEW
              </span>
            </div>

            {/* ONLINE EXCLUSIVE */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Channel Limitation</span>
              <span className="inline-flex items-center h-[24px] px-[8px] bg-[#0b0c10] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-none shadow-xs">
                ONLINE EXCLUSIVE
              </span>
            </div>
          </div>
        </div>

        {/* 2. Real-time Inventory Status Chips */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#10b981]" />
              <span>2. Real-time Inventory Status Chips (SFCC Sync)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">PDP & Size Selection</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* IN STOCK */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Available (&gt;5 units)</span>
              <span className="inline-flex items-center gap-[6px] h-[22px] px-[8px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-primary text-[11px] font-mono font-bold rounded-[2px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#10b981]" />
                <span>IN STOCK</span>
              </span>
            </div>

            {/* FEW LEFT */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Low Stock Alert (&le;5)</span>
              <span className="inline-flex items-center gap-[6px] h-[22px] px-[8px] bg-amber-950/30 border border-amber-800/40 text-amber-400 text-[11px] font-mono font-bold rounded-[2px]">
                <span className="w-[6px] h-[6px] rounded-full bg-amber-400 animate-pulse" />
                <span>ONLY 2 LEFT</span>
              </span>
            </div>

            {/* PRE-ORDER */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Advance Reservation</span>
              <span className="inline-flex items-center gap-[6px] h-[22px] px-[8px] bg-[#004a77]/30 border border-[#004a77] text-[#c2e7ff] text-[11px] font-mono font-bold rounded-[2px]">
                <Sparkles size={11} className="text-[#8ab4f8]" />
                <span>PRE-ORDER</span>
              </span>
            </div>

            {/* OUT OF STOCK */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Unavailable</span>
              <span className="inline-flex items-center gap-[6px] h-[22px] px-[8px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-muted text-[11px] font-mono font-bold rounded-[2px] opacity-60">
                <span className="w-[6px] h-[6px] rounded-full bg-dls-txt-muted" />
                <span>OUT OF STOCK</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3. Provenance & Sustainability Tags */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <Leaf size={14} className="text-emerald-500" />
              <span>3. Provenance & Material Tags (Sustainability)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Product Feature Story</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* WASHWELL */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">GAP Water Savings</span>
              <span className="inline-flex items-center gap-[5px] h-[22px] px-[8px] bg-[#002554]/20 border border-[#8ab4f8]/30 text-[#8ab4f8] text-[11px] font-mono font-bold tracking-wider rounded-none">
                <span>WASHWELL™</span>
              </span>
            </div>

            {/* ORGANIC COTTON */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Eco Material</span>
              <span className="inline-flex items-center gap-[5px] h-[22px] px-[8px] bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 text-[11px] font-mono font-bold tracking-wider rounded-none">
                <Leaf size={11} />
                <span>100% ORGANIC</span>
              </span>
            </div>

            {/* ARTIST COLLAB */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Limited Edition</span>
              <span className="inline-flex items-center gap-[5px] h-[22px] px-[8px] bg-[#0b0c10] border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider rounded-none">
                <span>CANVAS #01</span>
              </span>
            </div>

            {/* HEAVYWEIGHT */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Fleece Fabric Spec</span>
              <span className="inline-flex items-center gap-[5px] h-[22px] px-[8px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-secondary text-[11px] font-mono font-bold tracking-wider rounded-none">
                <span>HEAVYWEIGHT</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4. Active Dismissible Filter Chips */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <X size={14} className="text-dls-txt-annotation" />
              <span>4. Dismissible Filter Chips (PLP Facets)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Search & Navigation</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle flex flex-wrap items-center gap-[10px]">
            {/* Filter 1 */}
            <span className="inline-flex items-center gap-[6px] h-[28px] px-[10px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-primary text-[12px] font-mono font-bold rounded-[2px]">
              <span>Gender: Men</span>
              <button className="hover:text-[#dc3545] transition-colors cursor-pointer" title="Remove filter">
                <X size={13} />
              </button>
            </span>

            {/* Filter 2 */}
            <span className="inline-flex items-center gap-[6px] h-[28px] px-[10px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-primary text-[12px] font-mono font-bold rounded-[2px]">
              <span>Color: GAP Navy</span>
              <button className="hover:text-[#dc3545] transition-colors cursor-pointer" title="Remove filter">
                <X size={13} />
              </button>
            </span>

            {/* Filter 3 */}
            <span className="inline-flex items-center gap-[6px] h-[28px] px-[10px] bg-dls-surface-container border border-dls-line-subtle text-dls-txt-primary text-[12px] font-mono font-bold rounded-[2px]">
              <span>Size: L</span>
              <button className="hover:text-[#dc3545] transition-colors cursor-pointer" title="Remove filter">
                <X size={13} />
              </button>
            </span>

            {/* Clear All Link Button */}
            <button className="text-[12px] font-mono font-bold text-[#8ab4f8] hover:underline underline-offset-4 cursor-pointer ml-[8px]">
              Clear All Filters
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: NEXT -> APPAREL SELECTORS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>ATOMS · SELECTORS PIPELINE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Apparel Selectors (Swatches & Size Chips)
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Next in the Atoms tier: interactive <strong className="text-dls-txt-primary">Color Swatch Pickers</strong> (with out-of-stock slash states) and <strong className="text-dls-txt-primary">Size Chips</strong> (XS–XXL) essential for apparel commerce conversions.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('ui-selectors')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Apparel Selectors</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}