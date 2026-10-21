// components/dls/sections/ComponentButtons.tsx
'use client';

import { useState } from 'react';
import {
  Box,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  Sliders,
  CheckCircle2,
  ExternalLink,
  Code2,
  ShieldCheck,
  Layers,
  WrapText
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentButtonsProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type ButtonColor = 'navy' | 'white' | 'black' | 'text-link';
type IconPosition = 'none' | 'left' | 'right';
type ButtonSize = 'lg' | 'md' | 'sm';
type TextWrapMode = 'nowrap' | 'wrap';

export default function ComponentButtons({ setActiveSection }: ComponentButtonsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // インタラクティブ・プレイグラウンド用ステート
  const [selectedColor, setSelectedColor] = useState<ButtonColor>('navy');
  const [selectedIconPos, setSelectedIconPos] = useState<IconPosition>('right');
  const [selectedSize, setSelectedSize] = useState<ButtonSize>('md');
  const [buttonLabel, setButtonLabel] = useState<string>('SHOP NOW'); // ★デフォルト値を SHOP NOW に変更
  const [textWrapMode, setTextWrapMode] = useState<TextWrapMode>('nowrap'); // ★改行オプション追加 (デフォルト: 1行固定)
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ボタンスタイル計算ロジック
  const getButtonStyles = (color: ButtonColor, size: ButtonSize, disabled: boolean, wrap: TextWrapMode) => {
    // 1. サイズ (パディング & 文字サイズ & 最小高さ)
    let sizeClasses = '';
    if (size === 'lg') {
      sizeClasses = wrap === 'wrap' ? 'min-h-[48px] py-[10px] px-[24px] text-[14px] gap-[10px]' : 'h-[48px] px-[24px] text-[14px] gap-[10px]';
    } else if (size === 'md') {
      sizeClasses = wrap === 'wrap' ? 'min-h-[40px] py-[8px] px-[20px] text-[13px] gap-[8px]' : 'h-[40px] px-[20px] text-[13px] gap-[8px]';
    } else {
      sizeClasses = wrap === 'wrap' ? 'min-h-[32px] py-[6px] px-[14px] text-[12px] gap-[6px]' : 'h-[32px] px-[14px] text-[12px] gap-[6px]';
    }

    // 2. 改行制御
    const wrapClasses = wrap === 'nowrap' ? 'whitespace-nowrap' : 'whitespace-normal text-center leading-tight max-w-[240px]';

    // 3. カラー＆背景 (四角ソリッドベタ塗り / テキストリンク)
    let colorClasses = '';
    if (color === 'navy') {
      colorClasses = disabled
        ? 'bg-[#002554] opacity-40 text-white cursor-not-allowed border-0'
        : 'bg-[#002554] hover:bg-[#001f42] text-white active:scale-[0.99] transition-all duration-150 border-0 shadow-xs cursor-pointer';
    } else if (color === 'white') {
      colorClasses = disabled
        ? 'bg-white opacity-40 text-[#0b0c10] cursor-not-allowed border-0'
        : 'bg-white hover:bg-[#f2f2f2] text-[#0b0c10] active:scale-[0.99] transition-all duration-150 border-0 shadow-xs cursor-pointer';
    } else if (color === 'black') {
      colorClasses = disabled
        ? 'bg-[#0b0c10] opacity-40 text-white cursor-not-allowed border-0'
        : 'bg-[#0b0c10] hover:bg-[#2b2b2b] text-white active:scale-[0.99] transition-all duration-150 border-0 shadow-xs cursor-pointer';
    } else if (color === 'text-link') {
      colorClasses = disabled
        ? 'bg-transparent text-dls-txt-muted opacity-40 cursor-not-allowed px-0 h-auto underline'
        : 'bg-transparent text-dls-txt-primary hover:text-[#8ab4f8] underline underline-offset-4 active:opacity-70 transition-colors px-0 h-auto cursor-pointer font-bold';
    }

    // 基本形状: 矩形（四角）
    const shapeClasses = color === 'text-link' ? '' : 'rounded-none font-sans font-bold uppercase select-none inline-flex items-center justify-center';

    return `${shapeClasses} ${sizeClasses} ${wrapClasses} ${colorClasses}`;
  };

  // 生成コードの取得（はみ出し防止のため整形）
  const getRenderedCodeSnippet = () => {
    if (selectedColor === 'text-link') {
      return `<button className="
  inline-flex items-center gap-[6px]
  text-dls-txt-primary hover:text-[#8ab4f8]
  underline underline-offset-4 text-[13px] font-bold font-sans
  ${textWrapMode === 'nowrap' ? 'whitespace-nowrap' : 'whitespace-normal'}
">
  <span>${buttonLabel}</span>
  <ArrowRight size={14} />
</button>`;
    }

    const bgClass =
      selectedColor === 'navy'
        ? 'bg-[#002554] hover:bg-[#001f42] text-white'
        : selectedColor === 'white'
        ? 'bg-white hover:bg-[#f2f2f2] text-[#0b0c10]'
        : 'bg-[#0b0c10] hover:bg-[#2b2b2b] text-white';

    const hClass =
      textWrapMode === 'wrap'
        ? selectedSize === 'lg'
          ? 'min-h-[48px] py-[10px] px-[24px] text-[14px]'
          : selectedSize === 'md'
          ? 'min-h-[40px] py-[8px] px-[20px] text-[13px]'
          : 'min-h-[32px] py-[6px] px-[14px] text-[12px]'
        : selectedSize === 'lg'
        ? 'h-[48px] px-[24px] text-[14px]'
        : selectedSize === 'md'
        ? 'h-[40px] px-[20px] text-[13px]'
        : 'h-[32px] px-[14px] text-[12px]';

    const wrapClass = textWrapMode === 'nowrap' ? 'whitespace-nowrap' : 'whitespace-normal text-center leading-tight';

    return `<button
  ${isDisabled ? 'disabled\n  ' : ''}className="
    rounded-none
    ${bgClass}
    ${hClass}
    ${wrapClass}
    font-bold uppercase tracking-wider
    inline-flex items-center justify-center gap-[8px]
    transition-all
  "
>
  ${selectedIconPos === 'left' ? '<ShoppingBag size={15} />\n  ' : ''}<span>${buttonLabel}</span>${selectedIconPos === 'right' ? '\n  <ArrowRight size={15} />' : ''}
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
              ATOMS · PRIMARY ACTIONS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Buttons & CTAs
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The foundational conversion triggers of the GAP Japan storefront. Built upon an architectural sharp-corner (rounded-none) solid doctrine in GAP Navy, Pure White, and Charcoal Black, complemented by editorial text links.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#002554] border border-white/40" />
              Solid Rectangular Base (No Outlines)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-emerald-500" />
              3-Color Hierarchy (Navy / White / Black)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#8ab4f8]" />
              Icon-Left, Icon-Right & Text Link
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Geometric Button Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Square Doctrine
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Solid Fill Only
            </span>
          </div>

          {/* Center Graphic: Stacked Geometric Square Buttons */}
          <div className="relative my-auto flex flex-col items-center justify-center gap-[10px] z-10 py-[12px] w-full">
            <div className="w-[200px] h-[40px] bg-[#002554] text-white rounded-none flex items-center justify-between px-[16px] shadow-lg border-b-2 border-white/20">
              <span className="text-[12px] font-bold tracking-wider font-sans uppercase">GAP NAVY</span>
              <ArrowRight size={14} className="text-[#8ab4f8]" />
            </div>

            <div className="w-[200px] h-[40px] bg-white text-black rounded-none flex items-center justify-between px-[16px] shadow-md">
              <span className="text-[12px] font-bold tracking-wider font-sans uppercase">PURE WHITE</span>
              <ArrowRight size={14} className="text-black" />
            </div>

            <div className="w-[200px] h-[40px] bg-[#0b0c10] text-white rounded-none flex items-center justify-between px-[16px] shadow-md border border-white/10">
              <span className="text-[12px] font-bold tracking-wider font-sans uppercase">DEEP BLACK</span>
              <ArrowRight size={14} className="text-white/70" />
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Touch Compliance</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Min-Height 40px/48px</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">WCAG 2.2 Target</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Button Rules & Code Presets)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Button Engineering Directives</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering standards for button structures across Salesforce Commerce Cloud ISML templates and Next.js frontend codebases.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Box size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Square Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">No Outline Buttons</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                GAP Japan utilizes 100% solid color fills for primary and secondary actions. Ghost or outline buttons are deprecated to maintain contrast.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] flex items-center gap-[4px]">
              <span>Zero-radius standard</span>
            </span>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Code2 size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">SFCC Classes</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">ISML Class Presets</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Tailwind CSS presets: <code className="text-[#8ab4f8]">bg-gap-navy text-white rounded-none</code> for instant offshore handoff.
              </p>
            </div>
            <button
              onClick={() => copyText('rounded-none bg-[#002554] hover:bg-[#001f42] text-white uppercase font-bold tracking-wider', 'tw-btn-preset')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'tw-btn-preset' ? 'Copied Preset!' : 'Copy Button Classes'}</span>
            </button>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-amber-500">Touch Target</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">48px Mobile Touch Area</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                On viewports &lt;769px, primary buttons automatically lock to height 48px to satisfy Apple HIG & Android touch accessibility.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('tokens-breakpoints')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View SFCC Breakpoint Rules</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE BUTTON PLAYGROUND & CODE GENERATOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Button Playground</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Configure colors, icon arrangements, size scales, wrap modes, and states with real-time code generation.
            </p>
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px]">
            {/* 1. Color Selector */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                1. Button Fill Color
              </label>
              <div className="flex flex-wrap gap-[6px]">
                {(['navy', 'white', 'black', 'text-link'] as ButtonColor[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-[12px] py-[6px] rounded-[6px] text-[12px] font-bold capitalize transition-all cursor-pointer border ${
                      selectedColor === c
                        ? 'bg-[#004a77] text-white border-[#004a77]'
                        : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                    }`}
                  >
                    {c === 'text-link' ? 'Text Link' : c}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Icon Position */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                2. Icon Placement
              </label>
              <div className="flex gap-[6px]">
                {(['none', 'left', 'right'] as IconPosition[]).map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedIconPos(pos)}
                    className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold capitalize transition-all cursor-pointer border ${
                      selectedIconPos === pos
                        ? 'bg-[#004a77] text-white border-[#004a77]'
                        : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                    }`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Size Scale */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                3. Size Dimension
              </label>
              <div className="flex gap-[6px]">
                {(['lg', 'md', 'sm'] as ButtonSize[]).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold uppercase transition-all cursor-pointer border ${
                      selectedSize === sz
                        ? 'bg-[#004a77] text-white border-[#004a77]'
                        : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                    }`}
                  >
                    {sz === 'lg' ? 'L (48px)' : sz === 'md' ? 'M (40px)' : 'S (32px)'}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Text Wrap Mode ★新設 */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                4. Text Wrap Option
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setTextWrapMode('nowrap')}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    textWrapMode === 'nowrap'
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                  title="1行固定（スペースで改行させない）"
                >
                  Single Line
                </button>
                <button
                  onClick={() => setTextWrapMode('wrap')}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    textWrapMode === 'wrap'
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                  title="複数行改行を許可"
                >
                  Allow Wrap
                </button>
              </div>
            </div>

            {/* 5. State Toggle */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                5. Interactive State
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setIsDisabled(false)}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    !isDisabled
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Enabled
                </button>
                <button
                  onClick={() => setIsDisabled(true)}
                  className={`flex-1 px-[10px] py-[6px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    isDisabled
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Disabled
                </button>
              </div>
            </div>
          </div>

          {/* Label Input */}
          <div className="pt-[4px]">
            <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
              Custom Label Text:
            </label>
            <input
              type="text"
              value={buttonLabel}
              onChange={(e) => setButtonLabel(e.target.value)}
              className="w-full bg-dls-canvas border border-dls-line-subtle rounded-[6px] px-[12px] py-[8px] text-[13px] text-dls-txt-primary focus:outline-none focus:border-[#8ab4f8]"
            />
          </div>
        </div>

        {/* Live Simulator Viewport ★枠を大きく拡張＆左右均等化＆コードはみ出し防止 */}
        <div className="p-[28px] lg:p-[32px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col lg:flex-row items-stretch justify-between gap-[28px]">
          {/* Left: Rendered Live Button (十分な広さのキャンバス) */}
          <div className="min-w-0 flex-1 flex flex-col items-center justify-center min-h-[220px] p-[32px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle relative overflow-hidden">
            <span className="absolute top-[8px] left-[10px] text-[10px] font-mono text-dls-txt-annotation">
              PREVIEW CANVAS
            </span>

            <button
              disabled={isDisabled}
              className={getButtonStyles(selectedColor, selectedSize, isDisabled, textWrapMode)}
            >
              {selectedIconPos === 'left' && <ShoppingBag size={selectedSize === 'sm' ? 13 : 15} />}
              <span>{buttonLabel}</span>
              {selectedIconPos === 'right' && (
                selectedColor === 'text-link' ? <ArrowRight size={14} /> : <ArrowRight size={selectedSize === 'sm' ? 13 : 15} />
              )}
            </button>
          </div>

          {/* Right: Code Inspection & Copy Box (min-w-0 で突き抜け防止) */}
          <div className="min-w-0 flex-1 flex flex-col justify-between space-y-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
                JSX Code Specimen:
              </span>
              <button
                onClick={() => copyText(getRenderedCodeSnippet(), 'active-btn-snippet')}
                className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
              >
                {copiedId === 'active-btn-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedId === 'active-btn-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-[16px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-dls-txt-secondary overflow-x-auto leading-relaxed max-h-[260px] whitespace-pre-wrap break-all">
              <code>{getRenderedCodeSnippet()}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. COMPONENT SPECIFICATION MATRIX (All Variations)
         ========================================================= */}
      <section className="space-y-[28px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
            Button Component Matrix
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            The complete inventory across 3 solid fill colorways, 3 icon states, and editorial text links.
          </p>
        </div>

        {/* 1. GAP Navy Solid Buttons */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-[#002554] border border-white/20" />
              <span>1. GAP Navy Solid (Primary Action)</span>
            </h3>
            <span className="text-[12px] font-mono text-[#8ab4f8]">Main Commerce CTAs</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">No Icon</span>
              <button className="h-[40px] px-[20px] bg-[#002554] hover:bg-[#001f42] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center cursor-pointer whitespace-nowrap">
                <span>SHOP NOW</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Left</span>
              <button className="h-[40px] px-[20px] bg-[#002554] hover:bg-[#001f42] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer whitespace-nowrap">
                <ShoppingBag size={15} />
                <span>ADD TO BAG</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Right</span>
              <button className="h-[40px] px-[20px] bg-[#002554] hover:bg-[#001f42] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer whitespace-nowrap">
                <span>EXPLORE</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Disabled (40%)</span>
              <button disabled className="h-[40px] px-[20px] bg-[#002554] text-white text-[13px] font-bold uppercase tracking-wider rounded-none opacity-40 cursor-not-allowed w-full flex items-center justify-center gap-[8px] whitespace-nowrap">
                <span>SOLD OUT</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. White Solid Buttons */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-white border border-black/20" />
              <span>2. Pure White Solid (High Contrast Secondary)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Lookbooks & Dark Canvases</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">No Icon</span>
              <button className="h-[40px] px-[20px] bg-white hover:bg-[#f2f2f2] text-[#0b0c10] text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center cursor-pointer shadow-xs whitespace-nowrap">
                <span>VIEW DETAILS</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Left</span>
              <button className="h-[40px] px-[20px] bg-white hover:bg-[#f2f2f2] text-[#0b0c10] text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer shadow-xs whitespace-nowrap">
                <ShoppingBag size={15} />
                <span>SELECT SIZE</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Right</span>
              <button className="h-[40px] px-[20px] bg-white hover:bg-[#f2f2f2] text-[#0b0c10] text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer shadow-xs whitespace-nowrap">
                <span>LOOKBOOK</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Disabled (40%)</span>
              <button disabled className="h-[40px] px-[20px] bg-white text-[#0b0c10] text-[13px] font-bold uppercase tracking-wider rounded-none opacity-40 cursor-not-allowed w-full flex items-center justify-center gap-[8px] whitespace-nowrap">
                <span>UNAVAILABLE</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Deep Black Solid Buttons */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-[#0b0c10] border border-white/20" />
              <span>3. Deep Black Solid (Campaign Action)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Editorial & Monochromatic</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">No Icon</span>
              <button className="h-[40px] px-[20px] bg-[#0b0c10] hover:bg-[#2b2b2b] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center cursor-pointer whitespace-nowrap">
                <span>FILTER ITEMS</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Left</span>
              <button className="h-[40px] px-[20px] bg-[#0b0c10] hover:bg-[#2b2b2b] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer whitespace-nowrap">
                <ShoppingBag size={15} />
                <span>CHECKOUT</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Icon Right</span>
              <button className="h-[40px] px-[20px] bg-[#0b0c10] hover:bg-[#2b2b2b] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all w-full flex items-center justify-center gap-[8px] cursor-pointer whitespace-nowrap">
                <span>SEE ALL (24)</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Disabled (40%)</span>
              <button disabled className="h-[40px] px-[20px] bg-[#0b0c10] text-white text-[13px] font-bold uppercase tracking-wider rounded-none opacity-40 cursor-not-allowed w-full flex items-center justify-center gap-[8px] whitespace-nowrap">
                <span>DISABLED</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Text Link Buttons */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[2px] bg-[#8ab4f8]" />
              <span>4. Text Link Buttons (Editorial Actions)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Non-intrusive Navigation</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Simple Underline</span>
              <button className="text-[13px] font-bold text-dls-txt-primary hover:text-[#8ab4f8] underline underline-offset-4 transition-colors inline-flex items-center cursor-pointer whitespace-nowrap">
                <span>View Size Guide</span>
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">With Trailing Arrow</span>
              <button className="text-[13px] font-bold text-dls-txt-primary hover:text-[#8ab4f8] underline underline-offset-4 transition-colors inline-flex items-center gap-[6px] cursor-pointer whitespace-nowrap">
                <span>Explore Denim Fit</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">External Action</span>
              <button className="text-[13px] font-bold text-dls-txt-primary hover:text-[#8ab4f8] underline underline-offset-4 transition-colors inline-flex items-center gap-[6px] cursor-pointer whitespace-nowrap">
                <span>Sustainability Note</span>
                <ExternalLink size={13} />
              </button>
            </div>

            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Disabled Text</span>
              <button disabled className="text-[13px] font-bold text-dls-txt-muted opacity-40 underline underline-offset-4 cursor-not-allowed inline-flex items-center gap-[6px] whitespace-nowrap">
                <span>Unavailable Link</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: NEXT -> BADGES & CHIPS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>ATOMS & PRIMITIVES PIPELINE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Badges & Micro Chips
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Next in the Atoms tier: promotional flags (<strong className="text-dls-txt-primary">SALE, NEW, ONLINE EXCLUSIVE</strong>), collaboration tags, and live inventory status dots that attach directly to product imagery.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('ui-badges')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Badges & Chips</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}