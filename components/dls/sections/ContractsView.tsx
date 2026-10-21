// components/dls/sections/ContractsView.tsx
'use client';

import { useState, useMemo } from 'react';
import {
  FileCode,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Download,
  FileJson,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Database,
  Code2,
  Table,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { NavigationSection } from '../Sidebar';

interface ContractsViewProps {
  setActiveSection: (sec: NavigationSection) => void;
}

type SchemaDomainTab = 'product' | 'pricing' | 'reviews';
type ViewFormatTab = 'typescript' | 'json';

export default function ContractsView({ setActiveSection }: ContractsViewProps) {
  const [activeDomain, setActiveDomain] = useState<SchemaDomainTab>('product');
  const [viewFormat, setViewFormat] = useState<ViewFormatTab>('typescript');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // =================================================================
  // スキーマ定義 & モックペイロードデータ
  // =================================================================
  const contractsData = useMemo(() => {
    return {
      product: {
        title: 'Product & SKU Variant Contract',
        description: '商品マスター、3:4画像アセット、カラー/サイズ別SKUバリアント、サステナビリティ（Washwell™）メタデータを規定する中核スキーマ。',
        ts: `/**
 * @name GapProductPayload
 * @description Master apparel product entity schema for SFCC SCAPI / Next.js
 */
export interface GapProductPayload {
  /** Unique SFCC Master Product ID */
  id: string;
  /** Global SKU identifier */
  sku: string;
  /** Primary Japanese product title */
  title: string;
  /** Departmental category taxonomy hierarchy */
  category: {
    id: string;
    path: string; // e.g. "men/sweatshirts/hoodies"
    displayName: string;
  };
  /** Commercial promotional badge attached to media */
  badge?: {
    text: string;
    tone: 'red' | 'navy' | 'black' | 'green';
  };
  /** Strictly locked 3:4 portrait product gallery */
  mediaGallery: {
    order: number;
    label: string; // "正面カット", "バックスタイル", etc.
    src: string;
    alt: string;
    aspectRatio: '3/4'; // Enforces Token aspect-[3/4]
  }[];
  /** Apparel SKU Variation List */
  variants: {
    skuId: string;
    color: {
      code: string;
      name: string;
      hex: string;
    };
    size: {
      code: string; // "S", "M", "L" or "31/30"
      scaleType: 'alpha' | 'denim';
    };
    inventory: {
      status: 'in_stock' | 'low_stock' | 'sold_out';
      quantityAvailable: number;
      restockNotificationAllowed: boolean;
    };
  }[];
  /** Sustainable & fabric compliance metadata */
  provenance: {
    isWashwell: boolean;
    waterSavedPercentage?: number;
    fabricBlend: string;
    careInstructions: string[];
  };
}`,
        json: {
          id: "gap-prod-2026-001",
          sku: "GAP-2026-FLC-001",
          title: "GAP 1969 Heavyweight Fleece Hoodie",
          category: {
            id: "cat-sweats",
            path: "men/sweatshirts/hoodies",
            displayName: "Men / Sweatshirts & Hoodies"
          },
          badge: {
            text: "SALE -30%",
            tone: "red"
          },
          mediaGallery: [
            {
              order: 1,
              label: "正面カット",
              src: "/images/products/product-01-primary.jpg",
              alt: "1969 Heavyweight Fleece Hoodie Front View",
              aspectRatio: "3/4"
            },
            {
              order: 2,
              label: "バックスタイル",
              src: "/images/products/product-01-secondary.jpg",
              alt: "1969 Heavyweight Fleece Hoodie Back View",
              aspectRatio: "3/4"
            }
          ],
          variants: [
            {
              skuId: "SKU-FLC-NVY-M",
              color: { code: "NVY", name: "GAP Iconic Navy", hex: "#002554" },
              size: { code: "M", scaleType: "alpha" },
              inventory: {
                status: "in_stock",
                quantityAvailable: 14,
                restockNotificationAllowed: false
              }
            },
            {
              skuId: "SKU-FLC-NVY-XXL",
              color: { code: "NVY", name: "GAP Iconic Navy", hex: "#002554" },
              size: { code: "XXL", scaleType: "alpha" },
              inventory: {
                status: "sold_out",
                quantityAvailable: 0,
                restockNotificationAllowed: true
              }
            }
          ],
          provenance: {
            isWashwell: true,
            waterSavedPercentage: 20,
            fabricBlend: "綿 77% / ポリエステル 23%",
            careInstructions: ["洗濯機洗い可 (ネット使用推奨)", "漂白剤使用不可"]
          }
        }
      },

      pricing: {
        title: 'Pricing & Statutory Tax Contract',
        description: '日本の総額表示義務（消費税10%税込価格必須）とプロモーション割引計算、ポイント還元率を規定する価格スキーマ。',
        ts: `/**
 * @name GapPricingContract
 * @description Statutory total price display & markdown schema for Japan E-Commerce
 */
export interface GapPricingContract {
  /** Currency code ISO 4217 */
  currency: 'JPY';
  /** Final consumer payable price (Tax-Inclusive) */
  currentPriceJPY: number;
  /** Mandatory true flag certifying statutory tax inclusion */
  taxIncluded: true;
  /** Pre-discount original price (Displayed with strike-through) */
  originalPriceJPY: number;
  /** Markdown condition flag */
  isSale: boolean;
  /** Calculated discount percentage integer (e.g. 30 for -30%) */
  discountRatePercent?: number;
  /** Promotional multi-buy bundle rule */
  bundleRule?: {
    requiredQuantity: number;
    bundlePriceJPY: number;
    label: string; // "2点 ¥10,000"
  };
  /** GAP Membership points yield (1% baseline) */
  loyaltyPointsYield: {
    pointsRate: number; // 0.01
    earnedPointsAmount: number;
  };
}`,
        json: {
          currency: "JPY",
          currentPriceJPY: 6290,
          taxIncluded: true,
          originalPriceJPY: 8990,
          isSale: true,
          discountRatePercent: 30,
          bundleRule: {
            requiredQuantity: 2,
            bundlePriceJPY: 10000,
            label: "2点まとめ買いで ¥10,000 (税込)"
          },
          loyaltyPointsYield: {
            pointsRate: 0.01,
            earnedPointsAmount: 62
          }
        }
      },

      reviews: {
        title: 'Social Proof & Fit Consensus Contract',
        description: 'ユーザーレビューの集計スコアと、アパレル購入時のサイズ迷いを払拭する着用感コンセンサス（小さめ/ぴったり/大きめ）スキーマ。',
        ts: `/**
 * @name GapFitReviewContract
 * @description Aggregated customer ratings and sizing survey consensus data
 */
export interface GapFitReviewContract {
  productId: string;
  /** Aggregated star score (0.0 to 5.0) */
  averageRating: number;
  /** Total approved user reviews */
  totalReviewCount: number;
  /** Size fit distribution survey metrics */
  fitConsensus: {
    sampleSizeCount: number;
    dominantCategory: 'runs_small' | 'true_to_size' | 'runs_large';
    distributionPercent: {
      runsSmall: number;   // e.g. 9
      trueToSize: number;  // e.g. 82
      runsLarge: number;   // e.g. 9
    };
  };
  /** Algorithmic size-finder recommendation contract */
  algorithmicRecommendation?: {
    recommendedSize: string; // "M"
    confidenceScore: number; // 0.94
    matchCriteria: {
      userHeightCm: number;
      userWeightKg: number;
      preference: 'fitted' | 'regular' | 'loose';
    };
  };
}`,
        json: {
          productId: "gap-prod-2026-001",
          averageRating: 4.8,
          totalReviewCount: 142,
          fitConsensus: {
            sampleSizeCount: 118,
            dominantCategory: "true_to_size",
            distributionPercent: {
              runsSmall: 9,
              trueToSize: 82,
              runsLarge: 9
            }
          },
          algorithmicRecommendation: {
            recommendedSize: "M",
            confidenceScore: 0.94,
            matchCriteria: {
              userHeightCm: 174,
              userWeightKg: 68,
              preference: "regular"
            }
          }
        }
      }
    };
  }, []);

  const activeContract = contractsData[activeDomain];

  // ダウンロード処理
  const handleDownloadTypes = () => {
    const fullTsCode = `/**
 * GAP JAPAN DESIGN LANGUAGE SYSTEM (DLS)
 * Production TypeScript Data Contracts
 * Target: Salesforce Commerce Cloud (SCAPI) & Next.js Headless
 */

${contractsData.product.ts}

${contractsData.pricing.ts}

${contractsData.reviews.ts}
`;
    const blob = new Blob([fullTsCode], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gap-commerce-contracts.d.ts';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSchemaJson = () => {
    const combinedJson = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "GAP Japan Commerce API Contracts",
      definitions: {
        product: contractsData.product.json,
        pricing: contractsData.pricing.json,
        reviews: contractsData.reviews.json
      }
    };
    const blob = new Blob([JSON.stringify(combinedJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gap-contracts-schema.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
              <span>DLS Portal</span>
            </button>
            <span className="text-dls-line-subtle">/</span>
            <span className="text-[12px] font-mono text-[#c2e7ff] bg-[#004a77]/50 px-[8px] py-[2px] rounded-full border border-[#8ab4f8]/30">
              API SCHEMA & DATA CONTRACTS
            </span>
          </div>

          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight text-dls-txt-primary leading-[1.1] mb-[18px]">
            JSON Data Contracts
          </h1>

          <p className="text-[20px] text-dls-txt-secondary leading-[1.6] mb-[28px] font-normal">
            Formal schema specifications governing communication between Salesforce Commerce Cloud (SFCC), Next.js frontends, and Enterprise AI code generation. 
            Guarantees strict null-safety, statutory tax-inclusive pricing, and uniform camelCase serialization across offshore engineering teams.
          </p>

          <div className="flex items-center gap-[12px] flex-wrap">
            <button
              onClick={handleDownloadTypes}
              className="px-[20px] py-[12px] rounded-full bg-[#004a77] hover:bg-[#005a92] text-white text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-md"
            >
              <Download size={15} />
              <span>Download gap-contracts.d.ts</span>
            </button>

            <button
              onClick={handleDownloadSchemaJson}
              className="px-[18px] py-[12px] rounded-full bg-dls-surface hover:bg-dls-surface-elevated border border-dls-line-subtle text-dls-txt-secondary text-[14px] font-bold flex items-center gap-[8px] transition-colors cursor-pointer"
            >
              <FileJson size={15} className="text-[#8ab4f8]" />
              <span>Download Schema JSON</span>
            </button>
          </div>
        </div>

        {/* Right Preview Banner */}
        <div className="w-full max-w-[340px] lg:max-w-[380px] aspect-square rounded-[28px] bg-dls-surface border border-dls-line-subtle p-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl flex-shrink-0">
          <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-[#004a77]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[12px] font-mono text-[#8ab4f8] bg-dls-canvas/80 px-[10px] py-[4px] rounded-full border border-dls-line-subtle backdrop-blur-md">
              Type-Safe API
            </span>
            <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[2px] rounded">
              Zero Any
            </span>
          </div>

          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-[12px] w-full">
            <div className="w-full rounded-[14px] bg-dls-surface-container border border-dls-line-subtle p-[14px] font-mono text-[11px] space-y-[4px] shadow-inner text-dls-txt-muted">
              <div className="text-[#8ab4f8]">interface GapProduct {'{'}</div>
              <div className="pl-[14px] text-emerald-500">sku: string;</div>
              <div className="pl-[14px] text-amber-500">currentPriceJPY: number;</div>
              <div className="pl-[14px] text-[#c2e7ff]">taxIncluded: true;</div>
              <div className="pl-[14px] text-purple-400">variants: GapSkuVariant[];</div>
              <div className="text-[#8ab4f8]">{'}'}</div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 pt-[12px] border-t border-dls-line-subtle">
            <div>
              <p className="text-[12px] font-mono text-dls-txt-annotation uppercase tracking-wider">Type Validation</p>
              <p className="text-[14px] font-bold text-dls-txt-primary mt-[1px]">100% Strict Null-Safe</p>
            </div>
            <span className="text-[12px] font-mono text-emerald-500">SCAPI Synced</span>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. CORE COMMERCE CONTRACTS ARCHITECTURE
         ========================================================= */}
      <section className="space-y-[18px]">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Database size={22} className="text-[#8ab4f8]" />
              <span>Core Commerce Data Contracts</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              The 3 core data domains connecting Salesforce Commerce Cloud to frontend headless clients.
            </p>
          </div>
          <span className="text-[12px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-800/40 px-[8px] py-[3px] rounded">
            3 Core Schemas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] pt-[6px]">
          {/* Card 1 */}
          <div
            onClick={() => setActiveDomain('product')}
            className={`p-[20px] rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between ${
              activeDomain === 'product'
                ? 'bg-dls-surface border-[#8ab4f8] shadow-md ring-1 ring-[#8ab4f8]'
                : 'bg-dls-surface border-dls-line-subtle hover:border-[#8ab4f8]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <span className="w-[10px] h-[10px] rounded-none bg-[#002554] border border-white/20" />
                <span className="text-[11px] font-mono text-[#8ab4f8]">Contract A</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Product & SKU Variants</h3>
              <p className="text-[13px] text-dls-txt-muted mt-[6px] leading-[1.6]">
                Product metadata, locked 3:4 media assets, color/size SKU variants, stock indicators, and Washwell™ eco metrics.
              </p>
            </div>
            <span className="text-[12px] font-bold text-[#8ab4f8] mt-[16px] flex items-center gap-[4px]">
              <span>View Schema Specification</span>
              <ArrowRight size={13} />
            </span>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setActiveDomain('pricing')}
            className={`p-[20px] rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between ${
              activeDomain === 'pricing'
                ? 'bg-dls-surface border-[#8ab4f8] shadow-md ring-1 ring-[#8ab4f8]'
                : 'bg-dls-surface border-dls-line-subtle hover:border-[#8ab4f8]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <span className="w-[10px] h-[10px] rounded-none bg-[#dc3545]" />
                <span className="text-[11px] font-mono text-[#dc3545]">Contract B</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Pricing & Statutory Tax</h3>
              <p className="text-[13px] text-dls-txt-muted mt-[6px] leading-[1.6]">
                総額表示義務 compliant pricing, markdown sale rates, original strike-through prices, and GAP 1% loyalty point calculation.
              </p>
            </div>
            <span className="text-[12px] font-bold text-[#8ab4f8] mt-[16px] flex items-center gap-[4px]">
              <span>View Schema Specification</span>
              <ArrowRight size={13} />
            </span>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setActiveDomain('reviews')}
            className={`p-[20px] rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between ${
              activeDomain === 'reviews'
                ? 'bg-dls-surface border-[#8ab4f8] shadow-md ring-1 ring-[#8ab4f8]'
                : 'bg-dls-surface border-dls-line-subtle hover:border-[#8ab4f8]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <span className="w-[10px] h-[10px] rounded-none bg-amber-500" />
                <span className="text-[11px] font-mono text-amber-500">Contract C</span>
              </div>
              <h3 className="text-[16px] font-bold text-dls-txt-primary">Fit Consensus & Ratings</h3>
              <p className="text-[13px] text-dls-txt-muted mt-[6px] leading-[1.6]">
                Aggregated 5-star customer review scores, survey-based fit distribution percentages, and AI size advisor recommendation criteria.
              </p>
            </div>
            <span className="text-[12px] font-bold text-[#8ab4f8] mt-[16px] flex items-center gap-[4px]">
              <span>View Schema Specification</span>
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INTERACTIVE SCHEMA & PAYLOAD INSPECTOR
         ========================================================= */}
      <section className="space-y-[18px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight flex items-center gap-[8px]">
              <Terminal size={22} className="text-[#8ab4f8]" />
              <span>Interactive Contract Inspector</span>
            </h2>
            <p className="text-[14px] text-dls-txt-muted mt-[2px]">
              Compare TypeScript interface definitions side-by-side with runtime JSON payloads.
            </p>
          </div>

          {/* Format Toggle (TypeScript vs JSON) */}
          <div className="flex bg-dls-surface p-[3px] rounded-full border border-dls-line-subtle gap-[2px]">
            <button
              onClick={() => setViewFormat('typescript')}
              className={`px-[14px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                viewFormat === 'typescript'
                  ? 'bg-[#004a77] text-white shadow-xs'
                  : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              <Code2 size={14} />
              <span>TypeScript Interface</span>
            </button>

            <button
              onClick={() => setViewFormat('json')}
              className={`px-[14px] py-[6px] rounded-full text-[12px] font-bold transition-all flex items-center gap-[6px] cursor-pointer ${
                viewFormat === 'json'
                  ? 'bg-[#004a77] text-white shadow-xs'
                  : 'text-dls-txt-muted hover:text-dls-txt-primary'
              }`}
            >
              <FileJson size={14} />
              <span>Runtime JSON Payload</span>
            </button>
          </div>
        </div>

        {/* Code Viewer Panel */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xl">
          {/* Header Bar */}
          <div className="px-[20px] py-[12px] bg-dls-surface-container border-b border-dls-line-subtle flex items-center justify-between text-[12px] font-mono">
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[6px]">
                <span className="w-[10px] h-[10px] rounded-full bg-red-500/80" />
                <span className="w-[10px] h-[10px] rounded-full bg-amber-500/80" />
                <span className="w-[10px] h-[10px] rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-dls-txt-annotation ml-[8px]">
                {activeContract.title.toUpperCase()} — {viewFormat === 'typescript' ? 'TYPESCRIPT CONTRACT' : 'JSON PAYLOAD'}
              </span>
            </div>

            <button
              onClick={() =>
                copyText(
                  viewFormat === 'typescript' ? activeContract.ts : JSON.stringify(activeContract.json, null, 2),
                  'contract-code'
                )
              }
              className="flex items-center gap-[6px] text-[#8ab4f8] hover:text-dls-txt-primary transition-colors cursor-pointer"
            >
              {copiedId === 'contract-code' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copiedId === 'contract-code' ? 'Copied Code!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Syntax Content Box */}
          <div className="p-[20px] bg-dls-canvas max-h-[520px] overflow-y-auto font-mono text-[12px] leading-relaxed select-text">
            <pre className="text-dls-txt-secondary whitespace-pre-wrap break-all">
              <code>
                {viewFormat === 'typescript' ? activeContract.ts : JSON.stringify(activeContract.json, null, 2)}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. OFFSHORE (SFCC INDIA TEAM) INTEGRATION DIRECTIVES
         ========================================================= */}
      <section className="space-y-[20px] pt-[20px] border-t border-dls-line-subtle">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[24px] font-black text-dls-txt-primary tracking-tight">
              Offshore Integration Protocols (SFCC India Pipeline)
            </h2>
            <p className="text-[16px] text-dls-txt-muted mt-[4px]">
              Mandatory serialization rules and API mapping for the offshore development team in Bangalore.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8ab4f8] bg-[#004a77]/30 border border-[#004a77] px-[8px] py-[3px] rounded-full">
            Engineering Governance
          </span>
        </div>

        {/* 3 Engineering Guardrails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-[#8ab4f8] uppercase font-bold block">1. camelCase Serialization</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Case Conversion Standard</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              SFCC internal database keys (<code className="text-red-400">custom.wash_well</code>, <code className="text-red-400">price_book_jp</code>) must be serialized to standard camelCase (<code className="text-emerald-400">isWashwell</code>, <code className="text-emerald-400">currentPriceJPY</code>) before API response output.
            </p>
          </div>

          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-emerald-500 uppercase font-bold block">2. Strict Null Safety</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Zero Runtime Crash Rule</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              When a product is not discounted, <code className="text-[#8ab4f8]">salePrice</code> must be omitted or passed as <code className="text-[#8ab4f8]">null</code> with <code className="text-[#8ab4f8]">isSale: false</code>. Frontends must never receive empty strings (<code className="text-red-400">&quot;&quot;</code>) for numeric price fields.
            </p>
          </div>

          <div className="p-[18px] rounded-[14px] bg-dls-surface border border-dls-line-subtle space-y-[8px]">
            <span className="text-[11px] font-mono text-amber-500 uppercase font-bold block">3. 3:4 Aspect Ratio Guard</span>
            <h4 className="text-[15px] font-bold text-dls-txt-primary">Image Transformer Hook</h4>
            <p className="text-[13px] text-dls-txt-muted leading-relaxed">
              The SFCC Image Transformation Service (DIS) must crop and scale all catalog product images to exact 3:4 dimensions (<code className="text-[#8ab4f8]">sw=600&sh=800</code>) to guarantee zero layout shift on storefront grids.
            </p>
          </div>
        </div>

        {/* SFCC OCAPI / SCAPI Entity Mapping Table */}
        <div className="rounded-[16px] bg-dls-surface border border-dls-line-subtle overflow-hidden shadow-xs">
          <div className="px-[20px] py-[12px] bg-dls-surface-container border-b border-dls-line-subtle flex items-center justify-between text-[12px] font-mono">
            <span className="text-dls-txt-primary font-bold">SFCC SCAPI Entity to DLS Contract Field Mapping</span>
            <span className="text-emerald-500">Production Validated</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-[12px] divide-y divide-dls-line-subtle">
              <thead className="bg-dls-canvas text-dls-txt-annotation uppercase text-[10px]">
                <tr>
                  <th className="py-[10px] px-[16px]">SFCC SCAPI Entity</th>
                  <th className="py-[10px] px-[16px]">SFCC Internal Property</th>
                  <th className="py-[10px] px-[16px]">DLS Contract Field</th>
                  <th className="py-[10px] px-[16px]">Type / Fallback Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dls-line-subtle text-dls-txt-secondary">
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[10px] px-[16px] font-bold text-dls-txt-primary">Product</td>
                  <td className="py-[10px] px-[16px]"><code>product.id</code></td>
                  <td className="py-[10px] px-[16px] text-[#8ab4f8]"><code>id</code></td>
                  <td className="py-[10px] px-[16px]">string (Required)</td>
                </tr>
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[10px] px-[16px] font-bold text-dls-txt-primary">ProductPriceTable</td>
                  <td className="py-[10px] px-[16px]"><code>price_book.sale_price</code></td>
                  <td className="py-[10px] px-[16px] text-[#8ab4f8]"><code>currentPriceJPY</code></td>
                  <td className="py-[10px] px-[16px]">number (Tax-Inclusive JPY)</td>
                </tr>
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[10px] px-[16px] font-bold text-dls-txt-primary">VariationModel</td>
                  <td className="py-[10px] px-[16px]"><code>variation_values.color</code></td>
                  <td className="py-[10px] px-[16px] text-[#8ab4f8]"><code>variants[].color.hex</code></td>
                  <td className="py-[10px] px-[16px]">string (Hex 6-char with #)</td>
                </tr>
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[10px] px-[16px] font-bold text-dls-txt-primary">InventoryRecord</td>
                  <td className="py-[10px] px-[16px]"><code>ats.value</code></td>
                  <td className="py-[10px] px-[16px] text-[#8ab4f8]"><code>variants[].inventory.status</code></td>
                  <td className="py-[10px] px-[16px]">in_stock | low_stock | sold_out</td>
                </tr>
                <tr className="hover:bg-dls-surface-elevated">
                  <td className="py-[10px] px-[16px] font-bold text-dls-txt-primary">CustomAttributes</td>
                  <td className="py-[10px] px-[16px]"><code>custom.wash_well_flag</code></td>
                  <td className="py-[10px] px-[16px] text-[#8ab4f8]"><code>provenance.isWashwell</code></td>
                  <td className="py-[10px] px-[16px]">boolean (Default: false)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CROSS-NAVIGATION: MOVE TO AI PROMPTS
         ========================================================= */}
      <section className="relative rounded-[20px] bg-gradient-to-r from-dls-surface via-dls-surface to-[#002554]/30 border border-[#8ab4f8]/30 p-[28px] overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-full bg-[#8ab4f8]/20 text-[#c2e7ff] text-[11px] font-mono mb-[10px]">
              <Sparkles size={12} className="text-[#8ab4f8]" />
              <span>DATA CONTRACTS FORMALIZED</span>
            </div>
            <h3 className="text-[20px] font-bold text-dls-txt-primary mb-[6px]">
              Enforce Contracts in AI Code Generation (Claude / GPT)
            </h3>
            <p className="text-[14px] text-dls-txt-muted leading-[1.6]">
              Learn how to feed these TypeScript contracts and tokens directly into <strong className="text-dls-txt-primary">Enterprise AI System Prompts</strong> to guarantee zero-hallucination code output across offshore engineering sprints.
            </p>
          </div>

          <button
            onClick={() => setActiveSection('prompts')}
            className="px-[22px] py-[12px] rounded-full bg-white hover:bg-[#f1f3f4] text-[#002554] text-[14px] font-bold flex items-center gap-[8px] transition-all cursor-pointer shadow-lg flex-shrink-0"
          >
            <span>Explore AI Prompts</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-[#8ab4f8]/10 rounded-full blur-2xl pointer-events-none" />
      </section>

    </div>
  );
}