module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#84a98c",  // muted teal → main primary color
          dark: "#52796f",     // deep teal → darker variant for hover/active
          light: "#cad2c5",    // ash grey → lighter variant
        },
        accent: "#cad2c5",     // ash grey → use for highlights/buttons
        bg: {
          dark: "#2f3e46",      // charcoal blue → dark background (navbar/footer)
          gradient: "#354f52",  // slate grey → gradient or section background
          card: "#52796f",       // deep teal → card background
          section: "#cad2c5",    // ash grey → general section background
        }
      }
    },
  },
  plugins: [],
};

