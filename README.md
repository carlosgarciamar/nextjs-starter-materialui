# Carlos' NextJS starter

This is my very own NextJS starter, suitable for my own purposes. Feel free to use it if it suits yours too :)

At the moment it includes:

-   [TypeScript](https://www.typescriptlang.org/)
-   [Prettier](https://prettier.io/)
-   [MaterialUI](https://material-ui.com/)
-   [Cypress](https://docs.cypress.io/)

It also...

-   Has a minimal template
-   Uses lint-staged to run prettier on pre-commit
-   Runs headless Cypress on precommit (keep your tests minimum or move this to your CI/CD pipeline!)
-   Has the source code under `/src` (as it should be)

Everything else is (or should be) pretty much standard. For now at least.

## Getting Started

```bash
npx create-next-app [name] --use-npm --example "https://github.com/carlosgarciamar/nextjs-starter"
```

Or clone it and run `npm install`...

Then `npm run dev`.

## Thinking about adding...

-   Conventional Commits
-   ~~Jest~~
-   ~~React testing library~~

## On testing (a brief opinion)

A few good integration tests are in my opinion more valuable for UI development and easy to maintain than loads of unit tests with 1000% coverage. For this reason I have discarded Jest and RTL. Feel free to include them if you need to test specific units in a more targeted approach.

## On folder structure (another brief opinion)

In `src` we have `pages` and `theme` to keep everything quite in the lines of NextJS. Feel free to create `components` for reusable components, `hooks` for your custom hooks and anything else you might feel that you will need.
