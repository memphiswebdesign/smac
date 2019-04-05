const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/about.js"))),
  "component---src-pages-classes-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/classes.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/contact.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/events.js"))),
  "component---src-pages-history-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/history.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/index.js"))),
  "component---src-pages-schedule-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/schedule.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/services.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/team.js"))),
  "component---src-pages-testimonials-js": hot(preferDefault(require("/Users/adamtaylor/code/smac/src/pages/testimonials.js")))
}

