const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog", // <title>
  shortSiteTitle: "Onur Cil PersonalBlog",
  siteDescription: "PersonalBlog is a Onur starter.",
  siteUrl: "http://localhost:8000",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Onur Cil",
  authorTwitterAccount: "root7292",
  // info
  infoTitle: "Onur Cil",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "onurcil08@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/onurcill" },
    { name: "twitter", url: "https://twitter.com/root7292" },
    { name: "facebook", url: "https://linkedin.com/in/cilonur/" }
  ]
};
