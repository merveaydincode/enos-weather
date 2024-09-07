module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'on-primary': 'var(--on-primary-color)',
        title: 'var(--title-color)',
        icon: 'var(--icon-color)',
        border: 'var(--border-color)',
        'card-border': 'var(--card-border-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverted': 'var(--text-inverted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: 'var(--font-size-base)',
        xl: 'var(--font-size-xl)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        bold: 'var(--font-weight-bold)',
      },
    },
  },
  plugins: [],
};
