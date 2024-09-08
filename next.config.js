module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/quote',
        destination: 'https://zenquotes.io/api/random',
      },
    ];
  },
};
