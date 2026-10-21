// data/tokensData.ts

// =================================================================
// 1. カラー定義（Color System Types & Data）
// =================================================================

export interface ColorScaleStep {
  step: string;
  name: string;
  hex: string;
  variable: string;
  tailwind: string;
  description: string;
  isBase?: boolean;
}

export interface ColorFamily {
  id: string;
  name: string;
  role: string;
  description: string;
  steps: ColorScaleStep[];
}

export interface StaticToken {
  name: string;
  hex: string;
  variable: string;
  tailwind: string;
  description: string;
}

export interface ColorToken {
  name: string;
  variable: string;
  tailwind: string;
  hex: string;
  description: string;
  category: 'Brand Core' | 'Neutral & Dark' | 'Borders & Lines' | 'Functional & Status';
}

// 1-1. Brand Core: GAP Navy (10-Step Scale)
export const gapNavyFamily: ColorFamily = {
  id: 'gap-navy',
  name: 'GAP Navy',
  role: 'Primary Brand Identity',
  description: 'The core heritage blue of GAP Japan. Scaled from ultra-light canvas tint to deep lookbook midnight black.',
  steps: [
    { step: '50', name: 'Navy 50', hex: '#e6f0fa', variable: '--color-gap-navy-50', tailwind: 'bg-gap-navy-50', description: 'Subtle blue tint for active chips and soft category banners.' },
    { step: '100', name: 'Navy 100', hex: '#cce0f5', variable: '--color-gap-navy-100', tailwind: 'bg-gap-navy-100', description: 'Light accent hover containers and secondary selection fills.' },
    { step: '200', name: 'Navy 200', hex: '#99c2eb', variable: '--color-gap-navy-200', tailwind: 'bg-gap-navy-200', description: 'Disabled blue boundaries and low-contrast decorative accents.' },
    { step: '300', name: 'Navy 300', hex: '#66a3e0', variable: '--color-gap-navy-300', tailwind: 'bg-gap-navy-300', description: 'Informational icons, progress bars, and link text states.' },
    { step: '400', name: 'Navy 400', hex: '#3385d6', variable: '--color-gap-navy-400', tailwind: 'bg-gap-navy-400', description: 'Interactive hover highlights and bright digital accents.' },
    { step: '500', name: 'Navy 500', hex: '#0066cc', variable: '--color-gap-navy-500', tailwind: 'bg-gap-navy-500', description: 'Vibrant digital royal blue for interactive focus rings.' },
    { step: '600', name: 'Navy 600', hex: '#00478f', variable: '--color-gap-navy-600', tailwind: 'bg-gap-navy-600', description: 'Mid-tone structural navy for secondary navigation headers.' },
    { step: '700', name: 'Navy 700 (Base)', hex: '#002554', variable: '--color-gap-navy', tailwind: 'bg-gap-navy', isBase: true, description: 'Official Iconic GAP Navy. Primary CTA buttons, brand badges, and logos.' },
    { step: '800', name: 'Navy 800', hex: '#001f42', variable: '--color-gap-navy-800', tailwind: 'bg-gap-navy-800', description: 'Hover and pressed state for primary navy CTA buttons.' },
    { step: '900', name: 'Navy 900 (Deep)', hex: '#001b3d', variable: '--color-gap-navy-deep', tailwind: 'bg-gap-navy-deep', isBase: true, description: 'Deep midnight navy for campaign lookbooks, dark hero blocks, and modals.' },
  ],
};

// 1-2. Neutral: Neutral Gray (10-Step Scale)
export const neutralGrayFamily: ColorFamily = {
  id: 'neutral-gray',
  name: 'Neutral Gray',
  role: 'Surfaces, Text & Structure',
  description: 'Balanced monochromatic grayscale tuned for high contrast in light mode and subtle depth in dark mode.',
  steps: [
    { step: '50', name: 'Gray 50', hex: '#f8f9fa', variable: '--color-gap-gray-50', tailwind: 'bg-gap-gray-50', description: 'Lightest card surface and background tint in light theme.' },
    { step: '100', name: 'Gray 100', hex: '#f2f2f2', variable: '--color-gap-gray-100', tailwind: 'bg-gap-gray-smoke', isBase: true, description: 'Product card image containers and stepper button fills.' },
    { step: '200', name: 'Gray 200', hex: '#e5e5e5', variable: '--color-gap-gray-200', tailwind: 'bg-gap-gray-200', description: 'Dividing rules and accordion borders in light mode.' },
    { step: '300', name: 'Gray 300', hex: '#d1d5db', variable: '--color-gap-gray-300', tailwind: 'bg-gap-gray-300', description: 'Input placeholders and disabled button borders.' },
    { step: '400', name: 'Gray 400', hex: '#9e9e9e', variable: '--color-gap-gray-400', tailwind: 'bg-gap-gray-400', description: 'Tertiary metadata and legal disclaimer captions.' },
    { step: '500', name: 'Gray 500', hex: '#6c757d', variable: '--color-gap-gray-500', tailwind: 'bg-gap-gray-500', description: 'Secondary text annotations and inactive icon states.' },
    { step: '600', name: 'Gray 600', hex: '#555555', variable: '--color-gap-muted', tailwind: 'text-gap-muted', isBase: true, description: 'Product category labels, dimensions, and subtitles.' },
    { step: '700', name: 'Gray 700', hex: '#404040', variable: '--color-gap-gray-700', tailwind: 'bg-gap-gray-700', description: 'Dark surface hover highlights and pill chip strokes.' },
    { step: '800', name: 'Gray 800 (Dark)', hex: '#2b2b2b', variable: '--color-gap-dark', tailwind: 'text-gap-dark', isBase: true, description: 'Default off-black body typography in standard commerce viewports.' },
    { step: '900', name: 'Gray 900 (Black)', hex: '#0b0c10', variable: '--color-gap-black', tailwind: 'bg-gap-black', isBase: true, description: 'Cinematic deep black for dark lookbook viewports and video containers.' },
  ],
};

// 1-3. Functional & Status (5-Step Scales)
export const statusRedFamily: ColorFamily = {
  id: 'status-red',
  name: 'Status Red (Sale / Alerts)',
  role: 'Promotions & Validation',
  description: 'Official GAP promotional red used for discount tags, sale pricing, and error validation.',
  steps: [
    { step: '100', name: 'Red 100', hex: '#fee2e2', variable: '--color-gap-red-100', tailwind: 'bg-red-100', description: 'Light background wash for promotional pill banners.' },
    { step: '300', name: 'Red 300', hex: '#fca5a5', variable: '--color-gap-red-300', tailwind: 'border-red-300', description: 'Error outline boundary on interactive input fields.' },
    { step: '500', name: 'Red 500 (Base)', hex: '#dc3545', variable: '--color-gap-red', tailwind: 'text-gap-red', isBase: true, description: 'Primary GAP sale price text, markdown tags, and urgent alerts.' },
    { step: '700', name: 'Red 700', hex: '#b91c1c', variable: '--color-gap-red-dark', tailwind: 'bg-gap-red-dark', isBase: true, description: 'Hover and pressed state for sale action buttons.' },
    { step: '900', name: 'Red 900', hex: '#7f1d1d', variable: '--color-gap-red-900', tailwind: 'bg-red-900', description: 'Deep dark mode banner background for major clearance events.' },
  ],
};

export const statusGoldFamily: ColorFamily = {
  id: 'status-gold',
  name: 'Status Gold (Ratings)',
  role: 'Reviews & Highlights',
  description: 'Warm amber gold dedicated to product review star ratings and editorial highlights.',
  steps: [
    { step: '100', name: 'Gold 100', hex: '#fef3c7', variable: '--color-gap-gold-100', tailwind: 'bg-amber-100', description: 'Award chip background wash.' },
    { step: '300', name: 'Gold 300', hex: '#fcd34d', variable: '--color-gap-gold-300', tailwind: 'border-amber-300', description: 'Subtle award card stroke.' },
    { step: '500', name: 'Gold 500 (Base)', hex: '#f59e0b', variable: '--color-gap-status-gold', tailwind: 'text-gap-status-gold', isBase: true, description: 'Standard review stars, staff pick badges, and ratings.' },
    { step: '700', name: 'Gold 700', hex: '#b45309', variable: '--color-gap-gold-700', tailwind: 'text-amber-700', description: 'High-contrast text on light gold banners.' },
    { step: '900', name: 'Gold 900', hex: '#78350f', variable: '--color-gap-gold-900', tailwind: 'bg-amber-950', description: 'Deep metallic gold container for premium collections.' },
  ],
};

export const statusGreenFamily: ColorFamily = {
  id: 'status-green',
  name: 'Status Green (In Stock)',
  role: 'Availability & Success',
  description: 'Affirmative green for in-stock inventory indicators and successful checkout confirmations.',
  steps: [
    { step: '100', name: 'Green 100', hex: '#d1fae5', variable: '--color-gap-green-100', tailwind: 'bg-emerald-100', description: 'Positive status pill background.' },
    { step: '300', name: 'Green 300', hex: '#6ee7b7', variable: '--color-gap-green-300', tailwind: 'border-emerald-300', description: 'Success toast boundary.' },
    { step: '500', name: 'Green 500 (Base)', hex: '#10b981', variable: '--color-gap-status-green', tailwind: 'text-gap-status-green', isBase: true, description: 'In-stock inventory dot and size availability confirmation.' },
    { step: '700', name: 'Green 700', hex: '#047857', variable: '--color-gap-green-700', tailwind: 'text-emerald-700', description: 'High-contrast green label text.' },
    { step: '900', name: 'Green 900', hex: '#064e3b', variable: '--color-gap-green-900', tailwind: 'bg-emerald-950', description: 'Deep dark container for verified sustainability notes.' },
  ],
};

// 1-4. Fixed Borders (TokensColor等で参照される境界線トークン)
export const borderTokens: StaticToken[] = [
  {
    name: 'Border Default',
    hex: '#e6e9ef',
    variable: '--color-gap-border',
    tailwind: 'border-gap-border',
    description: 'Subtle gray dividing stroke for product accordions, table rows, and clean card outlines.',
  },
  {
    name: 'Border Dark / Selected',
    hex: '#c5c7d0',
    variable: '--color-gap-border-dark',
    tailwind: 'border-gap-border-dark',
    description: 'High-contrast boundary stroke for selected size chips, active pills, and focused inputs.',
  },
  {
    name: 'Border Subtle (Dark Mode)',
    hex: '#333537',
    variable: '--color-gap-border-subtle',
    tailwind: 'border-[#333537]',
    description: 'Standard boundary stroke across all dark mode surfaces and floating preview panels.',
  },
];

// 1-5. 汎用カラー一覧（下位互換性用）
export const colorTokens: ColorToken[] = [
  {
    name: 'GAP Navy',
    variable: '--color-gap-navy',
    tailwind: 'bg-gap-navy / text-gap-navy',
    hex: '#002554',
    description: 'The primary iconic brand identity color. Used for primary buttons, active states, and brand headers.',
    category: 'Brand Core',
  },
  {
    name: 'GAP Navy Deep',
    variable: '--color-gap-navy-deep',
    tailwind: 'bg-gap-navy-deep',
    hex: '#001b3d',
    description: 'Darkened navy variant for immersive campaign backdrops, dark banners, and hero overlays.',
    category: 'Brand Core',
  },
  {
    name: 'Pure White',
    variable: '--color-white',
    tailwind: 'bg-white / text-white',
    hex: '#ffffff',
    description: 'Standard high-contrast white for light surfaces, primary text on dark backgrounds, and pill CTAs.',
    category: 'Brand Core',
  },
  {
    name: 'GAP Black',
    variable: '--color-gap-black',
    tailwind: 'bg-gap-black / text-gap-black',
    hex: '#0b0c10',
    description: 'Deepest charcoal black engineered for cinematic lookbook viewports and dark mode canvasses.',
    category: 'Brand Core',
  },
  {
    name: 'GAP Dark',
    variable: '--color-gap-dark',
    tailwind: 'text-gap-dark / bg-gap-dark',
    hex: '#2b2b2b',
    description: 'Off-black standard body text color in light mode. Reduces eye strain compared to harsh #000.',
    category: 'Neutral & Dark',
  },
  {
    name: 'GAP Gray Light',
    variable: '--color-gap-gray',
    tailwind: 'bg-gap-gray',
    hex: '#f5f6f8',
    description: 'Subtle cool gray for product card background containers, badges, and hover states.',
    category: 'Neutral & Dark',
  },
  {
    name: 'GAP Gray Smoke',
    variable: '--color-gap-gray-smoke',
    tailwind: 'bg-gap-gray-smoke',
    hex: '#f2f2f2',
    description: 'Soft gray for quantity steppers, secondary button hover states, and input field backgrounds.',
    category: 'Neutral & Dark',
  },
  {
    name: 'GAP Muted Text',
    variable: '--color-gap-muted',
    tailwind: 'text-gap-muted',
    hex: '#555555',
    description: 'Secondary text color for product categories, subtitles, and dimension labels.',
    category: 'Neutral & Dark',
  },
  {
    name: 'Border Default',
    variable: '--color-gap-border',
    tailwind: 'border-gap-border',
    hex: '#e6e9ef',
    description: 'Subtle gray dividing lines for accordions, cards, and structured content tables.',
    category: 'Borders & Lines',
  },
  {
    name: 'Border Dark',
    variable: '--color-gap-border-dark',
    tailwind: 'border-gap-border-dark',
    hex: '#c5c7d0',
    description: 'High-contrast boundary stroke for focused interactive inputs and selected size chips.',
    category: 'Borders & Lines',
  },
  {
    name: 'Status Red (Sale)',
    variable: '--color-gap-red',
    tailwind: 'text-gap-red / bg-gap-red',
    hex: '#dc3545',
    description: 'Official GAP promotional red used exclusively for sale price tags, discount badges, and error states.',
    category: 'Functional & Status',
  },
  {
    name: 'Status Gold (Rating)',
    variable: '--color-gap-status-gold',
    tailwind: 'text-gap-status-gold',
    hex: '#f59e0b',
    description: 'Warm amber gold dedicated to product review star ratings and spotlight awards.',
    category: 'Functional & Status',
  },
  {
    name: 'Status Green (In Stock)',
    variable: '--color-gap-status-green',
    tailwind: 'text-gap-status-green',
    hex: '#10b981',
    description: 'Affirmative green for in-stock indicators, verified authentication badges, and success toasts.',
    category: 'Functional & Status',
  },
];


// =================================================================
// 2. タイポグラフィ定義（Typography Scale Types & Data）
// =================================================================

export interface TypographyScaleItem {
  id: string;
  category: 'Display' | 'Headline' | 'Title' | 'Body' | 'Label';
  level: 'Large' | 'Medium' | 'Small';
  fontSizePx: number;
  fontSizeRem: string;
  lineHeight: number;
  letterSpacing: string;
  baselineWeight: string; // '400' (Regular)
  emphasizedWeight: string; // '700' (Bold)
  roleDescription: string;
  sampleText: string;
}

export const typographyScaleList: TypographyScaleItem[] = [
  // 2-1. Display (Hero & Cinematic Statements)
  {
    id: 'display-large',
    category: 'Display',
    level: 'Large',
    fontSizePx: 50,
    fontSizeRem: '5.0rem',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Reserved for primary campaign hero headlines, seasonal lookbook titles, and major promotional impact numbers.',
    sampleText: 'FALL 2026 HOODIE DAY',
  },
  {
    id: 'display-medium',
    category: 'Display',
    level: 'Medium',
    fontSizePx: 44,
    fontSizeRem: '4.4rem',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Editorial section titles, feature splash introductions, and desktop landing page banners.',
    sampleText: 'HEAVYWEIGHT FLEECE',
  },
  {
    id: 'display-small',
    category: 'Display',
    level: 'Small',
    fontSizePx: 36,
    fontSizeRem: '3.6rem',
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Mobile hero headlines (<769px) and secondary campaign banner titles.',
    sampleText: 'Canvas Artist Series',
  },

  // 2-2. Headline (Section & Category Anchors)
  {
    id: 'headline-large',
    category: 'Headline',
    level: 'Large',
    fontSizePx: 32,
    fontSizeRem: '3.2rem',
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Primary page headers on PLP/PDP and modal title headings.',
    sampleText: 'Signature Collections',
  },
  {
    id: 'headline-medium',
    category: 'Headline',
    level: 'Medium',
    fontSizePx: 28,
    fontSizeRem: '2.8rem',
    lineHeight: 1.3,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Standard category headers, lookbook chapter titles, and accordion group headers.',
    sampleText: 'Henry’s Pizza Collab',
  },
  {
    id: 'headline-small',
    category: 'Headline',
    level: 'Small',
    fontSizePx: 24,
    fontSizeRem: '2.4rem',
    lineHeight: 1.3,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Sub-collection titles, modular card headings, and drawer sheet titles.',
    sampleText: 'Product Specifications',
  },

  // 2-3. Title (Component & Card Hierarchy)
  {
    id: 'title-large',
    category: 'Title',
    level: 'Large',
    fontSizePx: 20,
    fontSizeRem: '2.0rem',
    lineHeight: 1.4,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Featured product card titles, cart item headings, and hero lead captions.',
    sampleText: 'Adult Graphic Pullover',
  },
  {
    id: 'title-medium',
    category: 'Title',
    level: 'Medium',
    fontSizePx: 18,
    fontSizeRem: '1.8rem',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Standard product card names, section sub-headers, and filter group titles.',
    sampleText: 'Relaxed Fit Arch Logo',
  },
  {
    id: 'title-small',
    category: 'Title',
    level: 'Small',
    fontSizePx: 16,
    fontSizeRem: '1.6rem',
    lineHeight: 1.45,
    letterSpacing: '0.01em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Grid item titles, list block names, and navigation drawer links.',
    sampleText: 'Unisex Fit · Heavyweight',
  },

  // 2-4. Body (Reading & Descriptive Content)
  {
    id: 'body-large',
    category: 'Body',
    level: 'Large',
    fontSizePx: 16,
    fontSizeRem: '1.6rem',
    lineHeight: 1.7,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Default reading body text across documentation, campaign narratives, and editorial intros.',
    sampleText: 'Crafted with premium heavyweight French terry fleece engineered for year-round warmth and comfort.',
  },
  {
    id: 'body-medium',
    category: 'Body',
    level: 'Medium',
    fontSizePx: 14,
    fontSizeRem: '1.4rem',
    lineHeight: 1.6,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Standard PDP product descriptions, size fit guides, review comments, and footer copy.',
    sampleText: 'Machine wash cold with like colors. Tumble dry low. 100% sustainably sourced organic cotton blend.',
  },
  {
    id: 'body-small',
    category: 'Body',
    level: 'Small',
    fontSizePx: 12,
    fontSizeRem: '1.2rem',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Secondary metadata, legal disclaimers, shipping terms, and table row content.',
    sampleText: 'Model is 182cm wearing size L. Import duties and local consumption tax included in final pricing.',
  },

  // 2-5. Label (Actionable & Metadata Elements)
  {
    id: 'label-large',
    category: 'Label',
    level: 'Large',
    fontSizePx: 14,
    fontSizeRem: '1.4rem',
    lineHeight: 1.4,
    letterSpacing: '0.06em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Primary CTA button labels, interactive tab navigation items, and pill chips.',
    sampleText: 'EXPLORE THIS CANVAS',
  },
  {
    id: 'label-medium',
    category: 'Label',
    level: 'Medium',
    fontSizePx: 12,
    fontSizeRem: '1.2rem',
    lineHeight: 1.4,
    letterSpacing: '0.08em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'Tag labels, product status indicators, colorway swatches, and size chip buttons.',
    sampleText: 'ONLINE EXCLUSIVE',
  },
  {
    id: 'label-small',
    category: 'Label',
    level: 'Small',
    fontSizePx: 10,
    fontSizeRem: '1.0rem',
    lineHeight: 1.3,
    letterSpacing: '0.12em',
    baselineWeight: 'GapSans-Regular (400)',
    emphasizedWeight: 'GapSans-Bold (700)',
    roleDescription: 'CANVAS badge micro-labels, serial numbers, timestamps, and currency indicators.',
    sampleText: 'CANVAS #01 · LIMITED RELEASE',
  },
];


// =================================================================
// 3. スペーシング定義（Spacing System Types & Data）
// =================================================================

export interface SpacingToken {
  id: string;
  name: string;
  tokenName: string;
  pixels: number;
  rem: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  usageExample: string;
  category: 'Micro' | 'Component' | 'Structural' | 'Section';
}

export const spacingTokensList: SpacingToken[] = [
  // 3-1. Micro Spacing (4px - 8px)
  {
    id: 'space-1',
    name: 'Space 4',
    tokenName: 'gap.space.1',
    pixels: 4,
    rem: '0.4rem',
    tailwindClass: 'p-4 / gap-4',
    cssVariable: '--spacing-gap-1',
    role: 'Micro offset',
    usageExample: 'Icon-to-label inline gaps, tiny badge internal padding, status dot offsets.',
    category: 'Micro',
  },
  {
    id: 'space-2',
    name: 'Space 8',
    tokenName: 'gap.space.2',
    pixels: 8,
    rem: '0.8rem',
    tailwindClass: 'p-8 / gap-8',
    cssVariable: '--spacing-gap-2',
    role: 'Compact gap',
    usageExample: 'Tag chips padding, color swatch spacing, input label margin-bottom.',
    category: 'Micro',
  },

  // 3-2. Component Spacing (12px - 24px)
  {
    id: 'space-3',
    name: 'Space 12',
    tokenName: 'gap.space.3',
    pixels: 12,
    rem: '1.2rem',
    tailwindClass: 'p-12 / gap-12',
    cssVariable: '--spacing-gap-3',
    role: 'Internal module gap',
    usageExample: 'Distance between product title and price, small card internal gutters.',
    category: 'Component',
  },
  {
    id: 'space-4',
    name: 'Space 16 (Base)',
    tokenName: 'gap.space.4',
    pixels: 16,
    rem: '1.6rem',
    tailwindClass: 'p-16 / gap-16',
    cssVariable: '--spacing-gap-4',
    role: 'Mobile gutter & default padding',
    usageExample: 'Standard mobile page margin, standard button padding, accordion body inset.',
    category: 'Component',
  },
  {
    id: 'space-5',
    name: 'Space 20',
    tokenName: 'gap.space.5',
    pixels: 20,
    rem: '2.0rem',
    tailwindClass: 'p-20 / gap-20',
    cssVariable: '--spacing-gap-5',
    role: 'Intermediate inset',
    usageExample: 'Modal dialogue internal padding, drawer container edge gutters.',
    category: 'Component',
  },
  {
    id: 'space-6',
    name: 'Space 24',
    tokenName: 'gap.space.6',
    pixels: 24,
    rem: '2.4rem',
    tailwindClass: 'p-24 / gap-24',
    cssVariable: '--spacing-gap-6',
    role: 'Desktop gutter & card inset',
    usageExample: 'Standard desktop page gutter, editorial card padding, column gap on PLP.',
    category: 'Component',
  },

  // 3-3. Structural Spacing (32px - 48px)
  {
    id: 'space-8',
    name: 'Space 32',
    tokenName: 'gap.space.8',
    pixels: 32,
    rem: '3.2rem',
    tailwindClass: 'p-32 / gap-32',
    cssVariable: '--spacing-gap-8',
    role: 'Sub-section boundary',
    usageExample: 'Vertical space between filter bars and product grids, footer link column gaps.',
    category: 'Structural',
  },
  {
    id: 'space-10',
    name: 'Space 40',
    tokenName: 'gap.space.10',
    pixels: 40,
    rem: '4.0rem',
    tailwindClass: 'p-40 / gap-40',
    cssVariable: '--spacing-gap-10',
    role: 'Major component separation',
    usageExample: 'Distance between media gallery and buy-box panel on PDP viewports.',
    category: 'Structural',
  },
  {
    id: 'space-12',
    name: 'Space 48',
    tokenName: 'gap.space.12',
    pixels: 48,
    rem: '4.8rem',
    tailwindClass: 'p-48 / gap-48',
    cssVariable: '--spacing-gap-12',
    role: 'Section boundary (Mobile)',
    usageExample: 'Vertical rhythm separating distinct campaign stories on mobile viewports.',
    category: 'Structural',
  },

  // 3-4. Section Spacing (64px - 96px)
  {
    id: 'space-16',
    name: 'Space 64',
    tokenName: 'gap.space.16',
    pixels: 64,
    rem: '6.4rem',
    tailwindClass: 'p-64 / gap-64',
    cssVariable: '--spacing-gap-16',
    role: 'Section boundary (Desktop)',
    usageExample: 'Standard desktop vertical rhythm between major landing page feature blocks.',
    category: 'Section',
  },
  {
    id: 'space-20',
    name: 'Space 80',
    tokenName: 'gap.space.20',
    pixels: 80,
    rem: '8.0rem',
    tailwindClass: 'p-80 / gap-80',
    cssVariable: '--spacing-gap-20',
    role: 'Large editorial break',
    usageExample: 'Transition padding before signature collaboration reveal chapters.',
    category: 'Section',
  },
  {
    id: 'space-24',
    name: 'Space 96',
    tokenName: 'gap.space.24',
    pixels: 96,
    rem: '9.6rem',
    tailwindClass: 'p-96 / gap-96',
    cssVariable: '--spacing-gap-24',
    role: 'Hero & chapter transition',
    usageExample: 'Generous negative space below hero video banners and before page footer.',
    category: 'Section',
  },
];


// =================================================================
// 4. レイアウト定義（Layout System Types & Data）
// =================================================================

export interface ContainerTier {
  id: string;
  name: string;
  widthPx: number;
  widthRem: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  recommendedUse: string;
  bleedBehavior: string;
}

export const containerTiersList: ContainerTier[] = [
  {
    id: 'container-narrow',
    name: 'Container Narrow',
    widthPx: 800,
    widthRem: '80.0rem',
    tailwindClass: 'max-w-[800px]',
    cssVariable: '--container-max-narrow',
    role: 'Editorial & Forms',
    recommendedUse: 'Storytelling articles, size & fit calculators, customer reviews, legal disclaimers, checkout forms.',
    bleedBehavior: 'Strictly bounded to prevent excessive line length (optimal reading width 65–75 characters).',
  },
  {
    id: 'container-standard',
    name: 'Container Standard (Base)',
    widthPx: 1200,
    widthRem: '120.0rem',
    tailwindClass: 'max-w-[1200px]',
    cssVariable: '--container-max-standard',
    role: 'Default Storefront',
    recommendedUse: 'Standard PLP product grids (3–4 columns), PDP detail buy-boxes, shopping bag, user accounts.',
    bleedBehavior: 'Aligned 1:1 with Salesforce Commerce Cloud (SFCC) production layout constraints.',
  },
  {
    id: 'container-wide',
    name: 'Container Wide',
    widthPx: 1440,
    widthRem: '144.0rem',
    tailwindClass: 'max-w-[1440px]',
    cssVariable: '--container-max-wide',
    role: 'Featured Campaigns',
    recommendedUse: 'Flagship lookbooks, 5-column product catalogs, horizontal carousel strips, multi-category hubs.',
    bleedBehavior: 'Expands the horizontal viewport while maintaining comfortable breathing margins on 2K monitors.',
  },
  {
    id: 'container-full',
    name: 'Container Full / Bleed',
    widthPx: 1600,
    widthRem: '160.0rem',
    tailwindClass: 'max-w-[1600px] / w-full',
    cssVariable: '--container-max-full',
    role: 'Immersive Scaffolding',
    recommendedUse: 'Hero video banners, interactive Lookbook 3D modules, brand ticker strips, immersive headers.',
    bleedBehavior: 'Full-bleed background color/media with internal text and interactive elements locked to page gutters.',
  },
];

export interface ResponsiveGridTier {
  breakpointName: string;
  query: string;
  columns: number;
  gutterPx: number;
  gutterRem: string;
  marginPx: number;
  marginRem: string;
  targetDevice: string;
  behaviorNote: string;
}

export const responsiveGridList: ResponsiveGridTier[] = [
  {
    breakpointName: 'Desktop Large',
    query: '>= 992px (lg, xl, 2xl)',
    columns: 12,
    gutterPx: 24,
    gutterRem: '2.4rem',
    marginPx: 32,
    marginRem: '3.2rem',
    targetDevice: 'Desktop monitors & workstations',
    behaviorNote: '12-column symmetrical layout supporting complex asymmetric merchandising and multi-column filters.',
  },
  {
    breakpointName: 'Tablet / Compact Desktop',
    query: '769px – 991px (md)',
    columns: 8,
    gutterPx: 16,
    gutterRem: '1.6rem',
    marginPx: 24,
    marginRem: '2.4rem',
    targetDevice: 'iPads, tablets, small laptops',
    behaviorNote: '8-column grid collapsing sidebars into top expandable filters while retaining 2-to-3 column cards.',
  },
  {
    breakpointName: 'Mobile Viewport',
    query: '< 769px (sm, base)',
    columns: 4,
    gutterPx: 16,
    gutterRem: '1.6rem',
    marginPx: 16,
    marginRem: '1.6rem',
    targetDevice: 'Smartphones (iPhone / Android)',
    behaviorNote: 'SFCC threshold boundary. Strictly converts multi-column rows into sequential vertical stack flows.',
  },
];

export interface MobileSequenceStep {
  step: number;
  elementName: string;
  semanticRole: string;
  technicalRule: string;
  rationale: string;
}

export const mobileSequenceStepsList: MobileSequenceStep[] = [
  {
    step: 1,
    elementName: 'Visual Media Canvas',
    semanticRole: 'Thumbnail Image / Video Loop (3:4 ratio)',
    technicalRule: 'Width: 100%, object-contain, aspect-ratio locked. Full bleed inside column safe-margin.',
    rationale: 'Apparel commerce conversions rely on instant visual impact. Media must precede all descriptive text.',
  },
  {
    step: 2,
    elementName: 'Badge & Collaboration Tag',
    semanticRole: 'CANVAS Badge / Category Label',
    technicalRule: 'Margin-top: 12px (space-3), font-mono, tracking-widest, all-caps.',
    rationale: 'Establishes instant context (e.g., CANVAS #01 · Limited Edition) before the shopper reads the product title.',
  },
  {
    step: 3,
    elementName: 'Product Title & Story Narrative',
    semanticRole: 'H3 Heading + Location Tag',
    technicalRule: 'Margin-top: 4px (space-1), font-weight: 700/900, max-lines: 2 (line-clamp).',
    rationale: 'Delivers product identity cleanly without pushing price and primary actions below the initial scroll fold.',
  },
  {
    step: 4,
    elementName: 'Pricing & Availability Status',
    semanticRole: 'Price Tag (JPY) + In-Stock Indicator',
    technicalRule: 'Margin-top: 6px, font-mono bold price, status green indicator dot.',
    rationale: 'Provides transparent commercial decision data directly above the actionable conversion button.',
  },
  {
    step: 5,
    elementName: 'Interactive Pill CTA',
    semanticRole: 'Full-Width Action Button',
    technicalRule: 'Margin-top: 14px, rounded-full (9999px), height: 44px (touch target compliant).',
    rationale: 'Full-width thumb-friendly conversion button providing an unobstructed primary touch target on mobile viewports.',
  },
];

// data/tokensData.ts の末尾に追記

// =================================================================
// 5. 角丸・エレベーション定義（Border Radius & Elevation）
// =================================================================

export interface RadiusToken {
  id: string;
  name: string;
  pixels: number | '9999px';
  tailwindClass: string;
  cssVariable: string;
  role: string;
  usageExample: string;
  isBrandPill?: boolean;
}

export const radiusTokensList: RadiusToken[] = [
  {
    id: 'radius-none',
    name: 'Sharp (None)',
    pixels: 0,
    tailwindClass: 'rounded-none',
    cssVariable: '--radius-gap-none',
    role: 'Full-bleed Banners & Structural Grids',
    usageExample: 'Hero full-bleed visual cards, split divider lines, table cell boundaries.',
  },
  {
    id: 'radius-xs',
    name: 'Micro (2px)',
    pixels: 2,
    tailwindClass: 'rounded-[2px]',
    cssVariable: '--radius-gap-xs',
    role: 'Micro Badges & Chips',
    usageExample: 'Compact stock status tags, colorway swatch borders, serial micro-chips.',
  },
  {
    id: 'radius-sm',
    name: 'Small / Base (4px)',
    pixels: 4,
    tailwindClass: 'rounded-[4px]',
    cssVariable: '--radius-gap-sm',
    role: 'Official Architectural Base',
    usageExample: 'Official GAP Card radius. Product cards, modals, drawers, input fields, accordion panels.',
  },
  {
    id: 'radius-md',
    name: 'Medium (8px)',
    pixels: 8,
    tailwindClass: 'rounded-[8px]',
    cssVariable: '--radius-gap-md',
    role: 'Flyouts & Menus',
    usageExample: 'Search autocomplete popovers, settings dropdowns, filter drawer internal panels.',
  },
  {
    id: 'radius-lg',
    name: 'Large (16px)',
    pixels: 16,
    tailwindClass: 'rounded-[16px]',
    cssVariable: '--radius-gap-lg',
    role: 'Promotional Sheets & Dialogs',
    usageExample: 'Promotional modal windows, bottom sheets on mobile, floating toast wrappers.',
  },
  {
    id: 'radius-full',
    name: 'Iconic Pill (9999px)',
    pixels: '9999px',
    tailwindClass: 'rounded-full',
    cssVariable: '--radius-gap-pill',
    role: 'Iconic Brand CTAs',
    usageExample: 'Iconic GAP Pill CTA buttons, filter pill chips, user avatar containers, status bubbles.',
    isBrandPill: true,
  },
];

export interface ElevationToken {
  id: string;
  level: string;
  name: string;
  boxShadow: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  usageExample: string;
}

export const elevationTokensList: ElevationToken[] = [
  {
    id: 'elevation-0',
    level: 'Level 0',
    name: 'Flat / Border-Only',
    boxShadow: 'none',
    tailwindClass: 'shadow-none border border-dls-line-subtle',
    cssVariable: '--elevation-gap-0',
    role: 'Default Surface Plane',
    usageExample: 'Default resting state of product cards, documentation tables, static layout grids.',
  },
  {
    id: 'elevation-1',
    level: 'Level 1',
    name: 'Subtle Hover Lift',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    tailwindClass: 'shadow-sm',
    cssVariable: '--elevation-gap-1',
    role: 'Interactive Hover Inset',
    usageExample: 'Hover state for product cards, active filter chips, tooltip bubbles.',
  },
  {
    id: 'elevation-2',
    level: 'Level 2',
    name: 'Floating Overlays',
    boxShadow: '0 8px 24px rgba(0,0,0,0.20)',
    tailwindClass: 'shadow-lg',
    cssVariable: '--elevation-gap-2',
    role: 'Context Menus & Drawers',
    usageExample: 'Header search autocomplete drawers, size selection menus, cart preview toasts.',
  },
  {
    id: 'elevation-3',
    level: 'Level 3',
    name: 'Modal Dialogs',
    boxShadow: '0 16px 48px rgba(0,0,0,0.32)',
    tailwindClass: 'shadow-2xl',
    cssVariable: '--elevation-gap-3',
    role: 'Modal Overlays & Alerts',
    usageExample: 'Virtual Try-On modal dialogs, cookie consent banners, zoom lightbox viewports.',
  },
  {
    id: 'elevation-glow',
    level: 'Spotlight',
    name: 'Signature Ambient Glow',
    boxShadow: '0 0 16px 2px rgba(138,180,248,0.28)',
    tailwindClass: 'shadow-[0_0_16px_rgba(138,180,248,0.25)]',
    cssVariable: '--elevation-gap-glow',
    role: 'Brand Spotlight & Focus',
    usageExample: 'Active input focus rings, featured promotional badges, Virtual Try-On trigger hover.',
  },
];

// data/tokensData.ts の末尾に追記

// =================================================================
// 6. ブレイクポイント＆SFCC実装定義（Breakpoints & SFCC Architecture）
// =================================================================

export interface SfccBreakpointItem {
  id: string;
  name: string;
  tokenName: string;
  minWidth: number | null;
  maxWidth: number | null;
  tailwindPrefix: string;
  mediaQuery: string;
  targetDevice: string;
  sfccRole: string;
  criticalShift: string;
}

export const sfccBreakpointsList: SfccBreakpointItem[] = [
  {
    id: 'bp-sm',
    name: 'Small (Mobile Pocket)',
    tokenName: '--breakpoint-sm',
    minWidth: 544,
    maxWidth: 768,
    tailwindPrefix: 'sm:',
    mediaQuery: '@media (min-width: 544px)',
    targetDevice: 'Standard & Large Smartphones (iPhone Pro Max, Pixel)',
    sfccRole: 'Compact Handheld Viewport',
    criticalShift: 'PLP grids expand from single-column list into compact 2-column card sequence.',
  },
  {
    id: 'bp-md',
    name: 'Medium (SFCC Cutoff Base)',
    tokenName: '--breakpoint-md',
    minWidth: 769,
    maxWidth: 991,
    tailwindPrefix: 'md:',
    mediaQuery: '@media (min-width: 769px)',
    targetDevice: 'iPads, Tablets, Portrait Surface devices',
    sfccRole: 'CRITICAL ARCHITECTURAL BOUNDARY',
    criticalShift: 'Navigation transitions from full-screen mobile drawer to desktop top navbar. Filters shift from slide-in drawer to horizontal toolbar.',
  },
  {
    id: 'bp-lg',
    name: 'Large (Standard Desktop)',
    tokenName: '--breakpoint-lg',
    minWidth: 992,
    maxWidth: 1199,
    tailwindPrefix: 'lg:',
    mediaQuery: '@media (min-width: 992px)',
    targetDevice: 'Compact laptops, 13-inch MacBooks',
    sfccRole: 'Primary E-Commerce Grid',
    criticalShift: 'Grid expands to 12 columns. PDP splits into dual-pane sticky buy-box on right and media gallery on left.',
  },
  {
    id: 'bp-xl',
    name: 'Extra Large (Base Container)',
    tokenName: '--breakpoint-xl',
    minWidth: 1200,
    maxWidth: 1399,
    tailwindPrefix: 'xl:',
    mediaQuery: '@media (min-width: 1200px)',
    targetDevice: 'Standard Desktop Displays, External Monitors',
    sfccRole: 'SFCC Default Container Max-Width',
    criticalShift: 'Locks storefront width to 1200px container-standard. Margins become auto-centering margins.',
  },
  {
    id: 'bp-2xl',
    name: 'Double Extra Large (Wide)',
    tokenName: '--breakpoint-2xl',
    minWidth: 1400,
    maxWidth: 1599,
    tailwindPrefix: '2xl:',
    mediaQuery: '@media (min-width: 1400px)',
    targetDevice: 'Wide 2K Desktop Screens & Workstations',
    sfccRole: 'Campaign & Lookbook Canvas',
    criticalShift: 'Unlocks container-wide (1440px) for lookbooks, expanding PLP grids to 4 or 5 columns.',
  },
  {
    id: 'bp-3xl',
    name: 'Triple Extra Large (Full Bleed)',
    tokenName: '--breakpoint-3xl',
    minWidth: 1600,
    maxWidth: null,
    tailwindPrefix: '3xl:',
    mediaQuery: '@media (min-width: 1600px)',
    targetDevice: 'Ultra-wide & 4K Displays',
    sfccRole: 'Immersive Scaffolding Boundary',
    criticalShift: 'Caps content containers at 1600px while full-bleed video backgrounds extend to 100vw.',
  },
];

export interface SfccBehaviorRule {
  componentName: string;
  mobileBehavior: string;    // < 769px
  tabletBehavior: string;    // 769px - 991px
  desktopBehavior: string;   // >= 992px
  technicalDirective: string;
}

export const sfccBehaviorRulesList: SfccBehaviorRule[] = [
  {
    componentName: 'Global Header & Navigation',
    mobileBehavior: 'Sticky bar (52px), hamburger trigger, logo centered, slide-out full-screen menu drawer.',
    tabletBehavior: 'Compressed text navigation links, inline search bar, category overflow pills.',
    desktopBehavior: 'Full tier-1 mega menu, full search bar with autocomplete dropdown, persistent user account utilities.',
    technicalDirective: 'Use md:hidden on hamburger button; use hidden md:flex for standard nav-list.',
  },
  {
    componentName: 'Product Listing Page (PLP) Grid',
    mobileBehavior: 'Strict 2-column grid, compact image cards, hidden descriptive bullet copy, full-width bottom filter trigger.',
    tabletBehavior: '3-column responsive grid, visible colorway swatches, top expandable filter accordion bar.',
    desktopBehavior: '3 or 4-column balanced grid, sticky left-hand faceted sidebar filters, on-hover quick buy trigger.',
    technicalDirective: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 with gap-16 lg:gap-24.',
  },
  {
    componentName: 'Product Detail Page (PDP) Layout',
    mobileBehavior: '1-column vertical sequence: Horizontal swipeable image carousel (3:4 ratio) stacked above buy-box and sticky bottom CTA bar.',
    tabletBehavior: 'Side-by-side balanced 2-column layout. Image carousel occupies 50% width.',
    desktopBehavior: 'Asymmetric 2-column layout: 7-column media gallery (vertical scroll list) + 5-column sticky purchase buy-box.',
    technicalDirective: 'flex flex-col lg:grid lg:grid-cols-12 gap-24 lg:gap-40 with sticky top-80 on buy-box.',
  },
  {
    componentName: 'Storefront Footer',
    mobileBehavior: 'Collapsible single-column accordions with plus/minus toggles, centered copyright and app badge links.',
    tabletBehavior: '2-column expanded link groups, horizontal customer care and newsletter subscription panel.',
    desktopBehavior: '4-column expanded multi-level site directory, horizontal social iconography, localized currency selector.',
    technicalDirective: 'Accordion items forced open on desktop using md:block and pointer-events-none on desktop triggers.',
  },
];

// data/tokensData.ts の末尾に追記

// =================================================================
// 7. アスペクト比定義（Aspect Ratio Tokens & Media Standards）
// =================================================================

export interface AspectRatioToken {
  id: string;
  name: string;
  ratio: string;
  ratioDecimal: number;
  tailwindClass: string;
  cssProperty: string;
  role: string;
  commerceUsage: string;
  isApparelDefault?: boolean;
}

export const aspectRatioTokensList: AspectRatioToken[] = [
  {
    id: 'aspect-portrait',
    name: 'Portrait (3:4)',
    ratio: '3/4',
    ratioDecimal: 0.75,
    tailwindClass: 'aspect-[3/4]',
    cssProperty: 'aspect-ratio: 3 / 4;',
    role: 'Apparel Product Core Standard',
    commerceUsage: 'Official GAP Product Cards, model lookbook shots, PDP image gallery slides. Enforces vertical elegance and prevents PLP masonry grid misalignment.',
    isApparelDefault: true,
  },
  {
    id: 'aspect-square',
    name: 'Square (1:1)',
    ratio: '1/1',
    ratioDecimal: 1.0,
    tailwindClass: 'aspect-square',
    cssProperty: 'aspect-ratio: 1 / 1;',
    role: 'Accessories & Geometric Art',
    commerceUsage: 'Footwear, bags, hats, colorway swatch detail zooms, system hero banners, and symmetrical category navigation tiles.',
  },
  {
    id: 'aspect-story',
    name: 'Story / Vertical Video (9:16)',
    ratio: '9/16',
    ratioDecimal: 0.5625,
    tailwindClass: 'aspect-[9/16]',
    cssProperty: 'aspect-ratio: 9 / 16;',
    role: 'Mobile Full-Bleed Media',
    commerceUsage: 'Mobile lookbook reels, vertical product video loops, try-on camera previews, and smartphone-optimized campaign vignettes.',
  },
  {
    id: 'aspect-landscape',
    name: 'Landscape (4:3)',
    ratio: '4/3',
    ratioDecimal: 1.333,
    tailwindClass: 'aspect-[4/3]',
    cssProperty: 'aspect-ratio: 4 / 3;',
    role: 'Editorial & Storytelling Cards',
    commerceUsage: 'Feature article banners, collaboration lookbook landscape tiles, store interior photography, and magazine editorial layouts.',
  },
  {
    id: 'aspect-cinematic',
    name: 'Cinematic Widescreen (16:9)',
    ratio: '16/9',
    ratioDecimal: 1.777,
    tailwindClass: 'aspect-video',
    cssProperty: 'aspect-ratio: 16 / 9;',
    role: 'Hero Banners & Campaign Film',
    commerceUsage: 'Seasonal campaign lookbook videos, flagship brand hero players, desktop video loops, and modal video embeds.',
  },
  {
    id: 'aspect-ultrawide',
    name: 'Ultra-wide Panorama (21:9)',
    ratio: '21/9',
    ratioDecimal: 2.333,
    tailwindClass: 'aspect-[21/9]',
    cssProperty: 'aspect-ratio: 21 / 9;',
    role: 'Panoramic Scaffolding Strips',
    commerceUsage: 'Full-bleed desktop hero transition banners, promotional ticker backgrounds, and mega-brand lookbook horizontal dividers.',
  },
];
// data/tokensData.ts の末尾に追記

// =================================================================
// 8. モーション＆イージング定義（Motion Durations & Transition Curves）
// =================================================================

export interface MotionDurationToken {
  id: string;
  name: string;
  durationMs: number;
  durationCss: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  usageExample: string;
}

export const motionDurationTokensList: MotionDurationToken[] = [
  {
    id: 'motion-instant',
    name: 'Instant (100ms)',
    durationMs: 100,
    durationCss: '100ms',
    tailwindClass: 'duration-100',
    cssVariable: '--duration-gap-instant',
    role: 'Micro State Reaction',
    usageExample: 'Button active pressed scale, icon hover color shifts, swatch selection highlights.',
  },
  {
    id: 'motion-fast',
    name: 'Fast (200ms)',
    durationMs: 200,
    durationCss: '200ms',
    tailwindClass: 'duration-200',
    cssVariable: '--duration-gap-fast',
    role: 'Standard UI State Toggle',
    usageExample: 'Dropdown menu popovers, tooltip fades, accordion header arrows, dark/light theme color crossfades.',
  },
  {
    id: 'motion-normal',
    name: 'Normal (300ms)',
    durationMs: 300,
    durationCss: '300ms',
    tailwindClass: 'duration-300',
    cssVariable: '--duration-gap-normal',
    role: 'Surface Expansion & Collapse',
    usageExample: 'Mobile drawer sheet slide-in, accordion body height transitions, filter drawer side-sliding.',
  },
  {
    id: 'motion-slow',
    name: 'Slow (500ms)',
    durationMs: 500,
    durationCss: '500ms',
    tailwindClass: 'duration-500',
    cssVariable: '--duration-gap-slow',
    role: 'Major Layout & Carousel Shift',
    usageExample: 'PLP product image cross-fading, hero lookbook slide animations, virtual try-on full-screen modal scale.',
  },
  {
    id: 'motion-deliberate',
    name: 'Deliberate (800ms)',
    durationMs: 800,
    durationCss: '800ms',
    tailwindClass: 'duration-700',
    cssVariable: '--duration-gap-deliberate',
    role: 'Editorial Storytelling Transitions',
    usageExample: 'Seasonal campaign video curtain reveal, brand ticker entry fades, Lookbook 3D camera pan animations.',
  },
];

export interface MotionCurveToken {
  id: string;
  name: string;
  timingFunction: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  usageExample: string;
  isDefault?: boolean;
}

export const motionCurveTokensList: MotionCurveToken[] = [
  {
    id: 'curve-standard',
    name: 'Standard (M3 Natural Ease)',
    timingFunction: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    tailwindClass: 'ease-[cubic-bezier(0.2,0.0,0,1.0)]',
    cssVariable: '--ease-gap-standard',
    role: 'Default On-Screen Motion',
    usageExample: 'Elements moving within viewport boundaries: accordion expansion, tab underline sliding, color swatch focus.',
    isDefault: true,
  },
  {
    id: 'curve-enter',
    name: 'Deceleration (Entering Screen)',
    timingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1.0)',
    tailwindClass: 'ease-out',
    cssVariable: '--ease-gap-enter',
    role: 'Entrance & Inflow Transitions',
    usageExample: 'Modal dialog appearance, bottom navigation sheet rise, flyout notifications entering from screen edge.',
  },
  {
    id: 'curve-exit',
    name: 'Acceleration (Exiting Screen)',
    timingFunction: 'cubic-bezier(0.4, 0.0, 1.0, 1.0)',
    tailwindClass: 'ease-in',
    cssVariable: '--ease-gap-exit',
    role: 'Exit & Dismissal Transitions',
    usageExample: 'Drawer sliding off-screen, modal closing backdrop dismiss, toast fading out.',
  },
  {
    id: 'curve-spring',
    name: 'Spring / Brand Pop',
    timingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1.0)',
    tailwindClass: 'ease-[cubic-bezier(0.34,1.56,0.64,1.0)]',
    cssVariable: '--ease-gap-spring',
    role: 'Affirmative Action Delight',
    usageExample: 'Wishlist heart icon pop, cart count bubble increment, promotional discount badge reveal.',
  },
  {
    id: 'curve-linear',
    name: 'Linear (Constant Velocity)',
    timingFunction: 'linear',
    tailwindClass: 'ease-linear',
    cssVariable: '--ease-gap-linear',
    role: 'Continuous Running Motion',
    usageExample: 'Infinite promotional ticker marquees, video playhead scrubbers, circular loading spinners.',
  },
];
// data/tokensData.ts の末尾に追記

// =================================================================
// 9. 不透明度定義（Opacity Tokens & Surface Translucency）
// =================================================================

export interface OpacityToken {
  id: string;
  name: string;
  valueDecimal: number;
  percentage: string;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  commerceUsage: string;
  isBase?: boolean;
}

export const opacityTokensList: OpacityToken[] = [
  {
    id: 'opacity-transparent',
    name: 'Transparent (0%)',
    valueDecimal: 0,
    percentage: '0%',
    tailwindClass: 'opacity-0',
    cssVariable: '--opacity-gap-0',
    role: 'Hidden State & Initial Keyframes',
    commerceUsage: 'Initial state for fade-in animations, hidden floating action buttons, transparent gradient boundaries.',
  },
  {
    id: 'opacity-faint',
    name: 'Faint Tint (4%)',
    valueDecimal: 0.04,
    percentage: '4%',
    tailwindClass: 'opacity-[0.04]',
    cssVariable: '--opacity-gap-4',
    role: 'Subtle Surface Wash',
    commerceUsage: 'Light mode zebra-striping on product attribute tables, delicate container tint in dark lookbooks.',
  },
  {
    id: 'opacity-subtle',
    name: 'Subtle (8%)',
    valueDecimal: 0.08,
    percentage: '8%',
    tailwindClass: 'opacity-[0.08]',
    cssVariable: '--opacity-gap-8',
    role: 'Hover States & Tap Highlights',
    commerceUsage: 'Desktop cursor hover highlight on table rows, secondary button hover states, interactive chip tap feedback.',
  },
  {
    id: 'opacity-muted',
    name: 'Muted Border (20%)',
    valueDecimal: 0.20,
    percentage: '20%',
    tailwindClass: 'opacity-20',
    cssVariable: '--opacity-gap-20',
    role: 'Secondary Lines & Decorative Glows',
    commerceUsage: 'Subtle dividers across dark cards, outer glow rings for Virtual Try-On trigger, low-contrast placeholder boundaries.',
  },
  {
    id: 'opacity-disabled',
    name: 'Disabled / Deactivated (40%)',
    valueDecimal: 0.40,
    percentage: '40%',
    tailwindClass: 'opacity-40',
    cssVariable: '--opacity-gap-40',
    role: 'Inactive Component State',
    commerceUsage: 'Disabled CTA buttons, out-of-stock colorway swatches, non-interactive stepper controls, inactive pagination arrows.',
    isBase: true,
  },
  {
    id: 'opacity-scrim',
    name: 'Modal Scrim / Backdrop (60%)',
    valueDecimal: 0.60,
    percentage: '60%',
    tailwindClass: 'opacity-60',
    cssVariable: '--opacity-gap-60',
    role: 'Dialog Scrim & Overlay Mask',
    commerceUsage: 'Official background scrim darkening the page behind modals, mobile drawer backdrops, and size chart popovers.',
    isBase: true,
  },
  {
    id: 'opacity-frosted',
    name: 'Frosted Glass / Elevated Sheet (85%)',
    valueDecimal: 0.85,
    percentage: '85%',
    tailwindClass: 'opacity-85',
    cssVariable: '--opacity-gap-85',
    role: 'Glassmorphism & Sticky Controls',
    commerceUsage: 'Sticky bottom buy-bar on mobile PDP with backdrop-blur, floating header background during scroll.',
  },
  {
    id: 'opacity-solid',
    name: 'Solid (100%)',
    valueDecimal: 1.0,
    percentage: '100%',
    tailwindClass: 'opacity-100',
    cssVariable: '--opacity-gap-100',
    role: 'Full Opaque Surface',
    commerceUsage: 'Standard reading surfaces, modal cards, full-contrast typography, completely rendered assets.',
  },
];
// data/tokensData.ts の末尾に追記

// =================================================================
// 10. Z-Index 階層定義（Z-Index Layers & Spatial Stacking）
// =================================================================

export interface ZIndexToken {
  id: string;
  name: string;
  zIndexValue: number;
  tailwindClass: string;
  cssVariable: string;
  role: string;
  commerceUsage: string;
  isBase?: boolean;
}

export const zIndexTokensList: ZIndexToken[] = [
  {
    id: 'z-base',
    name: 'Base Surface (0)',
    zIndexValue: 0,
    tailwindClass: 'z-0',
    cssVariable: '--z-gap-base',
    role: 'Default Document Flow',
    commerceUsage: 'Standard grid content, product cards in resting state, non-positioned background text.',
  },
  {
    id: 'z-raised',
    name: 'Raised / Card Focus (10)',
    zIndexValue: 10,
    tailwindClass: 'z-10',
    cssVariable: '--z-gap-raised',
    role: 'Hover Elevation & Selected Cards',
    commerceUsage: 'Active hovered product card card-zoom, selected colorway chip focus boundary, floating micro-badges.',
  },
  {
    id: 'z-sticky',
    name: 'Sticky Scaffold (50)',
    zIndexValue: 50,
    tailwindClass: 'z-50',
    cssVariable: '--z-gap-sticky',
    role: 'Persistent Navigation Scaffolding',
    commerceUsage: 'Global top navigation header, sticky product buy-box panel on desktop PDP, sticky bottom CTA bar on mobile.',
    isBase: true,
  },
  {
    id: 'z-scrim',
    name: 'Overlay Scrim (100)',
    zIndexValue: 100,
    tailwindClass: 'z-[100]',
    cssVariable: '--z-gap-scrim',
    role: 'Backdrop Masking Plane',
    commerceUsage: 'Dark translucent backdrop mask behind modals, slide-out cart drawers, and mobile navigation sheets.',
    isBase: true,
  },
  {
    id: 'z-drawer',
    name: 'Slide-Out Drawer (200)',
    zIndexValue: 200,
    tailwindClass: 'z-[200]',
    cssVariable: '--z-gap-drawer',
    role: 'Off-Canvas Sliding Panels',
    commerceUsage: 'Mobile hamburger menu drawer, mini-cart slide-out panel, PLP facet filtering sidebar sheet.',
  },
  {
    id: 'z-modal',
    name: 'Modal Dialog (300)',
    zIndexValue: 300,
    tailwindClass: 'z-[300]',
    cssVariable: '--z-gap-modal',
    role: 'Critical Blocking Overlays',
    commerceUsage: 'Virtual Try-On camera viewports, size & fit guide dialogs, customer address management modals.',
  },
  {
    id: 'z-popover',
    name: 'Popover & Tooltips (400)',
    zIndexValue: 400,
    tailwindClass: 'z-[400]',
    cssVariable: '--z-gap-popover',
    role: 'Floating Contextual Menus',
    commerceUsage: 'Header search autocomplete drop-up/down, size selector popover chips, tooltip contextual bubbles.',
  },
  {
    id: 'z-toast',
    name: 'Toast & System Alert (500)',
    zIndexValue: 500,
    tailwindClass: 'z-[500]',
    cssVariable: '--z-gap-toast',
    role: 'Highest Priority System Level',
    commerceUsage: 'Cart addition success toasts, network disconnect banners, urgent stock inventory flash messages.',
  },
];