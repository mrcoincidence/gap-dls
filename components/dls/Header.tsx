// components/dls/Header.tsx
'use client';

import { Menu } from 'lucide-react';
import { NavigationSection } from './Sidebar';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeSection: NavigationSection;
  cardTheme: 'dark' | 'light';
}

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  activeSection,
  cardTheme,
}: HeaderProps) {
  // サイドバーのメニュー表記と完全に一致させたタイトル定義
  const getHeaderTitle = () => {
    switch (activeSection) {
      // --- 0. Home & Onboarding ---
      case 'home':
      case 'overview':
        return 'GAP Design Language System — Home';
      case 'get-started':
        return 'Get Started';

      // --- 1. Design Tokens ---
      case 'tokens':
        return 'Design Tokens';
      case 'tokens-aspect-ratio':
        return 'Aspect Ratio';
      case 'tokens-radius':
        return 'Border Radius';
      case 'tokens-breakpoints':
        return 'Breakpoints (SFCC)';
      case 'tokens-color':
        return 'Color System';
      case 'tokens-layout':
        return 'Layout System';
      case 'tokens-motion':
        return 'Motion & Curves';
      case 'tokens-opacity':
        return 'Opacity System';
      case 'tokens-spacing':
        return 'Spacing System';
      case 'tokens-typography':
        return 'Typography Scale';
      case 'tokens-z-index':
        return 'Z-Index Layers';
      case 'tokens-export':
        return 'Raw JSON Export';

      // --- 2. UI Components ---
      // A. Atoms & Primitives
      case 'buttons':
        return 'Buttons & CTAs';
      case 'ui-badges':
        return 'Badges & Chips';
      case 'ui-selectors':
        return 'Apparel Selectors';
      case 'ui-commercial':
        return 'Commercial Elements';

      // B. Molecules & Patterns
      case 'cards':
        return 'Product Cards';
      case 'tryon':
        return 'Apparel Utilities';

      // C. Organisms & Modules
      case 'ui-pdp-modules':
        return 'PDP Detail Modules';

      // --- 3. Data & Enterprise AI ---
      case 'contracts':
        return 'JSON Data Contracts';
      case 'prompts':
        return 'AI Prompts (Claude/GPT)';

      default:
        return 'GAP Design Language System';
    }
  };

  return (
    <header className="relative h-[52px] px-[20px] flex items-center justify-between flex-shrink-0 bg-dls-canvas transition-colors duration-200">
      {/* 左側: サイドバーメニュー名と完全に同期したページタイトル */}
      <div className="flex items-center gap-[10px]">
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-[6px] rounded-full hover:bg-dls-surface-elevated text-dls-txt-muted hover:text-dls-txt-primary mr-[4px] cursor-pointer transition-colors"
            title="サイドバーを展開"
          >
            <Menu size={18} />
          </button>
        )}
        <h1 className="text-[15px] font-bold text-dls-txt-primary tracking-tight">
          {getHeaderTitle()}
        </h1>
      </div>

      {/* 右側: ページごとの拡張用空白エリア */}
      <div className="flex items-center gap-[10px]" />

      {/* 下部境界エフェクト */}
      {cardTheme === 'dark' ? (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8ab4f8]/30 to-transparent pointer-events-none shadow-[0_0_10px_1px_rgba(138,180,248,0.22)]" />
      ) : (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-dls-line-subtle pointer-events-none" />
      )}
    </header>
  );
}