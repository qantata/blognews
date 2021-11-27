## Blognews

An SPA for browsing some articles, written in React.

### Libraries
- React 17 with React Router v6
- [zustand](https://github.com/pmndrs/zustand) for global state
- [stitches](https://github.com/modulz/stitches) for CSS-in-JS
- [Radix Icons](https://github.com/radix-ui/icons)
- Custom components & css

### Running the app
Install dependecies and run in development mode:
```
yarn install
yarn dev
```

### Building
```
yarn build
```

To serve the built app, run `yarn serve`.

### In case of API rate limit
If the API has hit its daily rate limit, and if you have a local backup of the articles data, you can export them as an object in `src/utils/articles-data.ts`. The app will then use the offline data as a backup.
