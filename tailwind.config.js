/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        violet: {
          1: "hsl(var(--violet-1))",  // background 1
          2: "hsl(var(--violet-2))",  // background 2
          3: "hsl(var(--violet-3))",  // interactive components 1
          4: "hsl(var(--violet-4))",  // interactive components 2
          5: "hsl(var(--violet-5))",  // interactive components 3
          6: "hsl(var(--violet-6))",  // borders and separators 1
          7: "hsl(var(--violet-7))",  // borders and separators 2
          8: "hsl(var(--violet-8))",  // borders and separators 3
          9: "hsl(var(--violet-9))",  // solid 1
          10: "hsl(var(--violet-10))", // solid 2
          11: "hsl(var(--violet-11))", // text secondary
          12: "hsl(var(--violet-12))", // text primary
        },
        gray: {
          1: "hsl(var(--gray-1))",   // background 1
          2: "hsl(var(--gray-2))",   // background 2
          3: "hsl(var(--gray-3))",   // interactive components 1
          4: "hsl(var(--gray-4))",   // interactive components 2
          5: "hsl(var(--gray-5))",   // interactive components 3
          6: "hsl(var(--gray-6))",   // borders and separators 1
          7: "hsl(var(--gray-7))",   // borders and separators 2
          8: "hsl(var(--gray-8))",   // borders and separators 3
          9: "hsl(var(--gray-9))",   // solid 1
          10: "hsl(var(--gray-10))", // solid 2
          11: "hsl(var(--gray-11))", // text secondary
          12: "hsl(var(--gray-12))", // text primary
        },
        mint: {
          DEFAULT: "hsl(var(--mint-text))",
          background: "hsl(var(--mint-bg))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal-text))",
          background: "hsl(var(--teal-bg))",
        },
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}