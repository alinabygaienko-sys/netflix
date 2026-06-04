/** tailwind.config.js — Netflix Design System theme
 *  Use semantic classes: bg-nf-red, text-muted, rounded-sm, shadow-red, font-display …
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        nf: {
          red: "#E50914",
          "red-dark": "#B20710",
          "red-hover": "#F6121D",
          "red-press": "#C11119",
          black: "#000000",
          white: "#FFFFFF",
        },
        ink: {
          900: "#141414",
          800: "#1B1B1B",
          700: "#232323",
          600: "#2E2E2E",
          500: "#3A3A3A",
        },
        grey: {
          500: "#6D6D6E",
          400: "#808080",
          300: "#B3B3B3",
          200: "#D2D2D2",
          100: "#E5E5E5",
        },
        // semantic aliases
        bg: "#141414",
        "bg-elevated": "#1B1B1B",
        "bg-card": "#232323",
        muted: "#B3B3B3",
        faint: "#6D6D6E",
        success: "#2BD17E",
        warning: "#F5C518",
      },
      fontFamily: {
        sans: ['"Netflix Sans"', "Archivo", "Helvetica Neue", "system-ui", "sans-serif"],
        display: ['"Netflix Sans"', '"Archivo Expanded"', "Archivo", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontWeight: {
        thin: "100", light: "300", regular: "400", medium: "500", bold: "700", black: "900",
      },
      fontSize: {
        display: ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.05" }],
        h1: ["clamp(2.2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05" }],
        h2: ["clamp(1.7rem, 3vw, 2.4rem)", { lineHeight: "1.1" }],
        h3: ["1.5rem", { lineHeight: "1.25" }],
        h4: ["1.18rem", { lineHeight: "1.3" }],
      },
      spacing: {
        1: "4px", 2: "8px", 3: "12px", 4: "16px", 5: "24px",
        6: "32px", 7: "48px", 8: "64px", 9: "96px", 10: "128px",
      },
      borderRadius: {
        none: "0px", sm: "4px", md: "8px", lg: "12px", xl: "20px", full: "999px",
      },
      boxShadow: {
        1: "0 1px 2px rgba(0,0,0,.40)",
        2: "0 4px 14px rgba(0,0,0,.45)",
        3: "0 12px 40px rgba(0,0,0,.60)",
        red: "0 8px 30px rgba(229,9,20,.35)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,.7,.2,1)",
      },
      transitionDuration: {
        fast: "140ms", base: "240ms", slow: "480ms",
      },
    },
  },
  plugins: [],
};
