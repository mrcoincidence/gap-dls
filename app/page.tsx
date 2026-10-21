// app/page.tsx
'use client';

import { useState } from 'react';
import Sidebar, { NavigationSection } from '@/components/dls/Sidebar';
import Header from '@/components/dls/Header';
import HomeView from '@/components/dls/sections/HomeView';
import GetStartedView from '@/components/dls/sections/GetStartedView'; // ★追加
import TokensOverview from '@/components/dls/sections/TokensOverview';
import TokensColor from '@/components/dls/sections/TokensColor';
import TokensTypography from '@/components/dls/sections/TokensTypography';
import TokensSpacing from '@/components/dls/sections/TokensSpacing';
import TokensLayout from '@/components/dls/sections/TokensLayout';
import TokensAspectRatio from '@/components/dls/sections/TokensAspectRatio';
import TokensRadius from '@/components/dls/sections/TokensRadius';
import TokensBreakpoints from '@/components/dls/sections/TokensBreakpoints';
import TokensZIndex from '@/components/dls/sections/TokensZIndex';
import TokensMotion from '@/components/dls/sections/TokensMotion';
import TokensOpacity from '@/components/dls/sections/TokensOpacity';
import TokensExport from '@/components/dls/sections/TokensExport';
import ComponentButtons from '@/components/dls/sections/ComponentButtons';
import ComponentBadges from '@/components/dls/sections/ComponentBadges';
import ComponentSelectors from '@/components/dls/sections/ComponentSelectors';
import ComponentCommercial from '@/components/dls/sections/ComponentCommercial';
import ComponentProductCard from '@/components/dls/sections/ComponentProductCard';
import ComponentApparelUtilities from '@/components/dls/sections/ComponentApparelUtilities';
import ComponentPdpModules from '@/components/dls/sections/ComponentPdpModules';
import ContractsView from '@/components/dls/sections/ContractsView';
import PromptsView from '@/components/dls/sections/PromptsView';

export default function DlsPortalPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [cardTheme, setCardTheme] = useState<'dark' | 'light'>('dark');
  const [isAvailable, setIsAvailable] = useState(true);

  // ★全画面が実装完了したため、pendingSections は空配列に
  const pendingSections: NavigationSection[] = [];

  return (
    <div
      data-theme={cardTheme}
      className="flex h-screen w-full bg-dls-canvas text-dls-txt-secondary overflow-hidden font-sans transition-colors duration-200"
    >
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cardTheme={cardTheme}
        setCardTheme={setCardTheme}
      />

      {/* 2. Main Workspace */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-dls-canvas transition-colors duration-200">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeSection={activeSection}
          cardTheme={cardTheme}
        />

        <div className="flex-1 overflow-y-auto p-[20px] lg:p-[28px] bg-dls-canvas transition-colors duration-200">
          
          {/* =========================================================
             0. Home & Onboarding
             ========================================================= */}
          {(activeSection === 'home' || activeSection === 'overview') && (
            <HomeView setActiveSection={setActiveSection} />
          )}

          {activeSection === 'get-started' && (
            <GetStartedView setActiveSection={setActiveSection} />
          )}

          {/* =========================================================
             1. Design Tokens
             ========================================================= */}
          {activeSection === 'tokens' && (
            <TokensOverview setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-color' && (
            <TokensColor setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-typography' && (
            <TokensTypography setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-spacing' && (
            <TokensSpacing setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-layout' && (
            <TokensLayout setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-aspect-ratio' && (
            <TokensAspectRatio setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-radius' && (
            <TokensRadius setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-z-index' && (
            <TokensZIndex setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-motion' && (
            <TokensMotion setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-opacity' && (
            <TokensOpacity setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-breakpoints' && (
            <TokensBreakpoints setActiveSection={setActiveSection} />
          )}

          {activeSection === 'tokens-export' && (
            <TokensExport setActiveSection={setActiveSection} />
          )}

          {/* =========================================================
             2. UI Components
             ========================================================= */}
          {activeSection === 'buttons' && (
            <ComponentButtons setActiveSection={setActiveSection} />
          )}

          {activeSection === 'ui-badges' && (
            <ComponentBadges setActiveSection={setActiveSection} />
          )}

          {activeSection === 'ui-selectors' && (
            <ComponentSelectors setActiveSection={setActiveSection} />
          )}

          {activeSection === 'ui-commercial' && (
            <ComponentCommercial setActiveSection={setActiveSection} />
          )}

          {activeSection === 'cards' && (
            <ComponentProductCard
              viewportMode={viewportMode}
              cardTheme={cardTheme}
              setCardTheme={setCardTheme}
              isAvailable={isAvailable}
              setIsAvailable={setIsAvailable}
              setActiveSection={setActiveSection}
            />
          )}

          {activeSection === 'tryon' && (
            <ComponentApparelUtilities setActiveSection={setActiveSection} />
          )}

          {activeSection === 'ui-pdp-modules' && (
            <ComponentPdpModules setActiveSection={setActiveSection} />
          )}

          {/* =========================================================
             3. Data & Enterprise AI
             ========================================================= */}
          {activeSection === 'contracts' && (
            <ContractsView setActiveSection={setActiveSection} />
          )}

          {activeSection === 'prompts' && (
            <PromptsView setActiveSection={setActiveSection} />
          )}
        </div>
      </main>
    </div>
  );
}