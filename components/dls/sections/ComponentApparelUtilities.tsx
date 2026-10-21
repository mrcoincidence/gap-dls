// components/dls/sections/ComponentApparelUtilities.tsx
'use client';

import { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  ShoppingBag,
  Ruler,
  Camera,
  Smartphone,
  Eye,
  Sliders,
  CheckCircle2,
  ChevronRight,
  User,
  ShieldCheck,
  RotateCcw,
  Maximize2,
  Layers,
  Heart
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ComponentApparelUtilitiesProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type UtilityTab = 'tryon-trigger' | 'sticky-bar' | 'size-finder';

export default function ComponentApparelUtilities({ setActiveSection }: ComponentApparelUtilitiesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<UtilityTab>('tryon-trigger');

  // Virtual Try-On シミュレーター用ステート
  const [tryonMode, setTryonMode] = useState<'3d' | 'ar'>('3d');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Mobile Sticky Bar シミュレーター用ステート
  const [stickySelectedSize, setStickySelectedSize] = useState<string>('M');
  const [isStickyAdded, setIsStickyAdded] = useState<boolean>(false);

  // Size Finder シミュレーター用ステート
  const [heightCm, setHeightCm] = useState<number>(174);
  const [weightKg, setWeightKg] = useState<number>(68);
  const [fitPreference, setFitPreference] = useState<'fitted' | 'regular' | 'loose'>('regular');

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 身長・体重・好みからの簡易サイズ算出ロジック
  const calculateRecommendedSize = () => {
    let base = 'M';
    if (heightCm < 165 || weightKg < 58) base = 'S';
    else if (heightCm >= 178 || weightKg >= 76) base = 'L';
    else if (heightCm >= 185 || weightKg >= 85) base = 'XL';

    if (fitPreference === 'loose') {
      if (base === 'S') return 'M';
      if (base === 'M') return 'L';
      if (base === 'L') return 'XL';
    } else if (fitPreference === 'fitted') {
      if (base === 'L') return 'M';
      if (base === 'XL') return 'L';
    }
    return base;
  };

  const recommendedSize = calculateRecommendedSize();

  // コードスニペット生成
  const getRenderedCodeSnippet = () => {
    if (activeTab === 'tryon-trigger') {
      return `// Virtual Try-On 3D / AR Trigger Card
<div className="relative rounded-none bg-[#002554] text-white p-[20px] flex items-center justify-between border-l-4 border-[#8ab4f8]">
  <div className="space-y-[4px]">
    <span className="inline-flex items-center gap-[6px] px-[8px] py-[2px] bg-white/10 text-[#c2e7ff] text-[10px] font-mono tracking-wider uppercase">
      <Sparkles size={11} className="text-[#8ab4f8]" />
      <span>AI 3D Fitting</span>
    </span>
    <h4 className="text-[15px] font-bold tracking-tight">あなたの体型でバーチャル試着</h4>
    <p className="text-[12px] text-white/70">スマホカメラやアバターでサイズ感と丈感をリアルタイム確認</p>
  </div>
  <button
    onClick={() => openTryOnModal()}
    className="h-[40px] px-[18px] bg-white text-[#002554] text-[12px] font-bold uppercase tracking-wider rounded-none hover:bg-neutral-100 flex items-center gap-[6px] transition-all flex-shrink-0"
  >
    <Camera size={14} />
    <span>3D 試着を起動</span>
  </button>
</div>`;
    }

    if (activeTab === 'sticky-bar') {
      return `// Mobile Sticky Bottom Action Bar (Fixed to Viewport Bottom)
<div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e5e5e5] px-[16px] py-[12px] pb-[calc(12px+env(safe-area-inset-bottom))] lg:hidden">
  <div className="flex items-center gap-[12px]">
    <div className="flex flex-col min-w-0">
      <span className="text-[11px] font-mono text-[#5f6368] leading-none">サイズ: ${stickySelectedSize}</span>
      <span className="text-[18px] font-black font-mono text-[#dc3545] leading-tight mt-[2px]">¥6,290</span>
    </div>
    <button
      className="flex-1 h-[48px] bg-[#002554] hover:bg-[#001f42] text-white text-[13px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[8px] transition-all shadow-md active:scale-[0.99]"
    >
      <ShoppingBag size={16} />
      <span>カートに追加</span>
    </button>
  </div>
</div>`;
    }

    return `// AI Size & Fit Recommendation Hook & Badge
const { recommendedSize, confidence } = useFitAdvisor({ height: ${heightCm}, weight: ${weightKg}, fit: '${fitPreference}' });

<div className="p-[14px] bg-[#f8f9fa] border border-[#e5e5e5] rounded-none flex items-center justify-between">
  <div className="flex items-center gap-[10px]">
    <div className="w-[36px] h-[36px] bg-[#002554] text-white flex items-center justify-center font-mono font-bold text-[14px]">
      ${recommendedSize}
    </div>
    <div>
      <p className="text-[13px] font-bold text-[#0b0c10]">あなたへのおすすめ: ${recommendedSize} サイズ</p>
      <p className="text-[11px] font-mono text-[#5f6368]">身長${heightCm}cm / 体重${weightKg}kg の体型データに基づく適合度 94%</p>
    </div>
  </div>
  <button className="text-[12px] font-bold text-[#002554] hover:underline">
    体型変更
  </button>
</div>`;
  };

  return (
    <div className="max-w-[1280px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER (20px Lead Text & 1:1 Aspect Visual)
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        {/* Left Column: Title & Lead */}
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
              MOLECULES · SPECIALIZED UTILITIES
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            Apparel Utilities
          </h1>

          {/* Hero Lead Text: 20px */}
          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            High-utility conversion modules engineered to eliminate apparel sizing anxiety and reduce returns. 
            Standardizes the Virtual Try-On 3D trigger cards, mobile sticky bottom add-to-bag action bars, and algorithmic size-recommendation panels.
          </p>

          <div className="flex flex-wrap items-center gap-[16px] text-[12px] font-mono text-dls-txt-muted">
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-[#002554]" />
              Virtual Try-On 3D Fitting Triggers
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-emerald-500" />
              Mobile Sticky Action Bar (48px Touch)
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="w-[8px] h-[8px] rounded-none bg-amber-500" />
              Algorithmic Size & Fit Advisor
            </span>
          </div>
        </div>

        {/* Right Column: 1:1 Aspect Ratio Spatial Wireframe Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Floating Pill Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Commerce Utility
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              3D & AR Ready
            </span>
          </div>

          {/* Center Graphic: 3D Wireframe Silhouette */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[8px] w-full">
            <div className="w-[200px] rounded-[8px] bg-dls-surface-container border border-dls-line-subtle p-[12px] shadow-xl space-y-[8px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#8ab4f8] font-bold flex items-center gap-[4px]">
                  <Sparkles size={11} />
                  <span>3D SPATIAL MESH</span>
                </span>
                <span className="text-[9px] font-mono text-emerald-500">FIT: 94%</span>
              </div>
              <div className="h-[70px] w-full bg-[#001f42]/40 rounded-[4px] border border-[#8ab4f8]/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#8ab4f8_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                <User size={36} className="text-[#8ab4f8] animate-pulse" />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-dls-txt-muted">
                <span>SIZE: M</span>
                <span>CHEST: 96cm</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Implementation Note */}
          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Return Mitigation</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">Zero Sizing Anxiety</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Validated Flow</span>
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
          <span className="text-[12px] font-mono text-dls-txt-muted">Utility Standards</span>
        </div>

        <p className="text-[16px] text-dls-txt-secondary leading-[1.7] max-w-[850px]">
          Engineering standards for WebXR camera feeds, safe-area inset calculations for mobile sticky bars, and data contracts for sizing models.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[6px]">
          {/* Card 1 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Smartphone size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-emerald-500">Safe Area</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Mobile Safe-Area Inset</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Sticky bottom bars must include <code className="text-[#8ab4f8]">pb-[calc(12px+env(safe-area-inset-bottom))]</code> to prevent collision with iOS home indicators.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] flex items-center gap-[4px]">
              <span>iOS & Android touch standard</span>
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <Layers size={20} className="text-[#8ab4f8]" />
                <span className="text-[12px] font-mono text-[#8ab4f8]">Z-Index 50</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Stacking Layer Z-50</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Sticky bars are bound to <code className="text-[#8ab4f8]">z-50</code> (Sticky Scaffold Token) so they float cleanly above cards but remain subordinate to full-screen modals.
              </p>
            </div>
            <button
              onClick={() => setActiveSection('tokens-z-index')}
              className="mt-[16px] text-[12px] font-bold text-[#8ab4f8] hover:underline flex items-center gap-[6px] cursor-pointer"
            >
              <span>View Z-Index Tokens</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-[16px] rounded-[14px] bg-dls-surface border border-dls-line-subtle hover:border-[#8ab4f8]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-[10px]">
                <ShieldCheck size={20} className="text-amber-500" />
                <span className="text-[12px] font-mono text-amber-500">Camera Privacy</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Client-Side AR Processing</h3>
              <p className="text-[14px] text-dls-txt-muted mt-[4px] leading-[1.6]">
                Virtual Try-On camera video frames are processed exclusively on device via WebAssembly/TensorFlow.js. No user biometric imagery is ever transmitted to servers.
              </p>
            </div>
            <span className="mt-[16px] text-[12px] font-bold text-amber-500 flex items-center gap-[4px]">
              <span>Privacy & GDPR compliance</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE UTILITIES PLAYGROUND
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Sliders size={22} className="text-[#8ab4f8]" />
              <span>Interactive Utilities Playground</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Test real-time behaviors across the 3 core merchandising utilities.
            </p>
          </div>

          {/* Utility Tab Selector */}
          <div className="flex bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            {[
              { id: 'tryon-trigger', label: '1. Virtual Try-On Card' },
              { id: 'sticky-bar', label: '2. Mobile Sticky Bar' },
              { id: 'size-finder', label: '3. Size & Fit Advisor' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as UtilityTab)}
                className={`px-[12px] py-[6px] rounded-full text-[12px] font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#004a77] text-white shadow-xs'
                    : 'text-dls-txt-muted hover:text-dls-txt-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="p-[28px] lg:p-[32px] rounded-[16px] bg-dls-surface border border-dls-line-subtle flex flex-col lg:flex-row items-stretch justify-between gap-[32px]">
          {/* Left Canvas: Live Component Render */}
          <div className="min-w-0 flex-1 flex flex-col justify-center min-h-[280px] p-[24px] bg-dls-canvas rounded-[12px] border border-dls-line-subtle relative">
            <span className="absolute top-[8px] left-[10px] text-[10px] font-mono text-dls-txt-annotation">
              PREVIEW CANVAS ({activeTab.toUpperCase()})
            </span>

            {/* --- Case 1: Virtual Try-On Trigger Card --- */}
            {activeTab === 'tryon-trigger' && (
              <div className="w-full space-y-[16px]">
                <div className="relative rounded-none bg-[#002554] text-white p-[20px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] border-l-4 border-[#8ab4f8] shadow-lg">
                  <div className="space-y-[4px]">
                    <span className="inline-flex items-center gap-[6px] px-[8px] py-[2px] bg-white/10 text-[#c2e7ff] text-[10px] font-mono tracking-wider uppercase">
                      <Sparkles size={11} className="text-[#8ab4f8]" />
                      <span>AI 3D Fitting Experience</span>
                    </span>
                    <h4 className="text-[16px] font-bold tracking-tight">あなたの体型でバーチャル試着</h4>
                    <p className="text-[12px] text-white/70 max-w-[380px] leading-relaxed">
                      モデル着用写真と体型シミュレーションで、丈感やフィット感を瞬時にプレビューできます。
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="h-[40px] px-[18px] bg-white hover:bg-neutral-100 text-[#002554] text-[12px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[6px] transition-all flex-shrink-0 cursor-pointer shadow-md active:scale-95"
                  >
                    <Camera size={14} />
                    <span>3D 試着を起動</span>
                  </button>
                </div>

                {/* Simulated Try-On Modal Trigger Notification */}
                {isModalOpen && (
                  <div className="p-[14px] rounded-[8px] bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-[12px] flex items-center justify-between animate-fade-in">
                    <span className="flex items-center gap-[6px]">
                      <CheckCircle2 size={15} className="text-emerald-400" />
                      <span>WebXR 3D 試着ビューポートが正常に呼び出されました</span>
                    </span>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-[11px] font-bold text-white hover:underline cursor-pointer"
                    >
                      閉じる
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* --- Case 2: Mobile Sticky Bottom Action Bar --- */}
            {activeTab === 'sticky-bar' && (
              <div className="w-full flex flex-col items-center">
                <span className="text-[11px] font-mono text-dls-txt-muted mb-[10px]">
                  Simulated Mobile Screen (390px Viewport):
                </span>

                {/* Mobile Viewport Simulation Shell */}
                <div className="w-full max-w-[360px] rounded-[16px] bg-white border border-[#e5e5e5] p-[16px] shadow-2xl flex flex-col justify-between space-y-[24px]">
                  {/* Mock PDP Body Content */}
                  <div className="space-y-[10px]">
                    <div className="h-[120px] rounded-[4px] bg-[#f4f4f4] flex items-center justify-center text-[11px] font-mono text-neutral-400 border border-neutral-200">
                      Product Media Gallery (3:4)
                    </div>
                    <div className="space-y-[4px]">
                      <p className="text-[14px] font-bold text-[#0b0c10]">1969 Heavyweight Fleece Hoodie</p>
                      <div className="flex gap-[6px]">
                        {['S', 'M', 'L'].map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setStickySelectedSize(sz)}
                            className={`min-w-[36px] h-[32px] px-[8px] font-mono text-[11px] font-bold rounded-[2px] transition-all cursor-pointer ${
                              stickySelectedSize === sz
                                ? 'bg-[#002554] text-white shadow-xs'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Simulated Sticky Bottom Bar Component */}
                  <div className="pt-[12px] border-t border-[#f0f0f0] flex items-center justify-between gap-[12px]">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#5f6368] leading-none">サイズ: {stickySelectedSize}</span>
                      <span className="text-[17px] font-black font-mono text-[#dc3545] leading-tight mt-[2px]">¥6,290</span>
                    </div>

                    <button
                      onClick={() => {
                        setIsStickyAdded(true);
                        setTimeout(() => setIsStickyAdded(false), 2000);
                      }}
                      className="flex-1 h-[42px] bg-[#002554] hover:bg-[#001f42] text-white text-[12px] font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-[6px] transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      {isStickyAdded ? <Check size={14} className="text-emerald-400" /> : <ShoppingBag size={14} />}
                      <span>{isStickyAdded ? '追加完了！' : 'カートに追加'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- Case 3: AI Size & Fit Recommendation Advisor --- */}
            {activeTab === 'size-finder' && (
              <div className="w-full space-y-[18px]">
                {/* Advisor Input Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] p-[14px] rounded-[8px] bg-dls-surface border border-dls-line-subtle">
                  <div>
                    <label className="text-[10px] font-mono text-dls-txt-annotation uppercase block mb-[4px]">
                      身長: {heightCm} cm
                    </label>
                    <input
                      type="range"
                      min="155"
                      max="195"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#004a77] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-dls-txt-annotation uppercase block mb-[4px]">
                      体重: {weightKg} kg
                    </label>
                    <input
                      type="range"
                      min="45"
                      max="95"
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#004a77] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-dls-txt-annotation uppercase block mb-[4px]">
                      好みのフィット感
                    </label>
                    <div className="flex gap-[4px]">
                      {(['fitted', 'regular', 'loose'] as const).map((fit) => (
                        <button
                          key={fit}
                          onClick={() => setFitPreference(fit)}
                          className={`flex-1 py-[4px] text-[10px] font-bold uppercase rounded-[4px] transition-all cursor-pointer border ${
                            fitPreference === fit
                              ? 'bg-[#004a77] text-white border-[#004a77]'
                              : 'bg-dls-canvas text-dls-txt-muted border-dls-line-subtle'
                          }`}
                        >
                          {fit}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rendered Recommendation Widget */}
                <div className="p-[16px] bg-white border border-[#e5e5e5] rounded-none flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[42px] h-[42px] bg-[#002554] text-white flex items-center justify-center font-mono font-black text-[18px] shadow-sm">
                      {recommendedSize}
                    </div>
                    <div>
                      <div className="flex items-center gap-[6px]">
                        <p className="text-[14px] font-bold text-[#0b0c10]">あなたへの推奨サイズ: {recommendedSize}</p>
                        <span className="px-[6px] py-[1px] bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold rounded">
                          適合度 94%
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[#5f6368] mt-[2px]">
                        身長{heightCm}cm · 体重{weightKg}kg · 着用感: {fitPreference.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#002554] bg-[#f0f4f9] px-[10px] py-[5px] rounded-[2px] hidden sm:inline-block">
                    ワンタップで選択
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Code Inspection */}
          <div className="min-w-0 flex-1 flex flex-col justify-between space-y-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-mono text-[#8ab4f8] font-bold">
                JSX Code Specimen:
              </span>
              <button
                onClick={() => copyText(getRenderedCodeSnippet(), 'active-util-snippet')}
                className="text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary flex items-center gap-[4px] cursor-pointer"
              >
                {copiedId === 'active-util-snippet' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedId === 'active-util-snippet' ? 'Copied Code!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-[16px] rounded-[10px] bg-dls-canvas border border-dls-line-subtle font-mono text-[12px] text-dls-txt-secondary overflow-x-auto leading-relaxed max-h-[300px] whitespace-pre-wrap break-all">
              <code>{getRenderedCodeSnippet()}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. UTILITY SPECIFICATION MATRIX
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Apparel Utilities Architecture Matrix
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Behavioral rulesets governing conversion modules across desktop and mobile viewports.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            Molecules Standard
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {/* Tile 1 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-[#8ab4f8] uppercase font-bold block">1. 3D Try-On Trigger</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">PDP & Lookbook Integration</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Placed immediately below the primary image carousel. Uses solid GAP Navy styling to distinguish interactive 3D camera flows from standard flat photography.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-emerald-500 uppercase font-bold block">2. Mobile Sticky Action Bar</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Fixed Stacking & Touch</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Activates automatically on screens &lt;1024px when the main buy-box scrolls out of view. Enforces 48px touch height and displays active SKU price and selected size.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-amber-500 uppercase font-bold block">3. Algorithmic Fit Advisor</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Fit Anxiety Elimination</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Calculates body metrics against garment tech-pack measurements. Suggests one-click size selection and reduces unnecessary multi-size purchasing returns.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: ADVANCE TO ORGANISMS (PDP MODULES)
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>MOLECULES TIER COMPLETE · ADVANCE TO ORGANISMS</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Advance to Phase 3: Product Detail Page (PDP) Modules
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With all atomic elements and merchandising molecules established, assemble the complete <strong className="text-dls-txt-primary">Product Detail Page (PDP)</strong> layout—integrating the 3:4 Media Gallery, sticky Desktop Buy-Box panel, and care specification accordions.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('ui-pdp-modules')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore PDP Modules</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}