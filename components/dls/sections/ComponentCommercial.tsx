// components/dls/sections/ComponentCommercial.tsx
'use client';

import { useState } from 'react';
import {
  Coins,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Plus,
  Minus,
  Star,
  Tag,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Code2,
  ShieldCheck,
  Layers,
  Percent,
  CreditCard
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentCommercialProps {
  setActiveSection: (sec: NavigationSection) => void;
}

export default function ComponentCommercial({ setActiveSection }: ComponentCommercialProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // プレイグラウンド用ステート
  const [originalPrice, setOriginalPrice] = useState<number>(8990);
  const [isSale, setIsSale] = useState<boolean>(true);
  const [discountPercent, setDiscountPercent] = useState<number>(30);
  const [quantity, setQuantity] = useState<number>(1);
  const [maxStock, setMaxStock] = useState<number>(5);
  const [rating, setRating] = useState<number>(4.8);
  const [reviewCount, setReviewCount] = useState<number>(142);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // セール価格の計算
  const currentPrice = isSale
    ? Math.floor((originalPrice * (100 - discountPercent)) / 100)
    : originalPrice;

  // ポイント計算（GAP 1%還元）
  const earnedPoints = Math.floor(currentPrice * 0.01);

  // 生成コードの取得
  const getRenderedCodeSnippet = () => {
    return `// Price Display Specimen
<div className="flex items-baseline gap-[8px] flex-wrap font-sans">
  ${
    isSale
      ? `<span className="text-[24px] font-black text-[#dc3545] font-mono tracking-tight">
    ¥${currentPrice.toLocaleString()}
  </span>
  <span className="text-[14px] font-mono text-dls-txt-muted line-through decoration-black/40">
    ¥${originalPrice.toLocaleString()}
  </span>
  <span className="px-[6px] py-[1px] bg-[#dc3545] text-white text-[10px] font-mono font-bold uppercase rounded-none">
    -${discountPercent}% OFF
  </span>`
      : `<span className="text-[24px] font-black text-dls-txt-primary font-mono tracking-tight">
    ¥${currentPrice.toLocaleString()}
  </span>`
  }
  <span className="text-[11px] font-mono text-dls-txt-annotation">
    (税込)
  </span>
</div>

// Quantity Stepper (Min: 1 / Max: ${maxStock})
<div className="inline-flex items-center border border-dls-line-subtle rounded-none bg-dls-canvas h-[40px]">
  <button
    disabled={quantity <= 1}
    className="w-[40px] h-full flex items-center justify-center text-dls-txt-secondary hover:text-dls-txt-primary disabled:opacity-40"
  >
    <Minus size={14} />
  </button>
  <span className="w-[44px] text-center font-mono text-[13px] font-bold text-dls-txt-primary">
    {quantity}
  </span>
  <button
    disabled={quantity >= ${maxStock}}
    className="w-[40px] h-full flex items-center justify-center text-dls-txt-secondary hover:text-dls-txt-primary disabled:opacity-40"
  >
    <Plus size={14} />
  </button>
</div>`;
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
              ATOMS · COMMERCIAL ELEMENTS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Commercial Elements
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The mathematical and transactional building blocks of the e-commerce storefront. 
            Standardizes price typography hierarchies under Japanese Total Price Display regulations, 40px tactile quantity steppers, and standardized customer review ratings.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#dc3545]" />
              Standard & Red Markdown Price Scales
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-amber-500" />
              40px Square Quantity Stepper (1–Max)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#f59e0b]" />
              Star Ratings & Points Calculation
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Transactional Geometric Art */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#dc3545]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Commerce Physics
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              総額表示義務 適合
            </span>
          </div>

          {/* Center Graphic: Layered Transactional Cards */}
          <div className="relative my-auto flex flex-col items-center justify-center gap-[12px] z-10 py-[12px] w-full">
            {/* Price Badge Module */}
            <div className="p-[12px] rounded-[10px] bg-dls-canvas/90 border border-dls-line-subtle shadow-lg w-[220px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[22px] font-black text-[#dc3545] font-mono leading-none">¥6,290</span>
                <span className="text-[12px] font-mono text-dls-txt-muted line-through">¥8,990</span>
                <span className="text-[10px] font-mono text-dls-txt-annotation">(税込)</span>
              </div>
              <div className="flex items-center gap-[4px] mt-[6px]">
                <span className="px-[5px] py-[1px] bg-[#dc3545] text-white text-[9px] font-mono font-bold">
                  -30% OFF
                </span>
                <span className="text-[10px] font-mono text-emerald-500">62 pts (1%)</span>
              </div>
            </div>

            {/* Stepper Mockup */}
            <div className="h-[36px] bg-dls-canvas rounded-none border border-dls-line-subtle flex items-center px-[4px] shadow-sm">
              <span className="w-[30px] text-center text-dls-txt-muted text-[13px] font-mono font-bold">-</span>
              <span className="w-[36px] text-center text-dls-txt-primary text-[12px] font-mono font-bold">1</span>
              <span className="w-[30px] text-center text-dls-txt-muted text-[13px] font-mono font-bold">+</span>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Legal Compliance</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">100% Tax-Inclusive</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Fixed Baseline</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. RESOURCES (Legal Directives & Touch Architecture)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <span>Resources</span>
          </h2>
          <span className="text-[12px] font-mono text-dls-txt-muted">Commercial Directives</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Statutory compliance guidelines for Japanese e-commerce pricing, stepper tactile dimensions, and rating aggregation standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Card 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Legal Standard</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">総額表示義務 (Tax-Inclusive)</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                All consumer-facing prices must display the final payment amount. The <code className="text-[#8ab4f8]">(税込)</code> indicator must accompany prices at 10px–12px on the baseline.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] flex items-center gap-[4px]">
              <span>Consumer Affairs Agency rule</span>
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Plus size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Stepper Rule</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">40px Square Hit-Box</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Stepper buttons lock to height 40px (min-width 40px per trigger). Prevents accidental double-taps and cart overflow on mobile touchscreens.
              </p>
            </div>
            <button
              onClick={() => copyText('inline-flex items-center border border-dls-line-subtle h-[40px]', 'stepper-classes')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <Copy size={13} />
              <span>{copiedId === 'stepper-classes' ? 'Copied Classes!' : 'Copy Stepper Base'}</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Star size={20} className="text-amber-500 fill-amber-500" />
                <span className="text-[12px] font-mono text-amber-500">Rating Scale</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">5-Star Gold Hierarchy</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Active stars strictly use <code className="text-[#f59e0b]">#f59e0b</code> (Gold 500). Reviews with 0 ratings render an empty star outline with &quot;レビューを書く&quot; prompt.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('tokens-color')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View Gold Color Token</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE COMMERCIAL PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Commercial Playground</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Simulate transactional logic including discounts, tax-inclusive labels, quantity limits, and point earnings.
            </p>
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {/* Price Input */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                1. Original Price (JPY)
              </label>
              <input
                type="number"
                step="100"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                className="w-full bg-dls-canvas border border-dls-line-subtle rounded-[6px] px-[12px] py-[8px] text-[13px] font-mono text-dls-txt-primary focus:outline-none focus:border-[#8ab4f8]"
              />
            </div>

            {/* Sale Status Toggle */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                2. Price Condition
              </label>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setIsSale(false)}
                  className={`flex-1 px-[10px] py-[8px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    !isSale
                      ? 'bg-[#004a77] text-white border-[#004a77]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Regular Price
                </button>
                <button
                  onClick={() => setIsSale(true)}
                  className={`flex-1 px-[10px] py-[8px] rounded-[6px] text-[12px] font-bold transition-all cursor-pointer border ${
                    isSale
                      ? 'bg-[#dc3545] text-white border-[#dc3545]'
                      : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                  }`}
                >
                  Markdown Sale
                </button>
              </div>
            </div>

            {/* Discount Percentage */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                3. Discount Ratio ({discountPercent}%)
              </label>
              <input
                type="range"
                min="5"
                max="70"
                step="5"
                disabled={!isSale}
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                className="w-full accent-[#dc3545] cursor-pointer disabled:opacity-40 mt-[6px]"
              />
            </div>

            {/* Max Stock Allocation */}
            <div>
              <label className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider block mb-[6px]">
                4. Max Stock Limit
              </label>
              <div className="flex gap-[6px]">
                {[3, 5, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setMaxStock(num);
                      if (quantity > num) setQuantity(num);
                    }}
                    className={`flex-1 px-[10px] py-[8px] rounded-[6px] text-[12px] font-mono font-bold transition-all cursor-pointer border ${
                      maxStock === num
                        ? 'bg-[#004a77] text-white border-[#004a77]'
                        : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle hover:text-dls-txt-primary'
                    }`}
                  >
                    Max {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="p-[28px] lg:p-[32px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col lg:flex-row items-stretch justify-between gap-[32px]">
          {/* Left Canvas: Live Product Buy-Box Snippet */}
          <div className="min-w-0 flex-1 flex flex-col justify-center min-h-[240px] p-[28px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle relative space-y-[20px]">
            <span className="absolute top-[8px] left-[10px] text-[10px] font-mono text-dls-txt-annotation">
              COMMERCIAL TRANSACTION PREVIEW
            </span>

            {/* Price Presentation */}
            <div>
              <div className="flex items-baseline gap-[10px] flex-wrap">
                <span
                  className={`text-[28px] font-black font-mono tracking-tight leading-none ${
                    isSale ? 'text-[#dc3545]' : 'text-dls-txt-primary'
                  }`}
                >
                  ¥{currentPrice.toLocaleString()}
                </span>

                {isSale && (
                  <span className="text-[15px] font-mono text-dls-txt-muted line-through">
                    ¥{originalPrice.toLocaleString()}
                  </span>
                )}

                {isSale && (
                  <span className="px-[6px] py-[1px] bg-[#dc3545] text-white text-[11px] font-mono font-bold uppercase rounded-none">
                    -{discountPercent}% OFF
                  </span>
                )}

                <span className="text-[12px] font-mono text-dls-txt-annotation">
                  (税込)
                </span>
              </div>

              {/* Point Loyalty Note */}
              <div className="flex items-center gap-[6px] mt-[6px] text-[12px] font-mono text-emerald-500">
                <Coins size={13} />
                <span>獲得ポイント: {earnedPoints.toLocaleString()} pt (1%還元)</span>
              </div>
            </div>

            {/* Star Rating Line */}
            <div className="flex items-center gap-[8px] pt-[4px] border-t border-dls-line-subtle">
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(rating) ? 'text-amber-500 fill-amber-500' : 'text-dls-line-default'}
                  />
                ))}
              </div>
              <span className="text-[12px] font-mono font-bold text-dls-txt-primary">{rating}</span>
              <button className="text-[12px] font-mono text-[#8ab4f8] hover:underline cursor-pointer">
                ({reviewCount} 件のレビュー)
              </button>
            </div>

            {/* Quantity Stepper & Add to Bag Trigger */}
            <div className="flex items-center gap-[12px] pt-[4px]">
              {/* Stepper */}
              <div className="inline-flex items-center border border-dls-line-subtle rounded-none bg-dls-surface h-[40px] shadow-xs">
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-[40px] h-full flex items-center justify-center text-dls-txt-secondary hover:text-dls-txt-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  title="Decrease Quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-[44px] text-center font-mono text-[13px] font-bold text-dls-txt-primary select-none">
                  {quantity}
                </span>
                <button
                  disabled={quantity >= maxStock}
                  onClick={() => setQuantity((q) => Math.min(maxStock, q + 1))}
                  className="w-[40px] h-full flex items-center justify-center text-dls-txt-secondary hover:text-dls-txt-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  title="Increase Quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Action Button */}
              <button className="flex-1 h-[40px] px-[20px] bg-[#002554] hover:bg-[#001f42] text-white text-[13px] font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-[8px] cursor-pointer shadow-xs whitespace-nowrap">
                <span>カートに入れる</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Code Inspection */}
          <div className="min-w-0 flex-1 flex flex-col justify-between space-y-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
                JSX Code Specimen:
              </span>
              <button
                onClick={() => copyText(getRenderedCodeSnippet(), 'active-commercial-snippet')}
                className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
              >
                {copiedId === 'active-commercial-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedId === 'active-commercial-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
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
            Commercial Component Matrix
          </h2>
          <p className="text-[16px] text-dls-txt-muted mt-[4px]">
            Comprehensive design specifications across price tiers, quantity inputs, review aggregates, and loyalty callouts.
          </p>
        </div>

        {/* 1. Price Display Hierarchy */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-[#dc3545]" />
              <span>1. Price Display Hierarchy (総額表示基準)</span>
            </h3>
            <span className="text-[12px] font-mono text-[#8ab4f8]">Japanese Legal Baseline</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] items-center">
            {/* Standard Regular Price */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">Standard (通常価格)</span>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[22px] font-black text-dls-txt-primary font-mono">¥8,990</span>
                <span className="text-[11px] font-mono text-dls-txt-annotation">(税込)</span>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">Regular full-price baseline typography.</p>
            </div>

            {/* Markdown Sale Price */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">Markdown (セール価格)</span>
              <div className="flex items-baseline gap-[6px] flex-wrap">
                <span className="text-[22px] font-black text-[#dc3545] font-mono">¥5,990</span>
                <span className="text-[13px] font-mono text-dls-txt-muted line-through">¥8,990</span>
                <span className="px-[5px] py-[1px] bg-[#dc3545] text-white text-[9px] font-mono font-bold">-33%</span>
                <span className="text-[11px] font-mono text-dls-txt-annotation">(税込)</span>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">High-contrast red sale price with original strike-through.</p>
            </div>

            {/* Bundle Multi-buy Price */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">Bundle (まとめ買い特価)</span>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[18px] font-bold text-[#002554] font-mono">2点 ¥10,000</span>
                <span className="text-[11px] font-mono text-dls-txt-annotation">(税込)</span>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">Multi-unit promotional deal typography.</p>
            </div>
          </div>
        </div>

        {/* 2. Quantity Stepper States */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-none bg-amber-500" />
              <span>2. Quantity Stepper States (40px Tactile Touch)</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">Touch Area Standards</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-center">
            {/* Min Quantity Reached */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Min Limit (1 unit)</span>
              <div className="inline-flex items-center border border-dls-line-subtle bg-dls-canvas h-[38px]">
                <button disabled className="w-[38px] h-full flex items-center justify-center text-dls-txt-muted opacity-30 cursor-not-allowed">
                  <Minus size={13} />
                </button>
                <span className="w-[40px] text-center font-mono text-[13px] font-bold text-dls-txt-primary">1</span>
                <button className="w-[38px] h-full flex items-center justify-center text-dls-txt-primary hover:bg-dls-surface cursor-pointer">
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Active Stepping */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Active (2 units)</span>
              <div className="inline-flex items-center border border-dls-line-subtle bg-dls-canvas h-[38px]">
                <button className="w-[38px] h-full flex items-center justify-center text-dls-txt-primary hover:bg-dls-surface cursor-pointer">
                  <Minus size={13} />
                </button>
                <span className="w-[40px] text-center font-mono text-[13px] font-bold text-dls-txt-primary">2</span>
                <button className="w-[38px] h-full flex items-center justify-center text-dls-txt-primary hover:bg-dls-surface cursor-pointer">
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Max Stock Reached */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Max Stock Reached (5)</span>
              <div className="inline-flex items-center border border-amber-500/40 bg-dls-canvas h-[38px]">
                <button className="w-[38px] h-full flex items-center justify-center text-dls-txt-primary hover:bg-dls-surface cursor-pointer">
                  <Minus size={13} />
                </button>
                <span className="w-[40px] text-center font-mono text-[13px] font-bold text-amber-500">5</span>
                <button disabled className="w-[38px] h-full flex items-center justify-center text-dls-txt-muted opacity-30 cursor-not-allowed">
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Disabled / Sold Out */}
            <div className="space-y-[8px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block">Disabled (Out of stock)</span>
              <div className="inline-flex items-center border border-dls-line-subtle bg-dls-canvas h-[38px] opacity-40 cursor-not-allowed">
                <span className="w-[38px] h-full flex items-center justify-center text-dls-txt-muted"><Minus size={13} /></span>
                <span className="w-[40px] text-center font-mono text-[13px] font-bold text-dls-txt-muted">0</span>
                <span className="w-[38px] h-full flex items-center justify-center text-dls-txt-muted"><Plus size={13} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Star Ratings & Social Proof */}
        <div className="space-y-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-dls-txt-primary flex items-center gap-[8px]">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span>3. Review Ratings & Social Proof Hierarchy</span>
            </h3>
            <span className="text-[12px] font-mono text-dls-txt-muted">UGC Specifications</span>
          </div>

          <div className="p-[20px] rounded-[14px] bg-dls-surface border border-dls-line-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] items-center">
            {/* Standard Review Line */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">With Existing Reviews</span>
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center gap-[1px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className={i < 4 ? 'text-amber-500 fill-amber-500' : 'text-dls-line-default'} />
                  ))}
                </div>
                <span className="text-[12px] font-mono font-bold text-dls-txt-primary">4.2</span>
                <span className="text-[12px] font-mono text-[#8ab4f8] underline cursor-pointer">(86件)</span>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">Aggregated star score with direct link to comments.</p>
            </div>

            {/* Zero Review Empty State */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">Zero Reviews (Empty State)</span>
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center gap-[1px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-dls-line-subtle" />
                  ))}
                </div>
                <span className="text-[12px] font-mono text-dls-txt-muted">未評価</span>
                <span className="text-[12px] font-mono text-[#8ab4f8] underline cursor-pointer">レビューを書く</span>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">Encourages first customer UGC contribution.</p>
            </div>

            {/* Fit Feedback Indicator */}
            <div className="p-[14px] rounded-[8px] bg-dls-canvas border border-dls-line-subtle space-y-[6px]">
              <span className="text-[11px] font-mono text-dls-txt-annotation block uppercase">Fit Consensus Meter</span>
              <div className="space-y-[3px]">
                <div className="flex justify-between text-[11px] font-mono text-dls-txt-muted">
                  <span>小さめ</span>
                  <span className="text-emerald-500 font-bold">ぴったり (82%)</span>
                  <span>大きめ</span>
                </div>
                <div className="h-[4px] w-full bg-dls-surface rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[82%] ml-[9%]" />
                </div>
              </div>
              <p className="text-[12px] text-dls-txt-muted leading-relaxed">Customer fit consensus bar based on review survey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: NEXT -> PRODUCT CARDS (MOLECULES)
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>ATOMS TIER COMPLETE · ADVANCE TO MOLECULES</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              All Atoms Ready — Advance to Product Cards (Molecules)
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With Buttons, Badges, Apparel Selectors, and Commercial Elements fully formalized, observe how these atomic blocks combine into the <strong className="text-dls-txt-primary">Product Card</strong> component featuring interactive theme toggles, mobile sequencing, and colorway swatches.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('cards')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Product Cards</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}