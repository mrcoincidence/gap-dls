// components/dls/sections/ComponentSelectors.tsx
'use client';

import { useState } from 'react';
import {
  CheckSquare,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  ShoppingBag,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Ruler,
  BellRing,
  Code2,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentSelectorsProps {
  setActiveSection: (sec: NavigationSection) => void;
}

interface SwatchItem {
  id: string;
  name: string;
  hex: string;
  isSoldOut?: boolean;
  isLowStock?: boolean;
}

interface SizeItem {
  id: string;
  label: string;
  isSoldOut?: boolean;
  isLowStock?: boolean;
}

export default function ComponentSelectors({ setActiveSection }: ComponentSelectorsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // プレイグラウンド用ステート
  const [selectorType, setSelectorType] = useState<'alpha' | 'denim'>('alpha');
  const [selectedColorId, setSelectedColorId] = useState<string>('navy');
  const [selectedSizeId, setSelectedSizeId] = useState<string>('m');

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // サンプルカラースウォッチ
  const swatchList: SwatchItem[] = [
    { id: 'navy', name: 'GAP Iconic Navy', hex: '#002554' },
    { id: 'white', name: 'Optic White', hex: '#ffffff' },
    { id: 'heather', name: 'Heather Gray', hex: '#9aa0a6' },
    { id: 'black', name: 'Deep True Black', hex: '#0b0c10' },
    { id: 'olive', name: 'Dark Military Olive', hex: '#3d4436', isLowStock: true },
    { id: 'rust', name: 'Autumn Rust Red', hex: '#8a2be2', isSoldOut: true },
  ];

  // トップス用サイズスケール
  const alphaSizes: SizeItem[] = [
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
    { id: 'm', label: 'M' },
    { id: 'l', label: 'L' },
    { id: 'xl', label: 'XL', isLowStock: true },
    { id: 'xxl', label: 'XXL', isSoldOut: true },
  ];

  // デニム用サイズスケール（ウエスト / レングス）
  const denimSizes: SizeItem[] = [
    { id: '28-30', label: '28/30' },
    { id: '30-30', label: '30/30' },
    { id: '31-30', label: '31/30' },
    { id: '32-32', label: '32/32' },
    { id: '33-32', label: '33/32', isLowStock: true },
    { id: '34-32', label: '34/32', isSoldOut: true },
  ];

  const activeColor = swatchList.find((s) => s.id === selectedColorId) || swatchList[0];
  const activeSizeList = selectorType === 'alpha' ? alphaSizes : denimSizes;
  const activeSize = activeSizeList.find((s) => s.id === selectedSizeId) || activeSizeList[2];

  // 生成コードの取得
  const getRenderedCodeSnippet = () => {
    return `// Color Swatch Item (Selected & Sold-out Logic)
<button
  className="relative w-[28px] h-[28px] rounded-[2px] transition-all p-[2px]
    ${selectedColorId === activeColor.id ? 'ring-2 ring-[#002554] ring-offset-2 ring-offset-dls-canvas' : 'hover:scale-105'}"
  title="${activeColor.name}"
>
  <span className="block w-full h-full rounded-[1px] border border-black/10" style={{ backgroundColor: '${activeColor.hex}' }} />
</button>

// Size Chip Item (${activeSize.label})
<button
  className="min-w-[44px] h-[38px] px-[10px] rounded-[2px] font-mono text-[12px] font-bold uppercase transition-all
    ${selectedSizeId === activeSize.id ? 'bg-[#002554] text-white shadow-xs' : 'bg-dls-surface text-dls-txt-primary border border-dls-line-subtle hover:border-dls-line-default'}"
>
  ${activeSize.label}
</button>`;
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
              ATOMS · APPAREL SELECTORS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Apparel Selectors
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Precision color swatch pickers and size selection matrices engineered specifically for apparel merchandising. 
            Replaces outdated fragmented controls with architectural square tiles, double-ring focus states, and unmistakable out-of-stock slash indicators.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-[2px] bg-[#002554] border border-white/40" />
              28px Square Color Swatches
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-[2px] bg-emerald-500" />
              Alpha (XS–XXL) & Denim (W/L) Scales
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-[2px] bg-[#8ab4f8]" />
              45° Diagonal Sold-Out Slashes
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Selector Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Square Tile Spec
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Herschel Modernized
            </span>
          </div>

          {/* Center Graphic: Nested Swatches and Size Chips */}
          <div className="relative my-auto flex flex-col items-center justify-center gap-[14px] z-10 py-[12px] w-full">
            {/* Color Swatch Row */}
            <div className="flex items-center gap-[8px] p-[8px] rounded-[8px] bg-dls-canvas/80 border border-dls-line-subtle backdrop-blur-md">
              <div className="w-[28px] h-[28px] rounded-[2px] bg-[#002554] ring-2 ring-[#002554] ring-offset-2 ring-offset-dls-canvas shadow-sm" />
              <div className="w-[28px] h-[28px] rounded-[2px] bg-white border border-black/20" />
              <div className="w-[28px] h-[28px] rounded-[2px] bg-[#9aa0a6]" />
              <div className="relative w-[28px] h-[28px] rounded-[2px] bg-[#dc3545] opacity-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/80 to-transparent w-[1px] left-1/2 -rotate-45" />
              </div>
            </div>

            {/* Size Chips Row */}
            <div className="flex items-center gap-[6px]">
              <span className="px-[12px] py-[8px] rounded-[2px] bg-dls-surface border border-dls-line-subtle text-dls-txt-secondary font-mono text-[12px] font-bold">
                S
              </span>
              <span className="px-[12px] py-[8px] rounded-[2px] bg-[#002554] text-white font-mono text-[12px] font-bold shadow-md">
                M
              </span>
              <span className="px-[12px] py-[8px] rounded-[2px] bg-dls-surface border border-dls-line-subtle text-dls-txt-secondary font-mono text-[12px] font-bold">
                L
              </span>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Touch Accuracy</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">38px Minimum Hit-Box</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">SFCC Synced</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Architecture & Touch Guidelines)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Selector Standards</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering standards for SKU variant binding across Salesforce Commerce Cloud (SFCC) product data and Next.js frontend states.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Card 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <CheckSquare size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Double Ring</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Double-Ring Selection</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Swatches use <code className="text-[#8ab4f8]">ring-2 ring-offset-2</code> to ensure dark/white fabrics maintain high focus contrast against both light and dark themes.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] flex items-center gap-[4px]">
              <span>Theme-independent contrast</span>
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Slash Pattern</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">45° Diagonal Slashes</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Sold-out chips render a crisp diagonal slash line. Prevents colorblind users from mistaking a greyed-out SKU for an active gray fabric.
              </p>
            </div>
            <button
              onClick={() => copyText('bg-[linear-gradient(45deg,transparent_calc(50%-1px),#dc3545_calc(50%-1px),#dc3545_calc(50%+1px),transparent_calc(50%+1px))]', 'slash-css-preset')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'slash-css-preset' ? 'Copied CSS!' : 'Copy Slash CSS'}</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Ruler size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">Denim Matrix</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Waist / Inseam Mapping</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                GAP Denim standardizes the composite <code className="text-[#8ab4f8]">W/L</code> format into a unified single-chip selector to eliminate two-step dropdown friction.
              </p>
            </div>
            <button
              onClick={() => setSelectorType(selectorType === 'alpha' ? 'denim' : 'alpha')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>Toggle Scale in Playground</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE APPAREL SELECTOR PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Selector Playground</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Test real-time variant selections with live color feedback, stock indicators, and SKU state binding.
            </p>
          </div>

          {/* Scale Type Switcher */}
          <div className="flex bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle">
            <button
              onClick={() => {
                setSelectorType('alpha');
                setSelectedSizeId('m');
              }}
              className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                selectorType === 'alpha' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              Alpha (Tops)
            </button>
            <button
              onClick={() => {
                setSelectorType('denim');
                setSelectedSizeId('31-30');
              }}
              className={`px-[12px] py-[4px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                selectorType === 'denim' ? 'bg-[#004a77] text-white shadow-xs' : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              Denim (Waist/Inseam)
            </button>
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="p-[28px] lg:p-[32px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col lg:flex-row items-stretch justify-between gap-[32px]">
          {/* Left Canvas: Live PDP Module Mockup */}
          <div className="min-w-0 flex-1 flex flex-col justify-center min-h-[240px] p-[28px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle relative space-y-[20px]">
            <span className="absolute top-[8px] left-[10px] text-[10px] font-mono text-dls-txt-annotation">
              PDP VARIANT BUY-BOX SIMULATOR
            </span>

            {/* 1. Color Swatch Section */}
            <div>
              <div className="flex items-center justify-between mb-[8px]">
                <div className="text-[13px] font-bold text-dls-txt-primary">
                  <span>Color: </span>
                  <span className="text-[#8ab4f8] font-mono ml-[4px]">{activeColor.name}</span>
                </div>
                {activeColor.isLowStock && (
                  <span className="text-[11px] font-mono text-amber-500 flex items-center gap-[4px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-amber-400 animate-pulse" />
                    Low Stock
                  </span>
                )}
              </div>

              {/* Swatch Tiles */}
              <div className="flex items-center gap-[8px] flex-wrap">
                {swatchList.map((swatch) => {
                  const isSelected = swatch.id === selectedColorId;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setSelectedColorId(swatch.id)}
                      className={`relative w-[32px] h-[32px] rounded-[2px] transition-all p-[2px] cursor-pointer ${
                        isSelected
                          ? 'ring-2 ring-[#002554] ring-offset-2 ring-offset-dls-canvas scale-105'
                          : 'hover:scale-105 opacity-90'
                      }`}
                      title={swatch.name}
                    >
                      <span
                        className="block w-full h-full rounded-[1px] border border-black/15 relative overflow-hidden"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {/* Sold Out Slash */}
                        {swatch.isSoldOut && (
                          <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#dc3545_calc(50%-1px),#dc3545_calc(50%+1px),transparent_calc(50%+1px))]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Size Selector Section */}
            <div>
              <div className="flex items-center justify-between mb-[8px]">
                <div className="text-[13px] font-bold text-dls-txt-primary">
                  <span>Size: </span>
                  <span className="text-emerald-500 font-mono ml-[4px]">{activeSize.label}</span>
                </div>
                <button className="text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[4px] cursor-pointer">
                  <Ruler size={13} />
                  <span>Size Guide</span>
                </button>
              </div>

              {/* Size Tiles */}
              <div className="flex items-center gap-[8px] flex-wrap">
                {activeSizeList.map((sz) => {
                  const isSelected = sz.id === selectedSizeId;
                  if (sz.isSoldOut) {
                    return (
                      <button
                        key={sz.id}
                        disabled
                        className="min-w-[44px] h-[38px] px-[10px] rounded-[2px] font-mono text-[12px] font-bold uppercase border border-dashed border-dls-line-subtle text-dls-txt-muted opacity-40 cursor-not-allowed relative overflow-hidden flex items-center justify-center"
                        title="Sold Out - Click for Re-stock Notification"
                      >
                        <span>{sz.label}</span>
                        <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#bdc1c6_calc(50%-1px),#bdc1c6_calc(50%+1px),transparent_calc(50%+1px))]" />
                      </button>
                    );
                  }

                  return (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSizeId(sz.id)}
                      className={`min-w-[44px] h-[38px] px-[10px] rounded-[2px] font-mono text-[12px] font-bold uppercase transition-all cursor-pointer flex items-center justify-center relative ${
                        isSelected
                          ? 'bg-[#002554] text-white shadow-xs'
                          : 'bg-dls-surface text-dls-txt-primary border border-dls-line-subtle hover:border-dls-line-default'
                      }`}
                    >
                      <span>{sz.label}</span>
                      {sz.isLowStock && (
                        <span className="absolute top-[2px] right-[2px] w-[5px] h-[5px] rounded-full bg-amber-400" title="Only few left" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Code Inspection */}
          <div className="min-w-0 flex-1 flex flex-col justify-between space-y-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
                JSX Code Specimen:
              </span>
              <button
                onClick={() => copyText(getRenderedCodeSnippet(), 'active-selector-snippet')}
                className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
              >
                {copiedId === 'active-selector-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedId === 'active-selector-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-[16px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-dls-txt-secondary overflow-x-auto leading-relaxed max-h-[260px] whitespace-pre-wrap break-all">
              <code>{getRenderedCodeSnippet()}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. COMPONENT SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[28px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Selector Component Matrix
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Comprehensive design specifications for color swatches, size chip scales, and inventory alert states.
          </p>
        </div>

        {/* 1. Color Swatch States */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#002554]" />
              <span>1. Color Swatch States (28px Square)</span>
            </h3>
            <span className="text-[12px] font-mono text-[#8ab4f8]">Double-Ring Standard</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* Default */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Default / Inactive</span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[28px] h-[28px] rounded-[2px] bg-[#002554] border border-black/10 shadow-xs" />
                <span className="text-[12px] font-mono text-dls-txt-secondary">Solid Rest</span>
              </div>
            </div>

            {/* Selected */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Selected (Double Ring)</span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[28px] h-[28px] rounded-[2px] bg-[#002554] ring-2 ring-[#002554] ring-offset-2 ring-offset-dls-canvas shadow-sm" />
                <span className="text-[12px] font-mono text-emerald-500 font-bold">Focus Ring</span>
              </div>
            </div>

            {/* Low Stock */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Low Stock (&le;5)</span>
              <div className="flex items-center gap-[8px]">
                <div className="relative w-[28px] h-[28px] rounded-[2px] bg-[#3d4436] border border-black/10">
                  <span className="absolute top-[-2px] right-[-2px] w-[6px] h-[6px] rounded-full bg-amber-400 ring-1 ring-dls-canvas" />
                </div>
                <span className="text-[12px] font-mono text-amber-500">Alert Dot</span>
              </div>
            </div>

            {/* Out of Stock */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Sold Out (Slash)</span>
              <div className="flex items-center gap-[8px]">
                <div className="relative w-[28px] h-[28px] rounded-[2px] bg-[#dc3545] opacity-40 overflow-hidden">
                  <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#ffffff_calc(50%-1px),#ffffff_calc(50%+1px),transparent_calc(50%+1px))]" />
                </div>
                <span className="text-[12px] font-mono text-red-500">45° Slash</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Size Chip States */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500" />
              <span>2. Size Chip States (38px Height Architecture)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Alpha & Numeric Tiles</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* Available */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Available / Default</span>
              <button className="min-w-[44px] h-[38px] px-[10px] bg-dls-canvas border border-dls-line-subtle text-dls-txt-primary font-mono text-[12px] font-bold rounded-[2px]">
                M
              </button>
            </div>

            {/* Selected */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Selected (Active)</span>
              <button className="min-w-[44px] h-[38px] px-[10px] bg-[#002554] text-white font-mono text-[12px] font-bold rounded-[2px] shadow-xs">
                M
              </button>
            </div>

            {/* Low Stock */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Low Stock Alert</span>
              <button className="relative min-w-[44px] h-[38px] px-[10px] bg-dls-canvas border border-dls-line-subtle text-dls-txt-primary font-mono text-[12px] font-bold rounded-[2px]">
                <span>L</span>
                <span className="absolute top-[3px] right-[3px] w-[5px] h-[5px] rounded-full bg-amber-400" />
              </button>
            </div>

            {/* Sold Out */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Sold Out (Slash + Notify)</span>
              <button disabled className="relative min-w-[44px] h-[38px] px-[10px] bg-dls-canvas border border-dashed border-dls-line-subtle text-dls-txt-muted font-mono text-[12px] font-bold rounded-[2px] opacity-40 overflow-hidden cursor-not-allowed">
                <span>XL</span>
                <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#bdc1c6_calc(50%-1px),#bdc1c6_calc(50%+1px),transparent_calc(50%+1px))]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: NEXT -> COMMERCIAL ELEMENTS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>ATOMS · COMMERCIAL ELEMENTS PIPELINE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Commercial Elements (Price, Stepper, Rating)
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Next in the Atoms tier: <strong className="text-dls-txt-primary">Price Hierarchy</strong> (standard vs marked-down red prices), quantity stepper (<code className="text-[#8ab4f8]">+ / -</code> controls), and customer review star ratings.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('ui-commercial')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Commercial Elements</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}