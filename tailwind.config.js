/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2em',
    },
    extend: {
      colors: {
        primary: withOpacityValue('--color-primary'),
        contrast: withOpacityValue('--color-contrast'),
        notice: withOpacityValue('--color-accent'),
        shopPay: 'var(--color-shop-pay)',
        'dark-blue': '#174860',
        '8c8c8c': '#8c8c8c',
        f7: '#f7f7f7',
        gold: '#B09987',
        'light-gray': '#e4e8e9',
        'white-hover': '#cbb29e',
        border: '#dee2e6',
        '5799B9': '#5799B9',
        174860: '#174860',
        D09467: '#D09467',
        B09987: '#B09987',
        E4E4E4: '#E4E4E4',
        B5B5B4: '#B5B5B4',
        '2f88b1': '#2f88b1',
        b09987: '#b09987',
        'test-selected': '#3489AF',
        'test-header': '#9fcee3',
      },
      screens: {
        sm: '512px',        // 32em
        md: '768px',        // 48em
        lg: '992px',        // 62em
        xl: '1200px',       // 75em
        '2xl': '1536px',    // 96em
        xxl: '1280px',      // 80em
        '3xl': '1680px',    // 105em
        xxxl: '1920px',     // 120em
        'sm-max': { max: '768px' },        // 48em
        'sm-only': { min: '512px', max: '768px' }, // 32em to 48em
        'md-only': { min: '768px', max: '992px' }, // 48em to 62em
        'lg-only': { min: '992px', max: '1200px' }, // 62em to 75em
        'xl-only': { min: '1200px', max: '1536px' }, // 75em to 96em
        '2xl-only': { min: '1536px' },    // 96em
    },    
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        'wide-sticky': '112px',
        'narrow-sticky': '65px',
        '2px': '2px',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
        'screen-no-nav-mobile': 'calc(100vh - 65px)',
        'screen-no-nav-desktop': 'calc(100vh - 112px)',
        'banner-sm': '850px',
        banner: 'calc(100vh - 150px)',
        test: 'calc(100vh - 60px)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
        'footer-button': '87px',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
        xxs: '11px',
        10: '10px',
        14: '14px',
        8: '8px',
        50: '50px',
        28: '28px',
        subheading: 'calc(1.325rem + .9vw)',
        cusheading: 'calc(1.375rem + 1.5vw)',
        cusSubheading: 'calc(1.3rem + .6vw)',
        text: '1.1rem',
        '8xl': ['68px', '50px'],
        'x-large': '180px',
        'mod-link': '0.875em',
      },
      maxWidth: {
        xxs: '200px',
        lg: '60em',
        '7xl': '82.5em',
        '3xl': '71.25em',
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
        'footer-logo': '260px',
        110: '110px',
        'menu-width': '1060px',
      },
      minWidth: {
        127: '127px',
      },
      maxHeight: {
        banner: '770px',
        locator: '700px',
        'test-options': '260px',
      },
      minHeight: {
        banner: '360px',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
      margin: {
        'offset-1': '8.333333%',
        'offset-2': '16.666667%',
        'offset-3': '25%',
        'offset-4': '33.333333%',
      },
      letterSpacing: {
        'footer-wide': '0.04em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
};
