const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        "actions-bar": "var(--global-actions-bar-height, 56px)",
        "main-container-height": "calc(100% - var(--global-actions-bar-height, 56px))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      zIndex: {
        "top-bar": "10",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-w-down": {
          from: { width: 0 },
          to: { width: "var(--radix-collapsible-content-width)" },
        },
        "collapsible-w-up": {
          from: { width: "var(--radix-collapsible-content-width)" },
          to: { width: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-w-down": "collapsible-w-down 0.2s ease-out",
        "collapsible-w-up": "collapsible-w-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".tml-container": {
          marginInline: "max(0px, 50% - 360px / 2)",
          [`@media (min-width: ${theme("screens.sm")})`]: {
            marginInline: "max(0px, 50% - 640px / 2)",
          },
          [`@media (min-width: ${theme("screens.md")})`]: {
            marginInline: "max(0px, 50% - 720px / 2)",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            marginInline: "max(0px, 50% - 900px / 2)",
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            marginInline: "max(0px, 50% - 1120px / 2)",
          },
          [`@media (min-width: ${theme("screens.2xl")})`]: {
            marginInline: "max(0px, 50% - 1320px / 2)",
          },
        },
      });
    }),
  ],
};
