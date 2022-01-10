module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      deafult: '#777777!important',
      muted: '#98a6ad!important',
    },
    screens: {
      // max-width
      'xs-and-down': { max: '767px' },
      'md-and-down': { max: '991px' },
      // min-width ~ max-width
      'xs-and-sm-between': {
        min: '768px',
        max: '991px',
      },
    },
    extend: {
      width: {
        220: '220px',
      },
      backgroundColor: {
        hover: '#ececec',
        default: '#f9f9f9',
      },
      padding: {
        warrper: '15px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
