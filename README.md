## Gallery project

### Requeriments

A simple web app that allows one to browse the Imgur gallery using https://api.imgur.com/

- Show gallery images in a grid of thumbnails;
- Show image description in the thumbnail, top or bottom;
- Allow selecting the gallery section: hot, top, user;
- Allow including / excluding viralimages from the result set;
- Allow specifying window and sort parameters;
- When clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.

### Technologies

- Next.js
- Cypress
- Jest + Enzyme
- Husky ( git hooks )
- Travis

### How to run ?

For development:

```bash
    npm run dev
```

Then open http://localhost:3000/ to see the app.

### Tests

#### Unit testing

```bash
    npm run test
```

### E2E testing

```bash
    npm run dev
```

And:

```bash
    npm run test:e2e
```


### Deploy:

TODO


### Explanation of decisions

TODO