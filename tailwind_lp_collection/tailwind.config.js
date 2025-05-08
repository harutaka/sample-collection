module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        meiryo: ["メイリオ"],
        noto: ["Noto Sans JP", "sans-serif"]
      },
    },
  },
  plugins: [],
}
