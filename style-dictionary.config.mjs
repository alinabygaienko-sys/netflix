// style-dictionary.config.mjs
// Build cross-platform outputs from tokens.json:
//   npx style-dictionary build --config style-dictionary.config.mjs
//
// Produces:
//   build/web/tokens.css      → CSS custom properties (:root)
//   build/web/tokens.scss     → SCSS variables
//   build/web/tokens.js       → ES module (JS object)
//   build/ios/Tokens.swift    → Swift UIColor/constants
//   build/android/tokens.xml  → Android resource values

export default {
  source: ["tokens.json"],
  platforms: {
    web: {
      transformGroup: "css",
      buildPath: "build/web/",
      files: [
        { destination: "tokens.css",  format: "css/variables", options: { outputReferences: true } },
        { destination: "tokens.scss", format: "scss/variables" },
        { destination: "tokens.js",   format: "javascript/es6" }
      ]
    },
    ios: {
      transformGroup: "ios-swift",
      buildPath: "build/ios/",
      files: [
        { destination: "Tokens.swift", format: "ios-swift/class.swift", options: { className: "NetflixTokens" } }
      ]
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [
        { destination: "tokens.xml", format: "android/resources" }
      ]
    }
  }
};
