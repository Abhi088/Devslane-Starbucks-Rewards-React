module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/10': '10%',
        '1/2': '50%'
      },
      borderWidth: {
        '1': '1px',
        '6': '6px',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: {
          light: "#d4e9e2",
          medium: "#008248",
          dark: "#223627"
        }
      }),
      textColor: {
        primary: {
          light: "#d4e9e2",
          medium: "#008248",
          dark: "#223627"
        },
        gold: "#cba258"
      },
      backgroundColor: theme => ({
        primary: {
          extralight: "rgba(212,233,226,.33)",
          light: "#d4e9e2",
          medium: "#008248",
          dark: "#1e3932"
        },
        secondary: {
          dark: "#f3f1e7",
          light: "#f7f7f7"
        }
      }),
      backgroundImage: theme => ({
        'starbucks-small': "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
        'starbucks-large': "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
      }),
      inset: {
        18: "72px"
      },
      height: {
        11: "44px",
        18: "72px",
        26: "104px",
        42: "168px",
        150: "600px",
        160: "640px",
        180: "720px"
      },
      width: {
        11: "44px"
      },
      padding: {
        26: "104px",
        18: "72px"
      },
      margin: {
        18: "72px",
        26: "104px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
