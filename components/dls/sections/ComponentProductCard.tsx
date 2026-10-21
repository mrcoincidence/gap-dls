// components/dls/sections/ComponentProductCard.tsx
'use client';

import { useState } from 'react';
import {
  CreditCard,
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
  Monitor,
  Tablet,
  Smartphone,
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  Square,
  Flame,
  Leaf,
  Layers,
  Code2,
  Image as ImageIcon
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentProductCardProps {
  viewportMode?: 'desktop' | 'mobile';
  cardTheme?: 'dark' | 'light';
  setCardTheme?: (theme: 'dark' | 'light') => void;
  isAvailable?: boolean;
  setIsAvailable?: (avail: boolean) => void;
  setActiveSection?: (sec: NavigationSection) => void;
}

type ViewportType = 'desktop' | 'tablet' | 'mobile';
type GridColType = 4 | 3 | 2 | 1;

interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge: { text: string; tone: 'red' | 'navy' | 'black' | 'green' };
  originalPrice: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  colors: { id: string; name: string; hex: string; isSoldOut?: boolean }[];
  sizes: string[];
  imagePrimary: string;
  imageSecondary: string;
  isWishlisted?: boolean;
}

// 実際の画像ファイル名（/public/images/products/...）に切り替え
const mockProducts: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'GAP 1969 Heavyweight Fleece Hoodie',
    category: 'Men / Sweatshirts',
    badge: { text: 'SALE -30%', tone: 'red' },
    originalPrice: 8990,
    salePrice: 6290,
    rating: 4.8,
    reviewCount: 142,
    colors: [
      { id: 'c1', name: 'GAP Navy', hex: '#002554' },
      { id: 'c2', name: 'Heather Gray', hex: '#9aa0a6' },
      { id: 'c3', name: 'Optic White', hex: '#ffffff' },
      { id: 'c4', name: 'True Black', hex: '#0b0c10' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    imagePrimary: '/images/products/product-01-primary.jpg',
    imageSecondary: '/images/products/product-01-secondary.jpg',
    isWishlisted: true,
  },
  {
    id: 'prod-2',
    name: 'Washwell™ 90s Loose Denim Pants',
    category: 'Men / Denim',
    badge: { text: 'ONLINE EXCLUSIVE', tone: 'black' },
    originalPrice: 9990,
    rating: 4.6,
    reviewCount: 88,
    colors: [
      { id: 'c5', name: 'Vintage Light Wash', hex: '#7a9ec2' },
      { id: 'c6', name: 'Medium Indigo', hex: '#2f4f7f' },
      { id: 'c7', name: 'Washed Black', hex: '#2b2b2b', isSoldOut: true },
    ],
    sizes: ['28/30', '30/30', '32/30', '34/32'],
    imagePrimary: '/images/products/product-02-primary.jpg',
    imageSecondary: '/images/products/product-02-secondary.jpg',
  },
  {
    id: 'prod-3',
    name: '100% Organic Heavyweight Crewneck T-Shirt',
    category: 'Unisex / T-Shirts',
    badge: { text: 'NEW', tone: 'navy' },
    originalPrice: 4990,
    rating: 4.9,
    reviewCount: 310,
    colors: [
      { id: 'c8', name: 'Optic White', hex: '#ffffff' },
      { id: 'c9', name: 'GAP Navy', hex: '#002554' },
      { id: 'c10', name: 'Dark Military Olive', hex: '#3d4436' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imagePrimary: '/images/products/product-03-primary.jpg',
    imageSecondary: '/images/products/product-03-secondary.jpg',
  },
  {
    id: 'prod-4',
    name: 'CashSoft Cable-Knit Crew Sweater',
    category: 'Women / Knitwear',
    badge: { text: 'SUSTAINABLE', tone: 'green' },
    originalPrice: 7990,
    salePrice: 5990,
    rating: 4.7,
    reviewCount: 64,
    colors: [
      { id: 'c11', name: 'Oatmeal Heather', hex: '#d6cfc7' },
      { id: 'c12', name: 'Dusty Rose', hex: '#b5838d' },
      { id: 'c13', name: 'GAP Navy', hex: '#002554' },
    ],
    sizes: ['S', 'M', 'L'],
    imagePrimary: '/images/products/product-04-primary.jpg',
    imageSecondary: '/images/products/product-04-secondary.jpg',
  },
];

export default function ComponentProductCard({ setActiveSection }: ComponentProductCardProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ビューポートとグリッド列数のステート
  const [viewport, setViewport] = useState<ViewportType>('desktop');
  const [gridCols, setGridCols] = useState<GridColType>(4);

  // ホバー中画像切り替え管理
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // カード内インタラクション用ステート
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'prod-1': 'c1',
    'prod-2': 'c5',
    'prod-3': 'c8',
    'prod-4': 'c11',
  });
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({
    'prod-1': true,
  });

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectColor = (prodId: string, colorId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors((prev) => ({ ...prev, [prodId]: colorId }));
  };

  // ビューポート切り替え時の連動
  const handleViewportChange = (vp: ViewportType) => {
    setViewport(vp);
    if (vp === 'desktop') setGridCols(4);
    if (vp === 'tablet') setGridCols(3);
    if (vp === 'mobile') setGridCols(2);
  };

  const getViewportContainerWidth = () => {
    if (viewport === 'mobile') return 'max-w-[420px]';
    if (viewport === 'tablet') return 'max-w-[820px]';
    return 'w-full';
  };

  const getGridClasses = () => {
    if (gridCols === 4) return 'grid grid-cols-4 gap-[20px]';
    if (gridCols === 3) return 'grid grid-cols-3 gap-[16px]';
    if (gridCols === 2) return 'grid grid-cols-2 gap-[12px]';
    return 'grid grid-cols-1 gap-[24px]';
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
              onClick={() => setActiveSection && setActiveSection('overview')}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>UI Components</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              MOLECULES · CORE MERCHANDISING
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Product Cards
          </h1>

          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            The flagship merchandising module of the GAP Japan design system. 
            Cards strictly maintain a solid pure-white canvas (<code className="text-[#8ab4f8]">bg-white</code>) across both light and dark themes to preserve color fidelity and retail brand authority.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-white border border-neutral-400" />
              Locked Pure White Base (<code className="text-dls-txt-primary">bg-white</code>)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#002554]" />
              Locked 3:4 Aspect Ratio Canvas
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#dc3545]" />
              Hover Quick-Add & Swatch Sync
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-emerald-500" />
              Responsive 4 / 3 / 2 / 1-Column Layouts
            </span>
          </div>
        </div>

        {/* Right Preview Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              White Card Doctrine
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Pure White
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[8px] w-full">
            {/* 常に白背景のミニカード */}
            <div className="w-[180px] rounded-[4px] bg-white border border-[#e5e5e5] p-[8px] shadow-xl space-y-[6px]">
              <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden flex items-center justify-center">
                <span className="absolute top-[6px] left-[6px] px-[5px] py-[1px] bg-[#dc3545] text-white text-[8px] font-mono font-bold">
                  SALE
                </span>
                <span className="text-[10px] font-mono text-neutral-400">3:4 RATIO</span>
              </div>
              <div className="space-y-[3px]">
                <div className="h-[4px] bg-neutral-300 rounded-full w-3/4" />
                <div className="flex items-baseline gap-[4px]">
                  <span className="text-[12px] font-bold font-mono text-[#dc3545]">¥6,290</span>
                  <span className="text-[9px] font-mono text-neutral-500">(税込)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Background Rule</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">100% White Surface</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">GAP Retail Spec</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. VIEWPORT & GRID COLUMN CONTROLLER BAR
         ========================================================= */}
      <section className="space-y-[16px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] p-[16px] rounded-[16px] bg-dls-surface border border-dls-line-subtle shadow-sm">
          {/* Viewport Switcher */}
          <div className="flex items-center gap-[12px]">
            <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider hidden sm:inline-block">
              Viewport:
            </span>
            <div className="flex bg-dls-canvas p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
              <button
                onClick={() => handleViewportChange('desktop')}
                className={`px-[12px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'desktop'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Monitor size={14} />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => handleViewportChange('tablet')}
                className={`px-[12px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'tablet'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Tablet size={14} />
                <span>Tablet</span>
              </button>

              <button
                onClick={() => handleViewportChange('mobile')}
                className={`px-[12px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                  viewport === 'mobile'
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Grid Columns Switcher */}
          <div className="flex items-center gap-[12px]">
            <span className="text-[11px] font-mono text-dls-txt-annotation uppercase tracking-wider">
              Columns:
            </span>

            <div className="flex bg-dls-canvas p-[3px] rounded-[10px] border border-dls-line-subtle gap-[2px]">
              <button
                disabled={viewport !== 'desktop'}
                onClick={() => setGridCols(4)}
                className={`px-[10px] py-[6px] rounded-[8px] text-[12px] font-bold transition-all flex items-center gap-[4px] cursor-pointer ${
                  gridCols === 4
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary disabled:opacity-30 disabled:cursor-not-allowed'
                }`}
              >
                <LayoutGrid size={13} />
                <span>4</span>
              </button>

              <button
                disabled={viewport === 'mobile'}
                onClick={() => setGridCols(3)}
                className={`px-[10px] py-[6px] rounded-[8px] text-[12px] font-bold transition-all flex items-center gap-[4px] cursor-pointer ${
                  gridCols === 3
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary disabled:opacity-30 disabled:cursor-not-allowed'
                }`}
              >
                <Grid3X3 size={13} />
                <span>3</span>
              </button>

              <button
                onClick={() => setGridCols(2)}
                className={`px-[10px] py-[6px] rounded-[8px] text-[12px] font-bold transition-all flex items-center gap-[4px] cursor-pointer ${
                  gridCols === 2
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Grid2X2 size={13} />
                <span>2</span>
              </button>

              <button
                onClick={() => setGridCols(1)}
                className={`px-[10px] py-[6px] rounded-[8px] text-[12px] font-bold transition-all flex items-center gap-[4px] cursor-pointer ${
                  gridCols === 1
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                <Square size={13} />
                <span>1</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[12px] font-mono text-dls-txt-annotation px-[4px]">
          <span>
            Simulated Frame: <strong className="text-dls-txt-primary capitalize">{viewport}</strong> ({gridCols} Columns)
          </span>
          <span>
            {viewport === 'desktop' ? '1280px Responsive' : viewport === 'tablet' ? '768px iPad Vertical' : '390px iPhone Portrait'}
          </span>
        </div>
      </section>

      {/* =========================================================
         3. PRODUCT CARD GRID CANVAS VIEWPORT
         ========================================================= */}
      <section className="flex justify-center bg-dls-canvas/50 p-[12px] lg:p-[24px] rounded-[24px] border border-dashed border-dls-line-subtle overflow-hidden">
        <div className={`transition-all duration-300 mx-auto ${getViewportContainerWidth()}`}>
          
          {/* Mobile Grid Toggle Header */}
          {viewport === 'mobile' && (
            <div className="flex items-center justify-between py-[8px] mb-[12px] border-b border-dls-line-subtle">
              <span className="text-[12px] font-mono text-dls-txt-muted">
                Showing 4 items
              </span>
              <div className="flex items-center gap-[4px]">
                <button
                  onClick={() => setGridCols(2)}
                  className={`p-[6px] rounded-[4px] transition-colors cursor-pointer ${
                    gridCols === 2 ? 'bg-[#002554] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                  }`}
                  title="2列グリッド"
                >
                  <Grid2X2 size={16} />
                </button>
                <button
                  onClick={() => setGridCols(1)}
                  className={`p-[6px] rounded-[4px] transition-colors cursor-pointer ${
                    gridCols === 1 ? 'bg-[#002554] text-white' : 'text-dls-txt-muted hover:text-dls-txt-primary'
                  }`}
                  title="1列大判グリッド"
                >
                  <Square size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className={getGridClasses()}>
            {mockProducts.map((product) => {
              const activeColorId = selectedColors[product.id] || product.colors[0].id;
              const isFav = wishlist[product.id];
              const isOneColMobile = gridCols === 1;
              const isHovered = hoveredCardId === product.id;

              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredCardId(product.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  /* ★カード本体はDark/Light問わず常時純白（bg-white）固定。境界線とシャドウで立体感を担保 */
                  className="group relative flex flex-col bg-white border border-[#e5e5e5] rounded-[2px] shadow-sm hover:shadow-md transition-all duration-200 select-none overflow-hidden"
                >
                  {/* --- 1. Top Media Container (Locked 3:4 Aspect Ratio) --- */}
                  <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden">
                    {/* Background Product Image with Local Fallback */}
                    <img
                      src={isHovered ? product.imageSecondary : product.imagePrimary}
                      alt={product.name}
                      onError={(e) => {
                        // ローカル画像が未配置時のフォールバック処理
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.img-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Placeholder Fallback (画像ファイル配置前でも壊れない安全ガード) */}
                    <div className="img-fallback hidden absolute inset-0 bg-[#f0f2f5] flex flex-col items-center justify-center text-center p-[16px] text-neutral-400 space-y-[4px]">
                      <ImageIcon size={32} className="text-neutral-300" />
                      <span className="text-[11px] font-mono font-bold text-neutral-500">
                        {product.id}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400">
                        3:4 Ratio Image Placeholder
                      </span>
                    </div>

                    {/* Top-Left Anchor: Promotional Badge */}
                    <div className="absolute top-[8px] left-[8px] z-10">
                      <span
                        className={`inline-flex items-center h-[22px] px-[8px] text-[10px] font-mono font-bold tracking-widest uppercase rounded-none shadow-sm ${
                          product.badge.tone === 'red'
                            ? 'bg-[#dc3545] text-white'
                            : product.badge.tone === 'navy'
                            ? 'bg-[#002554] text-white'
                            : product.badge.tone === 'green'
                            ? 'bg-[#10b981] text-white'
                            : 'bg-[#0b0c10] text-white'
                        }`}
                      >
                        {product.badge.text}
                      </span>
                    </div>

                    {/* Top-Right Anchor: Wishlist Heart Trigger */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="absolute top-[8px] right-[8px] z-10 w-[32px] h-[32px] rounded-full bg-white/90 hover:bg-white text-neutral-700 flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer border border-black/5"
                      title="お気に入りに追加"
                    >
                      <Heart
                        size={15}
                        className={isFav ? 'text-[#dc3545] fill-[#dc3545]' : 'text-neutral-700'}
                      />
                    </button>

                    {/* Desktop Hover Quick-Add Overlay Button */}
                    <div className="absolute bottom-[8px] inset-x-[8px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
                      <button className="w-full h-[40px] bg-[#002554] hover:bg-[#001f42] text-white text-[12px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[6px] shadow-lg cursor-pointer">
                        <ShoppingBag size={14} />
                        <span>QUICK ADD</span>
                      </button>
                    </div>
                  </div>

                  {/* --- 2. Information & Commercial Stack (白背景専用の濃色テキスト) --- */}
                  <div className="p-[12px] lg:p-[14px] flex flex-col flex-1 justify-between space-y-[10px] bg-white">
                    <div className="space-y-[4px]">
                      {/* Category Breadcrumb */}
                      <span className="text-[10px] font-mono text-[#5f6368] uppercase tracking-wider block truncate">
                        {product.category}
                      </span>

                      {/* Product Title (常にダークカラー) */}
                      <h3
                        className={`font-bold text-[#0b0c10] hover:text-[#002554] transition-colors cursor-pointer leading-snug line-clamp-2 ${
                          isOneColMobile ? 'text-[16px]' : 'text-[13px]'
                        }`}
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* Price Presentation (総額表示準拠) */}
                    <div>
                      <div className="flex items-baseline gap-[6px] flex-wrap">
                        {product.salePrice ? (
                          <>
                            <span
                              className={`font-black font-mono tracking-tight leading-none text-[#dc3545] ${
                                isOneColMobile ? 'text-[22px]' : 'text-[18px]'
                              }`}
                            >
                              ¥{product.salePrice.toLocaleString()}
                            </span>
                            <span className="text-[12px] font-mono text-[#80868b] line-through">
                              ¥{product.originalPrice.toLocaleString()}
                            </span>
                          </>
                        ) : (
                          <span
                            className={`font-black font-mono tracking-tight leading-none text-[#0b0c10] ${
                              isOneColMobile ? 'text-[22px]' : 'text-[18px]'
                            }`}
                          >
                            ¥{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-[#5f6368]">
                          (税込)
                        </span>
                      </div>
                    </div>

                    {/* Color Swatch Picker Row */}
                    <div className="pt-[4px] border-t border-[#f0f0f0] flex items-center justify-between">
                      <div className="flex items-center gap-[6px] pt-[4px]">
                        {product.colors.map((c) => {
                          const isSelected = c.id === activeColorId;
                          return (
                            <button
                              key={c.id}
                              onClick={(e) => selectColor(product.id, c.id, e)}
                              className={`relative w-[20px] h-[20px] rounded-[2px] transition-all p-[1px] cursor-pointer ${
                                isSelected
                                  ? 'ring-2 ring-[#002554] ring-offset-1 ring-offset-white'
                                  : 'hover:scale-110 opacity-90'
                              }`}
                              title={c.name}
                            >
                              <span
                                className="block w-full h-full rounded-[1px] border border-black/15 relative overflow-hidden"
                                style={{ backgroundColor: c.hex }}
                              >
                                {c.isSoldOut && (
                                  <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#dc3545_calc(50%-1px),#dc3545_calc(50%+1px),transparent_calc(50%+1px))]" />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <span className="text-[10px] font-mono text-[#5f6368] pt-[4px]">
                        {product.colors.length} Colors
                      </span>
                    </div>

                    {/* Rating Line (1列表示時のみレビューも手厚く表示) */}
                    {isOneColMobile && (
                      <div className="flex items-center gap-[6px] pt-[4px] border-t border-[#f0f0f0]">
                        <div className="flex items-center gap-[1px]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#0b0c10]">{product.rating}</span>
                        <span className="text-[11px] font-mono text-[#002554] underline">({product.reviewCount})</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
         4. SPECIFICATION MATRIX & ATOMIC BREAKDOWN
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Product Card Atomic Composition Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              How foundation tokens and atomic primitives assemble into the core merchandise tile.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            Molecules Tier
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-emerald-500 uppercase font-bold block">1. Solid White Base</span>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Always renders on <code className="text-dls-txt-primary">bg-white</code> with dark-charcoal typography. Protects product fabric color integrity against external ambient dark themes.
            </p>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-[#8ab4f8] uppercase font-bold block">2. 3:4 Media Lock</span>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Enforces <code className="text-[#8ab4f8]">aspect-[3/4]</code> on all product imagery. Eliminates CLS (Cumulative Layout Shift) across variable network load speeds.
            </p>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-[#dc3545] uppercase font-bold block">3. Statutory Pricing</span>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              総額表示義務 compliance. Markdown sales render red current price with gray struck-through original price and explicit tax notations.
            </p>
          </div>

          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-amber-500 uppercase font-bold block">4. Responsive Columns</span>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Deterministic 4-col (Desktop), 3-col (Tablet), 2-col (Mobile standard), and 1-col (Mobile high-impact editorial lookbook).
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>MOLECULES TIER · APPAREL UTILITIES</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Interactive Apparel Utilities (Virtual Try-On Trigger)
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Observe how specialized apparel features like <strong className="text-dls-txt-primary">Virtual Try-On 3D Triggers</strong>, sticky PDP bottom-action bars, and size finder modals attach to the merchandising flow.
            </p>
          </div>

          <button
            onClick={() => setActiveSection && setActiveSection('tryon')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Apparel Utilities</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}