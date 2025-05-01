# Curriculum

Curriculum app developed with Angular 19.2.9 version (signals and standalome components)

Install npm package dependencies:

```bash
npm install
```

## Steps to run in development mode

Launch tests:

```bash
npm run test
```

or if desire a chrome headless version:

```bash
npm run test-headless
```

Start application:

```bash
npm run start
```

or if desire to open in a web browser:

```bash
ng serve -o
```

## Steps to generate production build

Launch tests:

```bash
npm run test
```

or if desire a chrome headless version:

```bash
npm run test-headless
```

Generate build (dist folder):

```bash
npm run build
```

Test app before upload to production server:

```bash
npm run serve:ssr:curriculum
```

or open dist/curriculum/browser/index.html with live server to test a pre-render version
