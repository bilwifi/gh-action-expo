module.exports = {
  // expo-versioning
  bumpFiles: [
    {
      filename: "package.json",
    },
    {
      filename: "package-lock.json",
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo-2"),
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo-2/android/code-with-prerelease"),
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo-2/ios/code-with-prerelease"),
    },
  ],
  types: [
    {
      type: "feat",
      section: "Features",
    },
    {
      type: "fix",
      section: "Bug Fixes",
    },
    {
      type: "cfix",
      section: "Dev Bug Fixes",
      hidden: true,
    },
    {
      type: "wip",
      section: "Working in progress",
      hidden: true,
    },
    {
      type: "chore",
      hidden: true,
    },
    {
      type: "docs",
      hidden: true,
    },
    {
      type: "style",
      hidden: true,
    },
    {
      type: "refactor",
      hidden: true,
    },
    {
      type: "perf",
      hidden: true,
    },
    {
      type: "build",
      hidden: true,
    },
    {
      type: "test",
      hidden: true,
    },
    {
      type: "revert",
      hidden: true,
    },
  ],
  commitUrlFormat: "https://github.com/bilwifi/gh-action-expo/commit/{{hash}}",
  compareUrlFormat:
    "https://github.com/bilwifi/gh-action-expo/compare/{{previousTag}}...{{currentTag}}",
  //releaseCommitMessageFormat: "(bump): version {{currentTag}} [no ci]",
};
