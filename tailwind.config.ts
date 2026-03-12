import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontSize: {
        // Increased base sizes for better readability on larger screens
        // Mobile-first approach: xs and sm remain compact, scales up progressively
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['19px', { lineHeight: '28px' }], // Increased from 18px
        xl: ['22px', { lineHeight: '32px' }], // Increased from 20px
        '2xl': ['28px', { lineHeight: '36px' }], // Increased from 24px
        '3xl': ['32px', { lineHeight: '40px' }], // Increased from 30px
        '4xl': ['38px', { lineHeight: '48px' }], // Increased from 36px
        '5xl': ['48px', { lineHeight: '56px' }], // Increased from 48px
      },
      colors: {
        gold: 'rgb(245, 230, 200)',
        brand: 'rgb(201, 168, 76)',
        midnight: 'rgb(10, 15, 30)',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './messages/**/*.{js,ts,jsx,tsx,json}',
  ],
} satisfies Config;
