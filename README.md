# Pizza SPA 🍕

React App demonstrating some techniques for making accessible single page apps.
Used for the norwegian talk "5 vanlige tilgjengelighetsfeil i single-page-applikasjoner og hvordan fikse dem" on Javazone

## Serve locally
```
$ npm install
$ npm run start pizza-app
```

- Main branch is NOT accessible
- Checkout `a11y-improvements` for the improvements.

## Accessibility improvements
- Added live-announcher component
- Reset focus to `<body>` after navigation
- Reset scroll-position
- Announche when order is complete
- Set `<title>` on every page

