// components/dls/sections/PromptsView.tsx
'use client';

import { useState } from 'react';
import {
  Bot,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Download,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  FileText,
  AlertTriangle,
  Code2,
  CheckCircle2,
  FolderGit2,
  GitPullRequest,
  Sliders
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface PromptsViewProps {
  setActiveSection?: (sec: NavigationSection) => void;
}

type PromptRoleTab = 'master' | 'nextjs' | 'sfcc' | 'audit';

export default function PromptsView({ setActiveSection }: PromptsViewProps) {
  const [activeTab, setActiveTab] = useState<PromptRoleTab>('master');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // プロンプトテンプレート集
  const promptsData = {
    master: {
      id: 'master-prompt',
      title: 'Master Enterprise AI System Prompt',
      roleDescription: 'Claude Project Knowledge または Custom GPT の「Instructions」に投入する基本システムプロンプト。ハルシネーションや勝手なCSS定義を100%遮断します。',
      content: `# ROLE & GOVERNANCE MISSION
You are the Lead Design Systems Engineer for GAP Japan. Your mission is to implement, refactor, and review frontend UI code strictly conforming to the GAP Japan Design Language System (DLS).
You have ZERO tolerance for hallucinated pixel values, unauthorized Tailwind utilities, ghost/outline buttons, or non-compliant aspect ratios.

# NON-NEGOTIABLE CORE DOCTRINES
1. GEOMETRIC RECTANGULAR BASELINE (NO ARBITRARY ROUNDED CORNERS)
   - GAP buttons, badges, chips, and cards strictly enforce \`rounded-none\` or \`rounded-[2px]\`.
   - FORBIDDEN: \`rounded-lg\`, \`rounded-xl\`, \`rounded-2xl\`, \`rounded-full\` (Pills are prohibited on buttons/badges).
   - Buttons must be 100% solid fills in GAP Navy (\`#002554\`), Pure White (\`#ffffff\`), or Deep Black (\`#0b0c10\`). Outline/ghost buttons are strictly prohibited.

2. MEDIA RATIO LOCK (PREVENT CUMULATIVE LAYOUT SHIFT)
   - All apparel product card media must strictly use \`aspect-[3/4]\` with \`w-full h-full object-cover\`.
   - FORBIDDEN: Setting arbitrary pixel heights on product images (e.g., \`h-[400px]\`, \`h-[320px]\`).

3. STATUTORY TOTAL PRICE DISPLAY (総額表示義務 - JAPAN CONSUMER AGENCY)
   - All consumer prices must be tax-inclusive with explicit \`(税込)\` annotation.
   - Regular: Full-price baseline in neutral typography with \`(税込)\`.
   - Markdown: Current red price (\`#dc3545\`) + strike-through original price (\`line-through\`) + \`-${'{discount}'}% OFF\` badge + \`(税込)\`.

4. ARITHMETIC Z-INDEX & MOTION GOVERNANCE
   - Stacking order must strictly use quantized layers: Base (0) -> Raised (10) -> Sticky (50) -> Scrim (100) -> Drawer (200) -> Modal (300).
   - FORBIDDEN: Arbitrary z-index escalation (e.g. \`z-[9999]\`, \`z-50\` on nested children).
   - Default micro-transitions lock to \`duration-200\` or \`duration-300\` with \`cubic-bezier(0.2, 0.0, 0, 1.0)\`. Always support \`motion-reduce:transition-none\`.

5. JSON DATA CONTRACT STRICTNESS
   - Consume API data adhering strictly to the \`GapProductPayload\` and \`GapPricingContract\` interfaces.
   - All API keys must be camelCase. Null values must be safely handled without throwing runtime exceptions.`,
    },

    nextjs: {
      id: 'nextjs-prompt',
      title: 'Next.js 15 & Tailwind v4 Code Generator',
      roleDescription: '新しいUIパーツやセクションを Next.js (App Router / TypeScript / Tailwind CSS) で生成させる際に追記する指示文。',
      content: `# CONTEXT: Next.js 15 (App Router) & Tailwind CSS v4 Code Generation
You are writing production React Server Components (RSC) and Client Components for GAP Japan.

# CODE STRUCTURE CONSTRAINTS
- Strict TypeScript: Enforce zero \`any\` usage. All component props must extend or reference types from \`@/data/tokensData\` and \`contracts\`.
- Semantic Variables: Utilize \`bg-dls-canvas\`, \`bg-dls-surface\`, \`text-dls-txt-primary\`, \`text-dls-txt-secondary\`, and \`border-dls-line-subtle\` for outer surfaces.
- Solid White Retail Card Doctrine: Merchandise Product Cards must explicitly declare \`bg-white\` regardless of parent dark/light theme.
- Interactive Double-Ring Focus: For color swatches and interactive tiles, apply \`ring-2 ring-[#002554] ring-offset-2 ring-offset-dls-canvas\` on focus/selection.
- Mobile Touch Area: Any button or interactive selector trigger must guarantee a minimum touch area of 40px (or 48px on mobile viewports).

# OUTPUT REQUIREMENT
Deliver only fully typed, accessible (ARIA compliant) TSX code without placeholder comments or omitted boilerplate.`,
    },

    sfcc: {
      id: 'sfcc-prompt',
      title: 'SFCC ISML & SCSS Offshore Directive (India Team)',
      roleDescription: 'Salesforce Commerce Cloud (SFCC) B2C Commerce のカートリッジ、ISMLテンプレート、および SCSS 変数を作成・レビューさせる際の指示文。',
      content: `# CONTEXT: Salesforce Commerce Cloud (SFCC) & ISML Template Directive
You are generating or refactoring ISML templates and SCSS stylesheets for the GAP Japan offshore IT development team in Bangalore.

# ARCHITECTURAL RULES
1. ISML Variable Binding:
   - Map SFCC SCAPI entities to camelCase DLS contract fields:
     * \`pdict.Product.ID\` -> \`id\`
     * \`pdict.Product.priceModel.price\` -> \`currentPriceJPY\`
     * \`pdict.Product.custom.wash_well\` -> \`isWashwell\`
   - Never output untranslated database enum keys directly to the DOM.

2. SCSS Tokens Mapping:
   - Reference compiled Style Dictionary variables from \`_tokens.scss\`:
     * Primary Color: \`$gap-color-navy-700\` (\`#002554\`)
     * Markdown Alert: \`$gap-color-red-600\` (\`#dc3545\`)
     * Aspect Ratio: \`aspect-ratio: 3 / 4;\` (Always pair with \`object-fit: cover;\`)
     * Stacking: \`z-index: $gap-z-sticky;\` (50) for persistent navigation rails.

3. Desktop & Mobile Sticky Action Scaffolding:
   - On templates < 1024px, inject the mobile sticky bottom bar with \`pb-[calc(12px+env(safe-area-inset-bottom))]\`.
   - On templates >= 1024px, lock the buy-box via \`position: sticky; top: 72px;\`.`,
    },

    audit: {
      id: 'audit-prompt',
      title: 'Design Token Compliance Linter (QA & Audit)',
      roleDescription: 'オフショアやAIが作成した既存コードをレビューし、DLSルール違反（勝手な角丸や無効なカラー）を検出・修正させるプロンプト。',
      content: `# ROLE: GAP Japan DLS Compliance Auditor & Code Reviewer
Review the provided frontend code snippet against the GAP Japan Design Language System specification.

# AUDIT CHECKLIST (FLAG AND CORRECT ANY VIOLATIONS)
[ ] 1. ROUNDED CORNER AUDIT:
    - Flag any \`rounded-md\`, \`rounded-lg\`, \`rounded-full\` on buttons, badges, or swatches.
    - Correction: Replace with \`rounded-none\` (or \`rounded-[2px]\` for chips).
[ ] 2. ASPECT RATIO AUDIT:
    - Flag any hardcoded image heights (\`h-[300px]\`, \`h-[450px]\`).
    - Correction: Replace with \`aspect-[3/4] w-full h-full object-cover\`.
[ ] 3. PRICE COMPLIANCE AUDIT:
    - Verify that \`(税込)\` accompanies the price on the same baseline.
    - If a sale price is present, ensure the original price has \`line-through\` and the sale price uses \`#dc3545\`.
[ ] 4. Z-INDEX DISCIPLINE:
    - Flag any arbitrary values (\`z-50\` inside components, \`z-999\`, \`z-[9999]\`).
    - Correction: Map to standard planes (Base: 0, Raised: 10, Sticky: 50, Modal: 300).
[ ] 5. COLOR TOKEN FIDELITY:
    - Flag unauthorized blues (e.g. \`bg-blue-600\`, \`#1e40af\`).
    - Correction: Must be exact GAP Navy (\`#002554\` / \`bg-[#002554]\`).

# OUTPUT FORMAT
Provide a concise bulleted list of violations detected, followed by the fully corrected, production-ready code.`,
    },
  };

  const activeTemplate = promptsData[activeTab];

  // ダウンロード処理
  const handleDownloadMarkdown = () => {
    const fullMarkdown = `# GAP JAPAN DESIGN LANGUAGE SYSTEM (DLS)
## Enterprise AI System Prompts & Governance Instructions

---

${Object.values(promptsData)
  .map(
    (p) => `### ${p.title}
*Role: ${p.roleDescription}*

\`\`\`markdown
${p.content}
\`\`\`
`
  )
  .join('\n---\n\n')}
`;
    const blob = new Blob([fullMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gap-ai-system-prompts.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1280px] mx-auto space-y-[48px] pb-[80px]">
      
      {/* =========================================================
         1. HERO HEADER (一括DLに集約し、重複した個別コピーを排除)
         ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[36px] pt-[8px] pb-[40px] border-b border-dls-line-subtle">
        <div className="flex-1 max-w-[680px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <button
              onClick={() => setActiveSection && setActiveSection('overview')}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>DLS Portal</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              ENTERPRISE AI GOVERNANCE
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            AI Prompts (Claude / GPT)
          </h1>

          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Calibrated system prompts and negative constraints enforcing zero-hallucination code delivery. 
            Feed these instruction sets into Claude Project Knowledge or Custom GPT workspaces to align distributed offshore teams with GAP’s architectural rectangular doctrine.
          </p>

          <div className="flex items-center gap-[12px] flex-wrap">
            <button
              onClick={handleDownloadMarkdown}
              className="px-[20px] py-[12px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-md"
            >
              <Download size={15} />
              <span>Download system-prompts.md</span>
            </button>
          </div>
        </div>

        {/* Right Preview Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#002554]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-[#8ab4f8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              AI Guardrails
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Zero Hallucination
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            <div className="w-full rounded-[14px] bg-dls-surface-container border border-dls-line-subtle p-[14px] font-mono text-[11px] space-y-[4px] shadow-inner text-dls-txt-muted">
              <div className="text-red-400 line-through">rounded-full bg-blue-600</div>
              <div className="text-red-400 line-through">h-[400px] z-[9999]</div>
              <div className="text-[#8ab4f8] pt-[4px]">↓ SYSTEM PROMPT ENFORCEMENT</div>
              <div className="text-emerald-400 font-bold">rounded-none bg-[#002554]</div>
              <div className="text-emerald-400 font-bold">aspect-[3/4] z-50 (税込)</div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Constraint Strength</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">100% Negative Grounded</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">Claude 3.7 / GPT-4o</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. DEPLOYMENT PIPELINE (重複したルール解説を廃止し、3ステップ運用フローに刷新)
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Cpu size={22} className="text-[#8ab4f8]" />
              <span>Enterprise AI Implementation Workflow</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              How to operationalize DLS prompts across engineering sprints and offshore CI/CD pipelines.
            </p>
          </div>
          <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[3px] rounded">
            3-Step Workflow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] pt-[6px]">
          {/* Step 1 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <div className="flex items-center justify-between">
              <span className="w-[20px] h-[20px] rounded-full bg-[#002554] text-[#8ab4f8] text-[11px] font-mono font-bold flex items-center justify-center border border-[#8ab4f8]/30">1</span>
              <FolderGit2 size={16} className="text-[#8ab4f8]" />
            </div>
            <h3 className="text-[15px] font-bold text-dls-txt-primary">Knowledge Ingestion</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Upload <code className="text-[#8ab4f8]">tokens.json</code> and <code className="text-[#8ab4f8]">gap-contracts.d.ts</code> into your Claude Project Knowledge repository alongside the Master System Prompt.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <div className="flex items-center justify-between">
              <span className="w-[20px] h-[20px] rounded-full bg-[#002554] text-emerald-400 text-[11px] font-mono font-bold flex items-center justify-center border border-emerald-500/30">2</span>
              <Code2 size={16} className="text-emerald-400" />
            </div>
            <h3 className="text-[15px] font-bold text-dls-txt-primary">Scoped Generation</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Engineers use role-specific prompts (Next.js Component Builder or SFCC ISML Directive) to generate atomic components that guarantee correct colors and aspect ratios.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <div className="flex items-center justify-between">
              <span className="w-[20px] h-[20px] rounded-full bg-[#002554] text-amber-400 text-[11px] font-mono font-bold flex items-center justify-center border border-amber-500/30">3</span>
              <GitPullRequest size={16} className="text-amber-400" />
            </div>
            <h3 className="text-[15px] font-bold text-dls-txt-primary">Automated PR Review</h3>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              Run the QA & Audit Linter prompt against incoming Pull Requests from offshore teams to automatically flag and correct non-compliant rounded corners or arbitrary z-indexes.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE PROMPT INSPECTOR & ROLE CHIPS (実用プロンプトの閲覧・コピー)
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div>
          <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
            <Terminal size={22} className="text-[#8ab4f8]" />
            <span>System Prompt Templates</span>
          </h2>
          <p className="text-[14px] text-dls-txt-muted mt-[4px]">
            Select a specialized governance template tailored to your pipeline role.
          </p>
        </div>

        {/* Chips タブ */}
        <div className="flex flex-wrap items-center gap-[8px] pt-[4px]">
          {[
            { id: 'master', label: '1. Master System Prompt' },
            { id: 'nextjs', label: '2. Next.js Component Builder' },
            { id: 'sfcc', label: '3. SFCC ISML / SCSS' },
            { id: 'audit', label: '4. QA & Code Review Linter' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as PromptRoleTab)}
                className={`px-[16px] py-[7px] rounded-full text-[12px] font-bold transition-all cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#002554] border-[#002554] text-white shadow-xs'
                    : 'bg-transparent border-dls-line-subtle text-dls-txt-muted hover:text-dls-txt-primary hover:border-dls-line-default hover:bg-dls-surface-elevated'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Selected Prompt Viewer */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xl mt-[12px]">
          <div className="px-[20px] py-[14px] bg-dls-surface-container border-b border-dls-line-subtle flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#8ab4f8] uppercase tracking-wider block">
                ACTIVE TEMPLATE: {activeTemplate.title.toUpperCase()}
              </span>
              <p className="text-[12px] text-dls-txt-muted mt-[2px]">{activeTemplate.roleDescription}</p>
            </div>

            <button
              onClick={() => copyText(activeTemplate.content, activeTemplate.id)}
              className="px-[14px] py-[6px] rounded-[6px] bg-[#004a77]/30 hover:bg-[#004a77]/60 border border-[#004a77] text-[#c2e7ff] text-[12px] font-mono flex items-center gap-[6px] transition-colors cursor-pointer flex-shrink-0"
            >
              {copiedId === activeTemplate.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedId === activeTemplate.id ? 'Copied Prompt!' : 'Copy Prompt'}</span>
            </button>
          </div>

          <div className="p-[20px] bg-dls-canvas max-h-[500px] overflow-y-auto font-mono text-[12px] leading-relaxed select-text">
            <pre className="text-dls-txt-secondary whitespace-pre-wrap break-all">
              <code>{activeTemplate.content}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. NEGATIVE CONSTRAINTS SPECIFICATION MATRIX (人間向けクイックリファレンス表)
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Negative Constraints Matrix (AI Violation Quick Reference)
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Human review reference: prohibited AI default hallucinations versus enforced DLS compliant replacements.
            </p>
          </div>
          <span className="text-[12px] font-mono text-red-400 bg-red-950/40 border border-red-800/40 px-[8px] py-[3px] rounded">
            Enforced Prohibitions
          </span>
        </div>

        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-[12px] divide-y divide-dls-line-subtle">
              <thead className="bg-dls-canvas text-dls-txt-annotation uppercase text-[10px]">
                <tr>
                  <th className="py-[12px] px-[16px]">Component Domain</th>
                  <th className="py-[12px] px-[16px] text-red-400">Prohibited AI Defaults (Forbidden)</th>
                  <th className="py-[12px] px-[16px] text-emerald-400">Enforced DLS Replacement (Mandatory)</th>
                  <th className="py-[12px] px-[16px]">Underlying Architectural Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dls-line-subtle text-dls-txt-secondary">
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[12px] px-[16px] font-bold text-dls-txt-primary">Buttons & CTAs</td>
                  <td className="py-[12px] px-[16px] text-red-400">
                    <code>rounded-lg</code>, <code>rounded-full</code>, <code>border-2 border-blue-600 (Outlines)</code>
                  </td>
                  <td className="py-[12px] px-[16px] text-emerald-400">
                    <code>rounded-none bg-[#002554] (Solid Fills Only)</code>
                  </td>
                  <td className="py-[12px] px-[16px] font-sans text-[12px]">
                    GAP’s brand identity relies on bold, architectural rectangular solid color blocks.
                  </td>
                </tr>

                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[12px] px-[16px] font-bold text-dls-txt-primary">Product Media</td>
                  <td className="py-[12px] px-[16px] text-red-400">
                    <code>h-[400px]</code>, <code>h-[320px]</code>, <code>aspect-square</code>
                  </td>
                  <td className="py-[12px] px-[16px] text-emerald-400">
                    <code>aspect-[3/4] w-full h-full object-cover</code>
                  </td>
                  <td className="py-[12px] px-[16px] font-sans text-[12px]">
                    Eliminates Cumulative Layout Shift (CLS = 0.0) across dynamic catalog loading.
                  </td>
                </tr>

                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[12px] px-[16px] font-bold text-dls-txt-primary">Price Presentation</td>
                  <td className="py-[12px] px-[16px] text-red-400">
                    <code>$49.99</code>, <code>¥5,990 (税別)</code>, Raw number without tax note
                  </td>
                  <td className="py-[12px] px-[16px] text-emerald-400">
                    <code>¥6,290 (税込)</code>, Red markdown + strike-through
                  </td>
                  <td className="py-[12px] px-[16px] font-sans text-[12px]">
                    Legal compliance with Japanese Consumer Affairs Agency Total Price Display regulations.
                  </td>
                </tr>

                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[12px] px-[16px] font-bold text-dls-txt-primary">Z-Index Stacking</td>
                  <td className="py-[12px] px-[16px] text-red-400">
                    <code>z-[9999]</code>, <code>z-50</code> inside modal dialogs
                  </td>
                  <td className="py-[12px] px-[16px] text-emerald-400">
                    <code>z-50 (Sticky)</code>, <code>z-[300] (Modal)</code>, <code>isolation: isolate</code>
                  </td>
                  <td className="py-[12px] px-[16px] font-sans text-[12px]">
                    Prevents sticky headers and drawers from piercing through active modal overlays.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: MOVE TO OVERVIEW
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>DESIGN SYSTEM GOVERNANCE COMPLETE</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Return to DLS Portal Overview
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              With Tokens (10 Domains), UI Components (Atoms, Molecules, Organisms), JSON Contracts, and AI Prompts established, review the consolidated system vision and executive summary.
            </p>
          </div>

          <button
            onClick={() => setActiveSection && setActiveSection('overview')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore Overview</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}