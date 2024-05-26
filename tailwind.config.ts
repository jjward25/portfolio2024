import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: {
        quoteless: {
          css: {
            
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: false,
  },
  variants: {
    text: ['hover', 'focus'], // this line does the trick
  },
  plugins: [typography],
} satisfies Config;
