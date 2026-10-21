// components/dls/Sidebar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import {
  PanelLeftClose,
  PanelLeft,
  Home,
  Compass,
  Layers,
  Palette,
  Type,
  Maximize2,
  Box,
  CreditCard,
  Sparkles,
  Bot,
  FileCode,
  Search,
  Settings,
  Cpu,
  Moon,
  Sun,
  AppWindow,
  ChevronDown,
  ChevronRight,
  Braces,
  Smartphone,
  Crop,
  BringToFront,
  Activity,
  Contrast,
  Tag,
  CheckSquare,
  Coins,
  Package
} from 'lucide-react';

export type NavigationSection =
  | 'home'
  | 'get-started'
  | 'overview' // 互換性維持
  // --- 1. Design Tokens ---
  | 'tokens'
  | 'tokens-color'
  | 'tokens-typography'
  | 'tokens-spacing'
  | 'tokens-layout'
  | 'tokens-aspect-ratio'
  | 'tokens-radius'
  | 'tokens-z-index'
  | 'tokens-motion'
  | 'tokens-opacity'
  | 'tokens-breakpoints'
  | 'tokens-export'
  // --- 2. UI Components (A. Atoms) ---
  | 'buttons'
  | 'ui-badges'
  | 'ui-selectors'
  | 'ui-commercial'
  // --- 2. UI Components (B. Molecules) ---
  | 'cards'
  | 'tryon'
  // --- 2. UI Components (C. Organisms) ---
  | 'ui-pdp-modules'
  // --- 3. Data & Enterprise AI ---
  | 'contracts'
  | 'prompts';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeSection: NavigationSection;
  setActiveSection: (sec: NavigationSection) => void;
  cardTheme: 'dark' | 'light';
  setCardTheme: (theme: 'dark' | 'light') => void;
}

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  activeSection,
  setActiveSection,
  cardTheme,
  setCardTheme,
}: SidebarProps) {
  const [isTokensMenuOpen, setIsTokensMenuOpen] = useState(true);
  const [isUiMenuOpen, setIsUiMenuOpen] = useState(true);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target as Node)) {
        setIsSettingsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isUiActive =
    activeSection === 'cards' ||
    activeSection === 'buttons' ||
    activeSection === 'tryon' ||
    activeSection.startsWith('ui-');

  return (
    <aside
      className={`h-full bg-dls-surface border-r border-dls-line-subtle transition-all duration-300 ease-in-out flex flex-col flex-shrink-0 z-30 select-none relative ${
        isSidebarOpen ? 'w-[260px]' : 'w-[64px]'
      }`}
    >
      {/* Sidebar Top: Logo & Toggle */}
      <div className="h-[52px] px-[14px] flex items-center justify-between">
        {isSidebarOpen ? (
          <>
            <div className="flex items-center pl-[2px]">
              <img
                src="/images/logo/logo-gap.svg"
                alt="GAP"
                className={`h-[20px] w-auto object-contain transition-all ${
                  cardTheme === 'dark' ? 'brightness-0 invert' : 'brightness-0'
                }`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span className="logo-fallback hidden font-black tracking-widest text-dls-txt-primary text-[16px]">
                GAP
              </span>
            </div>

            <div className="flex items-center gap-[4px]">
              <button
                className="p-[6px] rounded-full hover:bg-dls-surface-elevated text-dls-txt-muted hover:text-dls-txt-primary transition-colors cursor-pointer"
                title="Search Tokens & Components"
              >
                <Search size={17} />
              </button>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-[6px] rounded-full hover:bg-dls-surface-elevated text-dls-txt-muted hover:text-dls-txt-primary transition-colors cursor-pointer"
                title="Collapse Sidebar"
              >
                <PanelLeftClose size={17} />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="group relative w-[36px] h-[36px] rounded-full hover:bg-dls-surface-elevated flex items-center justify-center transition-colors cursor-pointer"
              title="Expand Sidebar"
            >
              <div className="group-hover:opacity-0 transition-opacity duration-150 flex items-center justify-center">
                <img
                  src="/images/logo/logo-gap.svg"
                  alt="GAP"
                  className={`h-[16px] w-auto object-contain transition-all ${
                    cardTheme === 'dark' ? 'brightness-0 invert' : 'brightness-0'
                  }`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-sm');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="logo-fallback-sm hidden font-black text-dls-txt-primary text-[13px]">
                  G
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-dls-txt-primary">
                <PanelLeft size={18} />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-[8px] py-[8px] space-y-[2px] no-scrollbar">
        {/* 1. Home */}
        <button
          onClick={() => setActiveSection('home')}
          className={`w-full flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
            activeSection === 'home' || activeSection === 'overview'
              ? 'bg-[#004a77] text-white font-bold shadow-xs'
              : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
          }`}
        >
          <Home size={17} className="flex-shrink-0" />
          {isSidebarOpen && <span className="truncate">Home</span>}
        </button>

        {/* 2. Get Started (Onboarding) */}
        <button
          onClick={() => setActiveSection('get-started')}
          className={`w-full flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
            activeSection === 'get-started'
              ? 'bg-[#004a77] text-white font-bold shadow-xs'
              : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
          }`}
        >
          <Compass size={17} className="flex-shrink-0 text-[#8ab4f8]" />
          {isSidebarOpen && <span className="truncate">Get Started</span>}
        </button>

        {/* =================================================================
           1. DESIGN TOKENS GROUP
           ================================================================= */}
        <div className="pt-[10px]">
          {isSidebarOpen && (
            <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation mb-[2px]">
              Design Tokens
            </p>
          )}

          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveSection('tokens')}
              className={`flex-1 flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                activeSection === 'tokens'
                  ? 'bg-[#004a77] text-white font-bold shadow-xs'
                  : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
              }`}
            >
              <Palette size={17} className="flex-shrink-0" />
              {isSidebarOpen && <span className="truncate">Design Tokens</span>}
            </button>

            {isSidebarOpen && (
              <button
                onClick={() => setIsTokensMenuOpen(!isTokensMenuOpen)}
                className="p-[6px] text-dls-txt-annotation hover:text-dls-txt-primary rounded-full hover:bg-dls-surface-elevated transition-colors cursor-pointer"
                title={isTokensMenuOpen ? 'Collapse Submenu' : 'Expand Submenu'}
              >
                {isTokensMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            )}
          </div>

          {/* Submenu Accordion */}
          {isSidebarOpen && isTokensMenuOpen && (
            <div className="pl-[26px] pr-[4px] py-[4px] space-y-[2px] border-l border-dls-line-subtle ml-[18px] my-[2px]">
              <div className="pt-[2px] pb-[2px]">
                <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation">
                  Design
                </p>
              </div>

              <button
                onClick={() => setActiveSection('tokens-aspect-ratio')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-aspect-ratio'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Crop size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Aspect Ratio</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-radius')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-radius'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Box size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Border Radius</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-breakpoints')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-breakpoints'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Smartphone size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Breakpoints (SFCC)</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-color')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-color'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#002554] border border-white/40" />
                </span>
                <span className="truncate">Color System</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-layout')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-layout'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Layers size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Layout System</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-motion')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-motion'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Activity size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Motion & Curves</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-opacity')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-opacity'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Contrast size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Opacity System</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-spacing')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-spacing'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Maximize2 size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Spacing System</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-typography')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-typography'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Type size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Typography Scale</span>
              </button>

              <button
                onClick={() => setActiveSection('tokens-z-index')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-z-index'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <BringToFront size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Z-Index Layers</span>
              </button>

              <div className="pt-[10px] pb-[2px]">
                <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation">
                  Tokens For Developers
                </p>
              </div>

              <button
                onClick={() => setActiveSection('tokens-export')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tokens-export'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Braces size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Raw JSON Export</span>
              </button>
            </div>
          )}
        </div>

        {/* =================================================================
           2. UI COMPONENTS GROUP
           ================================================================= */}
        <div className="pt-[10px]">
          {isSidebarOpen && (
            <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation mb-[2px]">
              UI Components
            </p>
          )}

          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveSection('cards')}
              className={`flex-1 flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                isUiActive
                  ? 'bg-[#004a77] text-white font-bold shadow-xs'
                  : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
              }`}
            >
              <Box size={17} className="flex-shrink-0" />
              {isSidebarOpen && <span className="truncate">UI Components</span>}
            </button>

            {isSidebarOpen && (
              <button
                onClick={() => setIsUiMenuOpen(!isUiMenuOpen)}
                className="p-[6px] text-dls-txt-annotation hover:text-dls-txt-primary rounded-full hover:bg-dls-surface-elevated transition-colors cursor-pointer"
                title={isUiMenuOpen ? 'Collapse Submenu' : 'Expand Submenu'}
              >
                {isUiMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            )}
          </div>

          {isSidebarOpen && isUiMenuOpen && (
            <div className="pl-[26px] pr-[4px] py-[4px] space-y-[2px] border-l border-dls-line-subtle ml-[18px] my-[2px]">
              <div className="pt-[2px] pb-[2px]">
                <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation">
                  A. Atoms & Primitives
                </p>
              </div>

              <button
                onClick={() => setActiveSection('buttons')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'buttons'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Box size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Buttons & CTAs</span>
              </button>

              <button
                onClick={() => setActiveSection('ui-badges')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'ui-badges'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Tag size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Badges & Chips</span>
              </button>

              <button
                onClick={() => setActiveSection('ui-selectors')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'ui-selectors'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <CheckSquare size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Apparel Selectors</span>
              </button>

              <button
                onClick={() => setActiveSection('ui-commercial')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'ui-commercial'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Coins size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Commercial Elements</span>
              </button>

              <div className="pt-[10px] pb-[2px]">
                <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation">
                  B. Molecules & Patterns
                </p>
              </div>

              <button
                onClick={() => setActiveSection('cards')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'cards'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <CreditCard size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">Product Cards</span>
              </button>

              <button
                onClick={() => setActiveSection('tryon')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'tryon'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={13} className="text-amber-500" />
                </span>
                <span className="truncate">Apparel Utilities</span>
              </button>

              <div className="pt-[10px] pb-[2px]">
                <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation">
                  C. Organisms & Modules
                </p>
              </div>

              <button
                onClick={() => setActiveSection('ui-pdp-modules')}
                className={`w-full flex items-center gap-[8px] px-[10px] py-[5px] rounded-md text-[12px] transition-all cursor-pointer ${
                  activeSection === 'ui-pdp-modules'
                    ? 'bg-dls-surface-elevated text-[#8ab4f8] font-bold'
                    : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
                }`}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                  <Package size={13} className="text-dls-txt-annotation" />
                </span>
                <span className="truncate">PDP Detail Modules</span>
              </button>
            </div>
          )}
        </div>

        {/* =================================================================
           3. DATA & ENTERPRISE AI GROUP
           ================================================================= */}
        <div className="pt-[10px]">
          {isSidebarOpen && (
            <p className="px-[10px] text-[10px] font-bold uppercase tracking-wider text-dls-txt-annotation mb-[2px]">
              Data & Enterprise AI
            </p>
          )}
          <button
            onClick={() => setActiveSection('contracts')}
            className={`w-full flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
              activeSection === 'contracts'
                ? 'bg-[#004a77] text-white font-bold shadow-xs'
                : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
            }`}
          >
            <FileCode size={17} className="flex-shrink-0" />
            {isSidebarOpen && <span className="truncate">JSON Data Contracts</span>}
          </button>
          <button
            onClick={() => setActiveSection('prompts')}
            className={`w-full flex items-center gap-[10px] px-[10px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer ${
              activeSection === 'prompts'
                ? 'bg-[#004a77] text-white font-bold shadow-xs'
                : 'text-dls-txt-secondary hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
            }`}
          >
            <Bot size={17} className="flex-shrink-0 text-[#8ab4f8]" />
            {isSidebarOpen && <span className="truncate">AI Prompts (Claude/GPT)</span>}
          </button>
        </div>
      </div>

      {/* Sidebar Bottom: User & Settings */}
      <div ref={settingsMenuRef} className="p-[8px] border-t border-dls-line-subtle relative">
        {isSettingsMenuOpen && (
          <div
            className={`absolute bottom-[58px] bg-dls-surface border border-dls-line-subtle rounded-[14px] p-[6px] shadow-2xl z-50 transition-all ${
              isSidebarOpen ? 'left-[8px] w-[244px]' : 'left-[68px] w-[220px]'
            }`}
          >
            <div className="px-[12px] py-[6px] border-b border-dls-line-subtle mb-[4px]">
              <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-dls-txt-annotation">
                DLS Settings
              </p>
            </div>

            <div className="space-y-[2px]">
              <button
                onClick={() => {
                  setActiveSection('prompts');
                  setIsSettingsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] text-[12px] text-dls-txt-secondary hover:bg-dls-surface-elevated transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-[10px]">
                  <Cpu size={16} className="text-[#8ab4f8]" />
                  <span className="font-medium">Skills</span>
                </div>
                <span className="text-[10px] font-mono text-dls-txt-annotation bg-dls-canvas px-[6px] py-[1px] rounded border border-dls-line-subtle">
                  Active
                </span>
              </button>

              <button
                onClick={() => {
                  setCardTheme(cardTheme === 'dark' ? 'light' : 'dark');
                }}
                className="w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] text-[12px] text-dls-txt-secondary hover:bg-dls-surface-elevated transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-[10px]">
                  {cardTheme === 'dark' ? (
                    <Moon size={16} className="text-[#8ab4f8]" />
                  ) : (
                    <Sun size={16} className="text-amber-500" />
                  )}
                  <span className="font-medium">Theme</span>
                </div>
                <span className="text-[11px] font-bold text-dls-txt-primary bg-dls-canvas px-[8px] py-[1px] rounded border border-dls-line-subtle capitalize">
                  {cardTheme}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveSection('contracts');
                  setIsSettingsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] text-[12px] text-dls-txt-secondary hover:bg-dls-surface-elevated transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-[10px]">
                  <AppWindow size={16} className="text-emerald-500" />
                  <span className="font-medium">Connected Apps</span>
                </div>
                <span className="text-[10px] font-mono text-dls-txt-annotation bg-dls-canvas px-[6px] py-[1px] rounded border border-dls-line-subtle">
                  SFCC
                </span>
              </button>
            </div>
          </div>
        )}

        {isSidebarOpen ? (
          <div className="flex items-center justify-between p-[4px] pl-[6px] rounded-full hover:bg-dls-surface-elevated transition-colors">
            <div className="flex items-center gap-[10px] min-w-0 flex-1">
              <div className="w-[30px] h-[30px] rounded-full bg-[#002554] border border-white/20 text-white flex items-center justify-center font-bold text-[12px] flex-shrink-0">
                G
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[12px] font-bold text-dls-txt-primary truncate leading-tight">
                  GAP Designer
                </span>
                <span className="text-[10px] text-dls-txt-muted truncate leading-tight mt-[2px]">
                  tokyo-design@gap.co.jp
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
              className={`p-[7px] rounded-full transition-colors cursor-pointer mr-[2px] ${
                isSettingsMenuOpen
                  ? 'bg-dls-surface-elevated text-dls-txt-primary'
                  : 'text-dls-txt-muted hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
              }`}
              title="Settings"
            >
              <Settings size={16} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[6px] py-[2px]">
            <button
              onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isSettingsMenuOpen
                  ? 'bg-dls-surface-elevated text-dls-txt-primary'
                  : 'text-dls-txt-muted hover:bg-dls-surface-elevated hover:text-dls-txt-primary'
              }`}
              title="Settings"
            >
              <Settings size={16} />
            </button>

            <div
              className="w-[30px] h-[30px] rounded-full bg-[#002554] border border-white/20 text-white flex items-center justify-center font-bold text-[12px] cursor-pointer"
              title="GAP Designer (tokyo-design@gap.co.jp)"
            >
              G
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}