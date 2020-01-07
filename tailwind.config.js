module.exports = {
  theme: {
    extend: {}
  },
  /*variants: {
    backgroundColor: ["hover", "focus", "active"]
  },*/
  //enable ALL variants, TODO: check file-size on build
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled"
  ],
  plugins: []
};
