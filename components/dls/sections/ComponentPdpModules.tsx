// components/dls/sections/ComponentPdpModules.tsx
'use client';

import { useState } from 'react';
import {
  Package,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Heart,
  ShoppingBag,
  Sparkles,
  Sliders,
  CheckCircle2,
  Star,
  Ruler,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRightIcon,
  Leaf,
  Truck,
  RotateCcw,
  ShieldCheck,
  Camera,
  Layers,
  Code2,
  Info,
  Monitor,
  Tablet,
  Smartphone,
  Image as ImageIcon
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentPdpModulesProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type ViewportType = 'desktop' | 'tablet' | 'mobile';

export default function ComponentPdpModules({ setActiveSection }: ComponentPdpModulesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // レスポンシブ・ビューポートステート
  const [viewport, setViewport] = useState<ViewportType>('desktop');

  // PDP インタラクティブステート
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedColorId, setSelectedColorId] = useState<string>('navy');
  const [selectedSizeId, setSelectedSizeId] = useState<string>('m');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [isAddedToBag, setIsAddedToBag] = useState<boolean>(false);

  // アコーディオン開閉ステート
  const [openAccordion, setOpenAccordion] = useState<string | null>('spec');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 商品データ
  const pdpProduct = {
    title: 'GAP 1969 Heavyweight Fleece Hoodie',
    sku: 'GAP-2026-FLC-001',
    category: 'Men / Sweatshirts & Hoodies',
    badge: { text: 'SALE -30%', tone: 'red' },
    originalPrice: 8990,
    salePrice: 6290,
    rating: 4.8,
    reviewCount: 142,
    colors: [
      { id: 'navy', name: 'GAP Iconic Navy', hex: '#002554' },
      { id: 'gray', name: 'Heather Gray', hex: '#9aa0a6' },
      { id: 'white', name: 'Optic White', hex: '#ffffff' },
      { id: 'black', name: 'Deep True Black', hex: '#0b0c10' },
    ],
    sizes: [
      { id: 's', label: 'S', isLowStock: false },
      { id: 'm', label: 'M', isLowStock: false },
      { id: 'l', label: 'L', isLowStock: true },
      { id: 'xl', label: 'XL', isLowStock: false },
      { id: 'xxl', label: 'XXL', isSoldOut: true },
    ],
    galleryImages: [
      { label: '正面カット', src: '/images/products/product-01-primary.jpg' },
      { label: 'バックスタイル', src: '/images/products/product-01-secondary.jpg' },
      { label: 'フード・ロゴ拡大', src: '/images/products/product-01-primary.jpg' },
      { label: '生地テクスチャ', src: '/images/products/product-01-secondary.jpg' },
    ],
  };

  const activeColor = pdpProduct.colors.find((c) => c.id === selectedColorId) || pdpProduct.colors[0];
  const activeSize = pdpProduct.sizes.find((s) => s.id === selectedSizeId) || pdpProduct.sizes[1];

  // ビューポート枠のCSS幅
  const getViewportContainerWidth = () => {
    if (viewport === 'mobile') return 'max-w-[420px]';
    if (viewport === 'tablet') return 'max-w-[800px]';
    return 'w-full';
  };

  // 生成コードの取得
  const getRenderedCodeSnippet = () => {
    if (viewport === 'mobile') {
      return `// Mobile 1-Column Sequential Scaffolding + Sticky Action Bar
<div className="flex flex-col bg-white max-w-[390px] mx-auto pb-[80px]">
  {/* 3:4 Swipe Media Frame with Index Badge */}
  <div className="relative aspect-[3/4] w-full bg-[#f4f4f4]">
    <img src="${pdpProduct.galleryImages[selectedImageIndex].src}" alt="${pdpProduct.title}" className="w-full h-full object-cover" />
    <span className="absolute bottom-[10px] right-[10px] px-[8px] py-[2px] bg-black/60 text-white text-[10px] font-mono rounded-full">
      ${selectedImageIndex + 1} / ${pdpProduct.galleryImages.length}
    </span>
  </div>

  {/* Sequential Information & Variant Selection */}
  <div className="p-[16px] space-y-[16px]">
    <h1 className="text-[18px] font-bold text-[#0b0c10]">${pdpProduct.title}</h1>
    <div className="flex items-baseline gap-[6px]">
      <span className="text-[24px] font-black font-mono text-[#dc3545]">¥${pdpProduct.salePrice.toLocaleString()}</span>
      <span className="text-[13px] font-mono text-neutral-400 line-through">¥${pdpProduct.originalPrice.toLocaleString()}</span>
      <span className="text-[10px] font-mono text-neutral-500">(税込)</span>
    </div>
    {/* Swatches & Sizes Chips */}
  </div>

  {/* Fixed Sticky Bottom Action Bar */}
  <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e5e5e5] px-[16px] py-[10px] flex items-center justify-between gap-[12px]">
    <div>
      <span className="text-[10px] font-mono text-[#5f6368] block">サイズ: ${activeSize.label}</span>
      <span className="text-[18px] font-black font-mono text-[#dc3545]">¥${pdpProduct.salePrice.toLocaleString()}</span>
    </div>
    <button className="flex-1 h-[44px] bg-[#002554] text-white font-bold uppercase tracking-wider rounded-none">
      カートに入れる
    </button>
  </div>
</div>`;
    }

    return `// Desktop 7:5 Asymmetric Grid Scaffolding
<div className="grid grid-cols-12 gap-[48px] max-w-[1140px] mx-auto items-start">
  {/* Left: 3:4 Media Gallery (7 Columns) */}
  <div className="col-span-7 space-y-[16px]">
    <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] rounded-none overflow-hidden">
      <img src="${pdpProduct.galleryImages[selectedImageIndex].src}" alt="${pdpProduct.title}" className="w-full h-full object-cover" />
    </div>
    <div className="grid grid-cols-4 gap-[10px]">
      {/* 4 Thumbnails */}
    </div>
  </div>

  {/* Right: Sticky Buy-Box Purchase Rail (5 Columns) */}
  <div className="col-span-5 sticky top-[72px] self-start space-y-[22px]">
    <h1 className="text-[26px] font-black text-[#0b0c10] leading-tight">${pdpProduct.title}</h1>
    <div className="flex items-baseline gap-[10px]">
      <span className="text-[28px] font-black font-mono text-[#dc3545]">¥${pdpProduct.salePrice.toLocaleString()}</span>
      <span className="text-[15px] font-mono text-neutral-400 line-through">¥${pdpProduct.originalPrice.toLocaleString()}</span>
      <span className="text-[12px] font-mono text-neutral-500">(税込)</span>
    </div>
    {/* Swatches, Sizes, 48px Solid Add-to-Bag Button */}
    <button className="w-full h-[48px] bg-[#002554] text-white font-bold uppercase tracking-wider rounded-none">
      カートに入れる
    </button>
  </div>
</div>`;
  };

  return (
    <div className="max-w-[1280px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        <div className="flex-1 max-w-[680px]">
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
              ORGANISMS · PDP ARCHITECTURE
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            PDP Detail Modules
          </h1>

          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The master product detail page scaffolding uniting all design language layers. 
            Test responsive transformations between the Desktop 7:5 asymmetric sticky rail and the Mobile single-column swipe sequence with sticky bottom buy-bar.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#002554]" />
              Desktop 7:5 Sticky Rail (<code className="text-dls-txt-primary">top-[72px]</code>)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-emerald-500" />
              Mobile 1-Col Stack + Sticky Bottom Bar
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#dc3545]" />
              Responsive Touch Target (48px)
            </span>
          </div>
        </div>

        {/* Right Preview Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Organisms Tier
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Responsive
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[8px] w-full">
            <div className="w-[200px] rounded-[6px] bg-white border border-[#e5e5e5] p-[10px] shadow-2xl space-y-[6px]">
              <div className="flex gap-[6px]">
                <div className="w-[45%] aspect-[3/4] bg-[#f4f4f4] rounded-[2px] flex items-center justify-center text-[9px] font-mono text-neutral-400">
                  3:4 Image
                </div>
                <div className="flex-1 space-y-[4px]">
                  <div className="h-[4px] bg-neutral-300 rounded-full w-4/5" />
                  <div className="h-[3px] bg-neutral-200 rounded-full w-2/3" />
                  <span className="text-[11px] font-black font-mono text-[#dc3545] block pt-[2px]">¥6,290</span>
                  <div className="w-full h-[18px] bg-[#002554] rounded-none flex items-center justify-center text-white text-[8px] font-mono font-bold">
                    BUY NOW
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Device Adaptability</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Desktop · Tablet · Mobile</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Dual Stacking</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. VIEWPORT CONTROLLER BAR
         ========================================================= */}
      <section className="space-y-[16px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] p-[16px] rounded-[16px] bg-dls-surface border border-dls-line-subtle shadow-sm">
          <div className="flex items-center gap-[12px]">
            <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider hidden sm:inline-block">
              Simulate Viewport:
            </span>
            <div className="flex bg-dls-canvas p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
              <button
                onClick={() => setViewport('desktop')}
                className={`px-[14px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'desktop'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Monitor size={14} />
                <span>Desktop (1280px)</span>
              </button>

              <button
                onClick={() => setViewport('tablet')}
                className={`px-[14px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'tablet'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Tablet size={14} />
                <span>Tablet (768px)</span>
              </button>

              <button
                onClick={() => setViewport('mobile')}
                className={`px-[14px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'mobile'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile (390px)</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[10px] text-[12px] font-mono text-dls-txt-annotation">
            <span>
              Mode: <strong className="text-dls-txt-primary capitalize">{viewport}</strong>
            </span>
            <span>·</span>
            <span>
              {viewport === 'desktop'
                ? '7:5 Asymmetric Split + Sticky Rail'
                : viewport === 'tablet'
                ? '768px Balanced 2-Column'
                : '390px 1-Col Stack + Fixed Sticky Bar'}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. LIVE PDP INTERACTIVE SIMULATOR (Responsive Shell)
         ========================================================= */}
      <section className="flex justify-center bg-dls-canvas/50 p-[12px] lg:p-[28px] rounded-[24px] border border-dashed border-dls-line-subtle overflow-hidden">
        <div className={`transition-all duration-300 mx-auto ${getViewportContainerWidth()}`}>
          
          {/* =========================================================
             A. DESKTOP & TABLET VIEW (7:5 Asymmetric 2-Column)
             ========================================================= */}
          {viewport !== 'mobile' && (
            <div className="p-[24px] lg:p-[36px] rounded-[20px] bg-white border border-[#e5e5e5] shadow-xl text-[#0b0c10]">
              <div className="grid grid-cols-12 gap-[28px] lg:gap-[48px] items-start">
                
                {/* Left Column: 3:4 Media Gallery Rail (7/12 cols) */}
                <div className="col-span-7 space-y-[16px]">
                  {/* Primary 3:4 Image Frame */}
                  <div className="relative aspect-[3/4] w-full rounded-[2px] bg-[#f4f4f4] border border-[#f0f0f0] overflow-hidden group">
                    <img
                      src={pdpProduct.galleryImages[selectedImageIndex].src}
                      alt={pdpProduct.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.pdp-img-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }
                      }}
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />

                    <div className="pdp-img-fallback hidden absolute inset-0 bg-[#f4f4f4] flex flex-col items-center justify-center text-center p-[20px] text-neutral-400 space-y-[6px]">
                      <ImageIcon size={44} className="text-neutral-300" />
                      <span className="text-[13px] font-mono font-bold text-neutral-600">
                        {pdpProduct.galleryImages[selectedImageIndex].label}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        3:4 Aspect Ratio Product Media
                      </span>
                    </div>

                    <div className="absolute top-[12px] left-[12px] z-10">
                      <span className="inline-flex items-center h-[24px] px-[8px] bg-[#dc3545] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-none shadow-sm">
                        {pdpProduct.badge.text}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="absolute top-[12px] right-[12px] z-10 w-[36px] h-[36px] rounded-full bg-white/90 hover:bg-white text-neutral-700 flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer border border-black/5"
                      title="お気に入り"
                    >
                      <Heart
                        size={17}
                        className={isWishlisted ? 'text-[#dc3545] fill-[#dc3545]' : 'text-neutral-700'}
                      />
                    </button>
                  </div>

                  {/* Thumbnail Strip (4-Col Thumbnails) */}
                  <div className="grid grid-cols-4 gap-[10px]">
                    {pdpProduct.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative aspect-[3/4] rounded-[2px] overflow-hidden border-2 transition-all cursor-pointer bg-[#f4f4f4] ${
                          selectedImageIndex === idx
                            ? 'border-[#002554] ring-1 ring-[#002554]'
                            : 'border-transparent hover:border-neutral-300 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt={img.label} onError={(e) => { e.currentTarget.style.display = 'none'; }} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-[9px] font-mono font-bold text-white text-center p-[2px]">
                          {idx + 1}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* 3D Virtual Try-On Banner */}
                  <div className="p-[16px] bg-[#002554] text-white rounded-none flex items-center justify-between border-l-4 border-[#8ab4f8] shadow-md mt-[16px]">
                    <div className="space-y-[2px]">
                      <span className="inline-flex items-center gap-[4px] text-[10px] font-mono text-[#c2e7ff] uppercase">
                        <Sparkles size={11} className="text-[#8ab4f8]" />
                        <span>AI 3D Fitting</span>
                      </span>
                      <p className="text-[13px] font-bold">あなたの体型でバーチャル試着</p>
                    </div>
                    <button
                      onClick={() => alert('3D Try-On Modal Triggered')}
                      className="h-[34px] px-[14px] bg-white text-[#002554] text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-neutral-100 flex items-center gap-[6px] transition-all cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <Camera size={13} />
                      <span>3D試着を起動</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Sticky Buy-Box Purchase Rail (5/12 cols) */}
                <div className="col-span-5 sticky top-[72px] space-y-[22px] self-start">
                  
                  {/* Category & Title */}
                  <div className="space-y-[6px]">
                    <span className="text-[11px] font-mono text-[#5f6368] uppercase tracking-wider block">
                      {pdpProduct.category} · {pdpProduct.sku}
                    </span>
                    <h1 className="text-[22px] lg:text-[26px] font-black tracking-tight text-[#0b0c10] leading-tight">
                      {pdpProduct.title}
                    </h1>

                    <div className="flex items-center gap-[8px] pt-[2px]">
                      <div className="flex items-center gap-[2px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className={i < 4 ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'} />
                        ))}
                      </div>
                      <span className="text-[12px] font-mono font-bold text-[#0b0c10]">{pdpProduct.rating}</span>
                      <span className="text-[12px] font-mono text-[#002554] underline cursor-pointer">
                        ({pdpProduct.reviewCount} 件のレビュー)
                      </span>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="p-[14px] bg-[#f8f9fa] border border-[#e5e5e5] rounded-none space-y-[4px]">
                    <div className="flex items-baseline gap-[10px] flex-wrap">
                      <span className="text-[28px] font-black font-mono tracking-tight text-[#dc3545] leading-none">
                        ¥{pdpProduct.salePrice.toLocaleString()}
                      </span>
                      <span className="text-[15px] font-mono text-[#80868b] line-through">
                        ¥{pdpProduct.originalPrice.toLocaleString()}
                      </span>
                      <span className="px-[6px] py-[1px] bg-[#dc3545] text-white text-[10px] font-mono font-bold uppercase rounded-none">
                        -30% OFF
                      </span>
                      <span className="text-[12px] font-mono text-[#5f6368]">
                        (税込)
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 flex items-center gap-[4px] pt-[2px]">
                      <span>獲得予定ポイント: 62 pt (GAP 1%還元)</span>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="space-y-[8px]">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="font-bold text-[#0b0c10]">
                        カラー: <span className="font-mono text-[#002554] font-normal">{activeColor.name}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      {pdpProduct.colors.map((c) => {
                        const isSelected = c.id === selectedColorId;
                        return (
                          <button
                            key={c.id}
                            onClick={() => setSelectedColorId(c.id)}
                            className={`relative w-[30px] h-[30px] rounded-[2px] transition-all p-[2px] cursor-pointer ${
                              isSelected
                                ? 'ring-2 ring-[#002554] ring-offset-2 ring-offset-white scale-105'
                                : 'hover:scale-105 opacity-90'
                            }`}
                            title={c.name}
                          >
                            <span className="block w-full h-full rounded-[1px] border border-black/15" style={{ backgroundColor: c.hex }} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-[8px]">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="font-bold text-[#0b0c10]">
                        サイズ: <span className="font-mono text-[#002554] font-normal">{activeSize.label}</span>
                      </span>
                      <button className="text-[12px] font-bold text-[#002554] hover:underline flex items-center gap-[4px] cursor-pointer">
                        <Ruler size={13} />
                        <span>サイズガイド</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-[8px] flex-wrap">
                      {pdpProduct.sizes.map((sz) => {
                        const isSelected = sz.id === selectedSizeId;
                        if (sz.isSoldOut) {
                          return (
                            <button
                              key={sz.id}
                              disabled
                              className="min-w-[46px] h-[40px] px-[12px] rounded-[2px] font-mono text-[12px] font-bold uppercase border border-dashed border-neutral-300 text-neutral-400 opacity-40 cursor-not-allowed relative overflow-hidden flex items-center justify-center"
                              title="再入荷通知"
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
                            className={`min-w-[46px] h-[40px] px-[12px] rounded-[2px] font-mono text-[12px] font-bold uppercase transition-all cursor-pointer flex items-center justify-center relative ${
                              isSelected
                                ? 'bg-[#002554] text-white shadow-xs'
                                : 'bg-white text-[#0b0c10] border border-[#d2d2d2] hover:border-black'
                            }`}
                          >
                            <span>{sz.label}</span>
                            {sz.isLowStock && (
                              <span className="absolute top-[3px] right-[3px] w-[5px] h-[5px] rounded-full bg-amber-500" title="残りわずか" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="space-y-[10px] pt-[6px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="inline-flex items-center border border-[#d2d2d2] rounded-none bg-white h-[48px] shadow-xs">
                        <button
                          disabled={quantity <= 1}
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="w-[42px] h-full flex items-center justify-center text-neutral-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          -
                        </button>
                        <span className="w-[44px] text-center font-mono text-[14px] font-bold text-[#0b0c10]">
                          {quantity}
                        </span>
                        <button
                          disabled={quantity >= 5}
                          onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                          className="w-[42px] h-full flex items-center justify-center text-neutral-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          setIsAddedToBag(true);
                          setTimeout(() => setIsAddedToBag(false), 2000);
                        }}
                        className="flex-1 h-[48px] px-[24px] bg-[#002554] hover:bg-[#001f42] text-white text-[14px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[8px] transition-all shadow-md active:scale-[0.99] cursor-pointer whitespace-nowrap"
                      >
                        {isAddedToBag ? <Check size={16} className="text-emerald-400" /> : <ShoppingBag size={16} />}
                        <span>{isAddedToBag ? 'カートに追加しました！' : 'カートに入れる'}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#5f6368] pt-[2px]">
                      <span className="flex items-center gap-[4px]">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>最短当日店舗受取可能 (送料無料)</span>
                      </span>
                      <button className="underline hover:text-black cursor-pointer">店舗在庫を確認</button>
                    </div>
                  </div>

                  {/* Accordions */}
                  <div className="pt-[14px] border-t border-[#e5e5e5] space-y-[2px]">
                    <div className="border-b border-[#e5e5e5]">
                      <button
                        onClick={() => toggleAccordion('spec')}
                        className="w-full py-[12px] flex items-center justify-between text-left text-[13px] font-bold text-[#0b0c10] hover:text-[#002554] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-[8px]">
                          <Leaf size={15} className="text-emerald-600" />
                          <span>素材・サステナビリティ (Washwell™)</span>
                        </span>
                        {openAccordion === 'spec' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openAccordion === 'spec' && (
                        <div className="pb-[14px] text-[12px] text-[#5f6368] leading-relaxed space-y-[6px]">
                          <p>• 綿 77% / ポリエステル 23%（裏起毛ヘビーウェイトフリース）</p>
                          <p>• <strong>Washwell™ 節水プログラム</strong>: 水の使用量を少なくとも20%削減して製造。</p>
                          <p>• 洗濯機洗い可（洗濯ネット使用推奨）</p>
                        </div>
                      )}
                    </div>

                    <div className="border-b border-[#e5e5e5]">
                      <button
                        onClick={() => toggleAccordion('size-table')}
                        className="w-full py-[12px] flex items-center justify-between text-left text-[13px] font-bold text-[#0b0c10] hover:text-[#002554] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-[8px]">
                          <Ruler size={15} className="text-[#002554]" />
                          <span>アイテム実寸寸法表 (cm)</span>
                        </span>
                        {openAccordion === 'size-table' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openAccordion === 'size-table' && (
                        <div className="pb-[14px] text-[11px] font-mono text-[#5f6368] overflow-x-auto">
                          <table className="w-full border-collapse text-center">
                            <thead>
                              <tr className="border-b border-neutral-200 bg-neutral-50 text-[#0b0c10]">
                                <th className="py-[6px] px-[8px]">サイズ</th>
                                <th className="py-[6px] px-[8px]">身幅</th>
                                <th className="py-[6px] px-[8px]">肩幅</th>
                                <th className="py-[6px] px-[8px]">着丈</th>
                                <th className="py-[6px] px-[8px]">袖丈</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                              <tr><td className="py-[6px] font-bold">S</td><td>56</td><td>49</td><td>67</td><td>62</td></tr>
                              <tr className="bg-blue-50/50 font-bold text-[#002554]"><td className="py-[6px]">M (選択中)</td><td>59</td><td>51</td><td>70</td><td>64</td></tr>
                              <tr><td className="py-[6px] font-bold">L</td><td>63</td><td>54</td><td>73</td><td>66</td></tr>
                              <tr><td className="py-[6px] font-bold">XL</td><td>67</td><td>57</td><td>76</td><td>68</td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* =========================================================
             B. MOBILE VIEW (390px Shell + Sticky Bottom Action Bar)
             ========================================================= */}
          {viewport === 'mobile' && (
            <div className="relative w-full max-w-[390px] mx-auto rounded-[28px] bg-white border-4 border-[#2b2b2b] shadow-2xl overflow-hidden flex flex-col text-[#0b0c10]">
              
              {/* iPhone Notch & Speaker Mockup Bar */}
              <div className="h-[28px] bg-neutral-900 w-full flex items-center justify-center relative">
                <div className="w-[90px] h-[16px] bg-black rounded-b-[10px]" />
              </div>

              {/* Scrollable Mobile PDP Content Body */}
              <div className="overflow-y-auto max-h-[620px] pb-[76px] space-y-[16px]">
                
                {/* 1. Mobile Swipe Gallery Frame with Index Indicator */}
                <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden">
                  <img
                    src={pdpProduct.galleryImages[selectedImageIndex].src}
                    alt={pdpProduct.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Left / Right Carousel Controls */}
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : pdpProduct.galleryImages.length - 1))}
                    className="absolute left-[8px] top-1/2 -translate-y-1/2 w-[32px] h-[32px] rounded-full bg-white/80 flex items-center justify-center text-neutral-800 shadow cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev < pdpProduct.galleryImages.length - 1 ? prev + 1 : 0))}
                    className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[32px] h-[32px] rounded-full bg-white/80 flex items-center justify-center text-neutral-800 shadow cursor-pointer"
                  >
                    <ChevronRightIcon size={18} />
                  </button>

                  {/* Index Pill (e.g. 1 / 4) */}
                  <span className="absolute bottom-[10px] right-[10px] px-[8px] py-[3px] bg-black/60 text-white text-[10px] font-mono rounded-full backdrop-blur-xs">
                    {selectedImageIndex + 1} / {pdpProduct.galleryImages.length}
                  </span>

                  {/* Badge */}
                  <div className="absolute top-[10px] left-[10px]">
                    <span className="inline-flex items-center h-[22px] px-[8px] bg-[#dc3545] text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                      {pdpProduct.badge.text}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-[10px] right-[10px] w-[34px] h-[34px] rounded-full bg-white/90 text-neutral-800 flex items-center justify-center shadow"
                  >
                    <Heart size={16} className={isWishlisted ? 'text-[#dc3545] fill-[#dc3545]' : 'text-neutral-700'} />
                  </button>
                </div>

                {/* 2. Mobile Title & Price Block */}
                <div className="px-[16px] space-y-[8px]">
                  <span className="text-[10px] font-mono text-[#5f6368] uppercase tracking-wider block">
                    {pdpProduct.category}
                  </span>
                  <h1 className="text-[17px] font-bold text-[#0b0c10] leading-snug">
                    {pdpProduct.title}
                  </h1>

                  {/* Price */}
                  <div className="flex items-baseline gap-[8px] flex-wrap">
                    <span className="text-[24px] font-black font-mono text-[#dc3545] leading-none">
                      ¥{pdpProduct.salePrice.toLocaleString()}
                    </span>
                    <span className="text-[13px] font-mono text-[#80868b] line-through">
                      ¥{pdpProduct.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-[5px] py-[1px] bg-[#dc3545] text-white text-[9px] font-mono font-bold uppercase">
                      -30% OFF
                    </span>
                    <span className="text-[10px] font-mono text-[#5f6368]">(税込)</span>
                  </div>

                  <div className="text-[10px] font-mono text-emerald-600">
                    獲得予定ポイント: 62 pt (GAP 1%還元)
                  </div>
                </div>

                {/* 3. Color Swatches */}
                <div className="px-[16px] space-y-[6px]">
                  <span className="text-[11px] font-bold text-[#0b0c10] block">
                    カラー: <span className="font-mono text-[#002554] font-normal">{activeColor.name}</span>
                  </span>
                  <div className="flex items-center gap-[8px]">
                    {pdpProduct.colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedColorId(c.id)}
                        className={`w-[28px] h-[28px] rounded-[2px] p-[2px] transition-all cursor-pointer ${
                          selectedColorId === c.id ? 'ring-2 ring-[#002554] ring-offset-2 ring-offset-white' : 'opacity-90'
                        }`}
                      >
                        <span className="block w-full h-full rounded-[1px] border border-black/15" style={{ backgroundColor: c.hex }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Sizes */}
                <div className="px-[16px] space-y-[6px]">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#0b0c10]">
                      サイズ: <span className="font-mono text-[#002554] font-normal">{activeSize.label}</span>
                    </span>
                    <span className="text-[#002554] font-bold underline flex items-center gap-[2px]">
                      <Ruler size={11} />
                      サイズ表
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px] flex-wrap">
                    {pdpProduct.sizes.map((sz) => (
                      <button
                        key={sz.id}
                        disabled={sz.isSoldOut}
                        onClick={() => setSelectedSizeId(sz.id)}
                        className={`min-w-[40px] h-[34px] px-[8px] rounded-[2px] font-mono text-[11px] font-bold uppercase transition-all ${
                          selectedSizeId === sz.id
                            ? 'bg-[#002554] text-white shadow-xs'
                            : sz.isSoldOut
                            ? 'bg-neutral-100 text-neutral-300 opacity-40 border border-dashed border-neutral-200'
                            : 'bg-white text-[#0b0c10] border border-neutral-300'
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Mobile 3D Try-On Trigger */}
                <div className="px-[16px]">
                  <div className="p-[12px] bg-[#002554] text-white rounded-none flex items-center justify-between border-l-4 border-[#8ab4f8]">
                    <div>
                      <span className="text-[9px] font-mono text-[#c2e7ff] uppercase block">AI 3D Fitting</span>
                      <p className="text-[12px] font-bold">あなたの体型でバーチャル試着</p>
                    </div>
                    <button
                      onClick={() => alert('3D Try-On Modal Triggered')}
                      className="h-[30px] px-[10px] bg-white text-[#002554] text-[10px] font-bold uppercase tracking-wider rounded-none flex items-center gap-[4px]"
                    >
                      <Camera size={12} />
                      <span>起動</span>
                    </button>
                  </div>
                </div>

                {/* 6. Accordions (Material & Care) */}
                <div className="px-[16px] pt-[8px] border-t border-[#f0f0f0]">
                  <div className="border-b border-[#f0f0f0]">
                    <button
                      onClick={() => toggleAccordion('mobile-spec')}
                      className="w-full py-[10px] flex items-center justify-between text-left text-[12px] font-bold text-[#0b0c10]"
                    >
                      <span>素材・サステナビリティ (Washwell™)</span>
                      {openAccordion === 'mobile-spec' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {openAccordion === 'mobile-spec' && (
                      <div className="pb-[10px] text-[11px] text-[#5f6368] space-y-[4px]">
                        <p>• 綿 77% / ポリエステル 23%（裏起毛）</p>
                        <p>• 洗濯機洗い可</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* ---------------------------------------------------------
                 Mobile Sticky Bottom Action Bar (Fixed to Mobile Frame)
                 --------------------------------------------------------- */}
              <div className="absolute bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#e5e5e5] px-[14px] py-[10px] flex items-center justify-between gap-[10px] shadow-lg">
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-mono text-[#5f6368] leading-none">サイズ: {activeSize.label}</span>
                  <span className="text-[17px] font-black font-mono text-[#dc3545] leading-tight mt-[1px]">¥6,290</span>
                </div>

                <button
                  onClick={() => {
                    setIsAddedToBag(true);
                    setTimeout(() => setIsAddedToBag(false), 2000);
                  }}
                  className="flex-1 h-[44px] bg-[#002554] hover:bg-[#001f42] text-white text-[12px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[6px] transition-all shadow active:scale-95 cursor-pointer"
                >
                  {isAddedToBag ? <Check size={14} className="text-emerald-400" /> : <ShoppingBag size={14} />}
                  <span>{isAddedToBag ? '追加完了！' : 'カートに入れる'}</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* =========================================================
         4. SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              PDP Organisms Specification Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Responsive layout transformations across desktop, tablet, and mobile viewports.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            Organisms Standard
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-[#8ab4f8] uppercase font-bold block">1. Desktop (7:5 Split)</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Sticky Buy-Box Architecture</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Desktop right rail uses <code className="text-[#8ab4f8]">sticky top-[72px]</code> so the purchase CTA and price remain visible as users scroll long image galleries.
            </p>
          </div>

          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-emerald-500 uppercase font-bold block">2. Mobile (1-Col Sequence)</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Swipe Frame & Fixed Bottom Bar</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Mobile collapses into a single-column thumb-friendly flow. Features a swipe gallery with index badge and a fixed bottom buy-bar.
            </p>
          </div>

          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-amber-500 uppercase font-bold block">3. Statutory & Fit Accuracy</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Information Hierarchy</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Mandatory disclosure of tax-inclusive pricing, Washwell™ sustainability notes, and return policies within dedicated disclosure widgets.
            </p>
          </div>
        </div>
      </section>

      {/* Code Inspection & Copy Box */}
      <div className="p-[20px] rounded-[16px] bg-dls-surface border border-dls-line-subtle space-y-[12px]">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
            JSX Code Specimen ({viewport.toUpperCase()} Mode):
          </span>
          <button
            onClick={() => copyText(getRenderedCodeSnippet(), 'active-pdp-snippet')}
            className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
          >
            {copiedId === 'active-pdp-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
            <span>{copiedId === 'active-pdp-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
          </button>
        </div>

        <pre className="p-[16px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-dls-txt-secondary overflow-x-auto leading-relaxed max-h-[240px] whitespace-pre-wrap break-all">
          <code>{getRenderedCodeSnippet()}</code>
        </pre>
      </div>

      {/* =========================================================
         5. CROSS-NAVIGATION: MOVE TO DATA & ENTERPRISE AI
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>UI COMPONENTS ARCHITECTURE COMPLETE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Phase 4: Data & Enterprise AI Integration
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With Design Tokens (10 domains) and UI Components (Atoms, Molecules, Organisms) fully realized, explore the <strong className="text-dls-txt-primary">JSON Data Contracts</strong> and <strong className="text-dls-txt-primary">AI Prompts (Claude / GPT)</strong> governing automated code delivery.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('contracts')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Data Contracts</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}