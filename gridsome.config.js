// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Mindnumb Interactive",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "gridsome-plugin-gtag",
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },
  ],
};
