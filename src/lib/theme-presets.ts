// Theme presets for multi-tenant artisan websites
// Each preset represents a different color scheme for different artisans

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;    // Main brand color (buttons, links, accents)
    secondary: string;  // Hover states, gradients
    accent: string;     // Highlights, badges
    dark: string;       // Text, dark backgrounds
    light: string;      // Background tints
  };
}

export const themePresets: ThemePreset[] = [
  {
    id: "amber",
    name: "Hổ Phách",
    description: "Màu ấm áp, truyền thống - Phù hợp tranh thêu cổ điển",
    colors: {
      primary: "#b45309",    // amber-700
      secondary: "#d97706",  // amber-600
      accent: "#fbbf24",     // amber-400
      dark: "#1c1917",       // stone-900
      light: "#fffbf5",      // warm cream
    },
  },
  {
    id: "emerald",
    name: "Ngọc Lục",
    description: "Màu tự nhiên, thanh bình - Phù hợp phong cảnh, thiên nhiên",
    colors: {
      primary: "#047857",    // emerald-700
      secondary: "#059669",  // emerald-600
      accent: "#34d399",     // emerald-400
      dark: "#064e3b",       // emerald-900
      light: "#ecfdf5",      // emerald-50
    },
  },
  {
    id: "blue",
    name: "Xanh Cobalt",
    description: "Màu chuyên nghiệp, hiện đại - Phù hợp phong cách trẻ trung",
    colors: {
      primary: "#1d4ed8",    // blue-700
      secondary: "#2563eb",  // blue-600
      accent: "#60a5fa",     // blue-400
      dark: "#1e3a8a",       // blue-900
      light: "#eff6ff",      // blue-50
    },
  },
  {
    id: "rose",
    name: "Hồng Đào",
    description: "Màu nữ tính, tinh tế - Phù hợp tranh hoa, phụ kiện",
    colors: {
      primary: "#be123c",    // rose-700
      secondary: "#e11d48",  // rose-600
      accent: "#fb7185",     // rose-400
      dark: "#881337",       // rose-900
      light: "#fff1f2",      // rose-50
    },
  },
  {
    id: "violet",
    name: "Tím Cẩm Thạch",
    description: "Màu sang trọng, nghệ thuật - Phù hợp tranh cao cấp",
    colors: {
      primary: "#7c3aed",    // violet-600
      secondary: "#8b5cf6",  // violet-500
      accent: "#a78bfa",     // violet-400
      dark: "#4c1d95",       // violet-900
      light: "#f5f3ff",      // violet-50
    },
  },
  {
    id: "orange",
    name: "Cam Đất",
    description: "Màu ấm, năng động - Phù hợp phong cách truyền thống Việt",
    colors: {
      primary: "#c2410c",    // orange-700
      secondary: "#ea580c",  // orange-600
      accent: "#fb923c",     // orange-400
      dark: "#7c2d12",       // orange-900
      light: "#fff7ed",      // orange-50
    },
  },
];

// Helper function to get theme preset by ID
export const getThemePreset = (id: string): ThemePreset => {
  return themePresets.find((preset) => preset.id === id) || themePresets[0];
};

// CSS variable mapping for dynamic theming
export const generateCSSVariables = (colors: ThemePreset["colors"]): string => {
  return `
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-accent: ${colors.accent};
    --color-dark: ${colors.dark};
    --color-light: ${colors.light};
  `;
};
